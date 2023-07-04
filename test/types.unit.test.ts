import { expect, test } from '@jest/globals'
import './matchers'

import { ChainId, ChainKey, getChainByKey, getChainById, supportedEVMChains, findDefaultToken, findWrappedGasOnChain, CoinKey, prefixChainId } from '../src'
import { findTokenByChainIdAndAddress } from '../src/coins';
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

describe('findTokenByChainIdAndAddress', () => {
  describe('token has no name override', () => {
    it('returns a token with the coin name', () => {
      expect(
        findTokenByChainIdAndAddress(ChainId.LNAT, '0xb706319d37b945727e71ae0d4353699d19112576')!.name
      ).toEqual(CoinKey.CXTT)
    })
  })

  describe("token has a name override", () => {
    it('returns a token with the overrode name', () => {
      expect(
        findTokenByChainIdAndAddress(ChainId.GOR, '0x7ea6eA49B0b0Ae9c5db7907d139D9Cd3439862a1')!.name
      ).toEqual('Goerli CXTT')
    })
  })
})

describe('validate chains', () => {
  supportedEVMChains.forEach(chain => {
    it(`validate chain ${chain.name}`, () => {
      // blockExplorerUrls
      expect(chain.metamask.blockExplorerUrls.length).toBeGreaterThan(0)
      chain.metamask.blockExplorerUrls.forEach(blockExplorerUrl => {
        expect(blockExplorerUrl).httpsUrl()
        expect(blockExplorerUrl).endsWith('/')
      })

      // chain ids match
      expect(prefixChainId(chain.id)).toEqual(chain.metamask.chainId)

      // rpcs defined
      expect(chain.metamask.rpcUrls.length).toBeGreaterThan(0)
    })
  })
})
