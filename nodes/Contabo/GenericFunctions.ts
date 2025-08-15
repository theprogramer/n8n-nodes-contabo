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
}

export const endpoints: Record<string, Record<string, IEndpoint>> = {
  'instance': {
	  'getAll': {
		  'path': 'compute/instances',
		  'method': 'GET'
		},
    'get': {
		  'path': 'compute/instances/{{instanceId}}',
			'method': 'GET'
		},
    'create': {
			'path': 'compute/instances/{{instanceId}}/snapshots',
			'method': 'POST'
		},
	},
	'snapshot': {
	  'getAll': {
		  'path': 'compute/instances/{{instanceId}}/snapshots',
		  'method': 'GET'
		},
    'get': {
		  'path': 'compute/instances/{{instanceId}}/snapshots/{{snapshotId}}',
			'method': 'GET'
		},
    'create': {
			'path': 'compute/instances/{{instanceId}}/snapshots',
			'method': 'POST'
		},
    'update': {
			'path': 'compute/instances/{{instanceId}}/snapshots/{{snapshotId}}',
			'method': 'PATCH'
		},
    'delete': {
			'path': 'compute/instances/{{instanceId}}/snapshots/{{snapshotId}}',
			'method': 'DELETE'
		},
    'revert': {
			'path': 'compute/instances/{{instanceId}}/snapshots/{{snapshotId}}',
			'method': 'POST'
		},
    'snapshotAudits': {
			'path': 'compute/snapshots/audits',
			'method': 'GET'
		},
	}
}

