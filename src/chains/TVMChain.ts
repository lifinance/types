import type { _Chain } from './Chain.js'
import type { AddEthereumChainParameter } from './EVMChain.js'

export interface TVMChain extends _Chain {
  metamask: AddEthereumChainParameter
}
