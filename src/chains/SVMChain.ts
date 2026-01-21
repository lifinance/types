import type { _Chain } from './Chain.js'
import type { AddEthereumChainParameter } from './EVMChain.js'

export interface SVMChain extends _Chain {
  tokenlistUrl?: string
  metamask: AddEthereumChainParameter
  multicallAddress?: string
}
