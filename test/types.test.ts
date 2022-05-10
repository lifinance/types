import { ChainId, ChainKey, getChainByKey, getChainById } from '../src'

test('getChainById', () => {
  expect(getChainById(ChainId.ETH)).toBeDefined()
})

test('getChainByKey', () => {
  expect(getChainByKey(ChainKey.ETH)).toBeDefined()
})
