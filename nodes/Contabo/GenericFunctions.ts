
import type {
	IDataObject,
	IExecuteFunctions,
	IHookFunctions,
	JsonObject,
	IHttpRequestMethods,
	IHttpRequestOptions,
} from 'n8n-workflow';
import { NodeApiError } from 'n8n-workflow';
import { v4 as uuidv4 } from 'uuid';

export async function contaboApiRequest(
	this: IHookFunctions | IExecuteFunctions,
	method: IHttpRequestMethods,
	endpoint: string,
	body: object,
	query?: IDataObject,
	uri?: string,
	headers?: IDataObject,
): Promise<any> {
	const options: IHttpRequestOptions = {
		method,
		headers: {
			'x-request-id': uuidv4(),
			'x-trace-id': uuidv4(),
			...headers,
		},
		qs: query,
		url: uri ?? `https://api.contabo.com/v1/${endpoint}`,
		json: true,
	};

	if (Object.keys(body).length > 0) {
		options.body = body;
	}
	try {
		return await this.helpers.httpRequestWithAuthentication.call(this, 'contaboOAuth2Api', options);
	} catch (error) {
		throw new NodeApiError(this.getNode(), error as JsonObject);
	}
}

export type IEndpoint = {
	path: string;
	method: IHttpRequestMethods;
};

export const endpoints: Record<string, Record<string, IEndpoint>> = {
	instance: {
		getAll: { path: 'compute/instances', method: 'GET' },
		create: { path: 'compute/instances', method: 'POST' },
		get: { path: 'compute/instances/{{instanceId}}', method: 'GET' },
		update: { path: 'compute/instances/{{instanceId}}', method: 'PATCH' },
		reinstall: { path: 'compute/instances/{{instanceId}}', method: 'PUT' },
		cancel: { path: 'compute/instances/{{instanceId}}/cancel', method: 'POST' },
		upgrade: { path: 'compute/instances/{{instanceId}}/upgrade', method: 'POST' },
		start: { path: 'compute/instances/{{instanceId}}/actions/start', method: 'POST' },
		restart: { path: 'compute/instances/{{instanceId}}/actions/restart', method: 'POST' },
		stop: { path: 'compute/instances/{{instanceId}}/actions/stop', method: 'POST' },
		shutdown: { path: 'compute/instances/{{instanceId}}/actions/shutdown', method: 'POST' },
		rescue: { path: 'compute/instances/{{instanceId}}/actions/rescue', method: 'POST' },
		resetPassword: { path: 'compute/instances/{{instanceId}}/actions/resetPassword', method: 'POST' },
		getAllAudits: { path: 'compute/instances/audits', method: 'GET' },
		getAllActionsAudits: { path: 'compute/instances/actions/audits', method: 'GET' },
	},
	objectStorage: {
		getAll: { path: 'object-storages', method: 'GET' },
		create: { path: 'object-storages', method: 'POST' },
		get: { path: 'object-storages/{{objectStorageId}}', method: 'GET' },
		update: { path: 'object-storages/{{objectStorageId}}', method: 'PATCH' },
		resize: { path: 'object-storages/{{objectStorageId}}/resize', method: 'POST' },
		cancel: { path: 'object-storages/{{objectStorageId}}/cancel', method: 'PATCH' },
		getStats: { path: 'object-storages/{{objectStorageId}}/stats', method: 'GET' },
		getAllAudits: { path: 'object-storages/audits', method: 'GET' },
	},
	privateNetwork: {
		getAll: { path: 'private-networks', method: 'GET' },
		create: { path: 'private-networks', method: 'POST' },
		get: { path: 'private-networks/{{privateNetworkId}}', method: 'GET' },
		update: { path: 'private-networks/{{privateNetworkId}}', method: 'PATCH' },
		delete: { path: 'private-networks/{{privateNetworkId}}', method: 'DELETE' },
		assignInstance: { path: 'private-networks/{{privateNetworkId}}/instances/{{instanceId}}', method: 'POST' },
		unassignInstance: { path: 'private-networks/{{privateNetworkId}}/instances/{{instanceId}}', method: 'DELETE' },
		getAllAudits: { path: 'private-networks/audits', method: 'GET' },
	},
	snapshot: {
		getAll: { path: 'compute/instances/{{instanceId}}/snapshots', method: 'GET' },
		create: { path: 'compute/instances/{{instanceId}}/snapshots', method: 'POST' },
		get: { path: 'compute/instances/{{instanceId}}/snapshots/{{snapshotId}}', method: 'GET' },
		update: { path: 'compute/instances/{{instanceId}}/snapshots/{{snapshotId}}', method: 'PATCH' },
		delete: { path: 'compute/instances/{{instanceId}}/snapshots/{{snapshotId}}', method: 'DELETE' },
		revert: { path: 'compute/instances/{{instanceId}}/snapshots/{{snapshotId}}/rollback', method: 'POST' },
		getAllAudits: { path: 'compute/snapshots/audits', method: 'GET' },
	},
	tag: {
		getAll: { path: 'tags', method: 'GET' },
		create: { path: 'tags', method: 'POST' },
		get: { path: 'tags/{{tagId}}', method: 'GET' },
		update: { path: 'tags/{{tagId}}', method: 'PATCH' },
		delete: { path: 'tags/{{tagId}}', method: 'DELETE' },
		assign: { path: 'tags/{{tagId}}/assignments/{{resourceType}}/{{resourceId}}', method: 'POST' },
		unassign: { path: 'tags/{{tagId}}/assignments/{{resourceType}}/{{resourceId}}', method: 'DELETE' },
		getAllAudits: { path: 'tags/audits', method: 'GET' },
	},
	user: {
		getAll: { path: 'users', method: 'GET' },
		create: { path: 'users', method: 'POST' },
		get: { path: 'users/{{userId}}', method: 'GET' },
		update: { path: 'users/{{userId}}', method: 'PATCH' },
		delete: { path: 'users/{{userId}}', method: 'DELETE' },
		resetPassword: { path: 'users/{{userId}}/reset-password', method: 'POST' },
		resendEmailVerification: { path: 'users/{{userId}}/resend-email-verification', method: 'POST' },
		getClient: { path: 'users/client', method: 'GET' },
		isPasswordSet: { path: 'users/is-password-set', method: 'GET' },
		getAllAudits: { path: 'users/audits', method: 'GET' },
	},
	vip: {
		getAll: { path: 'vips', method: 'GET' },
		get: { path: 'vips/{{vipId}}', method: 'GET' },
		assign: { path: 'vips/{{vipId}}/{{resourceType}}/{{resourceId}}', method: 'POST' },
		unassign: { path: 'vips/{{vipId}}/{{resourceType}}/{{resourceId}}', method: 'DELETE' },
		getAllAudits: { path: 'vips/audits', method: 'GET' },
	},
	secret: {
		getAll: { path: 'secrets', method: 'GET' },
		create: { path: 'secrets', method: 'POST' },
		get: { path: 'secrets/{{secretId}}', method: 'GET' },
		update: { path: 'secrets/{{secretId}}', method: 'PATCH' },
		delete: { path: 'secrets/{{secretId}}', method: 'DELETE' },
		getAllAudits: { path: 'secrets/audits', method: 'GET' },
	},
	image: {
		getAll: { path: 'compute/images', method: 'GET' },
		create: { path: 'compute/images', method: 'POST' },
		get: { path: 'compute/images/{{imageId}}', method: 'GET' },
		update: { path: 'compute/images/{{imageId}}', method: 'PATCH' },
		delete: { path: 'compute/images/{{imageId}}', method: 'DELETE' },
		getStats: { path: 'compute/images/stats', method: 'GET' },
		getAllAudits: { path: 'compute/images/audits', method: 'GET' },
	},
	role: {
		getAll: { path: 'roles', method: 'GET' },
		create: { path: 'roles', method: 'POST' },
		get: { path: 'roles/{{roleId}}', method: 'GET' },
		update: { path: 'roles/{{roleId}}', method: 'PUT' },
		delete: { path: 'roles/{{roleId}}', method: 'DELETE' },
		getApiPermissions: { path: 'roles/api-permissions', method: 'GET' },
		getAllAudits: { path: 'roles/audits', method: 'GET' },
	},
	dnsZone: {
		getAll: { path: 'dns/zones', method: 'GET' },
		create: { path: 'dns/zones', method: 'POST' },
		get: { path: 'dns/zones/{{zoneName}}', method: 'GET' },
		delete: { path: 'dns/zones/{{zoneName}}', method: 'DELETE' },
		getAllAudits: { path: 'dns/zones/audits', method: 'GET' },
		getRecords: { path: 'dns/zones/{{zoneName}}/records', method: 'GET' },
		createRecord: { path: 'dns/zones/{{zoneName}}/records', method: 'POST' },
		updateRecord: { path: 'dns/zones/{{zoneName}}/records/{{recordId}}', method: 'PATCH' },
		deleteRecord: { path: 'dns/zones/{{zoneName}}/records/{{recordId}}', method: 'DELETE' },
		getAllRecordAudits: { path: 'dns/records/audits', method: 'GET' },
	},
	dnsPtr: {
		getAll: { path: 'dns/ptrs', method: 'GET' },
		create: { path: 'dns/ptrs', method: 'POST' },
		get: { path: 'dns/ptrs/{{ipAddress}}', method: 'GET' },
		update: { path: 'dns/ptrs/{{ipAddress}}', method: 'PUT' },
		delete: { path: 'dns/ptrs/{{ipAddress}}', method: 'DELETE' },
	},
	domain: {
		getAll: { path: 'domains', method: 'GET' },
		create: { path: 'domains', method: 'POST' },
		get: { path: 'domains/{{domainName}}', method: 'GET' },
		update: { path: 'domains/{{domainName}}', method: 'PATCH' },
		cancel: { path: 'domains/{{domainName}}/cancel', method: 'POST' },
		generateAuthCode: { path: 'domains/{{domainName}}/generate-auth-code', method: 'POST' },
		revokeCancellation: { path: 'domains/{{domainName}}/revoke-cancellation', method: 'POST' },
		transferOut: { path: 'domains/{{domainName}}/transfer-out', method: 'DELETE' },
		getAllAudits: { path: 'domains/audits', method: 'GET' },
	},
	domainHandle: {
		getAll: { path: 'domains/handles', method: 'GET' },
		create: { path: 'domains/handles', method: 'POST' },
		get: { path: 'domains/handles/{{handleId}}', method: 'GET' },
		update: { path: 'domains/handles/{{handleId}}', method: 'PUT' },
		delete: { path: 'domains/handles/{{handleId}}', method: 'DELETE' },
		setDefault: { path: 'domains/handles/{{handleId}}/default', method: 'PATCH' },
		getAllAudits: { path: 'domains/handles/audits', method: 'GET' },
	},
	dataCenter: {
		getAll: { path: 'data-centers', method: 'GET' },
	},
};
