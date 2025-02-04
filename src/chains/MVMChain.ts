import type { _Chain } from './Chain.js'
import type { AddEthereumChainParameter } from './EVMChain.js'

export interface MVMChain extends _Chain {
  metamask: AddEthereumChainParameter
}
