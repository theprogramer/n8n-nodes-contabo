import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';
import { NodeConnectionType } from 'n8n-workflow';

import {
	instanceOperations,
	snapshotOperations,
} from './descriptions';

import { contaboApiRequest } from './GenericFunctions';

export class Contabo implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Contabo',
		name: 'contabo',
		icon: 'file:Contabo.svg',
		group: ['output'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Consume Contabo API',
		defaults: {
			name: 'Contabo',
		},
		usableAsTool: true,
		inputs: [NodeConnectionType.Main],
		outputs: [NodeConnectionType.Main],
		credentials: [
			{
				name: 'contaboOAuth2Api',
				required: true,
			},
		],
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Instance',
						value: 'instance',
					},
					{
						name: 'Snapshot',
						value: 'snapshot',
					},
				],
				default: 'instance',
			},
			...instanceOperations,
			...snapshotOperations,
			{
				displayName: 'Instance ID',
				name: 'instanceId',
				type: 'string',
				default: '',
				required: true,
				description: 'Instance ID',
	  		displayOptions: {
    			show: {
    				operation: ['get'],
  	  		},
    		},
			},
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];
		const length = items.length;
		const qs: IDataObject = {};
		let responseData;
		const resource = this.getNodeParameter('resource', 0);
		const operation = this.getNodeParameter('operation', 0);

		for (let i = 0; i < length; i++) {
			try {
				if (resource === 'instance') {
					if (operation === 'getAll') {
						responseData = await contaboApiRequest.call(this, 'GET', `compute/instances`, {}, qs);
					}
					if (operation === 'get') {
            const instanceId = this.getNodeParameter('instanceId', i) as string;
						responseData = await contaboApiRequest.call(this, 'GET', `compute/instances/${instanceId}`, {}, qs);
					}
				}

				if (resource === 'snapshot') {

					const instanceId = this.getNodeParameter('instanceId', i) as string;

					if (operation === 'getAll') {
						responseData = await contaboApiRequest.call(this, 'GET', `compute/instances/${instanceId}/snapshots`, {}, qs);
					}

          if (operation === 'get') {
            const snapshotId = this.getNodeParameter('snapshotId', i) as string;

						responseData = await contaboApiRequest.call(this, 'GET', `compute/instances/${instanceId}/snapshots/${snapshotId}`, {}, qs);
					}

					if (operation === 'create') {
						responseData = await contaboApiRequest.call(this, 'POST', `compute/instances/${instanceId}`, {}, qs);
					}
				}

				const executionData = this.helpers.constructExecutionMetaData(
					this.helpers.returnJsonArray(responseData as IDataObject[]),
					{ itemData: { item: i } },
				);

				returnData.push(...executionData);
			} catch (error) {
				if (this.continueOnFail()) {
					const executionErrorData = this.helpers.constructExecutionMetaData(
						this.helpers.returnJsonArray({ error: error.message }),
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
