import { StaticToken } from '.';
/**
 * @deprecated
 * These values are now obtainable from the LI.FI API
 */
export declare enum ExchangeTool {
    oneinch = "1inch",
    paraswap = "paraswap",
    openocean = "openocean",
    zerox = "0x",
    dodo = "dodo"
}
/**
 * @deprecated
 * These values are now obtainable from the LI.FI API
 */
export type ExchangeTools = ExchangeTool | string;
export interface ExchangeAggregator {
    key: ExchangeTool;
    name: string;
    logoURI: string;
    webUrl: string;
}
/**
 * @deprecated
 * These values are now obtainable from the LI.FI API
 */
export declare const supportedExchangeAggregators: Array<ExchangeAggregator>;
export interface Exchange {
    key: ExchangeTools;
    name: string;
    chainId: number;
    logoURI: string;
    webUrl: string;
    graph?: string;
    tokenlistUrl: string;
    routerAddress: string;
    factoryAddress: string;
    initCodeHash: string;
    baseTokens: readonly StaticToken[];
}
/**
 * @deprecated
 * These values are now obtainable from the LI.FI API
 */ export declare const supportedExchanges: Array<Exchange>;
/**
 * @deprecated
 * Available exchanges should be queried from the API
 */
export declare const getExchangeByKey: (key: string) => Exchange;
