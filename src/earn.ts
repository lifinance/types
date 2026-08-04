/**
 * Types for the LI.FI Earn Data API (`earn.li.fi`).
 *
 * Derived from the live API rather than from `earn-openapi.yaml`, which
 * disagrees with the service in several places — each noted inline. Verified
 * against 710 vaults across 19 chains and 27 protocols (Aug 2026).
 */

/**
 * Protocol a vault belongs to.
 *
 * `id` is the filter key for `?protocol=`. Ids are read from
 * `GET /v1/protocols` and never assumed: most are unversioned (`morpho`, not
 * `morpho-v1`), but `spark-v2` is not, and the convention has changed twice.
 * Filtering on an id that no longer exists returns `200` with zero results
 * rather than an error, so a stale value is indistinguishable from an empty
 * result set.
 */
export interface EarnProtocol {
  id?: string
  name: string
  url: string
}

/** A token the vault holds. */
export interface EarnUnderlyingToken {
  symbol: string
  address: string
  decimals: number
  /** Decimal string, present on every token observed live. */
  priceUsd?: string
  /** Documented for multi-asset vaults, but not currently emitted. */
  weight?: number
}

/**
 * An incentive token the vault distributes.
 *
 * `symbol` and `decimals` are marked required in the OpenAPI spec but are
 * absent on some entries, so both are optional here.
 */
export interface EarnRewardToken {
  address: string
  symbol?: string
  decimals?: number
  priceUsd?: string
}

/**
 * Deposit or redeem route metadata.
 *
 * Originally Composer zap-pack metadata. The zap-pack endpoints were
 * decommissioned in Jun 2026, but the field still populates on vaults.
 */
export interface EarnPack {
  name: string
  stepsType: string
}

/**
 * APY breakdown. **All values are percentages** — `4.63` means 4.63%.
 *
 * The OpenAPI spec, the quickstart and the how-it-works page all describe
 * these as decimals, and the quickstart multiplies by 100. They are wrong:
 * doing so overstates every yield by 100x. Values above 1 are common, and
 * a normaliser keyed on "below 1 means decimal" would misread the 161 vaults
 * that legitimately yield under 1%.
 *
 * `reward` is three-valued and the distinction is load-bearing:
 * - `null` — the protocol reported nothing. Unknown, not zero.
 * - `0` — the protocol reported that there are no incentives.
 * - `> 0` — incentives, as a percentage.
 *
 * The split varies *within* a protocol, so it cannot be inferred from
 * `protocol.id`. Coercing `null` to `0` destroys the only signal that
 * separates organic yield from an emission that can end.
 */
export interface EarnApy {
  base: number | null
  total: number
  reward: number | null
}

/**
 * Total value locked.
 *
 * `usd` is a **number**. The OpenAPI spec declares it a string, and it was one
 * before the Apr 2026 rewrite. Typed as a union so a flip in either direction
 * is not a breaking change for consumers.
 */
export interface EarnTvl {
  usd: number | string
  native?: number | string
}

/**
 * Vault analytics.
 *
 * `updatedAt` is documented as refreshing every 15 minutes. Observed floor is
 * 87 minutes, median 90, so treat it as a coarse staleness signal rather than
 * a freshness guarantee.
 */
export interface EarnAnalytics {
  apy: EarnApy
  tvl: EarnTvl
  apy1d: number | null
  apy7d: number | null
  apy30d: number | null
  updatedAt: string
}

/** One reason contributing to a vault's verification status. */
export interface EarnVerificationBreakdown {
  /** e.g. `zero_apy`, `apy_outlier`. */
  reason: string
  /** e.g. `flagged`, `passed`. */
  result: string
}

/** Deposit capacity limits. Documented in the spec; not currently emitted. */
export interface EarnCaps {
  totalCap?: number | string
  maxCap?: number | string
}

/**
 * A yield vault indexed by LI.FI Earn.
 *
 * `caps`, `timeLock` and `kyc` are documented in `earn-openapi.yaml` but are
 * sent by zero vaults; they are optional here so code written against the spec
 * still compiles, but they should not be relied on.
 *
 * Note also that `isTransactional` describes intent, not capability: the Earn
 * index is a superset of what Composer can route, so a vault can carry
 * `isTransactional: true` and still have no routing edge to enter it.
 */
export interface EarnVault {
  address: string
  chainId: number
  name: string
  slug: string
  network: string
  /** Present on roughly 23% of vaults. */
  description?: string
  protocol: EarnProtocol
  syncedAt: string
  /** Observed values include `single`, `multi`, `stablecoin`, `il-risk`. */
  tags: string[]
  underlyingTokens: EarnUnderlyingToken[]
  /** Absent rather than empty when the vault emits no rewards. */
  rewardTokens?: EarnRewardToken[]
  analytics: EarnAnalytics
  isTransactional: boolean
  isRedeemable: boolean
  depositPacks: EarnPack[]
  redeemPacks: EarnPack[]
  /**
   * Vault quality signal — undocumented, but present on every vault and set to
   * `flagged` on roughly 9% of them.
   */
  verificationStatus?: string
  verificationStatusBreakdown?: EarnVerificationBreakdown[]
  /** Documented but never emitted. */
  caps?: EarnCaps
  /** Documented but never emitted. */
  timeLock?: number
  /** Documented but never emitted. */
  kyc?: boolean
}

/**
 * A page of vaults.
 *
 * `nextCursor` is **absent from the JSON** on the final page — not null, not an
 * empty string — so it must be both optional and nullable. Callers should treat
 * missing and null identically when paginating.
 */
export interface EarnVaultListResponse {
  data: EarnVault[]
  nextCursor?: string | null
  total: number
}

/** A chain with at least one indexed vault. Returned as a bare array. */
export interface EarnChain {
  chainId: number
  name: string
  networkCaip: string
}

/** A single position in a wallet's Earn portfolio. */
export interface EarnPosition {
  chainId: number
  /** The vault contract. */
  address?: string
  protocolName: string | null
  asset: {
    address: string
    name: string
    symbol: string
    decimals: number
  }
  balanceUsd: string | null
  balanceNative: string | null
}

/**
 * A wallet's Earn positions.
 *
 * The array was renamed `positions` → `data` in Aug 2026 with no changelog
 * entry. Both are declared so consumers can migrate without a breaking change.
 */
export interface EarnPortfolioResponse {
  data?: EarnPosition[]
  /** @deprecated Renamed to `data` in Aug 2026. */
  positions?: EarnPosition[]
  limit?: number
}

/**
 * Field-level validation failure.
 *
 * Only `400` responses carry these. `404` returns a bare
 * `{ statusCode, message }` despite the changelog announcing structured 404s.
 */
export interface EarnApiFieldError {
  code: string
  message: string
  path: (string | number)[]
}
