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
  chainIds?: (string | number)[]
  offset?: string
  limit?: number
  extended?: boolean
}

/**
 * Basic wallet token following EIP structure
 */
export interface WalletToken {
  address: string
  symbol?: string
  decimals: number
  amount: number
}

/**
 * Extended wallet token with pricing and metadata information
 */
export interface WalletTokenExtended extends WalletToken {
  priceUSD?: number
  marketCapUSD?: number | null
  volumeUSD24H?: number | null
  fdvUSD?: number | null
  logoURI?: string
  name?: string
}

/**
 * Wallet balance response following EIP structure
 * Balances are grouped by chainId as numeric keys
 *
 * @example
 * ```json
 * {
 *   "walletAddress": "0x742d35Cc6466C7b9d5b52b8e5d8bD9D9F4B12345",
 *   "balances": {
 *     "1": [
 *       {
 *         "address": "0x4200000000000000000000000000000000000006",
 *         "symbol": "WETH",
 *         "decimals": 18,
 *         "amount": 100000000000000
 *       },
 *       {
 *         "address": "0x0000000000000000000000000000000000000000",
 *         "symbol": "ETH",
 *         "decimals": 18,
 *         "amount": 1
 *       }
 *     ],
 *     "137": [
 *       // Polygon tokens...
 *     ]
 *   }
 * }
 * ```
 */
export interface GetWalletBalanceResponse {
  walletAddress: string
  balances: {
    [chainId: number]: WalletToken[]
  }
  offset?: string
  limit?: number
}

/**
 * Extended wallet balance response with enhanced token information
 * Includes pricing data, market cap, volume, and other metadata
 */
export interface GetWalletBalanceExtendedResponse {
  walletAddress: string
  balances: {
    [chainId: number]: WalletTokenExtended[]
  }
  offset?: string
  limit?: number
}
