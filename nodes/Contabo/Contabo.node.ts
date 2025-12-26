import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';

import {
	contaboApiRequest,
	endpoints,
	IEndpoint,
} from './GenericFunctions';

import { contaboOperations } from './descriptions/ContaboDescription';

export class Contabo implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Contabo',
		name: 'contabo',
		icon: 'file:Contabo.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Consume Contabo API',
		defaults: {
			name: 'Contabo',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'contaboOAuth2Api',
				required: true,
			},
		],
		properties: contaboOperations,
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];
		const length = items.length;
		const resource = this.getNodeParameter('resource', 0) as string;
		const operation = this.getNodeParameter('operation', 0) as string;

		for (let i = 0; i < length; i++) {
			try {
				const body: Record<string, any> = {};
				const { method, path } = endpoints[resource][operation] as IEndpoint;

				let resolvedPath = path.replace('{{instanceId}}', this.getNodeParameter('instanceId', i, '') as string)
					.replace('{{snapshotId}}', this.getNodeParameter('snapshotId', i, '') as string)
					.replace('{{objectStorageId}}', this.getNodeParameter('objectStorageId', i, '') as string)
					.replace('{{privateNetworkId}}', this.getNodeParameter('privateNetworkId', i, '') as string)
					.replace('{{tagId}}', this.getNodeParameter('tagId', i, '') as string)
					.replace('{{userId}}', this.getNodeParameter('userId', i, '') as string)
					.replace('{{vipId}}', this.getNodeParameter('vipId', i, '') as string)
					.replace('{{resourceId}}', this.getNodeParameter('resourceId', i, '') as string)
					.replace('{{resourceType}}', this.getNodeParameter('resourceType', i, '') as string);

				const qs: IDataObject = {};

				// Handle body for create/update operations
				switch (resource) {
					case 'instance':
						if (['create', 'reinstall', 'rescue', 'resetPassword'].includes(operation)) {
							const additionalFields = this.getNodeParameter('additionalFields', i, {}) as IDataObject;
							body['imageId'] = additionalFields.imageId as string;
							body['productId'] = additionalFields.productId as string;
							body['region'] = additionalFields.region as string;
							body['period'] = additionalFields.period as number || 1;
							body['license'] = additionalFields.license as string || '';
							body['displayName'] = additionalFields.displayName as string || '';
							body['defaultUser'] = additionalFields.defaultUser as string || 'root';
							body['rootPassword'] = additionalFields.rootPassword as number || 0;
							body['sshKeys'] = additionalFields.sshKeys ? JSON.parse(additionalFields.sshKeys as string) : [];
							body['userData'] = additionalFields.userData as string || '';
							body['applicationId'] = additionalFields.applicationId as string || '';
							if (additionalFields.addOns) {
								body['addOns'] = JSON.parse(additionalFields.addOns as string);
							}
						} else if (['update'].includes(operation)) {
							const additionalFields = this.getNodeParameter('additionalFields', i, {}) as IDataObject;
							body['displayName'] = additionalFields.displayName as string || '';
						} else if (['upgrade'].includes(operation)) {
							const additionalFields = this.getNodeParameter('additionalFields', i, {}) as IDataObject;
							if (additionalFields.privateNetworking) {
								body['privateNetworking'] = true;
							}
						}
						break;
					case 'objectStorage':
						if (['create', 'resize'].includes(operation)) {
							const additionalFields = this.getNodeParameter('additionalFields', i, {}) as IDataObject;
							body['region'] = 'EU'; // Default, add to UI if needed
							body['totalPurchasedSpaceTB'] = additionalFields.totalPurchasedSpaceTB as number || 0.25;
							body['displayName'] = additionalFields.displayName as string || '';
							if (additionalFields.autoScaling) {
								const autoScaling = additionalFields.autoScaling as IDataObject;
								body['autoScaling'] = {
									state: autoScaling.state as string || 'disabled',
									sizeLimitTB: autoScaling.sizeLimitTB as number || 1,
								};
							}
						} else if (['update'].includes(operation)) {
							const additionalFields = this.getNodeParameter('additionalFields', i, {}) as IDataObject;
							body['displayName'] = additionalFields.displayName as string || '';
						}
						break;
					case 'privateNetwork':
						if (['create', 'update'].includes(operation)) {
							const additionalFields = this.getNodeParameter('additionalFields', i, {}) as IDataObject;
							body['name'] = additionalFields.name as string;
							body['description'] = additionalFields.description as string || '';
							body['region'] = additionalFields.region as string || 'EU';
						}
						break;
					case 'snapshot':
						if (['create', 'update'].includes(operation)) {
							const additionalFields = this.getNodeParameter('additionalFields', i, {}) as IDataObject;
							body['name'] = additionalFields.name as string;
							body['description'] = additionalFields.description as string || '';
						}
						break;
					case 'tag':
						if (['create', 'update'].includes(operation)) {
							const additionalFields = this.getNodeParameter('additionalFields', i, {}) as IDataObject;
							body['name'] = additionalFields.name as string;
							body['color'] = additionalFields.color as string || '#0A78C3';
							body['description'] = additionalFields.description as string || '';
						}
						break;
					case 'user':
						if (['create', 'update'].includes(operation)) {
							const additionalFields = this.getNodeParameter('additionalFields', i, {}) as IDataObject;
							body['email'] = additionalFields.email as string;
							body['enabled'] = additionalFields.enabled as boolean ?? true;
							body['firstName'] = additionalFields.firstName as string;
							body['lastName'] = additionalFields.lastName as string;
							body['locale'] = additionalFields.locale as string || 'en';
							body['totp'] = additionalFields.totp as boolean ?? false;
							if (additionalFields.roles) {
								body['roles'] = JSON.parse(additionalFields.roles as string);
							}
						}
						break;
					// VIP has no body parameters
				}

				let responseData;

				const isListOperation = ['getAll', 'getAllAudits'].includes(operation);

				if (isListOperation) {
					const returnAll = this.getNodeParameter('returnAll', i, false) as boolean;
					const limitValue = this.getNodeParameter('limit', i, 50) as number;

					if (returnAll) {
						const allItems: IDataObject[] = [];
						let page = 1;
						const size = 1000;
						let hasMore = true;

						while (hasMore) {
							const pageQs = { ...qs, page, size };
							const pageResponse = await contaboApiRequest.call(
								this,
								method,
								resolvedPath,
								body,
								pageQs,
							);
							const items = (pageResponse as IDataObject).data as IDataObject[] || [];
							allItems.push(...items);
							if (items.length < size) {
								hasMore = false;
							}
							page++;
						}
						responseData = { data: allItems };
					} else {
						qs['size'] = limitValue;
						qs['page'] = 1;
						responseData = await contaboApiRequest.call(
							this,
							method,
							resolvedPath,
							body,
							qs,
						);
					}
				} else {
					responseData = await contaboApiRequest.call(
						this,
						method,
						resolvedPath,
						body,
						qs,
					);
				}

				const itemsToReturn = Array.isArray(responseData.data)
					? responseData.data
					: [responseData];

				const executionData = this.helpers.constructExecutionMetaData(
					this.helpers.returnJsonArray(itemsToReturn),
					{ itemData: { item: i } },
				);

				returnData.push(...executionData);
			} catch (error) {
				if (this.continueOnFail()) {
					const executionErrorData = this.helpers.constructExecutionMetaData(
						this.helpers.returnJsonArray({ error: (error as Error).message }),
						{ itemData: { item: i } },
					);
					returnData.push(...executionErrorData);
					continue;
				}
				throw error;
			}
		}
		return [returnData];
	}
}
