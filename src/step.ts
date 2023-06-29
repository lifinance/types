/* eslint-disable @typescript-eslint/no-explicit-any */
import { providers } from 'ethers'
import { Substatus } from '.'
import { Token } from './base'
import { Bridge } from './bridges'
import { Exchange, ExchangeAggregator } from './exchanges'

export interface FeeCost {
  name: string
  description: string
  percentage: string
  token: Token
  amount: string
  amountUSD?: string
  included: boolean
}

export interface GasCost {
  type: 'SUM' | 'APPROVE' | 'SEND' | 'FEE'
  price: string // suggested current standard price for chain
  estimate: string // estimate how much gas will be needed
  limit: string // suggested gas limit (estimate +25%)
  amount: string // estimate * price = amount of tokens that will be needed
  amountUSD: string // usd value of token amount
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
  tool: string
  fromAmount: string
  fromAmountUSD?: string
  toAmount: string
  toAmountMin: string
  toAmountUSD?: string
  approvalAddress: string

  feeCosts?: FeeCost[]
  gasCosts?: GasCost[] // This is a list to account for approval gas costs and transaction gas costs. However, approval gas costs are not used at the moment

  executionDuration: number // estimated duration in seconds
}

// EXECUTION
export type Status =
  | 'NOT_STARTED'
  | 'STARTED'
  | 'ACTION_REQUIRED'
  | 'CHAIN_SWITCH_REQUIRED'
  | 'PENDING'
  | 'FAILED'
  | 'DONE'
  | 'RESUME'
  | 'CANCELLED'

export type ProcessType =
  | 'TOKEN_ALLOWANCE'
  | 'SWITCH_CHAIN'
  | 'SWAP'
  | 'CROSS_CHAIN'
  | 'RECEIVING_CHAIN'
  | 'TRANSACTION'

export interface Process {
  startedAt: number
  doneAt?: number
  failedAt?: number
  type: ProcessType
  status: Status
  substatus?: Substatus
  message?: string
  txHash?: string
  txLink?: string
  multisigTxHash?: string
  error?: {
    code: string | number
    message: string
    htmlMessage?: string
  }

  // additional information
  [key: string]: any
}

export interface Execution {
  status: Status
  process: Array<Process>
  fromAmount?: string
  toAmount?: string
  toToken?: Token
  gasPrice?: string
  gasUsed?: string
  gasToken?: Token
  gasAmount?: string
  gasAmountUSD?: string
}

export const emptyExecution: Execution = {
  status: 'NOT_STARTED',
  process: [],
}

// STEP
export const _StepType = [
  'lifi',
  'swap',
  'cross',
  'protocol',
  'custom',
] as const
export type StepType = (typeof _StepType)[number]
export type StepTool = string

export interface StepBase {
  id: string
  type: StepType
  tool: StepTool
  toolDetails: Pick<
    ExchangeAggregator | Exchange | Bridge,
    'key' | 'name' | 'logoURI'
  >
  integrator?: string
  referrer?: string
  action: Action
  estimate?: Estimate
  execution?: Execution
  transactionRequest?: providers.TransactionRequest
}

export interface DestinationCallInfo {
  toContractAddress: string
  toContractCallData: string
  toFallbackAddress: string
  callDataGasLimit: string
}

export type CallAction = Action & DestinationCallInfo

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

export interface ProtocolStep extends StepBase {
  type: 'protocol'
  action: Action
  estimate: Estimate
}

export interface CustomStep extends StepBase {
  type: 'custom'
  action: CallAction
  estimate: Estimate
}

export type Step = SwapStep | CrossStep | CustomStep | ProtocolStep

export interface LifiStep extends Omit<Step, 'type'> {
  type: 'lifi'
  includedSteps: Step[]
}

export function isSwapStep(step: Step): step is SwapStep {
  return step.type === 'swap'
}

export function isCrossStep(step: Step): step is CrossStep {
  return step.type === 'cross'
}

export function isProtocolStep(step: Step): step is ProtocolStep {
  return step.type === 'protocol'
}

export function isCustomStep(step: Step): step is CustomStep {
  return step.type === 'custom'
}
