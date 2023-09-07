import type { StaticToken } from './tokens/token.js'

export interface ExchangeAggregator {
  key: string
  name: string
  logoURI: string
  webUrl: string
}

export interface Exchange {
  key: string
  name: string
  chainId: number
  logoURI: string
  webUrl: string
  graph?: string
  tokenlistUrl: string
  routerAddress: string
  factoryAddress: string
  initCodeHash: string
  baseTokens: readonly StaticToken[]
}

export interface ExchangeDefinition {
  tool: string
  chains: number[]
}
