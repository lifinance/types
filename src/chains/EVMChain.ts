import { BigNumber } from 'ethers'
import { _Chain } from './Chain'

export interface EVMChain extends _Chain {
  // tokenlistUrl is DEPRECATED - will be removed in the next breaking release
  tokenlistUrl?: string
  metamask: AddEthereumChainParameter
  multicallAddress?: string
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

export const prefixChainId = (chainId: number): string => {
  return '0x' + BigNumber.from(chainId)._hex.split('0x')[1].replace(/\b0+/g, '')
}

// This type alias is required to avoid breaking
// changes with the new non EVM support types release
// This will be removed in the future in favour of _Chain
export type Chain = EVMChain
