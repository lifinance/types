import { ChainKey } from '../base';
import { Chain } from './EVMChain';
export declare const getChainByKey: (chainKey: ChainKey) => Chain;
export declare const getChainById: (chainId: number) => Chain;
