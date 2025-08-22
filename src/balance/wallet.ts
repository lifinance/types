import type { StaticToken, TokenExtended } from '../tokens/token.js'
import type { ChainId } from '../chains/base.js'

/**
 * Parameters for getting wallet balance
 */
export interface GetWalletBalanceParams {
  walletAddress: string
}

/**
 * Filter options for wallet balance requests
 */
export interface GetWalletBalanceFilter {
  chainIds?: ChainId[]
  offset?: string
  limit?: number
  extended?: boolean
}

/**
 * Basic wallet token following EIP structure
 */
export interface WalletToken extends StaticToken {
  amount: string
}

/**
 * Extended wallet token with pricing and metadata information
 * Reuses TokenExtended but adapts for wallet context
 */
export interface WalletTokenExtended extends TokenExtended {
  amount: string
}

/**
 * Wallet balance response following EIP structure
 * Balances are grouped by chainId as numeric keys
 *
 * @example Basic response
 * ```json
 * {
 *   "walletAddress": "0x742d35Cc6466C7b9d5b52b8e5d8bD9D9F4B12345",
 *   "balances": {
 *     "1": [
 *       {
 *         "address": "0x4200000000000000000000000000000000000006",
 *         "symbol": "WETH",
 *         "decimals": 18,
 *         "amount": "100000000000000"
 *       },
 *       {
 *         "address": "0x0000000000000000000000000000000000000000",
 *         "symbol": "ETH",
 *         "decimals": 18,
 *         "amount": "15965635006674968"
 *       }
 *     ]
 *   }
 * }
 * ```
 *
 * @example Extended response (with pricing data)
 * ```json
 * {
 *   "walletAddress": "0x742d35Cc6466C7b9d5b52b8e5d8bD9D9F4B12345",
 *   "balances": {
 *     "1": [
 *       {
 *         "address": "0x0000000000000000000000000000000000000000",
 *         "symbol": "ETH",
 *         "decimals": 18,
 *         "amount": "15965635006674968",
 *         "name": "ETH",
 *         "priceUSD": "3647.66",
 *         "marketCapUSD": 22112274762505,
 *         "volumeUSD24H": 67057337.09,
 *         "fdvUSD": null,
 *         "logoURI": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png"
 *       }
 *     ]
 *   }
 * }
 * ```
 */
export interface GetWalletBalanceResponse {
  walletAddress: string
  balances: Record<number, WalletToken[]>
  offset?: string
  limit?: number
}

/**
 * Extended wallet balance response with enhanced token information
 * Includes pricing data, market cap, volume, and other metadata
 */
export interface GetWalletBalanceExtendedResponse {
  walletAddress: string
  balances: Record<number, WalletTokenExtended[]>
  offset?: string
  limit?: number
}
