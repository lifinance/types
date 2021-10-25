import { ChainKey, getChainByKey } from '../src'

test('getChainById', () => {
  expect(getChainByKey(ChainKey.ETH)).toBeDefined()
})
