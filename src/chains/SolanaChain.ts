import type { _Chain } from './Chain.js'
import type { AddEthereumChainParameter } from './EVMChain.js'

export interface SolanaChain extends _Chain {
  tokenlistUrl?: string
  metamask: AddEthereumChainParameter
  multicallAddress?: string
}
