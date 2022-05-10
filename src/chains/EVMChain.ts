import { BigNumber } from 'ethers'
import { Chain } from './Chain'

export interface EVMChain extends Chain {
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
