/**
 * Route-wide slippage: the public contract of the opt-in `slippageScope: 'route'`.
 *
 * With step scope (the default, and today's behaviour) `slippage` seeds every
 * step's local tolerance and the route's `toAmountMin` is the per-step fold, so
 * two 2.5 % legs compound to a 4.94 % worst case. With route scope `slippage`
 * is the total budget `S` for the whole route and the route promises one floor
 * `M = ceil(Q0 × (1 − S))` on the expected net final output `Q0`. Every build,
 * rebuild, retry and resume enforces at least `M`; lowering it needs a new
 * quote the user approves.
 */

/**
 * Scope of the `slippage` request parameter.
 *
 * - `'step'` (and an omitted scope): existing behaviour, per-step slippage.
 *   Omitted and explicit `'step'` are identical.
 * - `'route'`: opt-in route-wide protection. Requires an explicit `slippage`
 *   in `[0, 1)` with at most 8 decimals; there is no default. Exact-input
 *   `/quote` and `/advanced/routes` only; other surfaces reject `'route'`
 *   instead of silently downgrading to step scope.
 */
export const SlippageScopes = ['step', 'route'] as const
export type SlippageScope = (typeof SlippageScopes)[number]

/**
 * Canonical decimal proportion string for the route budget `S`: `'0'`, or
 * `'0.'` followed by 1–8 digits with no trailing zero (e.g. `'0.025'` for 2.5 %).
 */
export type RouteSlippageDecimal = string

/**
 * How a protected route settles when execution cannot meet `M`:
 * - `'atomic'`: one transaction; delivery below `M` reverts and the user keeps
 *   the input minus gas.
 * - `'conditional'`: cross-chain; the source leg may finalize while the
 *   destination is pending, and a failure yields recovery (refund, bridge
 *   asset), which is reported but is never fulfilment.
 */
export const RouteSlippageSettlements = ['atomic', 'conditional'] as const
export type RouteSlippageSettlement = (typeof RouteSlippageSettlements)[number]

/** A floor enforced at an execution-group boundary, in base units of `tokenAddress`. */
export interface RouteSlippageCheckpoint {
  stepId: string
  chainId: number
  tokenAddress: string
  minimumAmount: string
}

/**
 * The commitment attached to a route admitted with `slippageScope: 'route'`
 * and mirrored onto each participating root step. Round-trip it unchanged to
 * `/v1/advanced/stepTransaction` and through SDK resume; the server validates
 * it and only ever refuses to build below `minimumToAmount`. Absent on
 * step-scope routes.
 */
export interface RouteSlippageCommitment {
  scope: 'route'
  /** `S`, canonical decimal. */
  slippage: RouteSlippageDecimal
  /** `Q0`: expected net final output, integer base units of the terminal token. */
  referenceToAmount: string
  /** `M = ceil(Q0 × (1 − S))`, integer base units of the terminal token. */
  minimumToAmount: string
  toChainId: number
  toTokenAddress: string
  /** Designated recipient the delivery is measured at, when bound. */
  toAddress?: string
  settlement: RouteSlippageSettlement
  checkpoints: RouteSlippageCheckpoint[]
}

/**
 * Machine-readable route-slippage failure reasons, carried as a stable prefix
 * of the error `message` and of a filtered route's `reason`:
 *
 * - `ROUTE_SLIPPAGE_UNSUPPORTED`: the endpoint, path family or tool cannot
 *   enforce a route-wide floor. No fallback to step scope.
 * - `ROUTE_SLIPPAGE_UNAVAILABLE`: route protection is switched off (globally
 *   or for this integrator).
 * - `ROUTE_SLIPPAGE_INVALID_SLIPPAGE`: route scope without an explicit
 *   canonical `slippage` in `[0, 1)`.
 * - `ROUTE_SLIPPAGE_FLOOR_UNREACHABLE`: no quoted flow meets `M`; request a
 *   fresh quote — `M` is never lowered to fit.
 * - `ROUTE_SLIPPAGE_COMMITMENT_INVALID`: a posted step carries a malformed or
 *   inconsistent commitment.
 */
export const RouteSlippageErrorReasons = [
  'ROUTE_SLIPPAGE_UNSUPPORTED',
  'ROUTE_SLIPPAGE_UNAVAILABLE',
  'ROUTE_SLIPPAGE_INVALID_SLIPPAGE',
  'ROUTE_SLIPPAGE_FLOOR_UNREACHABLE',
  'ROUTE_SLIPPAGE_COMMITMENT_INVALID',
] as const
export type RouteSlippageErrorReason =
  (typeof RouteSlippageErrorReasons)[number]
