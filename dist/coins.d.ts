import { StaticToken, ChainId, Coin, CoinKey } from './base';
export declare const defaultCoins: Array<Coin>;
export declare const wrappedTokens: {
    [ChainId: string]: StaticToken;
};
export declare const findDefaultCoin: (coinKey: CoinKey) => Coin;
export declare const findDefaultToken: (coinKey: CoinKey, chainId: ChainId) => StaticToken;
export declare const findWrappedGasOnChain: (chainId: ChainId) => StaticToken;
export declare const findTokenByChainIdAndAddress: (chainId: number, tokenAddress: string) => StaticToken | null;
