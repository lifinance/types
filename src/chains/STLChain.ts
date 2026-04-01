import type { AddEthereumChainParameter } from './EVMChain.js'
import type { _Chain } from './Chain.js'

export interface STLChain extends _Chain {
  metamask: AddEthereumChainParameter
}
