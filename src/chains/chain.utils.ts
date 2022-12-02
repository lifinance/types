import { ChainKey } from '../base'
import { Chain } from './EVMChain'
import { EVMChain } from './EVMChain'
import { SolanaChain } from './SolanaChain'
import { supportedEVMChains, supportedSolanaChains } from './supported.chains'

const supportedChains: Chain[] = [
  // This will be added in the future
  // ...supportedSolanaChains,
  ...supportedEVMChains,
  ...supportedSolanaChains,
]

export const getChainByKey = (chainKey: ChainKey): Chain => {
  const chain = supportedChains.find((c) => c.key === chainKey)
  if (!chain) {
    throw new Error('Invalid chainKey')
  }
  return chain
}

export const getChainById = (chainId: number): Chain => {
  const chain = supportedChains.find((c) => c.id === chainId)
  if (!chain) {
    throw new Error('Invalid chainId')
  }
  return chain
}
