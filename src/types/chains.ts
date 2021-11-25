import { ChainKey, CoinKey } from './base'

export interface Chain {
  key: ChainKey
  name: string
  coin: CoinKey
  id: number
  visible: boolean
  tokenlistUrl?: string
  faucetUrls?: string[]
  metamask: AddEthereumChainParameter
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
