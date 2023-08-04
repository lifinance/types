import { BaseToken } from './base'

/**
 * @deprecated
 * These values are now obtainable from the LI.FI API
 */
export enum BridgeTool {
  connext = 'connext',
  hop = 'hop',
  multichain = 'multichain',
  cbridge = 'cbridge',
  hyphen = 'hyphen',
  polygon = 'polygon',
  arbitrum = 'arbitrum',
  avalanche = 'avalanche',
  optimism = 'optimism',
  across = 'across',
  portal = 'portal',
  stargate = 'stargate',
}

export interface Bridge {
  key: BridgeTool
  name: string
  logoURI: string
  bridgeUrl?: string
  discordUrl?: string
  supportUrl?: string
  docsUrl?: string
  explorerUrl?: string
  analyticsUrl?: string
}

/**
 * Should not be accessed via the types package anymore
 * @deprecated
 */
export interface BridgeDefinition {
  tool: BridgeTool
  fromChainId: number
  fromToken: BaseToken
  toChainId: number
  toToken: BaseToken
  maximumTransfer: string
  minimumTransfer: string
  swapFeeRate: string
  swapFeeMinimum: string
  swapFeeMaximum: string
}
