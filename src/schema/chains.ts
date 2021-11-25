import { JSONSchemaType } from 'ajv'
import { ChainKeySchema, CoinKeySchema } from './base'
import { AddEthereumChainParameter, Chain } from '../types'

export const AddEthereumChainParameterSchema: JSONSchemaType<AddEthereumChainParameter> =
  {
    type: 'object',
    properties: {
      chainId: {
        type: 'string',
      },
      blockExplorerUrls: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      chainName: {
        type: 'string',
      },
      nativeCurrency: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
          },
          symbol: {
            type: 'string',
          },
          decimals: {
            type: 'number',
          },
        },
        required: ['name', 'symbol', 'decimals'],
        additionalProperties: false,
      },
      rpcUrls: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
    },
    required: [
      'chainId',
      'blockExplorerUrls',
      'chainName',
      'nativeCurrency',
      'rpcUrls',
    ],
    additionalProperties: false,
  }

export const ChainSchema: JSONSchemaType<Chain> = {
  type: 'object',
  properties: {
    key: ChainKeySchema,
    name: {
      type: 'string',
    },
    coin: CoinKeySchema,
    id: {
      type: 'number',
    },
    visible: {
      type: 'boolean',
    },
    tokenlistUrl: {
      type: 'string',
      nullable: true,
    },
    faucetUrls: {
      type: 'array',
      nullable: true,
      items: {
        type: 'string',
      },
    },
    metamask: AddEthereumChainParameterSchema,
  },
  required: ['key', 'name', 'coin', 'id', 'visible', 'metamask'],
  additionalProperties: false,
}
