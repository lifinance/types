import { JSONSchemaType } from 'ajv'
import { ChainId, ChainKey, Coin, CoinKey, Token } from '../types'

export const CoinKeySchema: JSONSchemaType<CoinKey> = {
  type: 'string',
  enum: [
    'ETH',
    'MATIC',
    'BNB',
    'DAI',
    'FTM',
    'OKT',
    'AVAX',
    'HT',
    'ONE',
    'FSN',
    'MOVR',
    'USDT',
    'USDC',
    'TEST',
    'WBTC',
    'WETH',
    'SUSHI',
  ],
}
export const ChainKeySchema: JSONSchemaType<ChainKey> = {
  type: 'string',
  enum: [
    'eth',
    'pol',
    'bsc',
    'dai',
    'okt',
    'ftm',
    'ava',
    'arb',
    'hec',
    'opt',
    'one',
    'fsn',
    'mor',
    'rop',
    'rin',
    'gor',
    'kov',
    'mum',
    'arbt',
    'optt',
    'bsct',
    'hect',
    'onet',
  ],
}
export const ChainIdSchema: JSONSchemaType<ChainId> = {
  type: 'number',
  enum: [
    /*ETH*/ 1, /*POL*/ 137, /*BSC*/ 56, /*DAI*/ 100, /*OKT*/ 66, /*FTM*/ 250,
    /*AVA*/ 43114, /*ARB*/ 42161, /*HEC*/ 128, /*OPT*/ 10, /*ONE*/ 1666600000,
    /*FSN*/ 32659, /*MOR*/ 1285, /*ROP*/ 3, /*RIN*/ 4, /*GOR*/ 5, /*KOV*/ 42,
    /*MUM*/ 80001, /*ARBT*/ 421611, /*OPTT*/ 69, /*BSCT*/ 97, /*HECT*/ 256,
    /*ONET*/ 1666700000,
  ],
}
export const TokenSchema: JSONSchemaType<Token> = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
    },
    symbol: {
      type: 'string',
    },
    decimals: {
      type: 'number',
    },
    chainId: {
      type: 'number',
    },
    name: {
      type: 'string',
    },
    chainKey: ChainKeySchema,
    key: CoinKeySchema,
    priceUSD: {
      type: 'string',
      nullable: true,
    },
    logoURI: {
      type: 'string',
    },
  },
  required: [
    'id',
    'symbol',
    'decimals',
    'chainId',
    'name',
    'chainKey',
    'key',
    'logoURI',
  ],
  additionalProperties: false,
}
export const CoinSchema: JSONSchemaType<Coin> = {
  type: 'object',
  properties: {
    key: CoinKeySchema,
    name: {
      type: 'string',
    },
    logoURI: {
      type: 'string',
    },
    verified: {
      type: 'boolean',
    },
    chains: {
      type: 'object',
      additionalProperties: true,
    },
  },
  required: ['key', 'name', 'logoURI', 'verified', 'chains'],
  additionalProperties: false,
}
