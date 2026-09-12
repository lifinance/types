import type {
  ContractCallsQuoteRequest,
  GetStatusRequest,
} from '../src/index.js'

const contractCallRequestBase = {
  fromChain: 1,
  fromToken: '0x0000000000000000000000000000000000000000',
  fromAddress: '0x0000000000000000000000000000000000000001',
  toChain: 10,
  toToken: '0x0000000000000000000000000000000000000000',
  contractCalls: [],
}

export const fromAmountContractCallRequest = {
  ...contractCallRequestBase,
  fromAmount: '1',
} satisfies ContractCallsQuoteRequest

export const toAmountContractCallRequest = {
  ...contractCallRequestBase,
  toAmount: '1',
} satisfies ContractCallsQuoteRequest

export const transactionHashStatusRequest = {
  txHash: '0xabc',
} satisfies GetStatusRequest

export const taskStatusRequest = {
  taskId: 'task-id',
} satisfies GetStatusRequest

// @ts-expect-error Contract-call quote modes are mutually exclusive.
export const contractCallRequestWithBothAmounts: ContractCallsQuoteRequest = {
  ...contractCallRequestBase,
  fromAmount: '1',
  toAmount: '1',
}

// @ts-expect-error A status lookup accepts one identifier at a time.
export const statusRequestWithBothIdentifiers: GetStatusRequest = {
  txHash: '0xabc',
  taskId: 'task-id',
}
