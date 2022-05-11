import { ChainKey, CoinKey } from '../base'

export interface _Chain {
  key: ChainKey
  name: string
  coin: CoinKey
  id: number
  mainnet: boolean
  logoURI?: string
  // faucetUrls is DEPRECATED - will be removed in the next breaking release
  faucetUrls?: string[]
}
