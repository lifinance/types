import type { CoinKey } from '../tokens/base.js'
import type { ChainKey } from './base.js'

export enum ChainType {
  EVM = 'EVM',
  // Solana virtual machine
  SVM = 'SVM',
  // Unspent transaction output (e.g. Bitcoin)
  UTXO = 'UTXO',
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
