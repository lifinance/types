import type { _Chain } from './Chain.js'
import type { AddEthereumChainParameter } from './EVMChain.js'

export interface UTXOChain extends _Chain {
  metamask: AddEthereumChainParameter
}
