/* eslint-disable @typescript-eslint/no-explicit-any */
import { providers } from 'ethers'
import { Token } from './base'

export interface FeeCost {
  name: string
  description?: string
  percentage: string
  token: Token
  amount: string
  amountUSD?: string
}

export interface GasCost {
  type: 'SUM' | 'APPROVE' | 'SEND'
  price?: string // suggested current standard price for chain
  estimate?: string // estimate how much gas will be needed
  limit?: string // suggested gas limit (estimate +25%)
  amount: string // estimate * price = amount of tokens that will be needed
  amountUSD?: string // usd value of token amount
  token: Token // the used gas token
}

// ACTION
export interface Action {
  fromChainId: number
  fromAmount: string
  fromToken: Token
  fromAddress?: string

  toChainId: number
  toToken: Token
  toAddress?: string

  slippage: number
}

// ESTIMATE
export interface Estimate {
  fromAmount: string
  fromAmountUSD?: string
  toAmount: string
  toAmountMin: string
  toAmountUSD?: string
  approvalAddress: string

  feeCosts?: FeeCost[]
  gasCosts?: GasCost[] // This is a list to account for approval gas costs and transaction gas costs. However, approval gas costs are not used at the moment

  executionDuration: number // estimated duration in seconds

  data?: any // differs by tool
}

// EXECUTION
export declare type Status =
  | 'NOT_STARTED'
  | 'STARTED'
  | 'ACTION_REQUIRED'
  | 'CHAIN_SWITCH_REQUIRED'
  | 'PENDING'
  | 'FAILED'
  | 'DONE'
  | 'RESUME'
  | 'CANCELLED'
declare type AcceptableMessages = string | any
export declare type ProcessMessage =
  | AcceptableMessages
  | {
      message: AcceptableMessages
      footer: AcceptableMessages
    }
export type ProcessType =
  | 'TOKEN_ALLOWANCE'
  | 'SWITCH_CHAIN'
  | 'SWAP'
  | 'CROSS_CHAIN'
  | 'RECEIVING_CHAIN'

export interface Process {
  startedAt: number
  doneAt?: number
  failedAt?: number
  errorMessage?: any
  htmlErrorMessage?: any
  errorCode?: any
  message: ProcessMessage
  status: Status
  type: ProcessType
  txHash?: string
  txLink?: string

  // additional information
  [key: string]: any
}

export interface Execution {
  status: Status
  process: Array<Process>
  fromAmount?: string
  toAmount?: string
  toToken?: Token
}

export const emptyExecution: Execution = {
  status: 'NOT_STARTED',
  process: [],
}

// STEP
export type StepType = 'swap' | 'cross' | 'lifi'
export type StepTool = string

export interface StepBase {
  id: string
  type: StepType
  tool: StepTool
  integrator?: string
  referrer?: string
  action: Action
  estimate?: Estimate
  execution?: Execution
  transactionRequest?: providers.TransactionRequest
}

export interface SwapStep extends StepBase {
  type: 'swap'
  action: Action
  estimate: Estimate
}

export function isSwapStep(step: Step): step is SwapStep {
  return step.type === 'swap'
}

export interface CrossStep extends StepBase {
  type: 'cross'
  action: Action
  estimate: Estimate
}

export function isCrossStep(step: Step): step is CrossStep {
  return step.type === 'cross'
}

export interface LifiStep extends StepBase {
  type: 'lifi'
  action: Action
  estimate: Estimate
  includedSteps: Step[]
}

export function isLifiStep(step: Step): step is LifiStep {
  return step.type === 'lifi'
}

export type Step = SwapStep | CrossStep | LifiStep
