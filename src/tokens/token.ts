import type { ChainId } from '../chains/base.js'
import type { CoinKey } from './base.js'

export interface BaseToken {
  chainId: ChainId
  address: string
}

export interface StaticToken extends BaseToken {
  symbol: string
  decimals: number
  name: string
  coinKey?: CoinKey
  logoURI?: string
}

export interface Token extends StaticToken {
  priceUSD: string
}

export interface TokenExtended extends Token {
  marketCapUSD?: number | null
  volumeUSD24H?: number | null
  fdvUSD?: number | null
}

export interface TokenAmount extends Token {
  amount?: bigint
  blockNumber?: bigint
}

export interface Coin {
  key: CoinKey
  name: string
  logoURI: string
  verified: boolean
  chains: {
    [ChainId: string]: StaticToken
  }
}
