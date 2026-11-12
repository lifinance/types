import {
  ChainId,
  type Estimate,
  type FullStatusData,
  type GetStatusRequest,
  type LiFiStep,
  type Step,
  type SmartDepositsRefundFailureReason,
  type SmartDepositsRefundOutlook,
  type SmartDepositsRefundStage,
  type SmartDepositsStatus,
  type SmartDepositsStatusResponse,
  type SmartDepositsToolData,
  type StatusResponse,
} from '../src/index.js'

// Hand-authored contract fixtures, not captured API responses. They run as
// part of `pnpm typecheck`.
type Expect<T extends true> = T
type IsAssignable<From, To> = [From] extends [To] ? true : false
type KeysOfUnion<T> = T extends unknown ? keyof T : never
type Equal<A, B> = IsAssignable<A, B> extends true ? IsAssignable<B, A> : false

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

export const submittedRefundBlock = {
  refund: {
    stage: 'submitted',
    txHash: null,
    initiatedAt: null,
    submittedAt: '2026-11-06T10:01:00.000Z',
    confirmedAt: null,
    failedAt: null,
    failureReason: null,
    attempts: 1,
  },
} satisfies SmartDepositsStatus

export type RefundStageIsExhaustive = Expect<
  Equal<
    SmartDepositsRefundStage,
    'initiated' | 'submitted' | 'confirmed' | 'failed'
  >
>

export type RefundFailureReasonIsExhaustive = Expect<
  Equal<
    SmartDepositsRefundFailureReason,
    'tx_failed' | 'tx_incomplete' | 'never_broadcast' | 'unknown'
  >
>

// @ts-expect-error 'none' is not a refund stage
export const refundStageNone: SmartDepositsRefundStage = 'none'

export const neitherBlock = {} satisfies SmartDepositsStatus

export const commonFieldsBesideDeposit = {
  ...depositBlock,
  expiresAt: '2026-11-13T09:30:00.000Z',
  requiredDeposit: { token: '0xtoken', amount: '100' },
  refundOutlook: 'expected',
} satisfies SmartDepositsStatus

export const commonFieldsBesideRefund = {
  ...refundBlock,
  expiresAt: '2026-11-13T09:30:00.000Z',
  refundOutlook: 'not_expected',
} satisfies SmartDepositsStatus

export const commonFieldsAlone = {
  expiresAt: '2026-11-13T09:30:00.000Z',
  requiredDeposit: { token: '0xtoken', amount: '100' },
} satisfies SmartDepositsStatus

export type RefundOutlookIsExhaustive = Expect<
  Equal<SmartDepositsRefundOutlook, 'expected' | 'not_expected'>
>

export const unknownOutlook: SmartDepositsStatus = {
  // @ts-expect-error 'maybe' is not a refund outlook
  refundOutlook: 'maybe',
}

export const incompleteRequiredDeposit: SmartDepositsStatus = {
  // @ts-expect-error requiredDeposit carries a token and an amount
  requiredDeposit: { token: '0xtoken' },
}

// @ts-expect-error a block carries a deposit or a refund, never both
export const bothBlocks: SmartDepositsStatus = {
  ...depositBlock,
  refund: refundBlock.refund,
}

// @ts-expect-error the common fields do not lift the never-both rule
export const bothBlocksWithCommonFields: SmartDepositsStatus = {
  ...commonFieldsBesideDeposit,
  refund: refundBlock.refund,
}

const sending = {
  txHash: '0x1',
  chainId: ChainId.BAS,
  txLink: 'https://explorer.example/tx/0x1',
}

export const statusWithBlock = {
  status: 'PENDING',
  tool: 'smartDeposits',
  sending,
  receiving: { chainId: ChainId.OPT },
  smartDeposits: depositBlock,
} satisfies StatusResponse

export type FullStatusCarriesBlock = Expect<
  IsAssignable<
    SmartDepositsStatus,
    NonNullable<FullStatusData['smartDeposits']>
  >
>

export const preDeposit = {
  status: 'NOT_FOUND',
  tool: 'smartDeposits',
  sending: { chainId: ChainId.BAS },
  smartDeposits: depositBlock,
} satisfies SmartDepositsStatusResponse

export const depositAddressAnswer = {
  status: 'PENDING',
  tool: 'smartDeposits',
  fromAddress: '0xfrom',
  toAddress: '0xto',
  metadata: { integrator: 'jumper.exchange' },
  sending: {
    chainId: ChainId.BAS,
    txHash: '0x1',
    txLink: 'https://explorer.example/tx/0x1',
  },
} satisfies SmartDepositsStatusResponse

export const chainedReceiving = {
  status: 'PENDING',
  tool: 'smartDeposits',
  sending: { chainId: ChainId.BAS },
  receiving: {
    chainId: ChainId.OPT,
    amount: '100',
    amountUSD: '100.00',
    token: {
      address: '0x0000000000000000000000000000000000000000',
      chainId: ChainId.OPT,
      symbol: 'ETH',
      decimals: 18,
      name: 'ETH',
      priceUSD: '1',
      logoURI: '',
    },
  },
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

export const otherModel: SmartDepositsToolData = {
  ...flexibleToolData,
  // @ts-expect-error amountModel is the closed literal 'solve_time_quote'
  amountModel: 'reference_quote',
}

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

export type MarkersStayOffStep = Expect<
  Extract<
    KeysOfUnion<Step>,
    'smartDepositsComposed' | 'amountFlexible'
  > extends never
    ? true
    : false
>

export const venueToolData = {
  quoteId: 'abc',
  fee: { amount: '1' },
} satisfies Estimate['toolData']

export const venueToolDataWithoutAddress: Estimate['toolData'] = {
  quoteId: 'abc',
  expiry: 12,
}

export function depositAddressOf(estimate: Estimate): string | undefined {
  const toolData = estimate.toolData
  if (toolData?.depositAddress !== undefined) {
    const sd: SmartDepositsToolData = toolData
    return sd.depositAddress
  }
  return undefined
}

// @ts-expect-error a venue object cannot carry a malformed depositAddress
export const badVenueAddress: Estimate['toolData'] = { depositAddress: 1 }
