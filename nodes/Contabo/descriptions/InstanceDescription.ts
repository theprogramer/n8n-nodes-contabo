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
				name: 'Get Many',
				value: 'getAll',
				description: 'Get Many Instance',
				action: 'Get Many Instance',
			},
			{
				name: 'Get an Instance',
				value: 'get',
				description: 'Get an Instance',
				action: 'Get an Instance',
			},
			{
				name: 'Update an Instance',
				value: 'update',
				description: 'Update an Instance',
				action: 'Update an Instance',
			},
			{
				name: 'Cancel an Instance',
				value: 'cancel',
				description: 'Cancel an Instance',
				action: 'Cancel an Instance',
			},
			{
				name: 'Audit an Instance',
				value: 'audit',
				description: 'List and filters the history about an instances',
				action: 'Audit an Instance',
			},
			{
				name: 'Start an Instance',
				value: 'start',
				description: 'Start an Instance',
				action: 'Start an Instance',
			},
			{
				name: 'Restart an Instance',
				value: 'restart',
				description: 'Restart an Instance',
				action: 'Restart an Instance',
			},
			{
				name: 'Stop an Instance',
				value: 'stop',
				description: 'Stop an Instance',
				action: 'Stop an Instance',
			},
			{
				name: 'Shutdown an Instance',
				value: 'shutdown',
				description: 'Shutdown an Instance',
				action: 'Shutdown an Instance',
			},
			{
				name: 'Rescue an Instance',
				value: 'rescue',
				description: 'Rescue an Instance',
				action: 'Rescue an Instance',
			},
			{
				name: 'Reset password for an Instance',
				value: 'resetPassword',
				description: 'Reset password for an Instance',
				action: 'Reset password for an Instance',
			},
			{
				name: 'Get Many Actions Audits for an Instance',
				value: 'actionsAudits',
				description: 'Get Many Actions Audits for an Instance',
				action: 'Get Many Actions Audits for an Instance',
			},

		],
		displayOptions: {
			show: {
				resource: ['instance'],
			},
		},
	},
];

