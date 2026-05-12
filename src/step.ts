import type {
  TypedData,
  TransactionRequest,
  SignedTypedData,
  ExecutionType,
} from './api.js'
import type { Token } from './tokens/index.js'

export interface FeeCost {
  name: string
  description: string
  percentage: string
  token: Token
  amount: string
  amountUSD: string
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

  slippage?: number
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
  /** This is a list to account for approval gas costs and transaction gas costs. However, approval gas costs are not integrated yet. */
  gasCosts?: GasCost[]
  /** Estimated duration in seconds */
  executionDuration: number
  /** Optional flag to indicate approval reset requirement for legacy ERC-20 tokens */
  approvalReset?: boolean
  /** Optional flag to skip approval in the cases where we only need to sign the message (e.g. Hyperliquid)*/
  skipApproval?: boolean
  /** Optional flag to skip permit usage when the tx doesn't include diamond interaction (some HyperEVM txs) */
  skipPermit?: boolean
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
export type StepToolDetails = {
  key: string
  name: string
  logoURI: string
}

type StepInformationBase = {
  tool: string
  type: string
  action: Action
  estimate: Estimate
}

export type StepInformation = StepInformationBase & {
  createdAt: Date
  gasLimit: string
  stepId: string
  transactionId: string
  intermediateActions: StepInformationBase[]
  integrator?: string
  relatedLifiSteps?: string[]
}

export interface StepBase {
  id: string
  type: StepType
  tool: StepTool
  toolDetails: StepToolDetails
  integrator?: string
  referrer?: string
  action: Action
  estimate?: Estimate
  executionType?: ExecutionType
  transactionRequest?: TransactionRequest
  transactionId?: string
  /**
   * EIP-712 Typed Data
   * @link https://eips.ethereum.org/EIPS/eip-712
   */
  typedData?: TypedData[]
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

export interface LiFiStep extends Omit<Step, 'type'> {
  type: 'lifi'
  includedSteps: Step[]
}

export interface SignedLiFiStep extends LiFiStep {
  typedData: SignedTypedData[]
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
