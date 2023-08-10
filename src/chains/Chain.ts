import { CoinKey } from '../tokens/base'
import { ChainKey } from './base'

export enum ChainType {
  EVM = 'EVM',
  Solana = 'SOLANA',
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
