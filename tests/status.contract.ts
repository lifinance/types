import {
  type BaseTransactionInfo,
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

export const pendingLeg = {
  status: 'PENDING',
  tool: 'relaydepository',
  sending,
  receiving: { chainId: ChainId.BAS },
  index: 15,
  userOpHash: '0x2',
} satisfies BatchStatusEntry

export const failedLeg = {
  status: 'FAILED',
  sending,
  index: 16,
  userOpHash: '0x3',
} satisfies BatchStatusEntry

// The response describes one leg and lists every leg, in bundle order.
export const bundleStatus = {
  status: 'PENDING',
  tool: 'relaydepository',
  sending,
  receiving: { chainId: ChainId.BAS },
  batchStatus: [pendingLeg, failedLeg],
} satisfies StatusResponse

// @ts-expect-error A leg names its position in the bundle.
export const legWithoutIndex: BatchStatusEntry = {
  status: 'FAILED',
  sending,
  userOpHash: '0x3',
}

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
