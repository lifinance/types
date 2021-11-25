import { JSONSchemaType } from 'ajv'
import { TokenSchema } from './base'
import { Exchange } from '../types'

export const ExchangeSchema: JSONSchemaType<Exchange> = {
  type: 'object',
  properties: {
    key: {
      type: 'string',
    },
    name: {
      type: 'string',
    },
    chainId: {
      type: 'number',
    },
    logoURI: {
      type: 'string',
    },
    webUrl: {
      type: 'string',
    },
    graph: {
      type: 'string',
      nullable: true,
    },
    tokenlistUrl: {
      type: 'string',
    },
    routerAddress: {
      type: 'string',
    },
    factoryAddress: {
      type: 'string',
    },
    initCodeHash: {
      type: 'string',
    },
    baseTokens: {
      type: 'array',
      items: TokenSchema,
    },
  },
  required: [
    'key',
    'name',
    'chainId',
    'logoURI',
    'webUrl',
    'tokenlistUrl',
    'routerAddress',
    'factoryAddress',
    'initCodeHash',
    'baseTokens',
  ],
  additionalProperties: false,
}
