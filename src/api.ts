import type {
  Address,
  Hash,
  Hex,
  TypedDataDomain,
  TypedDataParameter,
} from 'viem'
import type { BridgeDefinition } from './bridges.js'
import type { Chain, ChainId, ChainKey, ChainType } from './chains/index.js'
import type { ExchangeDefinition } from './exchanges.js'
import type {
  Action,
  FeeCost,
  LiFiStep,
  SignedLiFiStep,
  StepToolDetails,
} from './step.js'
import type { Token, TokenExtended, TokenTag } from './tokens/index.js'

/**
 * Used as a bigint replacement for TransactionRequest because bigint is not serializable
 */
export type BigIntish = string

/**
 * Pagination options for the API
 */
export interface PaginationQuery {
  limit?: number
  next?: string
  previous?: string
}

/**
 * API response for paginated requests
 */
export interface PaginatedResponse<T> {
  hasNext?: boolean
  hasPrevious?: boolean
  next?: string
  previous?: string
  total?: number
  data: T[]
}

export type TransactionRequest = {
  to?: string
  from?: string
  nonce?: number

  gasLimit?: BigIntish
  gasPrice?: BigIntish

  data?: string
  value?: BigIntish
  chainId?: number

  type?: number
  accessList?: { address: string; storageKeys: string[] }[]

  maxPriorityFeePerGas?: BigIntish
  maxFeePerGas?: BigIntish

  customData?: Record<string, any>
  ccipReadEnabled?: boolean
}

/**
 * Timing options
 */
export interface TimingStrategyMinWaitTime {
  strategy: 'minWaitTime'
  minWaitTimeMs: number
  startingExpectedResults: number
  reduceEveryMs: number
}

export type TimingStrategyMinWaitTimeString =
  `minWaitTime-${number}-${number}-${number}`

export type TimingStrategy = TimingStrategyMinWaitTime
export type TimingStrategyString = TimingStrategyMinWaitTimeString

export interface Timing {
  swapStepTimingStrategies?: TimingStrategy[]
  routeTimingStrategies?: TimingStrategy[]
}

export interface TimingStrings {
  swapStepTimingStrategies?: TimingStrategyString[]
  routeTimingStrategies?: TimingStrategyString[]
}

/**
 * RECOMMENDED and SAFEST are deprecated as of 28.06.24
 * https://lifi.atlassian.net/browse/LF-8826
 */
export const Orders = ['RECOMMENDED', 'FASTEST', 'CHEAPEST', 'SAFEST'] as const
export type Order = (typeof Orders)[number]

export interface RoutesRequest {
  fromChainId: number
  fromAmount: string

  fromTokenAddress: string
  fromAddress?: string

  toChainId: number
  toTokenAddress: string
  toAddress?: string

  options?: RouteOptions
  fromAmountForGas?: string
}

export interface RouteOptionsBase {
  /** 0.03 = take 3% integrator fee (requires verified integrator to be set) */
  fee?: number

  /** Hide routes with price impact greater than or equal to this value */
  maxPriceImpact?: number

  /** (default: CHEAPEST) 'FASTEST' | 'CHEAPEST' */
  order?: Order

  /** (default: 0.03) Expressed as decimal proportion, 0.03 represents 3% */
  slippage?: number

  /** (default: false) Whether chain switches should be allowed in the routes */
  allowSwitchChain?: boolean

  /** (default: true) destination calls are enabled by default */
  allowDestinationCall?: boolean

  /** Bridges that should or should not be taken into consideration for the possibilities */
  bridges?: AllowDenyPrefer

  /** Exchanges that should or should not be taken into consideration for the possibilities */
  exchanges?: AllowDenyPrefer

  /** Protocols that should or should not be taken into consideration for the possibilities */
  protocols?: AllowDenyPrefer

  /** Timing strategies for the routes */
  timing?: Timing

  /** Whether to include routes that require a transaction or a message, or both
   * @default 'transaction' */
  executionType?: ExecutionType
}

export interface RouteOptions extends RouteOptionsBase {
  /** Should contain the identifier of the integrator. Usually, it's dApp/company name. */
  integrator?: string

  /** Integrators can set a wallet address as a referrer to track them */
  referrer?: string

  /** Solana specific option, without it implicit source swaps routes are discarded */
  jitoBundle?: boolean

  /** Solana specific option, wallet to sponsor tx costs */
  svmSponsor?: string

  /** Mayan specific option to bridge from non-EVM chain to Hyperliquid */
  mayanNonEvmPermitSignature?: boolean

  /** Preset configuration for stablecoin routing optimization.
   * When provided, this preset will override other route options with optimized settings */
  preset?: string

  /** Whether the user wants to insure their tx
   * @deprecated This property is deprecated and will be removed in future versions. */
  insurance?: boolean
}

export const ExecutionTypes = ['transaction', 'message', 'all'] as const
export type ExecutionType = (typeof ExecutionTypes)[number]

export type ToolsResponse = {
  exchanges: {
    key: string
    name: string
    logoURI: string
    supportedChains: ChainId[]
  }[]
  bridges: {
    key: string
    name: string
    logoURI: string
    supportedChains: {
      fromChainId: ChainId
      toChainId: ChainId
    }[]
  }[]
}

export interface AllowDenyPrefer {
  allow?: string[] // (default: [all])
  deny?: string[] // (default: [])
  prefer?: string[] // (default: []) // eg. ['1inch'] to use 1inch if available and fall back to others if not
}

/**
 * @deprecated _InsuranceState is deprecated and will be removed in future versions.
 */
export const _InsuranceState = [
  'INSURED',
  'INSURABLE',
  'NOT_INSURABLE',
] as const
/**
 * @deprecated InsuranceState is deprecated and will be removed in future versions.
 */
export type InsuranceState = (typeof _InsuranceState)[number]

/**
 * @deprecated InsuranceState is deprecated and will be removed in future versions.
 */
export interface Insurance {
  state: InsuranceState
  feeAmountUsd: string
}
export interface Route {
  id: string
  insurance: Insurance
  fromChainId: number
  fromAmountUSD: string
  fromAmount: string
  fromToken: Token
  fromAddress?: string

  toChainId: number
  toAmountUSD: string
  toAmount: string
  toAmountMin: string
  toToken: Token
  toAddress?: string

  gasCostUSD?: string // Aggregation of underlying gas costs in usd

  containsSwitchChain?: boolean // Features required for route execution

  steps: LiFiStep[]

  tags?: Order[]
}

export type ToolErrorType = 'NO_QUOTE'

export interface ToolError {
  errorType: ToolErrorType
  code: string
  action: Action
  tool: string
  message: string
}

export type ErroredPaths = { [subpath: string]: ToolError[] }

export type ErroredRoute = {
  overallPath: string
  subpaths: ErroredPaths
}

export type FilteredResult = {
  overallPath: string
  reason: string
}

export type UnavailableRoutes = {
  filteredOut: FilteredResult[]
  failed: ErroredRoute[]
}

export interface RoutesResponse {
  routes: Route[]
  unavailableRoutes: UnavailableRoutes
}

export type PossibilityTopic = 'chains' | 'tokens' | 'bridges' | 'exchanges'

/**
 * We don't want to support this endpoint anymore in the future. /chains, /tools, /connections, and /tokens should be used instead
 * @deprecated
 */
export interface PossibilitiesRequest {
  chains?: number[] // (default: [all]) // eg. [1, 56, 100]
  bridges?: AllowDenyPrefer
  exchanges?: AllowDenyPrefer
  include?: PossibilityTopic[]
}

/**
 * Should not be accessed via the types package anymore
 * @deprecated
 */
export interface PossibilitiesResponse {
  chains?: Chain[]
  tokens?: Token[]
  bridges?: BridgeDefinition[]
  exchanges?: ExchangeDefinition[]
}

export interface GetTokenRequest {
  chain: number | string
  token: string
}

export enum TokenHistoricGranularity {
  THIRTY_MIN = '30min',
  HOUR = 'hour',
  DAY = 'day',
  OVER_DAY = '>day',
}

export interface GetTokenHistoricRequest {
  chain: number | string
  token: string
  timestamp: number
  granularity?: TokenHistoricGranularity
}

export interface TokenPriceHistoricResponse {
  chainId: number
  tokenAddress: string
  isNativeToken: boolean
  priceUSD: string
  timestamp: number
  granularity: TokenHistoricGranularity
}

export interface ToolConfiguration {
  allowBridges?: string[]
  denyBridges?: string[]
  preferBridges?: string[]
  allowExchanges?: string[]
  denyExchanges?: string[]
  preferExchanges?: string[]
  allowProtocols?: string[]
  denyProtocols?: string[]
}

export interface QuoteRequest extends ToolConfiguration, TimingStrings {
  fromChain: number | string
  fromToken: string
  fromAddress: string
  fromAmount: string

  toChain: number | string
  toToken: string
  toAddress?: string

  order?: Order
  slippage?: number | string
  integrator?: string
  referrer?: string
  fee?: number | string

  /** Whether destination calls are enabled by default
   * @default true */
  allowDestinationCall?: boolean

  /** The amount of token to convert to gas */
  fromAmountForGas?: string

  /** Hide routes with price impact greater than or equal to this value */
  maxPriceImpact?: number

  /** Whether to skip simulation of the quote */
  skipSimulation?: boolean

  /** The execution type of the quote
   * @default 'transaction' */
  executionType?: ExecutionType

  /** Solana specific option, without it implicit source swaps routes are discarded */
  jitoBundle?: boolean

  /** Solana specific option, wallet to sponsor tx costs */
  svmSponsor?: string

  /** Preset configuration for stablecoin routing optimization
   * When provided, this preset will override other route options with optimized settings */
  preset?: string

  /** Indicates whether the user wants a quote with bridge insurance
   * @deprecated This property is deprecated and will be removed in future versions. */
  insurance?: boolean
}

export interface QuoteToAmountRequest
  extends Omit<QuoteRequest, 'fromAmount' | 'fromAmountForGas' | 'insurance'> {
  toAmount: string
}

export interface ContractCall {
  fromAmount: string
  fromTokenAddress: string
  toContractAddress: string
  toContractCallData: string
  toContractGasLimit: string
  toApprovalAddress?: string
  toTokenAddress?: string
}

type PartialContractCallsQuoteRequest = ToolConfiguration & {
  fromChain: number | string
  fromToken: string
  fromAddress: string

  toChain: number | string
  toToken: string

  toFallbackAddress?: string
  contractOutputsToken?: string
  contractCalls: ContractCall[]

  slippage?: number | string
  integrator?: string
  referrer?: string
  fee?: number | string
  allowDestinationCall?: boolean // (default : true) // destination calls are enabled by default
}

export type ContractCallsQuoteRequestToAmount =
  PartialContractCallsQuoteRequest & {
    toAmount: string
  }

export type ContractCallsQuoteRequestFromAmount =
  PartialContractCallsQuoteRequest & {
    fromAmount: string
  }

export type ContractCallsQuoteRequest =
  | ContractCallsQuoteRequestFromAmount
  | ContractCallsQuoteRequestToAmount
export const isContractCallsRequestWithFromAmount = (
  r: ContractCallsQuoteRequestFromAmount | ContractCallsQuoteRequestToAmount
): r is ContractCallsQuoteRequestFromAmount => 'fromAmount' in r

export const isContractCallsRequestWithToAmount = (
  r: ContractCallsQuoteRequestFromAmount | ContractCallsQuoteRequestToAmount
): r is ContractCallsQuoteRequestToAmount => 'toAmount' in r

/* @deprecated */
export interface ContractCallQuoteRequest extends ToolConfiguration {
  fromChain: number | string
  fromToken: string
  fromAddress: string
  toChain: number | string
  toToken: string
  toAmount: string
  toContractAddress: string
  toContractCallData: string
  toContractGasLimit: string
  toApprovalAddress?: string
  toFallbackAddress?: string
  contractOutputsToken?: string
  slippage?: number | string
  integrator?: string
  referrer?: string
  fee?: number | string
  allowDestinationCall?: boolean
}

export interface ConnectionsRequest extends ToolConfiguration {
  fromChain?: number | string
  fromToken?: string
  toChain?: number | string
  toToken?: string
  allowSwitchChain?: boolean // (default: true) the connections that require chain switch (multiple signatures) are included by default
  allowDestinationCall?: boolean // (default: true) the connections that includes destination calls are included by default
  chainTypes?: ChainType[]
}

export interface Connection {
  fromChainId: number
  toChainId: number
  fromTokens: Token[]
  toTokens: Token[]
}

export interface ConnectionsResponse {
  connections: Connection[]
}

export type GetStatusRequest = {
  bridge?: string
  fromChain?: number | string
  toChain?: number | string
} & ({ txHash: string } | { taskId: string })

export interface BaseTransactionInfo {
  txHash: string
  chainId: ChainId
  txLink: string
}

export interface ExtendedTransactionInfo extends BaseTransactionInfo {
  amount?: string
  amountUSD?: string
  token?: Token
  gasPrice: string
  gasUsed: string
  gasToken: Token
  gasAmount: string
  gasAmountUSD: string
  timestamp?: number
  value?: string
  includedSteps?: IncludedStep[]
}

export interface PendingReceivingInfo {
  chainId: ChainId
}

const _StatusMessage = [
  // The transaction was not found -- likely not mined yet
  'NOT_FOUND',
  // A third party service is not available
  'INVALID',
  // The transfer is pending
  'PENDING',
  // The transfer is done
  'DONE',
  // The transfer failed
  'FAILED',
] as const
export type StatusMessage = (typeof _StatusMessage)[number]

const _SubstatusPending = [
  // The bridge is waiting for additional confirmations
  'WAIT_SOURCE_CONFIRMATIONS',
  // The off-chain logic is in progress, waiting for the destination tx to be mined
  'WAIT_DESTINATION_TRANSACTION',
  // The bridge API / subgraph is temporarily unavailable
  'BRIDGE_NOT_AVAILABLE',
  // The RPC for source/destination chain is temporarily unavailable
  'CHAIN_NOT_AVAILABLE',
  // A refund has been requested and is in progress
  'REFUND_IN_PROGRESS',
  // We cannot determine the status of the transfer
  'UNKNOWN_ERROR',
] as const
export type SubstatusPending = (typeof _SubstatusPending)[number]

const _SubstatusDone = [
  // The transfer was successful
  'COMPLETED',
  // The transfer was partially successful
  // This can happen for specific bridges like Across
  // which may provide alternative tokens in case of low liquidity
  'PARTIAL',
  // The transfer was not successful but it has been refunded
  'REFUNDED',
] as const
export type SubstatusDone = (typeof _SubstatusDone)[number]

const _SubstatusFailed = [
  // The amount in the request exceeds the allowance
  'INSUFFICIENT_ALLOWANCE',
  // The token amount is not enough to execute the transfer
  'INSUFFICIENT_BALANCE',
  // The gas limit is lower than tx would consume
  'OUT_OF_GAS',
  // The requested quote is expired and can’t be processed anymore
  'EXPIRED',
  // Slippage conditions were not met
  'SLIPPAGE_EXCEEDED',
  // We cannot determine the cause of the failure
  'UNKNOWN_FAILED_ERROR',
] as const
export type SubstatusFailed = (typeof _SubstatusFailed)[number]

export type Substatus = SubstatusPending | SubstatusDone | SubstatusFailed

export const isSubstatusPending = (
  substatus: Substatus
): substatus is SubstatusPending =>
  _SubstatusPending.includes(substatus as SubstatusPending)
export const isSubstatusDone = (
  substatus: Substatus
): substatus is SubstatusDone =>
  _SubstatusDone.includes(substatus as SubstatusDone)
export const isSubstatusFailed = (
  substatus: Substatus
): substatus is SubstatusFailed =>
  _SubstatusFailed.includes(substatus as SubstatusFailed)

export interface BaseStatusData {
  status: StatusMessage
  substatus?: Substatus
  substatusMessage?: string
}

export interface StatusData extends BaseStatusData {
  tool: string
  sending: BaseTransactionInfo
  receiving: PendingReceivingInfo
}

export interface FailedStatusData extends BaseStatusData {
  status: 'FAILED'
  sending: BaseTransactionInfo
}

export type StatusResponse = FullStatusData | StatusData | FailedStatusData
interface TransferMetadata {
  integrator: string
}

export type IncludedStep = {
  fromAmount: string
  fromToken: Token
  toAmount: string
  toToken: Token
  bridgedAmount?: string
  tool: string
  toolDetails: StepToolDetails
}

export interface FullStatusData extends StatusData {
  transactionId: string
  sending: ExtendedTransactionInfo
  receiving: PendingReceivingInfo | ExtendedTransactionInfo
  feeCosts: FeeCost[]
  lifiExplorerLink: string
  fromAddress: string
  toAddress: string
  metadata: TransferMetadata
  bridgeExplorerLink?: string
}

export interface ExtendedChain extends Chain {
  nativeToken: Token
  diamondAddress?: string
  permit2?: string
  permit2Proxy?: string
}

export interface ChainsResponse {
  chains: ExtendedChain[]
}

export interface ChainsRequest {
  chainTypes?: ChainType[]
}

export interface ToolsRequest {
  chains?: (ChainKey | ChainId)[]
}

export const TokensSortOrders = [
  'marketCapUSD',
  'priceUSD',
  'volumeUSD24H',
  'fdvUSD',
] as const
export type TokensSortOrder = (typeof TokensSortOrders)[number]

export type TokensRequest = {
  chains?: (ChainId | ChainKey)[]
  chainTypes?: ChainType[]
  minPriceUSD?: number
  orderBy?: TokensSortOrder
  limit?: number
  extended?: boolean
  search?: string
  tags?: TokenTag[]
}

export type TokensResponse = {
  tokens: { [chainId: number]: Token[] }
}

export type TokensExtendedResponse = {
  tokens: { [chainId: number]: TokenExtended[] }
}

export type RequestOptions = {
  signal?: AbortSignal
}

export interface Integrator {
  integratorId: string
  feeBalances: FeeBalance[]
}

export type FeeBalance = {
  chainId: ChainId
  tokenBalances: TokenBalance[]
}

export type TokenBalance = {
  token: Token
  amount: string
  amountUsd: string
}

export interface IntegratorWithdrawalRequest {
  integratorId: string
  chainId: ChainId
  tokens?: string[]
}

export interface IntegratorWithdrawalTransactionResponse {
  transactionRequest: TransactionRequest
}

const _LIFuelState = ['PENDING', 'DONE', 'NOT_FOUND'] as const
type LIFuelState = (typeof _LIFuelState)[number]
// Response to the status API for trusted gas
export type LIFuelStatusResponse = {
  status: LIFuelState
  sending?: ExtendedTransactionInfo
  receiving?: PendingReceivingInfo | ExtendedTransactionInfo
}

export type GasRecommendationRequest = {
  chainId: ChainId
  fromChain?: ChainId
  fromToken?: string
}

export type RefetchSourceLIFuelRequest = {
  txHash: string
  chainId: ChainId
}

export type LIFuelStatusRequest = {
  txHash: string
}

export type RefetchLIFuelRequest = {
  txHash: string
  chainId: ChainId
}

export type GasRecommendationResponse = {
  // whether we can support that
  available: boolean
  // reason why the gas feature is not available (e.g. missing liquidity)
  message?: string
  recommended?: TokenBalance
  limit?: TokenBalance // Maximum of gas the user can transfer
  serviceFee?: TokenBalance // LI.FI fee for providing the service

  // information about what the user has to pay to get the recommended gas amount
  fromToken?: Token
  fromAmount?: string
}

export interface TransactionAnalyticsResponse {
  transfers: StatusResponse[]
}

export type TransactionAnalyticsStatus =
  | Exclude<StatusMessage, 'NOT_FOUND' | 'INVALID'>
  | 'ALL'

export interface TransactionAnalyticsRequest {
  wallet: string
  fromTimestamp?: number
  toTimestamp?: number
  status?: TransactionAnalyticsStatus
}

export interface CreateIntegratorRequest {
  name: string
  integratorId: string
  fee?: number
  feeType?: IntegratorFeeType
  defaultWallet?: string
  chainWallets?: ChainWalletConfiguration
}

export interface UpdateIntegratorRequest {
  name?: string
  fee?: number
  feeType?: IntegratorFeeType
  defaultWallet?: string
  chainWallets?: ChainWalletConfiguration
}

export type IntegratorResult = {
  name: string
  integratorId: string
  fee: number
  feeType: IntegratorFeeType
  defaultWallet?: string
  chainWallets?: ChainWalletConfiguration
}

export type ChainWalletConfiguration = {
  [key in ChainId]?: string
}

export enum IntegratorFeeType {
  FIXED = 'FIXED',
  SHARED = 'SHARED',
}

export type TransferSummary = {
  id: {
    toAddress: string
    sendingChainId?: number
  }
  totalReceivedAmount: number
}

export interface TransferSummariesResponse
  extends PaginatedResponse<TransferSummary> {}

export interface GetStepRequest {
  stepId: string
}

export interface GetTokenApprovalRequest {
  tokenContractAddress: string
  chainId: string
  userWalletAddress: string
  requiredAmount: string
}

export interface GetTokenApprovalResponse {
  isApproved: boolean
  approvedAmount: string
  approvalTransaction: {
    to?: string
    from?: string
    nonce?: string
    gasLimit?: string
    gasPrice?: string
    data?: string
    value?: string
    chainId?: number
    type?: number
    accessList?: { address: string; storageKeys: string[] }[]
    maxPriorityFeePerGas?: string
    maxFeePerGas?: string
    customData?: string
    ccipReadEnabled?: boolean
  }
}

export type PermitBase<T extends bigint | string> = {
  spender: Address
  nonce: T
  deadline: T
}

export type PermitMessage<T extends bigint | string> = PermitBase<T> & {
  owner: Address
  value: T
}

export type TokenPermissions<T extends bigint | string> = {
  token: Address
  amount: T
}

export type PermitWitnessTransferFromMessage<T extends bigint | string> =
  PermitBase<T> & {
    permitted: TokenPermissions<T>
  }

export type TypedDataPrimaryType =
  | 'Permit'
  | 'PermitTransferFrom'
  | 'PermitBatchTransferFrom'
  | 'PermitWitnessTransferFrom'
  | 'PermitBatchWitnessTransferFrom'
  | 'Order'
  | 'HyperliquidTransaction:Withdraw'
  | 'HyperliquidTransaction:UsdSend'
  | 'HyperliquidTransaction:SpotSend'
  | 'HyperliquidTransaction:SendAsset'

/**
 * EIP-712 Typed Data
 * @link https://eips.ethereum.org/EIPS/eip-712
 */
export type TypedData = {
  primaryType: TypedDataPrimaryType
  domain: TypedDataDomain
  types: Record<string, readonly TypedDataParameter[]>
  message: Record<string, any>
}

/**
 * EIP-712 Typed Data with signature
 */
export interface SignedTypedData extends TypedData {
  signature: Hex
}

export type RelayerErrorResponse = {
  status: 'error'
  data: {
    code: number
    message: string
  }
}

export type RelayerResponse<T> =
  | { status: 'ok'; data: T }
  | RelayerErrorResponse

export type RelayerQuoteResponse = RelayerResponse<LiFiStep>

export type RelayRequest = SignedLiFiStep

export type RelayResponseData = {
  taskId: string
  txLink?: string
}
export type RelayResponse = RelayerResponse<RelayResponseData>

export type RelayStatusRequest = {
  taskId: Hash
  bridge?: string
  fromChain?: number
  toChain?: number
}

export type RelayStatusResponseData = {
  status: 'DONE' | 'PENDING' | 'FAILED'
  message?: string
  metadata: { chainId: number; txHash?: Hash }
  transactionStatus?: StatusResponse
}

export type RelayStatusResponse = RelayerResponse<RelayStatusResponseData>

export type PatchCallDataRequest = {
  chainId: ChainId
  fromTokenAddress: string
  targetContractAddress: string
  callDataToPatch: string
  patches: {
    amountToReplace: string
  }[]
  value?: string
  delegateCall?: boolean
}[]
