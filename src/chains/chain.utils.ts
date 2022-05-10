import { ChainKey } from '../base'
import { Chain } from './Chain'
import { EVMChain } from './EVMChain'
import { SolanaChain } from './SolanaChain'
import { supportedEVMChains, supportedSolanaChains } from './supported.chains'

const supportedChains: Chain[] = [
  ...supportedSolanaChains,
  ...supportedEVMChains,
]

export const getChainByKey = (chainKey: ChainKey): EVMChain | SolanaChain => {
  const chain = supportedChains.find((c) => c.key === chainKey)
  if (!chain) {
    throw new Error('Invalid chainKey')
  }
  return chain
}

export const getChainById = (chainId: number): EVMChain | SolanaChain => {
  const chain = supportedChains.find((c) => c.id === chainId)
  if (!chain) {
    throw new Error('Invalid chainId')
  }
  return chain
}
