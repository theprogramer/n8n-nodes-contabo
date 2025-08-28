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
        name: 'Create a Snapshot',
        value: 'create',
        action: 'Create a snapshot',
      },
      {
        name: 'Delete a Snapshot',
        value: 'delete',
        action: 'Delete a snapshot',
      },
      {
        name: 'Get a Snapshot',
        value: 'get',
        action: 'Get an snapshot',
      },
      {
        name: 'Get Many',
        value: 'getAll',
        description: 'Get Many Snapshots for an Instance',
        action: 'Get many snapshot',
      },
      {
        name: 'Get Many Snapshot Audits',
        value: 'snapshotAudits',
        action: 'Get many snapshot audits',
      },
      {
        name: 'Revert a Snapshot',
        value: 'revert',
        description: 'Revert the Instance to a Snapshot',
        action: 'Revert a snapshot',
      },
      {
        name: 'Update a Snapshot',
        value: 'update',
        action: 'Update a snapshot',
      },
		],
		displayOptions: {
			show: {
				resource: ['snapshot'],
			},
		},
	},
];

