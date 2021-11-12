/* eslint-disable @typescript-eslint/no-explicit-any */
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
  toAmount: string
  toAmountMin: string
  approvalAddress: string

  feeCosts?: FeeCost[]
  gasCosts?: GasCost[]

  data?: any // differs by tool
}

// EXECUTION
export type Status =
  | 'NOT_STARTED'
  | 'ACTION_REQUIRED'
  | 'PENDING'
  | 'FAILED'
  | 'DONE'

type AcceptableMessages = string | any
export type ProcessMessage =
  | AcceptableMessages
  | { message: AcceptableMessages; footer: AcceptableMessages }

export interface Process {
  startedAt: number
  doneAt?: number
  failedAt?: number
  errorMessage?: any
  errorCode?: any
  message: ProcessMessage
  status: Status

  // additional information
  [key: string]: any
}

export interface Execution {
  status: Status
  process: Array<Process>
  fromAmount?: string
  toAmount?: string
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
  action: Action
  estimate?: Estimate
  execution?: Execution
}

export interface SwapStep extends StepBase {
  type: 'swap'
  action: Action
  estimate: Estimate
}

export interface CrossStep extends StepBase {
  type: 'cross'
  action: Action
  estimate: Estimate
}

export interface LifiStep extends StepBase {
  type: 'lifi'
  action: Action
  estimate: Estimate
  includedSteps: Step[]
}

export type Step = SwapStep | CrossStep | LifiStep
