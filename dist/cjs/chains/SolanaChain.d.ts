import { _Chain } from './Chain';
import { AddEthereumChainParameter } from './EVMChain';
export interface SolanaChain extends _Chain {
    tokenlistUrl?: string;
    metamask: AddEthereumChainParameter;
    multicallAddress?: string;
}
