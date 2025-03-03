import type { _Chain } from './Chain.js'

export interface EVMChain extends _Chain {
  /**
   * @deprecated tokenlistUrl is deprecated and will be removed in the next breaking release
   */
  tokenlistUrl?: string
  metamask: AddEthereumChainParameter
  multicallAddress?: string
  relayerSupported?: boolean
}

export interface AddEthereumChainParameter {
  chainId: string
  blockExplorerUrls: string[]
  chainName: string
  nativeCurrency: {
    name: string
    symbol: string
    decimals: number
  }
  rpcUrls: string[]
}

// This type alias is required to avoid breaking
// changes with the new non EVM support types release
// This will be removed in the future in favour of _Chain
export type Chain = EVMChain
