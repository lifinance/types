import { ChainKey, CoinKey } from '../base'

export enum ChainType {
  EVM = 'EVM',
  // Solana virtual machine
  SVM = 'SVM',
}

export interface _Chain {
  key: ChainKey
  chainType: ChainType
  name: string
  coin: CoinKey
  id: number
  mainnet: boolean
  logoURI?: string
  // faucetUrls is DEPRECATED - will be removed in the next breaking release
  faucetUrls?: string[]
}
