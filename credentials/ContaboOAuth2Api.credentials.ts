import {
  Icon,
  ICredentialType,
  INodeProperties,
	IAuthenticateGeneric,
	ICredentialDataDecryptedObject,
	IHttpRequestHelper,
} from 'n8n-workflow';

import { v4 as uuidv4 } from 'uuid';

export class ContaboOAuth2Api implements ICredentialType {
  name = 'contaboOAuth2Api';
  displayName = 'Contabo OAuth2 API';
  documentationUrl = 'https://docs.contabo.com/';
	icon: Icon = 'file:icons/Contabo.svg';

	async preAuthentication(this: IHttpRequestHelper, credentials: ICredentialDataDecryptedObject) {
		const url = credentials.accessTokenUrl as string;
		const { access_token } = (await this.helpers.httpRequest({
			method: 'POST',
			url: url,
			body: {
				client_id: credentials.clientId,
				client_secret: credentials.clientSecret,
				username: credentials.apiUser,
				password: credentials.apiPassword,
				grant_type: 'password',
			},
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
     		'x-request-id': uuidv4(),
			},
		})) as { access_token: string };
		return { sessionToken: access_token };
	}

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.sessionToken}}',
			},
		},
	};

  properties: INodeProperties[] = [
		{
			displayName: 'Session Token',
			name: 'sessionToken',
			type: 'hidden',

			typeOptions: {
				expirable: true,
			},
			default: '',
		},
		{
      displayName: 'Client ID',
      name: 'clientId',
      type: 'string',
      default: '',
    },
    {
      displayName: 'Client Secret',
      name: 'clientSecret',
      type: 'string',
      typeOptions: {
        password: true,
      },
      default: '',
    },
    {
      displayName: 'API User',
      name: 'apiUser',
      type: 'string',
      default: '',
    },
    {
      displayName: 'API Password',
      name: 'apiPassword',
      type: 'string',
      typeOptions: {
        password: true,
      },
      default: '',
    },
    {
			displayName: 'Access Token URL',
			name: 'accessTokenUrl',
      type: 'hidden',
			default: 'https://auth.contabo.com/auth/realms/contabo/protocol/openid-connect/token',
			required: true,
    },
  ];
}

