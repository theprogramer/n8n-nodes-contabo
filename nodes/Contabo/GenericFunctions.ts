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
): Promise<any> {
	const options: IHttpRequestOptions = {
		method,
		headers: {
			'Content-Type': 'application/json',
  		'x-request-id': uuidv4(),
	  	'x-trace-id': uuidv4(),
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

