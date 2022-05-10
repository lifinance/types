import { ChainKey, CoinKey } from '../base'

export interface Chain {
  key: ChainKey
  name: string
  coin: CoinKey
  id: number
  mainnet: boolean
  logoURI?: string
  faucetUrls?: string[]
}
