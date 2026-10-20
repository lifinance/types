import {
  type BaseTransactionInfo,
  type BatchStatusCall,
  type BatchStatusEntry,
  ChainId,
  type FailedStatusData,
  type FullStatusData,
  type StatusData,
  type StatusResponse,
} from '../src/index.js'

// Hand-authored contract fixtures, not captured API responses. These tests
// check the public barrel and run as part of `pnpm typecheck`, outside build
// output.
type Expect<T extends true> = T
type IsAssignable<From, To> = [From] extends [To] ? true : false

// Every status shape answered before `batchStatus` existed is still a
// StatusResponse, so code that builds or returns one keeps compiling.
export type FullStatusIsResponse = Expect<
  IsAssignable<FullStatusData, StatusResponse>
>
export type StatusIsResponse = Expect<IsAssignable<StatusData, StatusResponse>>
export type FailedStatusIsResponse = Expect<
  IsAssignable<FailedStatusData, StatusResponse>
>

const sending: BaseTransactionInfo = {
  txHash: '0x1',
  chainId: ChainId.OUT,
  txLink: 'https://explorer.example/tx/0x1',
}

export const pendingCall = {
  status: 'PENDING',
  tool: 'relaydepository',
  sending,
  receiving: { chainId: ChainId.BAS },
  callIndex: 0,
} satisfies BatchStatusCall

export const failedCall = {
  status: 'FAILED',
  sending,
  callIndex: 0,
} satisfies BatchStatusCall

const gas = {
  gasPrice: '0',
  gasUsed: '0',
  gasToken: {
    chainId: ChainId.BAS,
    address: '0x0000000000000000000000000000000000000000',
    symbol: 'ETH',
    decimals: 18,
    name: 'ETH',
    priceUSD: '0',
  },
  gasAmount: '0',
  gasAmountUSD: '0',
}

export const userOpWithTwoCalls = {
  index: 15,
  userOpHash: '0x2',
  sender: '0x4',
  success: true,
  gas,
  calls: [pendingCall, { ...pendingCall, callIndex: 1 }],
} satisfies BatchStatusEntry

export const revertedUserOp = {
  index: 16,
  userOpHash: '0x3',
  sender: '0x5',
  success: false,
  gas,
  calls: [failedCall],
} satisfies BatchStatusEntry

// The response describes one call and lists every LI.FI userOp, in bundle
// order, with its calls.
export const bundleStatus = {
  status: 'PENDING',
  tool: 'relaydepository',
  sending,
  receiving: { chainId: ChainId.BAS },
  batchStatus: [userOpWithTwoCalls, revertedUserOp],
} satisfies StatusResponse

// @ts-expect-error A call names its position among the userOp's LI.FI calls.
export const callWithoutIndex: BatchStatusCall = {
  status: 'FAILED',
  sending,
}

// @ts-expect-error An entry is a userOp, not a status: its calls hold those.
export const callAsEntry: BatchStatusEntry = failedCall

// A guard on StatusResponse still removes the status interfaces from a union
// of them and other data, the way the backend tells an early status answer
// from loaded transfer data.
export const destinationTxHashOf = (
  sourceInfo: StatusData | FailedStatusData | { destinationTxHash: string },
  isStatusResponse: (value: unknown) => value is StatusResponse
): string | undefined => {
  if (isStatusResponse(sourceInfo)) {
    return undefined
  }
  return sourceInfo.destinationTxHash
}
