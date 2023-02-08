import { TransactionRequest } from '@ethersproject/providers'
import {
  BridgeDefinition,
  Chain,
  ChainId,
  ExchangeDefinition,
  Step,
  Token,
} from '.'
import { ToolError } from './apiErrors'

export const Orders = ['RECOMMENDED', 'FASTEST', 'CHEAPEST', 'SAFEST'] as const
export type Order = typeof Orders[number]

export interface RoutesRequest {
  fromChainId: number
  fromAmount: string
  fromTokenAddress: string
  fromAddress?: string

  toChainId: number
  toTokenAddress: string
  toAddress?: string

  options?: RouteOptions
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
  wantInsurance?: boolean // whether the user want to insure their tx
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

export interface Route {
  id: string

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

  steps: Step[]

  tags?: Order[]
}

export interface RoutesResponse {
  routes: Route[]
  errors: ToolError[]
}

export type PossibilityTopic = 'chains' | 'tokens' | 'bridges' | 'exchanges'

export interface PossibilitiesRequest {
  chains?: number[] // (default: [all]) // eg. [1, 56, 100]
  bridges?: AllowDenyPrefer
  exchanges?: AllowDenyPrefer
  include?: PossibilityTopic[]
}

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
  allowDestinationCall?: boolean // (default : true) // destination calls are enabled by default
}

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
  allowDestinationCall?: boolean // (default : true) // destination calls are enabled by default
}

export interface ContractCallQuotesRequest extends ToolConfiguration {
  fromChain: number | string
  fromToken: string
  fromAddress: string

  toChain: number | string
  toFallbackAddress?: string
  toContractCalls: {
    sendingAmount: string
    sendingToken: string
    receivingToken: string
    contractAddress: string
    approvalAddress?: string
    callData: string
    gasLimit: string
  }[]

  order?: Order
  slippage?: number | string
  integrator?: string
  referrer?: string
}

export interface ConnectionsRequest extends ToolConfiguration {
  fromChain?: number | string
  fromToken?: string
  toChain?: number | string
  toToken?: string
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
  fromChain: number | string
  toChain: number | string
}

export interface TransactionInfo {
  txHash: string
  txLink?: string
  amount?: string
  token?: Token
  chainId?: ChainId
  gasPrice?: string
  gasUsed?: string
  gasToken?: Token
  gasAmount?: string
  gasAmountUSD?: string
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
export type StatusMessage = typeof _StatusMessage[number]

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
export type SubstatusPending = typeof _SubstatusPending[number]

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

export type SubstatusDone = typeof _SubstatusDone[number]
export type Substatus = SubstatusPending | SubstatusDone

export const isSubstatusPending = (
  substatus: Substatus
): substatus is SubstatusPending =>
  _SubstatusPending.includes(substatus as SubstatusPending)
export const isSubstatusDone = (
  substatus: Substatus
): substatus is SubstatusDone =>
  _SubstatusDone.includes(substatus as SubstatusDone)

export interface StatusInformation {
  status: StatusMessage
  substatus?: Substatus
  substatusMessage?: string
}

export interface StatusResponse extends StatusInformation {
  sending: TransactionInfo
  receiving?: TransactionInfo
  tool?: string
  bridgeExplorerLink?: string
}

export interface ExtendedChain extends Chain {
  nativeToken: Token
}

export interface ChainsResponse {
  chains: ExtendedChain[]
}

export interface ToolsRequest {
  chains?: ChainId[]
}

export type TokensRequest = {
  chains?: ChainId[]
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
