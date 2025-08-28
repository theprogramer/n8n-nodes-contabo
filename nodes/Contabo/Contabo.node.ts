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
} from './properties';

import {
	contaboApiRequest,
	endpoints,
	IEndpoint,
} from './GenericFunctions';

declare var console: {
  log(msg?: any, ...optionalParams: any[]): void;
  dir(obj: any, options?: any): void;
};

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
						resource: [
							'instance'
						],
    				operation: [
							'get',
							'create',
							'delete',
							'update',
						],
  	  		},
    		},
			},
			{
				displayName: 'Instance ID',
				name: 'instanceId',
				type: 'string',
				default: '',
				required: true,
				description: 'Instance ID',
	  		displayOptions: {
					show: {
						resource: [
							'snapshot'
						],
    				operation: [
							'getAll',
							'get',
							'create',
							'delete',
							'update',
							'revert',
							'audit'
						],
  	  		},
    		},
			},
			{
				displayName: 'Snapshot ID',
				name: 'snapshotId',
				type: 'string',
				default: '',
				required: true,
				description: 'Snapshot ID',
	  		displayOptions: {
    			show: {
						resource: [
							'snapshot'
						],
    				operation: [
							'get',
							'delete',
							'update',
							'revert'
						],
  	  		},
    		},
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				required: true,
				description: 'Name',
	  		displayOptions: {
    			show: {
						resource: [
							'snapshot'
						],
    				operation: [
							'create',
							'update',
						],
  	  		},
    		},
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				required: false,
				description: 'description',
	  		displayOptions: {
    			show: {
						resource: [
							'snapshot'
						],
    				operation: [
							'create',
							'update',
						],
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

	      const body: Record<string, any> = {};

        const { method, path } = endpoints[resource][operation] as IEndpoint;

        const resolvedPath = path.replace('{{instanceId}}', this.getNodeParameter('instanceId', i, '') as string)
				                         .replace('{{snapshotId}}', this.getNodeParameter('snapshotId', i, '') as string);

        switch (resource) {
          case 'snapshot':
            if (['create', 'update'].includes(operation)) {
              (['name', 'description'] as const).forEach((key) => {
                const value = this.getNodeParameter(key, i, '') as string;
                if (value) body[key] = value;
							});
						}
            break;
      	  // case 'instance':
				}

        responseData = await contaboApiRequest.call(
					this,
					method,
					resolvedPath,
					body,
					qs
				);

				const executionData = this.helpers.constructExecutionMetaData(
					this.helpers.returnJsonArray(((responseData as IDataObject)?.data ?? responseData) as IDataObject[]),
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
