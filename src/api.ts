import {
  Token,
  Chain,
  Step,
  BridgeDefinition,
  ExchangeDefinition,
  ChainId,
} from '.'

export type Order = 'BEST_VALUE' | 'BEST_FEE' | 'BEST_FEE_GAS' // FAST, LESS_INTERACTIONS, SECURITY, ....

export interface AllowDenyPrefer {
  allow?: string[] // (default: [all])
  deny?: string[] // (default: [])
  prefer?: string[] // (default: []) // eg. ['1inch'] to use 1inch if available and fall back to others if not
}

export interface RouteOptions {
  order?: Order // (default : BEST_VALUE)
  slippage?: number // (default : 0.03)
  infiniteApproval?: boolean // (default : false)
  allowSwitchChain?: boolean // (default : false) // eg. on mobile wallets and not metamask wallets we can't automatically change chains
  encryptionSupport?: boolean // (default : false)
  integrator?: string // custom string developer who integrate LiFi can set
  referrer?: string // integrators can set a wallet address as referrer to track them
  bridges?: AllowDenyPrefer
  exchanges?: AllowDenyPrefer
}

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
  containsEncryption?: boolean // Features required for route execution
  infiniteApproval?: boolean // Features used for route execution

  steps: Step[]
}

export interface RoutesResponse {
  routes: Route[]
}

type PossibilityTopic = 'chains' | 'tokens' | 'bridges' | 'exchanges'

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

interface ToolConfiguration {
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
  // toAddress?: string // TODO: add bridge support first

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
}

export interface StatusResponse {
  sending: TransactionInfo
  receiving?: TransactionInfo
  tool?: string
  status: StatusMessage
}

export interface ChainsResponse {
  chains: Chain[]
}

export type StatusMessage = 'NOT_FOUND' | 'PENDING' | 'DONE' | 'FAILED'

export declare class LifiAPI {
  getRoutes(request: RoutesRequest): Promise<RoutesResponse>

  getPossibilities(
    request?: PossibilitiesRequest
  ): Promise<PossibilitiesResponse>

  updateRoute(route: Route): Promise<Route>

  getStepTransaction(step: Step): Promise<Step>

  getToken(request: GetTokenRequest): Promise<Token>

  getQuote(request: QuoteRequest): Promise<Step>

  getStatus(request: GetStatusRequest): Promise<StatusResponse>

  getChains(): ChainsResponse

  getConnections(request: ConnectionsRequest): Promise<ConnectionsResponse>
}
