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
			{
				name: 'Data Center',
				value: 'dataCenter',
			},
			{
				name: 'DNS PTR Record',
				value: 'dnsPtr',
			},
			{
				name: 'DNS Zone',
				value: 'dnsZone',
			},
			{
				name: 'Domain',
				value: 'domain',
			},
			{
				name: 'Domain Handle',
				value: 'domainHandle',
			},
			{
				name: 'Image',
				value: 'image',
			},
			{
				name: 'Role',
				value: 'role',
			},
			{
				name: 'Secret',
				value: 'secret',
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
			{
				name: 'Get Assignments',
				value: 'getAssignments',
				description: 'Get list of resources assigned to a tag',
				action: 'Get tag assignments',
			},
			{
				name: 'Get Assignment Audits',
				value: 'getAssignmentAudits',
				description: 'Get assignment audit history',
				action: 'Get tag assignment audits',
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
				name: 'Get Client',
				value: 'getClient',
				description: 'Get client info',
				action: 'Get client info',
			},
			{
				name: 'Is Password Set',
				value: 'isPasswordSet',
				description: 'Check if password is set',
				action: 'Check if password is set',
			},
			{
				name: 'Resend Email Verification',
				value: 'resendEmailVerification',
				description: 'Resend email verification for a user',
				action: 'Resend email verification for a user',
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
			{
				name: 'Generate Client Secret',
				value: 'generateClientSecret',
				description: 'Generate a new client secret',
				action: 'Generate a new client secret',
			},
			{
				name: 'List Object Storage Credentials',
				value: 'listObjectStorageCredentials',
				description: 'Get list of S3 compatible object storage credentials',
				action: 'List S3 object storage credentials',
			},
			{
				name: 'Get Object Storage Credentials',
				value: 'getObjectStorageCredentials',
				description: 'Get specific S3 compatible object storage credentials',
				action: 'Get S3 object storage credentials',
			},
			{
				name: 'Regenerate Object Storage Credentials',
				value: 'regenerateObjectStorageCredentials',
				description: 'Regenerate secret key for S3 compatible object storage',
				action: 'Regenerate S3 object storage credentials',
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
					'getAllActionsAudits',
					'getAllRecordAudits',
					'getAssignments',
					'getAssignmentAudits',
					'listObjectStorageCredentials',
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
					'getAllActionsAudits',
					'getAllRecordAudits',
					'getAssignments',
					'getAssignmentAudits',
					'listObjectStorageCredentials',
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
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['instance'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Display Name',
				name: 'displayName',
				type: 'string',
				default: '',
				description: 'The display name of the instance',
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['instance'],
				operation: ['upgrade'],
			},
		},
		options: [
			{
				displayName: 'Backup',
				name: 'backup',
				type: 'boolean',
				default: false,
				description: 'Whether to add backup to the instance',
			},
			{
				displayName: 'Private Networking',
				name: 'privateNetworking',
				type: 'boolean',
				default: false,
				description: 'Whether to add private networking to the instance',
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['instance'],
				operation: ['cancel'],
			},
		},
		options: [
			{
				displayName: 'Cancel Date',
				name: 'cancelDate',
				type: 'string',
				default: '',
				description: 'Date of cancellation (ISO 8601 format)',
				placeholder: '2024-12-31',
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
					'getStats',
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
				displayName: 'Region',
				name: 'region',
				type: 'options',
				default: 'EU',
				options: [
					{ name: 'Asia (Singapore)', value: 'SIN' },
					{ name: 'Australia', value: 'AUS' },
					{ name: 'European Union', value: 'EU' },
					{ name: 'India', value: 'IND' },
					{ name: 'Japan', value: 'JPN' },
					{ name: 'UK', value: 'UK' },
					{ name: 'United States (Central)', value: 'US-central' },
					{ name: 'United States (East)', value: 'US-east' },
					{ name: 'United States (West)', value: 'US-west' },
				],
				description: 'Region where the object storage should be located',
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
					'cancel',
				],
			},
		},
		options: [
			{
				displayName: 'Cancel Date',
				name: 'cancelDate',
				type: 'string',
				default: '',
				description: 'Date of cancellation (ISO 8601 format)',
				placeholder: '2024-12-31',
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
					'getAssignments',
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
					'listObjectStorageCredentials',
					'resendEmailVerification',
					'resetPassword',
					'update',
				],
			},
		},
	},
	{
		displayName: 'Object Storage ID',
		name: 'objectStorageId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'user',
				],
				operation: [
					'getObjectStorageCredentials',
					'regenerateObjectStorageCredentials',
				],
			},
		},
	},
	{
		displayName: 'Credential ID',
		name: 'credentialId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'user',
				],
				operation: [
					'getObjectStorageCredentials',
					'regenerateObjectStorageCredentials',
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
		displayName: 'VIP IP',
		name: 'ip',
		type: 'string',
		default: '',
		required: true,
		description: 'The IP address of the VIP',
		displayOptions: {
			show: {
				resource: [
					'vip',
				],
				operation: [
					'assign',
					'get',
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

	// ── Secret ──────────────────────────────────────────────────────────────
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		default: 'getAll',
		options: [
			{ name: 'Create', value: 'create', description: 'Create a secret', action: 'Create a secret' },
			{ name: 'Delete', value: 'delete', description: 'Delete a secret', action: 'Delete a secret' },
			{ name: 'Get', value: 'get', description: 'Get a secret', action: 'Get a secret' },
			{ name: 'Get All', value: 'getAll', description: 'Get many secrets', action: 'Get many secrets' },
			{ name: 'Get All Audits', value: 'getAllAudits', description: 'Get many secret audits', action: 'Get many secret audits' },
			{ name: 'Update', value: 'update', description: 'Update a secret', action: 'Update a secret' },
		],
		displayOptions: { show: { resource: ['secret'] } },
	},
	{
		displayName: 'Secret ID',
		name: 'secretId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: { show: { resource: ['secret'], operation: ['delete', 'get', 'update'] } },
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: { show: { resource: ['secret'], operation: ['create'] } },
		options: [
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'The name of the secret',
			},
			{
				displayName: 'Type',
				name: 'type',
				type: 'options',
				default: 'password',
				options: [
					{ name: 'Password', value: 'password' },
					{ name: 'SSH Key', value: 'ssh' },
				],
				description: 'The type of the secret',
			},
			{
				displayName: 'Value',
				name: 'value',
				type: 'string',
				default: '',
				typeOptions: { password: true },
				description: 'The secret value',
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: { show: { resource: ['secret'], operation: ['update'] } },
		options: [
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'The new name of the secret',
			},
			{
				displayName: 'Value',
				name: 'value',
				type: 'string',
				default: '',
				typeOptions: { password: true },
				description: 'The new secret value',
			},
		],
	},

	// ── Image ────────────────────────────────────────────────────────────────
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		default: 'getAll',
		options: [
			{ name: 'Create', value: 'create', description: 'Create a custom image', action: 'Create a custom image' },
			{ name: 'Delete', value: 'delete', description: 'Delete a custom image', action: 'Delete a custom image' },
			{ name: 'Get', value: 'get', description: 'Get an image', action: 'Get an image' },
			{ name: 'Get All', value: 'getAll', description: 'Get many images', action: 'Get many images' },
			{ name: 'Get All Audits', value: 'getAllAudits', description: 'Get many image audits', action: 'Get many image audits' },
			{ name: 'Get Stats', value: 'getStats', description: 'Get image stats', action: 'Get image stats' },
			{ name: 'Update', value: 'update', description: 'Update a custom image', action: 'Update a custom image' },
		],
		displayOptions: { show: { resource: ['image'] } },
	},
	{
		displayName: 'Image ID',
		name: 'imageId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: { show: { resource: ['image'], operation: ['delete', 'get', 'update'] } },
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: { show: { resource: ['image'], operation: ['create'] } },
		options: [
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				description: 'Image description',
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Image name',
			},
			{
				displayName: 'OS Type',
				name: 'osType',
				type: 'options',
				default: 'Linux',
				options: [
					{ name: 'Linux', value: 'Linux' },
					{ name: 'Windows', value: 'Windows' },
				],
				description: 'Operating system type',
			},
			{
				displayName: 'URL',
				name: 'url',
				type: 'string',
				default: '',
				description: 'URL from where the image has been downloaded / provided',
			},
			{
				displayName: 'Version',
				name: 'version',
				type: 'string',
				default: '',
				description: 'Version number to distinguish the contents of an image',
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: { show: { resource: ['image'], operation: ['update'] } },
		options: [
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				description: 'Image description',
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Image name',
			},
		],
	},

	// ── Role ─────────────────────────────────────────────────────────────────
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		default: 'getAll',
		options: [
			{ name: 'Create', value: 'create', description: 'Create a role', action: 'Create a role' },
			{ name: 'Delete', value: 'delete', description: 'Delete a role', action: 'Delete a role' },
			{ name: 'Get', value: 'get', description: 'Get a role', action: 'Get a role' },
			{ name: 'Get All', value: 'getAll', description: 'Get many roles', action: 'Get many roles' },
			{ name: 'Get All Audits', value: 'getAllAudits', description: 'Get many role audits', action: 'Get many role audits' },
			{ name: 'Get API Permissions', value: 'getApiPermissions', description: 'Get API permissions', action: 'Get API permissions' },
			{ name: 'Update', value: 'update', description: 'Update a role', action: 'Update a role' },
		],
		displayOptions: { show: { resource: ['role'] } },
	},
	{
		displayName: 'Role ID',
		name: 'roleId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: { show: { resource: ['role'], operation: ['delete', 'get', 'update'] } },
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: { show: { resource: ['role'], operation: ['create', 'update'] } },
		options: [
			{
				displayName: 'Access All Resources',
				name: 'accessAllResources',
				type: 'boolean',
				default: false,
				description: 'Whether to allow access to all resources',
			},
			{
				displayName: 'Admin',
				name: 'admin',
				type: 'boolean',
				default: false,
				description: 'Whether the role has admin privileges',
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'The name of the role',
			},
			{
				displayName: 'Permissions',
				name: 'permissions',
				type: 'json',
				default: '[]',
				description: 'JSON array of permission objects',
			},
		],
	},

	// ── DNS Zone ──────────────────────────────────────────────────────────────
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		default: 'getAll',
		options: [
			{ name: 'Create', value: 'create', description: 'Create a DNS zone', action: 'Create a DNS zone' },
			{ name: 'Create Record', value: 'createRecord', description: 'Create a DNS record', action: 'Create a DNS record' },
			{ name: 'Delete', value: 'delete', description: 'Delete a DNS zone', action: 'Delete a DNS zone' },
			{ name: 'Delete Record', value: 'deleteRecord', description: 'Delete a DNS record', action: 'Delete a DNS record' },
			{ name: 'Get', value: 'get', description: 'Get a DNS zone', action: 'Get a DNS zone' },
			{ name: 'Get All', value: 'getAll', description: 'Get many DNS zones', action: 'Get many DNS zones' },
			{ name: 'Get All Audits', value: 'getAllAudits', description: 'Get many DNS zone audits', action: 'Get many DNS zone audits' },
			{ name: 'Get All Record Audits', value: 'getAllRecordAudits', description: 'Get many DNS record audits', action: 'Get many DNS record audits' },
			{ name: 'Get Records', value: 'getRecords', description: 'Get records of a DNS zone', action: 'Get records of a DNS zone' },
			{ name: 'Update Record', value: 'updateRecord', description: 'Update a DNS record', action: 'Update a DNS record' },
			{ name: 'Bulk Delete Records', value: 'bulkDeleteRecords', description: 'Delete multiple DNS records at once', action: 'Bulk delete DNS records' },
		],
		displayOptions: { show: { resource: ['dnsZone'] } },
	},
	{
		displayName: 'Zone Name',
		name: 'zoneName',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'example.com',
		description: 'The DNS zone name',
		displayOptions: {
			show: {
				resource: ['dnsZone'],
				operation: ['bulkDeleteRecords', 'create', 'delete', 'get', 'getRecords', 'createRecord', 'updateRecord', 'deleteRecord'],
			},
		},
	},
	{
		displayName: 'Record ID',
		name: 'recordId',
		type: 'string',
		default: '',
		required: true,
		description: 'The DNS record ID',
		displayOptions: {
			show: {
				resource: ['dnsZone'],
				operation: ['deleteRecord', 'updateRecord'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: { show: { resource: ['dnsZone'], operation: ['bulkDeleteRecords'] } },
		options: [
			{
				displayName: 'Record IDs',
				name: 'recordIds',
				type: 'json',
				default: '[]',
				description: 'JSON array of record IDs to delete',
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: { show: { resource: ['dnsZone'], operation: ['createRecord'] } },
		options: [
			{
				displayName: 'Data',
				name: 'data',
				type: 'string',
				default: '',
				description: 'Record data / value',
			},
			{
				displayName: 'Flag',
				name: 'flag',
				type: 'number',
				default: 0,
				description: 'Flag (for CAA records)',
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Record name (leave empty to use zone name)',
			},
			{
				displayName: 'Port',
				name: 'port',
				type: 'number',
				default: 0,
				description: 'Port (for SRV records)',
			},
			{
				displayName: 'Priority',
				name: 'prio',
				type: 'number',
				default: 0,
				description: 'Record priority',
			},
			{
				displayName: 'Tag',
				name: 'tag',
				type: 'string',
				default: '',
				description: 'Tag (for CAA records)',
			},
			{
				displayName: 'TTL',
				name: 'ttl',
				type: 'number',
				default: 3600,
				description: 'Time to live in seconds',
			},
			{
				displayName: 'Type',
				name: 'type',
				type: 'options',
				default: 'A',
				options: [
					{ name: 'A', value: 'A' },
					{ name: 'AAAA', value: 'AAAA' },
					{ name: 'CAA', value: 'CAA' },
					{ name: 'CNAME', value: 'CNAME' },
					{ name: 'MX', value: 'MX' },
					{ name: 'SRV', value: 'SRV' },
					{ name: 'TXT', value: 'TXT' },
				],
				description: 'DNS record type',
			},
			{
				displayName: 'Weight',
				name: 'weight',
				type: 'number',
				default: 0,
				description: 'Weight (for SRV records)',
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: { show: { resource: ['dnsZone'], operation: ['updateRecord'] } },
		options: [
			{
				displayName: 'Data',
				name: 'data',
				type: 'string',
				default: '',
				description: 'Record data / value',
			},
			{
				displayName: 'Flag',
				name: 'flag',
				type: 'number',
				default: 0,
				description: 'Flag (for CAA records)',
			},
			{
				displayName: 'Port',
				name: 'port',
				type: 'number',
				default: 0,
				description: 'Port (for SRV records)',
			},
			{
				displayName: 'Priority',
				name: 'prio',
				type: 'number',
				default: 0,
				description: 'Record priority',
			},
			{
				displayName: 'Tag',
				name: 'tag',
				type: 'string',
				default: '',
				description: 'Tag (for CAA records)',
			},
			{
				displayName: 'TTL',
				name: 'ttl',
				type: 'number',
				default: 3600,
				description: 'Time to live in seconds',
			},
			{
				displayName: 'Weight',
				name: 'weight',
				type: 'number',
				default: 0,
				description: 'Weight (for SRV records)',
			},
		],
	},

	// ── DNS PTR ──────────────────────────────────────────────────────────────
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		default: 'getAll',
		options: [
			{ name: 'Create', value: 'create', description: 'Create a PTR record', action: 'Create a PTR record' },
			{ name: 'Delete', value: 'delete', description: 'Delete a PTR record', action: 'Delete a PTR record' },
			{ name: 'Get', value: 'get', description: 'Get a PTR record', action: 'Get a PTR record' },
			{ name: 'Get All', value: 'getAll', description: 'Get many PTR records', action: 'Get many PTR records' },
			{ name: 'Update', value: 'update', description: 'Update a PTR record', action: 'Update a PTR record' },
		],
		displayOptions: { show: { resource: ['dnsPtr'] } },
	},
	{
		displayName: 'IP Address',
		name: 'ipAddress',
		type: 'string',
		default: '',
		required: true,
		description: 'The IP address of the PTR record',
		displayOptions: { show: { resource: ['dnsPtr'], operation: ['delete', 'get', 'update'] } },
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: { show: { resource: ['dnsPtr'], operation: ['create'] } },
		options: [
			{
				displayName: 'IP Address',
				name: 'ip',
				type: 'string',
				default: '',
				description: 'The IP address for this PTR record',
			},
			{
				displayName: 'PTR Record Name',
				name: 'ptr',
				type: 'string',
				default: '',
				description: 'The PTR record hostname',
			},
			{
				displayName: 'TTL',
				name: 'ttl',
				type: 'number',
				default: 3600,
				description: 'Time to live in seconds',
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: { show: { resource: ['dnsPtr'], operation: ['update'] } },
		options: [
			{
				displayName: 'PTR Record Name',
				name: 'ptr',
				type: 'string',
				default: '',
				description: 'The new PTR record hostname',
			},
		],
	},

	// ── Domain ──────────────────────────────────────────────────────────────
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		default: 'getAll',
		options: [
			{ name: 'Cancel', value: 'cancel', description: 'Cancel a domain', action: 'Cancel a domain' },
			{ name: 'Create', value: 'create', description: 'Register a domain', action: 'Register a domain' },
			{ name: 'Generate Auth Code', value: 'generateAuthCode', description: 'Generate auth code for domain transfer', action: 'Generate auth code for domain' },
			{ name: 'Get', value: 'get', description: 'Get a domain', action: 'Get a domain' },
			{ name: 'Get All', value: 'getAll', description: 'Get many domains', action: 'Get many domains' },
			{ name: 'Get All Audits', value: 'getAllAudits', description: 'Get many domain audits', action: 'Get many domain audits' },
			{ name: 'Revoke Cancellation', value: 'revokeCancellation', description: 'Revoke domain cancellation', action: 'Revoke domain cancellation' },
			{ name: 'Transfer Out', value: 'transferOut', description: 'Cancel outgoing domain transfer', action: 'Cancel outgoing domain transfer' },
			{ name: 'Update', value: 'update', description: 'Update a domain', action: 'Update a domain' },
			{ name: 'Check Availability', value: 'checkAvailability', description: 'Check if a domain is available for registration', action: 'Check domain availability' },
		],
		displayOptions: { show: { resource: ['domain'] } },
	},
	{
		displayName: 'Domain Name',
		name: 'domainName',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'example.com',
		description: 'The domain name',
		displayOptions: {
			show: {
				resource: ['domain'],
				operation: ['cancel', 'checkAvailability', 'generateAuthCode', 'get', 'revokeCancellation', 'transferOut', 'update'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: { show: { resource: ['domain'], operation: ['create'] } },
		options: [
			{
				displayName: 'Auth Code',
				name: 'authCode',
				type: 'string',
				default: '',
				description: 'The domain auth code (for transfers)',
			},
			{
				displayName: 'Domain',
				name: 'domain',
				type: 'string',
				default: '',
				description: 'Domain name to register',
			},
			{
				displayName: 'Handles (JSON)',
				name: 'handles',
				type: 'json',
				default: '{"owner":"","admin":"","tech":"","zone":""}',
				description: 'JSON object with owner, admin, tech, zone handle IDs',
			},
			{
				displayName: 'Nameservers (JSON)',
				name: 'nameservers',
				type: 'json',
				default: '[]',
				description: 'JSON array of nameserver objects',
			},
			{
				displayName: 'Resource ID',
				name: 'domainResourceId',
				type: 'string',
				default: '',
				description: 'The resource ID to link to this domain',
			},
			{
				displayName: 'Resource Type',
				name: 'domainResourceType',
				type: 'options',
				default: 'instance',
				options: [
					{ name: 'Instance', value: 'instance' },
					{ name: 'Package', value: 'package' },
					{ name: 'Server', value: 'server' },
				],
				description: 'The resource type to link to this domain',
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: { show: { resource: ['domain'], operation: ['update'] } },
		options: [
			{
				displayName: 'Handles (JSON)',
				name: 'handles',
				type: 'json',
				default: '{"owner":"","admin":"","tech":"","zone":""}',
				description: 'JSON object with owner, admin, tech, zone handle IDs',
			},
			{
				displayName: 'Nameservers (JSON)',
				name: 'nameservers',
				type: 'json',
				default: '[]',
				description: 'JSON array of nameserver objects',
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: { show: { resource: ['domain'], operation: ['cancel'] } },
		options: [
			{
				displayName: 'Cancel Date',
				name: 'cancelDate',
				type: 'string',
				default: '',
				placeholder: '2024-12-31',
				description: 'Date of cancellation (ISO 8601 format)',
			},
			{
				displayName: 'Reason',
				name: 'reason',
				type: 'string',
				default: '',
				description: 'Reason for cancellation',
			},
			{
				displayName: 'Reason Text',
				name: 'reasonText',
				type: 'string',
				default: '',
				description: 'Detailed reason text',
			},
		],
	},

	// ── Domain Handle ─────────────────────────────────────────────────────────
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		default: 'getAll',
		options: [
			{ name: 'Create', value: 'create', description: 'Create a domain handle', action: 'Create a domain handle' },
			{ name: 'Delete', value: 'delete', description: 'Delete a domain handle', action: 'Delete a domain handle' },
			{ name: 'Get', value: 'get', description: 'Get a domain handle', action: 'Get a domain handle' },
			{ name: 'Get All', value: 'getAll', description: 'Get many domain handles', action: 'Get many domain handles' },
			{ name: 'Get All Audits', value: 'getAllAudits', description: 'Get many domain handle audits', action: 'Get many domain handle audits' },
			{ name: 'Set Default', value: 'setDefault', description: 'Set a domain handle as default', action: 'Set domain handle as default' },
			{ name: 'Update', value: 'update', description: 'Update a domain handle', action: 'Update a domain handle' },
		],
		displayOptions: { show: { resource: ['domainHandle'] } },
	},
	{
		displayName: 'Handle ID',
		name: 'handleId',
		type: 'string',
		default: '',
		required: true,
		description: 'The domain handle ID',
		displayOptions: {
			show: {
				resource: ['domainHandle'],
				operation: ['delete', 'get', 'setDefault', 'update'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: { show: { resource: ['domainHandle'], operation: ['create'] } },
		options: [
			{
				displayName: 'Address (JSON)',
				name: 'address',
				type: 'json',
				default: '{}',
				description: 'JSON object with address fields (street, city, state, zip, country)',
			},
			{
				displayName: 'Email',
				name: 'email',
				type: 'string',
				default: '',
				description: 'Contact email address',
			},
			{
				displayName: 'Fax',
				name: 'fax',
				type: 'string',
				default: '',
				description: 'Fax number',
			},
			{
				displayName: 'First Name',
				name: 'firstName',
				type: 'string',
				default: '',
				description: 'First name',
			},
			{
				displayName: 'Gender',
				name: 'gender',
				type: 'options',
				default: 'm',
				options: [
					{ name: 'Female', value: 'f' },
					{ name: 'Male', value: 'm' },
				],
				description: 'Gender',
			},
			{
				displayName: 'Handle Type',
				name: 'handleType',
				type: 'options',
				default: 'person',
				options: [
					{ name: 'Organization', value: 'organization' },
					{ name: 'Person', value: 'person' },
				],
				description: 'The type of handle',
			},
			{
				displayName: 'Last Name',
				name: 'lastName',
				type: 'string',
				default: '',
				description: 'Last name',
			},
			{
				displayName: 'Organization',
				name: 'organization',
				type: 'string',
				default: '',
				description: 'Organization name',
			},
			{
				displayName: 'Phone',
				name: 'phone',
				type: 'string',
				default: '',
				description: 'Phone number',
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: { show: { resource: ['domainHandle'], operation: ['update'] } },
		options: [
			{
				displayName: 'Address (JSON)',
				name: 'address',
				type: 'json',
				default: '{}',
				description: 'JSON object with address fields (street, city, state, zip, country)',
			},
			{
				displayName: 'Email',
				name: 'email',
				type: 'string',
				default: '',
				description: 'Contact email address',
			},
			{
				displayName: 'Fax',
				name: 'fax',
				type: 'string',
				default: '',
				description: 'Fax number',
			},
			{
				displayName: 'Gender',
				name: 'gender',
				type: 'options',
				default: 'm',
				options: [
					{ name: 'Female', value: 'f' },
					{ name: 'Male', value: 'm' },
				],
				description: 'Gender',
			},
			{
				displayName: 'Phone',
				name: 'phone',
				type: 'string',
				default: '',
				description: 'Phone number',
			},
		],
	},

	// ── Data Center ──────────────────────────────────────────────────────────
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		default: 'getAll',
		options: [
			{ name: 'Get All', value: 'getAll', description: 'Get many data centers', action: 'Get many data centers' },
		],
		displayOptions: { show: { resource: ['dataCenter'] } },
	},
];
