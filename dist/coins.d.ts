import { ChainId, Coin, CoinKey, Token } from './base';
export declare const defaultCoins: Array<Coin>;
export declare const wrappedTokens: {
    [ChainId: string]: Token;
};
export declare const findDefaultCoin: (coinKey: CoinKey) => Coin;
export declare const findDefaultToken: (coinKey: CoinKey, chainId: ChainId) => Token;
export declare const findWrappedGasOnChain: (chainId: ChainId) => Token;
export declare const findTokenByChainIdAndAddress: (chainId: number, tokenAddress: string) => Token | null;
