import { ChainId, ChainKey, getChainByKey, getChainById, supportedEVMChains, findDefaultToken, findWrappedGasOnChain } from '../src'

test('getChainById', () => {
  expect(getChainById(ChainId.ETH)).toBeDefined()
})

test('getChainByKey', () => {
  expect(getChainByKey(ChainKey.ETH)).toBeDefined()
})

test('native token defined for all chains', () => {
  // currently unused chains
  const ignoredChains = [
    ChainId.FSN,
    ChainId.EXP,
    ChainId.TCH,
    ChainId.UBQ,
    ChainId.MET,
    ChainId.DIO,
    ChainId.TLO,
    ChainId.SHI,
    ChainId.GL1,
    ChainId.RSK,
    ChainId.TBW,
    ChainId.METT,
    ChainId.DIOT,
    ChainId.HECT,
    ChainId.FUST,
    ChainId.TLOT,
    ChainId.RSKT,
  ]
  for (const chain of supportedEVMChains) {
    if (ignoredChains.includes(chain.id)) continue

    try {
      const gasToken = findDefaultToken(chain.coin, chain.id)
      expect(gasToken).toBeDefined()
    } catch (e) {
      throw new Error(`Failed to load gas token for ${chain.name}(${chain.id})`)
    }

    try {
      const wrappedGasToken = findWrappedGasOnChain(chain.id)
      expect(wrappedGasToken).toBeDefined()
    } catch (e) {
      throw new Error(`Failed to load wrapped gas token for ${chain.name}(${chain.id})`)
    }
  }
})
