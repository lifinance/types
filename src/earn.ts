/**
 * JSON response types for the LI.FI Earn Data API (`earn.li.fi/v1`).
 *
 * These describe the current response contract, not historical response shapes
 * or guarantees inferred from a sample of vaults. Timestamps are serialized
 * strings, and token metadata can be absent until it has been resolved.
 */

/** A protocol returned by the API. Use its id when filtering vaults. */
export interface EarnProtocol {
  id: string
  name: string
  url: string
  logoUri?: string
}

/** A vault token reference. Only its address is guaranteed to be available. */
export interface EarnToken {
  address: string
  symbol?: string
  decimals?: number
  /** Token price in USD, represented as a decimal string. */
  priceUsd?: string
}

/** An underlying asset held by a vault. */
export type EarnUnderlyingToken = EarnToken

/** An incentive token distributed by a vault. */
export type EarnRewardToken = EarnToken

/** A vault's deposit or redeem route metadata. */
export interface EarnPack {
  name: string
  stepsType: 'instant' | 'complex'
}

/**
 * APY values in percentage points: `5.34` means 5.34%, not 534%.
 * A null component is unavailable; callers should not conflate it with zero.
 */
export interface EarnApy {
  base: number | null
  total: number
  reward: number | null
}

/** Total value locked: USD is a JSON number, native units a decimal string. */
export interface EarnTvl {
  usd: number
  native?: string
}

export interface EarnAnalytics {
  apy: EarnApy
  tvl: EarnTvl
  apy1d: number | null
  apy7d: number | null
  apy30d: number
  /** ISO timestamp of the analytics observation, not a freshness guarantee. */
  updatedAt: string
}

/** Rule-based screening output, not a security audit or safety guarantee. */
export type EarnVerificationStatus = 'none' | 'flagged'

export type EarnVerificationReason =
  | 'none'
  | 'zero_apy'
  | 'apy_outlier'
  | 'stale_data'

export interface EarnVerificationBreakdown {
  reason: EarnVerificationReason
  result: EarnVerificationStatus
}

/** Optional deposit capacity limits, represented as decimal strings. */
export interface EarnCaps {
  totalCap?: string
  maxCap?: string
}

/** A vault indexed by LI.FI Earn. */
export interface EarnVault {
  address: string
  chainId: number
  name: string
  slug: string
  network: string
  description?: string
  protocol: EarnProtocol
  /** ISO timestamp of the vault's sync. */
  syncedAt: string
  tags: string[]
  underlyingTokens?: EarnUnderlyingToken[]
  lpTokens?: EarnToken[]
  rewardTokens?: EarnRewardToken[]
  analytics: EarnAnalytics
  /** Capability metadata; a successful executable quote is still required. */
  isTransactional: boolean
  isRedeemable: boolean
  depositPacks: EarnPack[]
  redeemPacks: EarnPack[]
  verificationStatus: EarnVerificationStatus
  verificationStatusBreakdown: EarnVerificationBreakdown[]
  caps?: EarnCaps
  timeLock?: number
  kyc?: boolean
}

/** A page from GET /v1/vaults. */
export interface EarnVaultListResponse {
  data: EarnVault[]
  /** Omitted on the final page. Pass unchanged as the next request's cursor. */
  nextCursor?: string
  total: number
  /** ISO timestamp of the catalog normalization. */
  normalizedAt: string
}

/** GET /v1/chains returns a bare array of these objects. */
export interface EarnChain {
  chainId: number
  name: string
  networkCaip: string
}

/** One position returned by GET /v1/portfolio/{userAddress}/positions. */
export interface EarnPosition {
  chainId: number
  /** The vault contract address, or null when unresolved. */
  address: string | null
  protocolName: string | null
  asset: {
    address: string
    name: string
    symbol: string
    decimals: number
  }
  balanceUsd: string | null
  balanceNative: string
}

/** A page from GET /v1/portfolio/{userAddress}/positions. */
export interface EarnPortfolioResponse {
  data: EarnPosition[]
  /** Omitted on the final page. Continue until no cursor is returned. */
  nextCursor?: string
  limit: number
}

/** One field-level issue in a validation error response's errors array. */
export interface EarnApiFieldError {
  code: string
  message: string
  path: (string | number)[]
}
