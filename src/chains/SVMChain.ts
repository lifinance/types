import type { _Chain } from './Chain.js'
import type { ChainId } from './base.js'
import type { AddEthereumChainParameter } from './EVMChain.js'

export type SVMChainId = ChainId.SOL | ChainId.FOG

export interface SVMChain extends _Chain {
  tokenlistUrl?: string
  metamask: AddEthereumChainParameter
  multicallAddress?: string
}
