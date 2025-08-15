import type { INodeProperties } from 'n8n-workflow';

export const snapshotOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		default: 'getAll',
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Get Many Snapshots for an Instance',
				action: 'Get many snapshot',
			},
			{
				name: 'Get a Snapshot',
				value: 'get',
				description: 'Get an Snapshot',
				action: 'Get an snapshot',
			},
			{
				name: 'Create a Snapshot',
				value: 'create',
				description: 'Create a Snapshot',
				action: 'Create a snapshot',
			},
			{
				name: 'Update a Snapshot',
				value: 'update',
				description: 'Update a Snapshot',
				action: 'Update a snapshot',
			},
			{
				name: 'Delete a Snapshot',
				value: 'delete',
				description: 'Delete a Snapshot',
				action: 'Delete a snapshot',
			},
			{
				name: 'Revert a Snapshot',
				value: 'revert',
				description: 'Revert the Instance to a Snapshot',
				action: 'Revert a snapshot',
			},
			{
				name: 'Get Many Snapshot Audits',
				value: 'snapshotAudits',
				description: 'Get Many Snapshot Audits',
				action: 'Get many snapshot audits',
			},

		],
		displayOptions: {
			show: {
				resource: ['snapshot'],
			},
		},
	},
];

