import { JSONSchemaType } from 'ajv'
import {
  BridgesOrExchanges,
  Order,
  PossibilitiesRequest,
  PossibilitiesResponse,
  Route,
  RouteOptions,
  RoutesRequest,
  RoutesResponse,
  StepTransactionResponse,
} from '../types'
import { TokenSchema } from './base'
import { StepSchema } from './step'
import { ChainSchema } from './chains'

export const OrderSchema: JSONSchemaType<Order> = {
  type: 'string',
  enum: ['BEST_VALUE', 'BEST_FEE', 'BEST_FEE_GAS'],
}
export const BridgesOrExchangesSchema: JSONSchemaType<BridgesOrExchanges> = {
  type: 'object',
  properties: {
    allow: {
      type: 'array',
      nullable: true,
      items: {
        type: 'string',
      },
    },
    deny: {
      type: 'array',
      nullable: true,
      items: {
        type: 'string',
      },
    },
    prefer: {
      type: 'array',
      nullable: true,
      items: {
        type: 'string',
      },
    },
  },
  additionalProperties: false,
}
export const RouteOptionsSchema: JSONSchemaType<RouteOptions> = {
  type: 'object',
  properties: {
    order: {
      ...OrderSchema,
      nullable: true,
    },
    slippage: {
      type: 'number',
      nullable: true,
    },
    infiniteApproval: {
      type: 'boolean',
      nullable: true,
    },
    allowSwitchChain: {
      type: 'boolean',
      nullable: true,
    },
    encryptionSupport: {
      type: 'boolean',
      nullable: true,
    },
    bridges: { ...BridgesOrExchangesSchema, nullable: true },
    exchanges: { ...BridgesOrExchangesSchema, nullable: true },
  },
  additionalProperties: false,
}
export const RoutesRequestSchema: JSONSchemaType<RoutesRequest> = {
  type: 'object',
  properties: {
    fromChainId: {
      type: 'number',
    },
    fromAmount: {
      type: 'string',
    },
    fromTokenAddress: {
      type: 'string',
    },
    fromAddress: {
      type: 'string',
      nullable: true,
    },
    toChainId: {
      type: 'number',
    },
    toTokenAddress: {
      type: 'string',
    },
    toAddress: {
      type: 'string',
      nullable: true,
    },
    options: {
      ...RouteOptionsSchema,
      nullable: true,
    },
  },
  required: [
    'fromChainId',
    'fromAmount',
    'fromTokenAddress',
    'toChainId',
    'toTokenAddress',
  ],
  additionalProperties: false,
}
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const RouteSchema: JSONSchemaType<Route> = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
    },
    fromChainId: {
      type: 'number',
    },
    fromAmountUSD: {
      type: 'string',
    },
    fromAmount: {
      type: 'string',
    },
    fromToken: TokenSchema,
    fromAddress: {
      type: 'string',
      nullable: true,
    },
    toChainId: {
      type: 'number',
    },
    toAmountUSD: {
      type: 'string',
    },
    toAmount: {
      type: 'string',
    },
    toAmountMin: {
      type: 'string',
    },
    toToken: TokenSchema,
    toAddress: {
      type: 'string',
      nullable: true,
    },
    gasCostUSD: {
      type: 'string',
      nullable: true,
    },
    containsSwitchChain: {
      type: 'boolean',
      nullable: true,
    },
    containsEncryption: {
      type: 'boolean',
      nullable: true,
    },
    infiniteApproval: {
      type: 'boolean',
      nullable: true,
    },
    steps: StepSchema,
  },
  required: [
    'id',
    'fromChainId',
    'fromAmountUSD',
    'fromAmount',
    'fromToken',
    'toChainId',
    'toAmountUSD',
    'toAmount',
    'toAmountMin',
    'toToken',
    'steps',
  ],
  additionalProperties: false,
}
export const RoutesResponseSchema: JSONSchemaType<RoutesResponse> = {
  type: 'object',
  properties: {
    routes: {
      type: 'array',
      items: RouteSchema,
    },
  },
  required: ['routes'],
  additionalProperties: false,
}
export const PossibilitiesRequestSchema: JSONSchemaType<PossibilitiesRequest> =
  {
    type: 'object',
    properties: {
      chains: {
        type: 'array',
        nullable: true,
        items: {
          type: 'number',
        },
      },
      bridges: {
        ...BridgesOrExchangesSchema,
        nullable: true,
      },
      exchanges: {
        ...BridgesOrExchangesSchema,
        nullable: true,
      },
    },
    additionalProperties: false,
  }
export const PossibilitiesResponseSchema: JSONSchemaType<PossibilitiesResponse> =
  {
    type: 'object',
    properties: {
      chains: {
        type: 'array',
        items: ChainSchema,
      },
      tokens: {
        type: 'array',
        items: TokenSchema,
      },
    },
    required: ['chains', 'tokens'],
    additionalProperties: false,
  }
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const StepTransactionResponseSchema: JSONSchemaType<StepTransactionResponse> =
  {
    type: 'object',
    properties: {
      tx: {},
    },
    required: ['tx'],
    additionalProperties: false,
  }
