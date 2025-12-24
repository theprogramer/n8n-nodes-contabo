import type { INodeProperties } from 'n8n-workflow';

export const contaboOperations: INodeProperties[] = [
	// Instance
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
				name: 'Object Storage',
				value: 'objectStorage',
			},
			{
				name: 'Private Network',
				value: 'privateNetwork',
			},
			{
				name: 'Snapshot',
				value: 'snapshot',
			},
			{
				name: 'Tag',
				value: 'tag',
			},
			{
				name: 'User',
				value: 'user',
			},
			{
				name: 'VIP',
				value: 'vip',
			},
		],
		default: 'instance',
	},
	// Instance operations
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		default: 'getAll',
		options: [
			{
				name: 'Cancel',
				value: 'cancel',
				description: 'Cancel an instance',
				action: 'Cancel an instance',
			},
			{
				name: 'Create',
				value: 'create',
				description: 'Create an instance',
				action: 'Create an instance',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get an instance',
				action: 'Get an instance',
			},
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Get many instances',
				action: 'Get many instances',
			},
			{
				name: 'Get All Audits',
				value: 'getAllAudits',
				description: 'Get many instance audits',
				action: 'Get many instance audits',
			},
			{
				name: 'Reinstall',
				value: 'reinstall',
				description: 'Reinstall an instance',
				action: 'Reinstall an instance',
			},
			{
				name: 'Rescue',
				value: 'rescue',
				description: 'Rescue an instance',
				action: 'Rescue an instance',
			},
			{
				name: 'Reset Password',
				value: 'resetPassword',
				description: 'Reset password for an instance',
				action: 'Reset password for an instance',
			},
			{
				name: 'Restart',
				value: 'restart',
				description: 'Restart an instance',
				action: 'Restart an instance',
			},
			{
				name: 'Shutdown',
				value: 'shutdown',
				description: 'Shutdown an instance',
				action: 'Shutdown an instance',
			},
			{
				name: 'Start',
				value: 'start',
				description: 'Start an instance',
				action: 'Start an instance',
			},
			{
				name: 'Stop',
				value: 'stop',
				description: 'Stop an instance',
				action: 'Stop an instance',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update an instance',
				action: 'Update an instance',
			},
			{
				name: 'Upgrade',
				value: 'upgrade',
				description: 'Upgrade an instance',
				action: 'Upgrade an instance',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'instance',
				],
			},
		},
	},
	// Object Storage operations
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		default: 'getAll',
		options: [
			{
				name: 'Cancel',
				value: 'cancel',
				description: 'Cancel an object storage',
				action: 'Cancel an object storage',
			},
			{
				name: 'Create',
				value: 'create',
				description: 'Create an object storage',
				action: 'Create an object storage',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get an object storage',
				action: 'Get an object storage',
			},
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Get many object storages',
				action: 'Get many object storages',
			},
			{
				name: 'Get All Audits',
				value: 'getAllAudits',
				description: 'Get many object storage audits',
				action: 'Get many object storage audits',
			},
			{
				name: 'Get Stats',
				value: 'getStats',
				description: 'Get object storage stats',
				action: 'Get object storage stats',
			},
			{
				name: 'Resize',
				value: 'resize',
				description: 'Resize an object storage',
				action: 'Resize an object storage',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update an object storage',
				action: 'Update an object storage',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'objectStorage',
				],
			},
		},
	},
	// Private Network operations
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		default: 'getAll',
		options: [
			{
				name: 'Assign Instance',
				value: 'assignInstance',
				description: 'Assign an instance to a private network',
				action: 'Assign instance to private network',
			},
			{
				name: 'Create',
				value: 'create',
				description: 'Create a private network',
				action: 'Create a private network',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a private network',
				action: 'Delete a private network',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get a private network',
				action: 'Get a private network',
			},
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Get many private networks',
				action: 'Get many private networks',
			},
			{
				name: 'Get All Audits',
				value: 'getAllAudits',
				description: 'Get many private network audits',
				action: 'Get many private network audits',
			},
			{
				name: 'Unassign Instance',
				value: 'unassignInstance',
				description: 'Unassign an instance from a private network',
				action: 'Unassign instance from private network',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update a private network',
				action: 'Update a private network',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'privateNetwork',
				],
			},
		},
	},
	// Snapshot operations
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		default: 'getAll',
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a snapshot',
				action: 'Create a snapshot',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a snapshot',
				action: 'Delete a snapshot',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get a snapshot',
				action: 'Get a snapshot',
			},
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Get many snapshots',
				action: 'Get many snapshots',
			},
			{
				name: 'Get All Audits',
				value: 'getAllAudits',
				description: 'Get many snapshot audits',
				action: 'Get many snapshot audits',
			},
			{
				name: 'Revert',
				value: 'revert',
				description: 'Revert an instance to a snapshot',
				action: 'Revert a snapshot',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update a snapshot',
				action: 'Update a snapshot',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'snapshot',
				],
			},
		},
	},
	// Tag operations
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		default: 'getAll',
		options: [
			{
				name: 'Assign',
				value: 'assign',
				description: 'Assign a tag to a resource',
				action: 'Assign a tag',
			},
			{
				name: 'Create',
				value: 'create',
				description: 'Create a tag',
				action: 'Create a tag',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a tag',
				action: 'Delete a tag',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get a tag',
				action: 'Get a tag',
			},
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Get many tags',
				action: 'Get many tags',
			},
			{
				name: 'Get All Audits',
				value: 'getAllAudits',
				description: 'Get many tag audits',
				action: 'Get many tag audits',
			},
			{
				name: 'Unassign',
				value: 'unassign',
				description: 'Unassign a tag from a resource',
				action: 'Unassign a tag',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update a tag',
				action: 'Update a tag',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'tag',
				],
			},
		},
	},
	// User operations
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		default: 'getAll',
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a user',
				action: 'Create a user',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a user',
				action: 'Delete a user',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get a user',
				action: 'Get a user',
			},
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Get many users',
				action: 'Get many users',
			},
			{
				name: 'Get All Audits',
				value: 'getAllAudits',
				description: 'Get many user audits',
				action: 'Get many user audits',
			},
			{
				name: 'Reset Password',
				value: 'resetPassword',
				description: 'Reset password for a user',
				action: 'Reset password for a user',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update a user',
				action: 'Update a user',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'user',
				],
			},
		},
	},
	// VIP operations
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		default: 'getAll',
		options: [
			{
				name: 'Assign',
				value: 'assign',
				description: 'Assign a VIP to a resource',
				action: 'Assign a VIP',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get a VIP',
				action: 'Get a VIP',
			},
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Get many VIPs',
				action: 'Get many VIPs',
			},
			{
				name: 'Get All Audits',
				value: 'getAllAudits',
				description: 'Get many VIP audits',
				action: 'Get many VIP audits',
			},
			{
				name: 'Unassign',
				value: 'unassign',
				description: 'Unassign a VIP from a resource',
				action: 'Unassign a VIP',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'vip',
				],
			},
		},
	},
	// Common parameters
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		displayOptions: {
			show: {
				operation: [
					'getAll',
					'getAllAudits',
				],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		default: 50,
		typeOptions: {
			minValue: 1,
			maxValue: 500,
		},
		description: 'Max number of results to return',
		displayOptions: {
			show: {
				operation: [
					'getAll',
					'getAllAudits',
				],
				returnAll: [
					false,
				],
			},
		},
	},
	// Resource-specific parameters
	// Instance
	{
		displayName: 'Instance ID',
		name: 'instanceId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'instance',
				],
				operation: [
					'cancel',
					'get',
					'reinstall',
					'rescue',
					'resetPassword',
					'restart',
					'shutdown',
					'start',
					'stop',
					'update',
					'upgrade',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'instance',
				],
				operation: [
					'create',
					'reinstall',
					'rescue',
					'resetPassword',
				],
			},
		},
		options: [
			{
				displayName: 'Add-ons',
				name: 'addOns',
				type: 'json',
				default: '',
				description: 'JSON object with add-ons to add',
			},
			{
				displayName: 'Application ID',
				name: 'applicationId',
				type: 'string',
				default: '',
				description: 'Application ID',
			},
			{
				displayName: 'Default User',
				name: 'defaultUser',
				type: 'options',
				default: 'root',
				options: [
					{
						name: 'Admin',
						value: 'admin',
					},
					{
						name: 'Administrator',
						value: 'administrator',
					},
					{
						name: 'Root',
						value: 'root',
					},
				],
				description: 'Default user name created for login during (re-)installation',
			},
			{
				displayName: 'Display Name',
				name: 'displayName',
				type: 'string',
				default: '',
				description: 'The display name of the instance',
			},
			{
				displayName: 'Image ID',
				name: 'imageId',
				type: 'string',
				default: '',
				description: 'Image ID to be used to setup the compute instance',
			},
			{
				displayName: 'License',
				name: 'license',
				type: 'options',
				default: '',
				options: [
					{
						name: 'cPanel 100',
						value: 'cPanel100',
					},
					{
						name: 'cPanel 150',
						value: 'cPanel150',
					},
					{
						name: 'cPanel 200',
						value: 'cPanel200',
					},
					{
						name: 'cPanel 250',
						value: 'cPanel250',
					},
					{
						name: 'cPanel 300',
						value: 'cPanel300',
					},
					{
						name: 'cPanel 350',
						value: 'cPanel350',
					},
					{
						name: 'cPanel 400',
						value: 'cPanel400',
					},
					{
						name: 'cPanel 450',
						value: 'cPanel450',
					},
					{
						name: 'cPanel 500',
						value: 'cPanel500',
					},
					{
						name: 'cPanel 550',
						value: 'cPanel550',
					},
					{
						name: 'cPanel 600',
						value: 'cPanel600',
					},
					{
						name: 'cPanel 650',
						value: 'cPanel650',
					},
					{
						name: 'cPanel 700',
						value: 'cPanel700',
					},
					{
						name: 'cPanel 750',
						value: 'cPanel750',
					},
					{
						name: 'cPanel 800',
						value: 'cPanel800',
					},
					{
						name: 'cPanel 850',
						value: 'cPanel850',
					},
					{
						name: 'cPanel 900',
						value: 'cPanel900',
					},
					{
						name: 'cPanel 950',
						value: 'cPanel950',
					},
					{
						name: 'cPanel 1000',
						value: 'cPanel1000',
					},
					{
						name: 'cPanel 30',
						value: 'cPanel30',
					},
					{
						name: 'cPanel 5',
						value: 'cPanel5',
					},
					{
						name: 'cPanel 50',
						value: 'cPanel50',
					},
					{
						name: 'Plesk Admin',
						value: 'PleskAdmin',
					},
					{
						name: 'Plesk Host',
						value: 'PleskHost',
					},
					{
						name: 'Plesk Pro',
						value: 'PleskPro',
					},
				],
				description: 'Additional license for the product',
			},
			{
				displayName: 'Period',
				name: 'period',
				type: 'number',
				default: 1,
				typeOptions: {
					minValue: 1,
					maxValue: 12,
				},
				description: 'Initial contract period in months',
			},
			{
				displayName: 'Product ID',
				name: 'productId',
				type: 'string',
				default: '',
				description: 'Product ID',
			},
			{
				displayName: 'Region',
				name: 'region',
				type: 'options',
				default: 'EU',
				options: [
					{
						name: 'Asia (Singapore)',
						value: 'SIN',
					},
					{
						name: 'Australia',
						value: 'AUS',
					},
					{
						name: 'European Union',
						value: 'EU',
					},
					{
						name: 'India',
						value: 'IND',
					},
					{
						name: 'Japan',
						value: 'JPN',
					},
					{
						name: 'UK',
						value: 'UK',
					},
					{
						name: 'United States (Central)',
						value: 'US-central',
					},
					{
						name: 'United States (East)',
						value: 'US-east',
					},
					{
						name: 'United States (West)',
						value: 'US-west',
					},
				],
				description: 'Instance region where the compute instance should be located',
			},
			{
				displayName: 'Root Password ID',
				name: 'rootPassword',
				type: 'number',
				default: 0,
				typeOptions: {
					minValue: 0,
				},
				description: 'Secret ID of the password for the default user',
			},
			{
				displayName: 'SSH Keys',
				name: 'sshKeys',
				type: 'json',
				default: '',
				description: 'Array of secret IDs of public SSH keys',
			},
			{
				displayName: 'User Data',
				name: 'userData',
				type: 'string',
				default: '',
				typeOptions: {
					rows: 4,
				},
				description: 'Cloud-Init config to customize during start of compute instance (YAML)',
			},
		],
	},
	// Object Storage
	{
		displayName: 'Object Storage ID',
		name: 'objectStorageId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'objectStorage',
				],
				operation: [
					'cancel',
					'get',
					'resize',
					'update',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'objectStorage',
				],
				operation: [
					'create',
					'resize',
				],
			},
		},
		options: [
			{
				displayName: 'Auto Scaling',
				name: 'autoScaling',
				type: 'fixedCollection',
				default: {},
				options: [
					{
						displayName: 'State',
						name: 'state',
						type: 'options',
						default: 'disabled',
						options: [
							{
								name: 'Disabled',
								value: 'disabled',
							},
							{
								name: 'Enabled',
								value: 'enabled',
							},
						],
						description: 'State of the autoscaling',
					},
					{
						displayName: 'Size Limit TB',
						name: 'sizeLimitTB',
						type: 'number',
						default: 1,
						typeOptions: {
							minValue: 0.25,
							maxValue: 100,
						},
						description: 'Autoscaling size limit in TB',
					},
				],
				description: 'Auto scaling settings',
			},
			{
				displayName: 'Display Name',
				name: 'displayName',
				type: 'string',
				default: '',
				description: 'Display name for object storage',
			},
			{
				displayName: 'Total Purchased Space TB',
				name: 'totalPurchasedSpaceTB',
				type: 'number',
				default: 0.25,
				typeOptions: {
					minValue: 0.25,
					maxValue: 100,
				},
				description: 'Amount of purchased object storage in TB',
			},
		],
	},
	// Private Network
	{
		displayName: 'Private Network ID',
		name: 'privateNetworkId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'privateNetwork',
				],
				operation: [
					'assignInstance',
					'delete',
					'get',
					'unassignInstance',
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
		displayOptions: {
			show: {
				resource: [
					'privateNetwork',
				],
				operation: [
					'assignInstance',
					'unassignInstance',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'privateNetwork',
				],
				operation: [
					'create',
					'update',
				],
			},
		},
		options: [
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				description: 'The description of the private network',
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'The name of the private network',
			},
			{
				displayName: 'Region',
				name: 'region',
				type: 'options',
				default: 'EU',
				options: [
					{
						name: 'European Union',
						value: 'EU',
					},
				],
				description: 'Region where the private network should be located',
			},
		],
	},
	// Snapshot
	{
		displayName: 'Instance ID',
		name: 'instanceId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'snapshot',
				],
				operation: [
					'getAll',
					'create',
					'get',
					'delete',
					'update',
					'revert',
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
		displayOptions: {
			show: {
				resource: [
					'snapshot',
				],
				operation: [
					'get',
					'delete',
					'update',
					'revert',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'snapshot',
				],
				operation: [
					'create',
					'update',
				],
			},
		},
		options: [
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				description: 'The description of the snapshot',
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'The name of the snapshot',
			},
		],
	},
	// Tag
	{
		displayName: 'Tag ID',
		name: 'tagId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'tag',
				],
				operation: [
					'assign',
					'delete',
					'get',
					'unassign',
					'update',
				],
			},
		},
	},
	{
		displayName: 'Resource Type',
		name: 'resourceType',
		type: 'options',
		default: 'instance',
		options: [
			{
				name: 'Instance',
				value: 'instance',
			},
			{
				name: 'Image',
				value: 'image',
			},
			{
				name: 'Object Storage',
				value: 'objectStorage',
			},
		],
		required: true,
		displayOptions: {
			show: {
				resource: [
					'tag',
				],
				operation: [
					'assign',
					'unassign',
				],
			},
		},
	},
	{
		displayName: 'Resource ID',
		name: 'resourceId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'tag',
				],
				operation: [
					'assign',
					'unassign',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'tag',
				],
				operation: [
					'create',
					'update',
				],
			},
		},
		options: [
			{
				displayName: 'Color',
				name: 'color',
				type: 'string',
				default: '#0A78C3',
				description: 'The color of the tag',
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				description: 'The description of the tag',
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'The name of the tag',
			},
		],
	},
	// User
	{
		displayName: 'User ID',
		name: 'userId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'user',
				],
				operation: [
					'delete',
					'get',
					'resetPassword',
					'update',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'user',
				],
				operation: [
					'create',
					'update',
				],
			},
		},
		options: [
			{
				displayName: 'Email',
				name: 'email',
				type: 'string',
				default: '',
				description: 'The email of the user',
			},
			{
				displayName: 'Enabled',
				name: 'enabled',
				type: 'boolean',
				default: true,
				description: 'If user is enabled',
			},
			{
				displayName: 'First Name',
				name: 'firstName',
				type: 'string',
				default: '',
				description: 'The first name of the user',
			},
			{
				displayName: 'Last Name',
				name: 'lastName',
				type: 'string',
				default: '',
				description: 'The last name of the user',
			},
			{
				displayName: 'Locale',
				name: 'locale',
				type: 'options',
				default: 'en',
				options: [
					{
						name: 'Deutsch (DE)',
						value: 'de-DE',
					},
					{
						name: 'Deutsch',
						value: 'de',
					},
					{
						name: 'English (US)',
						value: 'en-US',
					},
					{
						name: 'English',
						value: 'en',
					},
					{
						name: 'Español (ES)',
						value: 'es-ES',
					},
					{
						name: 'Español',
						value: 'es',
					},
					{
						name: 'Português (BR)',
						value: 'pt-BR',
					},
					{
						name: 'Português',
						value: 'pt',
					},
				],
				description: 'The locale of the user',
			},
			{
				displayName: 'Roles',
				name: 'roles',
				type: 'json',
				default: '',
				description: 'The roles as list of role IDs of the user',
			},
			{
				displayName: 'TOTP',
				name: 'totp',
				type: 'boolean',
				default: false,
				description: 'Enable or disable two-factor authentication (2FA)',
			},
		],
	},
	// VIP
	{
		displayName: 'VIP ID',
		name: 'vipId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'vip',
				],
				operation: [
					'get',
				],
			},
		},
	},
	{
		displayName: 'Resource ID',
		name: 'resourceId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'vip',
				],
				operation: [
					'assign',
					'unassign',
				],
			},
		},
	},
	{
		displayName: 'Resource Type',
		name: 'resourceType',
		type: 'options',
		default: 'instances',
		options: [
			{
				name: 'Bare Metal',
				value: 'bare-metal',
			},
			{
				name: 'Instances',
				value: 'instances',
			},
		],
		required: true,
		displayOptions: {
			show: {
				resource: [
					'vip',
				],
				operation: [
					'assign',
					'unassign',
				],
			},
		},
	},
];
