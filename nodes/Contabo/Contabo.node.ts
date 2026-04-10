import {
	NodeConnectionTypes,
	NodeOperationError,
	type IExecuteFunctions,
	type IDataObject,
	type INodeExecutionData,
	type INodeType,
	type INodeTypeDescription,
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
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
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

				const pathParamNames = (path.match(/\{\{(\w+)\}\}/g) || []).map((p) =>
					p.replace(/\{\{|\}\}/g, ''),
				);
				for (const paramName of pathParamNames) {
					const value = this.getNodeParameter(paramName, i, '') as string | number;
					if (value === '' || value === undefined || value === null) {
						throw new NodeOperationError(
							this.getNode(),
							`Required path parameter "${paramName}" is empty for operation "${operation}" on resource "${resource}". Check the expression used in the node.`,
							{ itemIndex: i },
						);
					}
				}

				let resolvedPath = path
					.replace('{{instanceId}}', this.getNodeParameter('instanceId', i, '') as string)
					.replace('{{snapshotId}}', this.getNodeParameter('snapshotId', i, '') as string)
					.replace('{{objectStorageId}}', this.getNodeParameter('objectStorageId', i, '') as string)
					.replace('{{privateNetworkId}}', this.getNodeParameter('privateNetworkId', i, '') as string)
					.replace('{{tagId}}', this.getNodeParameter('tagId', i, '') as string)
					.replace('{{userId}}', this.getNodeParameter('userId', i, '') as string)
					.replace('{{ip}}', this.getNodeParameter('ip', i, '') as string)
					.replace('{{secretId}}', this.getNodeParameter('secretId', i, '') as string)
					.replace('{{imageId}}', this.getNodeParameter('imageId', i, '') as string)
					.replace('{{roleId}}', this.getNodeParameter('roleId', i, '') as string)
					.replace('{{zoneName}}', this.getNodeParameter('zoneName', i, '') as string)
					.replace('{{recordId}}', this.getNodeParameter('recordId', i, '') as string)
					.replace('{{ipAddress}}', this.getNodeParameter('ipAddress', i, '') as string)
					.replace('{{domainName}}', this.getNodeParameter('domainName', i, '') as string)
					.replace('{{handleId}}', this.getNodeParameter('handleId', i, '') as string)
					.replace('{{credentialId}}', this.getNodeParameter('credentialId', i, '') as string)
					.replace('{{resourceId}}', this.getNodeParameter('resourceId', i, '') as string)
					.replace('{{resourceType}}', this.getNodeParameter('resourceType', i, '') as string);

				const qs: IDataObject = {};

				switch (resource) {
					case 'instance':
						if (operation === 'create') {
							const af = this.getNodeParameter('additionalFields', i, {}) as IDataObject;
							if (af.imageId) body['imageId'] = af.imageId;
							if (af.productId) body['productId'] = af.productId;
							if (af.region) body['region'] = af.region;
							if (af.period !== undefined) body['period'] = af.period;
							if (af.license) body['license'] = af.license;
							if (af.displayName) body['displayName'] = af.displayName;
							if (af.defaultUser) body['defaultUser'] = af.defaultUser;
							if (af.rootPassword) body['rootPassword'] = af.rootPassword;
							if (af.sshKeys) body['sshKeys'] = typeof af.sshKeys === 'string' ? JSON.parse(af.sshKeys as string) : af.sshKeys;
							if (af.userData) body['userData'] = af.userData;
							if (af.applicationId) body['applicationId'] = af.applicationId;
							if (af.addOns) body['addOns'] = typeof af.addOns === 'string' ? JSON.parse(af.addOns as string) : af.addOns;
						} else if (operation === 'reinstall') {
							const af = this.getNodeParameter('additionalFields', i, {}) as IDataObject;
							if (af.imageId) body['imageId'] = af.imageId;
							if (af.sshKeys) body['sshKeys'] = typeof af.sshKeys === 'string' ? JSON.parse(af.sshKeys as string) : af.sshKeys;
							if (af.rootPassword) body['rootPassword'] = af.rootPassword;
							if (af.userData) body['userData'] = af.userData;
							if (af.defaultUser) body['defaultUser'] = af.defaultUser;
							if (af.applicationId) body['applicationId'] = af.applicationId;
						} else if (operation === 'rescue') {
							const af = this.getNodeParameter('additionalFields', i, {}) as IDataObject;
							if (af.rootPassword) body['rootPassword'] = af.rootPassword;
							if (af.sshKeys) body['sshKeys'] = typeof af.sshKeys === 'string' ? JSON.parse(af.sshKeys as string) : af.sshKeys;
							if (af.userData) body['userData'] = af.userData;
						} else if (operation === 'resetPassword') {
							const af = this.getNodeParameter('additionalFields', i, {}) as IDataObject;
							if (af.sshKeys) body['sshKeys'] = typeof af.sshKeys === 'string' ? JSON.parse(af.sshKeys as string) : af.sshKeys;
							if (af.rootPassword) body['rootPassword'] = af.rootPassword;
							if (af.userData) body['userData'] = af.userData;
						} else if (operation === 'update') {
							const af = this.getNodeParameter('additionalFields', i, {}) as IDataObject;
							if (af.displayName !== undefined) body['displayName'] = af.displayName;
						} else if (operation === 'upgrade') {
							const af = this.getNodeParameter('additionalFields', i, {}) as IDataObject;
							if (af.privateNetworking) body['privateNetworking'] = true;
							if (af.backup) body['backup'] = true;
						} else if (operation === 'cancel') {
							const af = this.getNodeParameter('additionalFields', i, {}) as IDataObject;
							if (af.cancelDate) body['cancelDate'] = af.cancelDate;
						}
						break;

					case 'objectStorage':
						if (operation === 'create') {
							const af = this.getNodeParameter('additionalFields', i, {}) as IDataObject;
							body['region'] = (af.region as string) || 'EU';
							body['totalPurchasedSpaceTB'] = (af.totalPurchasedSpaceTB as number) || 0.25;
							if (af.displayName) body['displayName'] = af.displayName;
							if (af.autoScaling) {
								const autoScaling = af.autoScaling as IDataObject;
								body['autoScaling'] = {
									state: autoScaling.state || 'disabled',
									sizeLimitTB: autoScaling.sizeLimitTB || 1,
								};
							}
						} else if (operation === 'resize') {
							const af = this.getNodeParameter('additionalFields', i, {}) as IDataObject;
							if (af.totalPurchasedSpaceTB) body['totalPurchasedSpaceTB'] = af.totalPurchasedSpaceTB;
							if (af.autoScaling) {
								const autoScaling = af.autoScaling as IDataObject;
								body['autoScaling'] = {
									state: autoScaling.state || 'disabled',
									sizeLimitTB: autoScaling.sizeLimitTB || 1,
								};
							}
						} else if (operation === 'update') {
							const af = this.getNodeParameter('additionalFields', i, {}) as IDataObject;
							if (af.displayName !== undefined) body['displayName'] = af.displayName;
						} else if (operation === 'cancel') {
							const af = this.getNodeParameter('additionalFields', i, {}) as IDataObject;
							if (af.cancelDate) body['cancelDate'] = af.cancelDate;
						}
						break;

					case 'privateNetwork':
						if (['create', 'update'].includes(operation)) {
							const af = this.getNodeParameter('additionalFields', i, {}) as IDataObject;
							if (af.name) body['name'] = af.name;
							if (af.description !== undefined) body['description'] = af.description;
							if (af.region) body['region'] = af.region;
						}
						break;

					case 'snapshot':
						if (['create', 'update'].includes(operation)) {
							const af = this.getNodeParameter('additionalFields', i, {}) as IDataObject;
							if (af.name) body['name'] = af.name;
							if (af.description !== undefined) body['description'] = af.description;
						}
						break;

					case 'tag':
						if (['create', 'update'].includes(operation)) {
							const af = this.getNodeParameter('additionalFields', i, {}) as IDataObject;
							if (af.name) body['name'] = af.name;
							if (af.color) body['color'] = af.color;
							if (af.description !== undefined) body['description'] = af.description;
						}
						break;

					case 'user':
						if (['create', 'update'].includes(operation)) {
							const af = this.getNodeParameter('additionalFields', i, {}) as IDataObject;
							if (af.email) body['email'] = af.email;
							if (af.enabled !== undefined) body['enabled'] = af.enabled;
							if (af.firstName) body['firstName'] = af.firstName;
							if (af.lastName) body['lastName'] = af.lastName;
							if (af.locale) body['locale'] = af.locale;
							if (af.totp !== undefined) body['totp'] = af.totp;
							if (af.roles) body['roles'] = typeof af.roles === 'string' ? JSON.parse(af.roles as string) : af.roles;
						}
						break;

					case 'secret':
						if (operation === 'create') {
							const af = this.getNodeParameter('additionalFields', i, {}) as IDataObject;
							if (af.name) body['name'] = af.name;
							if (af.value) body['value'] = af.value;
							if (af.type) body['type'] = af.type;
						} else if (operation === 'update') {
							const af = this.getNodeParameter('additionalFields', i, {}) as IDataObject;
							if (af.name !== undefined) body['name'] = af.name;
							if (af.value !== undefined) body['value'] = af.value;
						}
						break;

					case 'image':
						if (operation === 'create') {
							const af = this.getNodeParameter('additionalFields', i, {}) as IDataObject;
							if (af.name) body['name'] = af.name;
							if (af.url) body['url'] = af.url;
							if (af.osType) body['osType'] = af.osType;
							if (af.version) body['version'] = af.version;
							if (af.description) body['description'] = af.description;
						} else if (operation === 'update') {
							const af = this.getNodeParameter('additionalFields', i, {}) as IDataObject;
							if (af.name !== undefined) body['name'] = af.name;
							if (af.description !== undefined) body['description'] = af.description;
						}
						break;

					case 'role':
						if (['create', 'update'].includes(operation)) {
							const af = this.getNodeParameter('additionalFields', i, {}) as IDataObject;
							if (af.name) body['name'] = af.name;
							if (af.admin !== undefined) body['admin'] = af.admin;
							if (af.accessAllResources !== undefined) body['accessAllResources'] = af.accessAllResources;
							if (af.permissions) body['permissions'] = typeof af.permissions === 'string' ? JSON.parse(af.permissions as string) : af.permissions;
						}
						break;

					case 'dnsZone':
						if (operation === 'create') {
							const zoneName = this.getNodeParameter('zoneName', i, '') as string;
							body['zoneName'] = zoneName;
						} else if (operation === 'bulkDeleteRecords') {
						const af = this.getNodeParameter('additionalFields', i, {}) as IDataObject;
						if (af.recordIds) body['recordIds'] = typeof af.recordIds === 'string' ? JSON.parse(af.recordIds as string) : af.recordIds;
					} else if (operation === 'createRecord') {
							const af = this.getNodeParameter('additionalFields', i, {}) as IDataObject;
							if (af.name) body['name'] = af.name;
							if (af.type) body['type'] = af.type;
							if (af.ttl !== undefined) body['ttl'] = af.ttl;
							if (af.prio !== undefined) body['prio'] = af.prio;
							if (af.data) body['data'] = af.data;
							if (af.port !== undefined) body['port'] = af.port;
							if (af.weight !== undefined) body['weight'] = af.weight;
							if (af.flag !== undefined) body['flag'] = af.flag;
							if (af.tag) body['tag'] = af.tag;
						} else if (operation === 'updateRecord') {
							const af = this.getNodeParameter('additionalFields', i, {}) as IDataObject;
							if (af.ttl !== undefined) body['ttl'] = af.ttl;
							if (af.prio !== undefined) body['prio'] = af.prio;
							if (af.data) body['data'] = af.data;
							if (af.port !== undefined) body['port'] = af.port;
							if (af.weight !== undefined) body['weight'] = af.weight;
							if (af.flag !== undefined) body['flag'] = af.flag;
							if (af.tag) body['tag'] = af.tag;
						}
						break;

					case 'dnsPtr':
						if (operation === 'create') {
							const af = this.getNodeParameter('additionalFields', i, {}) as IDataObject;
							if (af.ptr) body['ptr'] = af.ptr;
							if (af.ip) body['ip'] = af.ip;
							if (af.ttl !== undefined) body['ttl'] = af.ttl;
						} else if (operation === 'update') {
							const af = this.getNodeParameter('additionalFields', i, {}) as IDataObject;
							if (af.ptr) body['ptr'] = af.ptr;
						}
						break;

					case 'domain':
						if (operation === 'create') {
							const af = this.getNodeParameter('additionalFields', i, {}) as IDataObject;
							if (af.domain) body['domain'] = af.domain;
							if (af.authCode) body['authCode'] = af.authCode;
							if (af.handles) body['handles'] = typeof af.handles === 'string' ? JSON.parse(af.handles as string) : af.handles;
							if (af.nameservers) body['nameservers'] = typeof af.nameservers === 'string' ? JSON.parse(af.nameservers as string) : af.nameservers;
							if (af.domainResourceType) body['resourceType'] = af.domainResourceType;
							if (af.domainResourceId) body['resourceId'] = af.domainResourceId;
						} else if (operation === 'update') {
							const af = this.getNodeParameter('additionalFields', i, {}) as IDataObject;
							if (af.nameservers) body['nameservers'] = typeof af.nameservers === 'string' ? JSON.parse(af.nameservers as string) : af.nameservers;
							if (af.handles) body['handles'] = typeof af.handles === 'string' ? JSON.parse(af.handles as string) : af.handles;
						} else if (operation === 'cancel') {
							const af = this.getNodeParameter('additionalFields', i, {}) as IDataObject;
							if (af.reason) body['reason'] = af.reason;
							if (af.reasonText) body['reasonText'] = af.reasonText;
							if (af.cancelDate) body['cancelDate'] = af.cancelDate;
						}
						break;

					case 'domainHandle':
						if (operation === 'create') {
							const af = this.getNodeParameter('additionalFields', i, {}) as IDataObject;
							if (af.handleType) body['handleType'] = af.handleType;
							if (af.firstName) body['firstName'] = af.firstName;
							if (af.lastName) body['lastName'] = af.lastName;
							if (af.organization) body['organization'] = af.organization;
							if (af.email) body['email'] = af.email;
							if (af.gender) body['gender'] = af.gender;
							if (af.address) body['address'] = typeof af.address === 'string' ? JSON.parse(af.address as string) : af.address;
							if (af.phone) body['phone'] = af.phone;
							if (af.fax) body['fax'] = af.fax;
						} else if (operation === 'update') {
							const af = this.getNodeParameter('additionalFields', i, {}) as IDataObject;
							if (af.email) body['email'] = af.email;
							if (af.gender) body['gender'] = af.gender;
							if (af.address) body['address'] = typeof af.address === 'string' ? JSON.parse(af.address as string) : af.address;
							if (af.phone) body['phone'] = af.phone;
							if (af.fax) body['fax'] = af.fax;
						}
						break;
				}

				let responseData;

				const paginatedOperations = ['getAll', 'getAllAudits', 'getAllActionsAudits', 'getAllRecordAudits', 'getAssignments', 'getAssignmentAudits', 'listObjectStorageCredentials'];
				const isListOperation = paginatedOperations.includes(operation);

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
							const pageItems = (pageResponse as IDataObject).data as IDataObject[] || [];
							allItems.push(...pageItems);
							if (pageItems.length < size) {
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

				const itemsToReturn = Array.isArray(responseData?.data)
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
