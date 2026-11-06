import {
  ChainId,
  type Estimate,
  type FullStatusData,
  type GetStatusRequest,
  type LiFiStep,
  type SmartDepositsStatus,
  type SmartDepositsStatusResponse,
  type SmartDepositsToolData,
  type StatusData,
  type StatusResponse,
} from '../src/index.js'

// Hand-authored contract fixtures, not captured API responses. They run as
// part of `pnpm typecheck`.
type Expect<T extends true> = T
type IsAssignable<From, To> = [From] extends [To] ? true : false

export const byDepositAddress = {
  depositAddress: '0xdeposit',
  fromChain: 8453,
} satisfies GetStatusRequest

// @ts-expect-error a deposit address alone does not identify the deposit chain
export const depositAddressOnly: GetStatusRequest = { depositAddress: '0xd' }

export const byTxHash = { txHash: '0x1' } satisfies GetStatusRequest
export const byTaskId = { taskId: 'task' } satisfies GetStatusRequest

export const depositBlock = {
  deposit: {
    token: '0xtoken',
    received: '10',
    required: '100',
    outstanding: '90',
    observedAt: null,
  },
} satisfies SmartDepositsStatus

export const refundBlock = {
  refund: {
    stage: 'failed',
    txHash: null,
    initiatedAt: '2026-11-06T10:00:00.000Z',
    submittedAt: null,
    confirmedAt: null,
    failedAt: '2026-11-06T10:05:00.000Z',
    failureReason: 'never_broadcast',
    attempts: 2,
  },
} satisfies SmartDepositsStatus

// @ts-expect-error a block carries a deposit or a refund, never both
export const bothBlocks: SmartDepositsStatus = {
  ...depositBlock,
  refund: refundBlock.refund,
}

const sending = {
  txHash: '0x1',
  chainId: ChainId.BAS,
  txLink: 'https://explorer.example/tx/0x1',
}

export const statusWithBlock = {
  status: 'PENDING',
  tool: 'smartdeposits',
  sending,
  receiving: { chainId: ChainId.OPT },
  smartDeposits: depositBlock,
} satisfies StatusData

export type FullStatusCarriesBlock = Expect<
  IsAssignable<
    SmartDepositsStatus,
    NonNullable<FullStatusData['smartDeposits']>
  >
>

export type StatusDataIsResponse = Expect<
  IsAssignable<StatusData, StatusResponse>
>
export type FullStatusIsResponse = Expect<
  IsAssignable<FullStatusData, StatusResponse>
>

export const preDeposit = {
  status: 'NOT_FOUND',
  tool: 'smartdeposits',
  sending: { chainId: ChainId.BAS },
  smartDeposits: depositBlock,
} satisfies SmartDepositsStatusResponse

export type PreDepositIsNotStatusResponse = Expect<
  IsAssignable<SmartDepositsStatusResponse, StatusResponse> extends true
    ? false
    : true
>

export const plainToolData = {
  depositAddress: '0xdeposit',
} satisfies SmartDepositsToolData

export const flexibleToolData = {
  depositAddress: '0xdeposit',
  amountModel: 'solve_time_quote',
  minRate: { numerator: '1', denominator: '2' },
  sourceAmountMin: '100',
  rateExpiresAt: '2026-11-06T10:00:00.000Z',
} satisfies SmartDepositsToolData

export function rateTerms(toolData: SmartDepositsToolData): string | undefined {
  if (toolData.amountModel === 'solve_time_quote') {
    return `${toolData.minRate.numerator}/${toolData.minRate.denominator}@${toolData.rateExpiresAt}`
  }
  return undefined
}

export const estimateToolData: Estimate['toolData'] = flexibleToolData

export const markers: Pick<
  LiFiStep,
  'smartDepositsComposed' | 'amountFlexible'
> = { smartDepositsComposed: true, amountFlexible: true }
