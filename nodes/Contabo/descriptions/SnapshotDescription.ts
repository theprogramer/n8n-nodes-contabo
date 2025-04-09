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
				action: 'Get Many Snapshot',
			},
			{
				name: 'Get a Snapshot',
				value: 'get',
				description: 'Get an Snapshot',
				action: 'Get an Snapshot',
			},
			{
				name: 'Create a Snapshot',
				value: 'create',
				description: 'Create a Snapshot',
				action: 'Create a Snapshot',
			},
			{
				name: 'Update a Snapshot',
				value: 'update',
				description: 'Update a Snapshot',
				action: 'Update a Snapshot',
			},
			{
				name: 'Delete a Snapshot',
				value: 'delete',
				description: 'Delete a Snapshot',
				action: 'Delete a Snapshot',
			},
			{
				name: 'Audit an Instance',
				value: 'audit',
				description: 'List and filters the history about an instances',
				action: 'Audit an Instance'
			},
			{
				name: 'Revert a Snapshot',
				value: 'revert',
				description: 'Revert the Instance to a Snapshot',
				action: 'Revert a Snapshot',
			},
			{
				name: 'Get Many Snapshot Audits',
				value: 'snapshotAudits',
				description: 'Get Many Snapshot Audits',
				action: 'Get Many Snapshot Audits',
			},

		],
		displayOptions: {
			show: {
				resource: ['snapshot'],
			},
		},
	},
];

