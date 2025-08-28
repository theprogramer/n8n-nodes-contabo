import type { INodeProperties } from 'n8n-workflow';

export const instanceOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		default: 'getAll',
		options: [
      {
        name: 'Audit an Instance',
        value: 'audit',
        description: 'List and filters the history about an instances',
        action: 'Audit an instance',
      },
      {
        name: 'Cancel an Instance',
        value: 'cancel',
        action: 'Cancel an instance',
      },
      {
        name: 'Get an Instance',
        value: 'get',
        action: 'Get an instance',
      },
      {
        name: 'Get Many',
        value: 'getAll',
        description: 'Get Many Instance',
        action: 'Get many instance',
      },
      {
        name: 'Get Many Actions Audits for an Instance',
        value: 'actionsAudits',
        action: 'Get many actions audits for an instance',
      },
      {
        name: 'Rescue an Instance',
        value: 'rescue',
        action: 'Rescue an instance',
			},
      {
        name: 'Reset Password for an Instance',
        value: 'resetPassword',
        action: 'Reset password for an instance',
      },
      {
        name: 'Restart an Instance',
        value: 'restart',
        action: 'Restart an instance',
      },
      {
        name: 'Shutdown an Instance',
        value: 'shutdown',
        action: 'Shutdown an instance',
      },
      {
        name: 'Start an Instance',
        value: 'start',
        action: 'Start an instance',
      },
      {
        name: 'Stop an Instance',
        value: 'stop',
        action: 'Stop an instance',
      },
      {
        name: 'Update an Instance',
        value: 'update',
        action: 'Update an instance',
      },
		],
		displayOptions: {
			show: {
				resource: ['instance'],
			},
		},
	},
];

