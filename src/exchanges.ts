import { StaticToken } from '.'

/**
 * @deprecated
 * These values are now obtainable from the LI.FI API
 */
export enum ExchangeTool {
  oneinch = '1inch',
  paraswap = 'paraswap',
  openocean = 'openocean',
  zerox = '0x',
  dodo = 'dodo',
}

/**
 * @deprecated
 * These values are now obtainable from the LI.FI API
 */
export type ExchangeTools = ExchangeTool | string

export interface ExchangeAggregator {
  key: ExchangeTool
  name: string
  logoURI: string
  webUrl: string
}

export interface Exchange {
  key: ExchangeTools
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
  tool: ExchangeTools
  chains: number[]
}
