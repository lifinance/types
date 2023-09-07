import type { BaseToken } from './tokens/token.js'

export interface Bridge {
  key: string
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
  tool: string
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
