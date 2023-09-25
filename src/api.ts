import { TransactionRequest } from '@ethersproject/providers'
import {
  BridgeDefinition,
  Chain,
  ChainId,
  ChainType,
  ExchangeDefinition,
  LifiStep,
  Token,
} from '.'
import { ToolError } from './apiErrors'

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

export interface RouteOptions {
  order?: Order // (default : RECOMMENDED)
  slippage?: number // (default : 0.03)
  infiniteApproval?: boolean // (default : false)
  allowSwitchChain?: boolean // (default : false) // eg. on mobile wallets and not metamask wallets we can't automatically change chains
  integrator?: string // custom string developer who integrate LI.FI can set
  allowDestinationCall?: boolean // (default : true) // destination calls are enabled by default
  referrer?: string // integrators can set a wallet address as referrer to track them
  bridges?: AllowDenyPrefer
  exchanges?: AllowDenyPrefer
  fee?: number // 0.03 = take 3% integrator fee (requires verified integrator to be set)
  insurance?: boolean // whether the user want to insure their tx
  maxPriceImpact?: number // hide routes with price impact greater than or equal to this value
}

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

export const _InsuranceState = [
  'INSURED',
  'INSURABLE',
  'NOT_INSURABLE',
] as const
export type InsuranceState = (typeof _InsuranceState)[number]

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
  infiniteApproval?: boolean // Features used for route execution

  steps: LifiStep[]

  tags?: Order[]
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

export interface ToolConfiguration {
  allowBridges?: string[]
  denyBridges?: string[]
  preferBridges?: string[]
  allowExchanges?: string[]
  denyExchanges?: string[]
  preferExchanges?: string[]
}

export interface QuoteRequest extends ToolConfiguration {
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
  insurance?: boolean // indicates whether the user wants a quote with bridge insurance
  allowDestinationCall?: boolean // (default : true) // destination calls are enabled by default
  fromAmountForGas?: string // the amount of token to convert to gas
  maxPriceImpact?: number // hide routes with price impact greater than or equal to this value
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

export interface ContractCallsQuoteRequest extends ToolConfiguration {
  fromChain: number | string
  fromToken: string
  fromAddress: string

  toChain: number | string
  toToken: string
  toAmount: string

  toFallbackAddress?: string
  contractOutputsToken?: string
  contractCalls: ContractCall[]

  slippage?: number | string
  integrator?: string
  referrer?: string
  fee?: number | string
  allowDestinationCall?: boolean // (default : true) // destination calls are enabled by default
}

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

export interface GetStatusRequest {
  txHash: string
  bridge?: string
  fromChain?: number | string
  toChain?: number | string
}

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
  // The transfer cannot be completed, a refund is required
  'NOT_PROCESSABLE_REFUND_NEEDED',
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

export type Substatus = SubstatusPending | SubstatusDone

export const isSubstatusPending = (
  substatus: Substatus
): substatus is SubstatusPending =>
  _SubstatusPending.includes(substatus as SubstatusPending)
export const isSubstatusDone = (
  substatus: Substatus
): substatus is SubstatusDone =>
  _SubstatusDone.includes(substatus as SubstatusDone)

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

export type StatusResponse = FullStatusData | StatusData

export interface FullStatusData extends StatusData {
  transactionId: string
  sending: ExtendedTransactionInfo
  receiving: PendingReceivingInfo | ExtendedTransactionInfo
  lifiExplorerLink: string
  fromAddress: string
  toAddress: string
  bridgeExplorerLink?: string
}

export interface ExtendedChain extends Chain {
  nativeToken: Token
}

export interface ChainsResponse {
  chains: ExtendedChain[]
}

export interface ChainsRequest {
  chainTypes?: ChainType[]
}

export interface ToolsRequest {
  chains?: ChainId[]
}

export type TokensRequest = {
  chains?: ChainId[]
  chainTypes?: ChainType[]
}

export type TokensResponse = {
  tokens: { [chainId: number]: Token[] }
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

export type GasRecommendationResponse =
  | {
      // whether we can support that
      available: false
      // reason why the gas feature is not available (e.g. missing liquidity)
      message: string
    }
  | {
      available: true
      recommended: TokenBalance
      limit: TokenBalance // Maximum of gas the user can transfer
      serviceFee: TokenBalance // LI.FI fee for providing the service

      // information about what the user has to pay to get the recommended gas amount
      fromToken?: Token
      fromAmount?: string
    }

export interface WalletAnalytics {
  walletAddress: string
  transactions: StatusResponse[]
}
