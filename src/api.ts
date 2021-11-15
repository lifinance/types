import { providers } from 'ethers'
import { Coin, Token, Chain, Step } from '.'

export type Order = 'BEST_VALUE' | 'BEST_FEE' | 'BEST_FEE_GAS' // FAST, LESS_INTERACTIONS, SECURITY, ....

export interface RouteOptions {
  order?: Order // (default : BEST_VALUE)
  slippage?: number // (default : 0.03)
  infiniteApproval?: boolean // (default : false)
  allowSwitchChain?: boolean // (default : false) // eg. on mobile wallets and not metamask wallets we can't automatically change chains
  encryptionSupport?: boolean // (default : false)
  bridges?: {
    allow?: string[] // (default: [all]) // eg. ['nxtp'] to allow only nxtp
    deny?: string[] // (default: [])
    prefer?: string[] // (default: [])
  }
  exchanges?: {
    allow?: string[] // (default: [all])
    deny?: string[] // (default: [])
    prefer?: string[] // (default: []) // eg. ['1inch'] to use 1inch if available and fall back to others if not
  }
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

export interface PossibilitiesRequest {
  chains?: number[] // (default: [all]) // eg. [1, 56, 100]
  bridges?: {
    allow?: string[] // (default: [all]) // eg. ['nxtp'] to allow only nxtp
    deny?: string[] // (default: [])
    prefer?: string[] // (default: [])
  }
  exchanges?: {
    allow?: string[] // (default: [all])
    deny?: string[] // (default: [])
    prefer?: string[] // (default: []) // eg. ['1inch'] to use 1inch if available and fall back to others if not
  }
}

export interface PossibilitiesResponse {
  chains: Chain[]
  tokens: Token[]
  // TODO: add available bridges/exchanges
}

export interface StepTransactionResponse {
  tx: providers.TransactionRequest
}

export declare class LifiAPI {
  getRoutes(request: RoutesRequest): Promise<RoutesResponse>

  getPossibilities(
    request?: PossibilitiesRequest
  ): Promise<PossibilitiesResponse>

  updateRoute(route: Route): Promise<Route>

  getStepTransaction(step: Step): Promise<StepTransactionResponse>
}
