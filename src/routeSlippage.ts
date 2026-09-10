/**
 * Route-wide slippage protection — public wire contract.
 *
 * A protected route commits to an immutable minimum final delivery:
 *
 * - `referenceToAmount` (Q0): the accepted quote's expected **net** final-token
 *   output in integer base units — after fees, integrator adjustments and
 *   quoted price impact, **before** execution-slippage deductions.
 * - `minimumToAmount` (M): `ceil(Q0 * (1 - S))`, computed with exact
 *   integer/rational arithmetic (see {@link RouteSlippageDecimal}). M never
 *   changes for the lifetime of the protection: re-quotes, retries and rebuilt
 *   transactions retain the original M. Lowering M requires a brand-new,
 *   user-approved quote.
 *
 * Protected fulfillment means verified delivery of at least M base units of
 * the designated final token to the designated recipient. A refund or a
 * recovery in another token is a distinct outcome, never fulfillment.
 *
 * Trust model: every readable field on {@link RouteSlippageProtection} is an
 * informational mirror for display. The authority is the opaque authenticated
 * `protectionToken`; the server re-derives all commitments from it and ignores
 * client-editable mirrors. Clients must round-trip the object unchanged.
 */

/**
 * Scope of the `slippage` request parameter.
 *
 * - `'step'` (and an omitted scope): existing behavior — `slippage` seeds each
 *   step's local `action.slippage`; no route-wide commitment exists. Omitted
 *   and explicit `'step'` are semantically identical.
 * - `'route'`: opt-in route-wide protection. `slippage` becomes the global
 *   tolerance S applied to the whole route's final output; it is **not**
 *   broadcast as each step's local slippage. Requires an explicit finite
 *   `slippage` in `[0, 1)` (zero means no permitted output deterioration —
 *   there is no default). Supported on exact-input quote/routes surfaces only;
 *   unsupported surfaces reject the request instead of silently downgrading
 *   to step scope.
 */
export const SlippageScopes = ['step', 'route'] as const
export type SlippageScope = (typeof SlippageScopes)[number]

/**
 * Supported protection envelope versions. A server only honours versions it
 * can verify; an unknown version is rejected as invalid, never ignored.
 */
export const RouteSlippageProtectionVersions = [1] as const
export type RouteSlippageProtectionVersion =
  (typeof RouteSlippageProtectionVersions)[number]

/** Maximum fractional digits of a canonical route-slippage decimal. */
export const ROUTE_SLIPPAGE_MAX_DECIMALS = 8

/**
 * Canonical decimal grammar for the global tolerance S (and mirrored decimal
 * proportions): `'0'`, or `'0.'` followed by 1–8 digits with no trailing
 * zero. This bounds S to `[0, 1)` by construction and supports fractional
 * basis points (1 bps = `'0.0001'`).
 *
 * Parsing contract: a JSON string must already be canonical. For a JSON
 * number, expand any exponent in its shortest round-trip decimal
 * representation (ECMAScript `ToString`) before checking the grammar.
 * This accepts numeric 1e-8 as '0.00000001' without rounding. Values needing
 * more than {@link ROUTE_SLIPPAGE_MAX_DECIMALS} fractional digits are rejected,
 * never rounded.
 *
 * Arithmetic contract: with `S = s / 10^d` (`d ≤ 8`, `s` the scaled integer),
 * `M = ceil(Q0 * (10^d - s) / 10^d)`, evaluated exactly over integers as
 * `(Q0 * (10^d - s) + 10^d - 1) div 10^d`. No floating-point intermediary is
 * permitted anywhere M is derived or checked.
 */
export const ROUTE_SLIPPAGE_DECIMAL_PATTERN = /^0(?:\.[0-9]{0,7}[1-9])?$/

/**
 * A canonical decimal proportion string, e.g. `'0.05'` for 5%.
 * Must match {@link ROUTE_SLIPPAGE_DECIMAL_PATTERN}.
 */
export type RouteSlippageDecimal = string

/**
 * How the protected route settles when execution cannot meet the commitment:
 *
 * - `'atomic'`: single-chain atomic execution — delivery below M reverts the
 *   whole transaction; the user keeps their input (minus gas).
 * - `'conditional'`: cross-chain conditional settlement — the source leg may
 *   finalize while the destination outcome is pending. Failure yields the
 *   declared recovery behavior (e.g. bridge-asset recovery), which is
 *   reported distinctly and is never protected fulfillment. There is no
 *   universal rollback.
 */
export const RouteSlippageSettlements = ['atomic', 'conditional'] as const
export type RouteSlippageSettlement = (typeof RouteSlippageSettlements)[number]

/**
 * Address-binding state of a protection:
 *
 * - `'discovery'`: issued without sender/recipient addresses (address-less
 *   route discovery). Carries the frozen Q0/M but is **non-executable** — no
 *   signable calldata is produced from it. Binding addresses later yields an
 *   `'executable'` protection with the same M, via the server, never the
 *   client.
 * - `'executable'`: source identity and designated recipient are bound;
 *   transaction construction may proceed after server-side verification.
 */
export const RouteSlippageBindingStates = ['discovery', 'executable'] as const
export type RouteSlippageBindingState =
  (typeof RouteSlippageBindingStates)[number]

interface RouteSlippageProtectionBase {
  /** Server-issued unique id of this protection. */
  protectionId: string
  /** Envelope version the server issued (and will verify). */
  version: RouteSlippageProtectionVersion
  /** Acknowledgement discriminant: this route was admitted with route scope. */
  scope: 'route'
  /** The global tolerance S the commitment was computed with. Canonical decimal. */
  slippage: RouteSlippageDecimal
  /** Q0 — expected net final-token output (integer base units), before execution haircuts. */
  referenceToAmount: string
  /** M = ceil(Q0 * (1 - S)) — immutable minimum delivery (integer base units). */
  minimumToAmount: string

  /** Bound source input. */
  fromChainId: number
  fromTokenAddress: string
  fromAmount: string

  /** Bound final asset. */
  toChainId: number
  toTokenAddress: string

  /** Bound route/step membership: the route and its participating root steps. */
  routeId: string
  stepIds: string[]

  /** Declared settlement/failure semantics of the selected execution path. */
  settlement: RouteSlippageSettlement

  /**
   * Unix seconds after which this quote is no longer admissible for starting
   * an execution. Admission expiry is distinct from an already-initiated
   * execution's protection lifetime: an expired quote may prevent a new
   * source transaction, but it never erases M on an in-flight route.
   */
  quoteExpiresAt: number

  /**
   * Opaque authenticated envelope carrying the commitment. The only
   * authoritative representation — servers verify it and ignore the readable
   * mirrors above. Round-trip verbatim; any modification invalidates it.
   */
  protectionToken: string
}

/** Address-unbound discovery protection: informational, non-executable. */
export interface RouteSlippageProtectionDiscovery extends RouteSlippageProtectionBase {
  binding: 'discovery'
}

/** Executable protection: sender and designated recipient are bound. */
export interface RouteSlippageProtectionExecutable extends RouteSlippageProtectionBase {
  binding: 'executable'
  /** Bound source identity. */
  fromAddress: string
  /** Designated recipient of the final token — the delivery M is measured at. */
  toAddress: string
}

/**
 * Public protection acknowledgement and carrier, attached to a protected
 * `Route` and to each participating root `LiFiStep`. A route-scope response
 * without this object (or with mismatched metadata) must be rejected by
 * clients — never silently executed as a legacy quote.
 */
export type RouteSlippageProtection =
  | RouteSlippageProtectionDiscovery
  | RouteSlippageProtectionExecutable

/**
 * Machine-readable route-slippage failure reasons, carried through the
 * existing error conventions (error `message`/filtered-route `reason`
 * prefixes) alongside the established numeric `ErrorCode`s.
 *
 * - `ROUTE_SLIPPAGE_UNSUPPORTED`: the endpoint, execution path or tool cannot
 *   provide route-wide protection. No fallback to step scope.
 * - `ROUTE_SLIPPAGE_UNAVAILABLE`: protection admission is disabled (globally
 *   or for this integration); never retry automatically without route scope.
 * - `ROUTE_SLIPPAGE_INVALID_SLIPPAGE`: route scope without an explicit finite
 *   canonical `slippage` in `[0, 1)` (see {@link ROUTE_SLIPPAGE_DECIMAL_PATTERN}).
 * - `ROUTE_SLIPPAGE_QUOTE_EXPIRED`: quote admission window elapsed before
 *   execution started; request a fresh quote (in-flight executions keep M).
 * - `ROUTE_SLIPPAGE_COMMITMENT_INVALID`: missing, malformed, unsupported
 *   version, or failed authentication of the protection token.
 * - `ROUTE_SLIPPAGE_BINDING_MISMATCH`: request input/recipient/route/economics
 *   differ from the commitment's bindings; re-authorization required.
 * - `ROUTE_SLIPPAGE_NOT_EXECUTABLE`: a discovery-bound protection was used
 *   where an executable commitment is required.
 * - `ROUTE_SLIPPAGE_FLOOR_UNREACHABLE`: no execution plan satisfies M (e.g.
 *   refreshed market conditions); M is never lowered to fit.
 */
export const RouteSlippageErrorReasons = [
  'ROUTE_SLIPPAGE_UNSUPPORTED',
  'ROUTE_SLIPPAGE_UNAVAILABLE',
  'ROUTE_SLIPPAGE_INVALID_SLIPPAGE',
  'ROUTE_SLIPPAGE_QUOTE_EXPIRED',
  'ROUTE_SLIPPAGE_COMMITMENT_INVALID',
  'ROUTE_SLIPPAGE_BINDING_MISMATCH',
  'ROUTE_SLIPPAGE_NOT_EXECUTABLE',
  'ROUTE_SLIPPAGE_FLOOR_UNREACHABLE',
] as const
export type RouteSlippageErrorReason =
  (typeof RouteSlippageErrorReasons)[number]

/**
 * Settlement outcome of a protection, reported by status endpoints
 * orthogonally to the legacy transfer status. `FULFILLED` requires verified
 * delivery of at least `minimumToAmount` of the designated final token to the
 * designated recipient — source success, provider success or a bridge label
 * alone never suffices.
 */
export const RouteSlippageProtectionOutcomes = [
  'PENDING',
  'FULFILLED',
  'NOT_FULFILLED',
] as const
export type RouteSlippageProtectionOutcome =
  (typeof RouteSlippageProtectionOutcomes)[number]

/**
 * Recovery/refund delivered when protected fulfillment failed — reported
 * separately because another token or amount is never fulfillment of the
 * promised output.
 */
export interface RouteSlippageRecoveryInfo {
  chainId: number
  tokenAddress: string
  amount: string
  txHash?: string
}

/** Protection settlement report attached to full status responses. */
export type RouteSlippageProtectionStatus = {
  protectionId: string
  version: RouteSlippageProtectionVersion
  minimumToAmount: string
} & (
  | { outcome: 'PENDING' }
  | {
      outcome: 'FULFILLED'
      /** Verified final-token delivery to the designated recipient, at least M. */
      deliveredAmount: string
    }
  | {
      outcome: 'NOT_FULFILLED'
      deliveredAmount?: string
      recovery?: RouteSlippageRecoveryInfo
    }
)
