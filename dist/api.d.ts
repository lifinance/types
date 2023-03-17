import { TransactionRequest } from '@ethersproject/providers';
import { BridgeDefinition, Chain, ChainId, ExchangeDefinition, LifiStep, Token } from '.';
import { ToolError } from './apiErrors';
export declare const Orders: readonly ["RECOMMENDED", "FASTEST", "CHEAPEST", "SAFEST"];
export type Order = (typeof Orders)[number];
export interface RoutesRequest {
    fromChainId: number;
    fromAmount: string;
    fromTokenAddress: string;
    fromAddress?: string;
    toChainId: number;
    toTokenAddress: string;
    toAddress?: string;
    options?: RouteOptions;
    fromAmountForGas?: string;
}
export interface RouteOptions {
    order?: Order;
    slippage?: number;
    infiniteApproval?: boolean;
    allowSwitchChain?: boolean;
    integrator?: string;
    allowDestinationCall?: boolean;
    referrer?: string;
    bridges?: AllowDenyPrefer;
    exchanges?: AllowDenyPrefer;
    fee?: number;
    insurance?: boolean;
    maxPriceImpact?: number;
}
export type ToolsResponse = {
    exchanges: {
        key: string;
        name: string;
        logoURI: string;
        supportedChains: ChainId[];
    }[];
    bridges: {
        key: string;
        name: string;
        logoURI: string;
        supportedChains: {
            fromChainId: ChainId;
            toChainId: ChainId;
        }[];
    }[];
};
export interface AllowDenyPrefer {
    allow?: string[];
    deny?: string[];
    prefer?: string[];
}
export declare const _InsuranceState: readonly ["INSURED", "INSURABLE", "NOT_INSURABLE"];
export type InsuranceState = (typeof _InsuranceState)[number];
export interface Insurance {
    state: InsuranceState;
    feeAmountUsd: string;
}
export interface Route {
    id: string;
    insurance: Insurance;
    fromChainId: number;
    fromAmountUSD: string;
    fromAmount: string;
    fromToken: Token;
    fromAddress?: string;
    toChainId: number;
    toAmountUSD: string;
    toAmount: string;
    toAmountMin: string;
    toToken: Token;
    toAddress?: string;
    gasCostUSD?: string;
    containsSwitchChain?: boolean;
    infiniteApproval?: boolean;
    steps: LifiStep[];
    tags?: Order[];
}
export interface RoutesResponse {
    routes: Route[];
    errors: ToolError[];
}
export type PossibilityTopic = 'chains' | 'tokens' | 'bridges' | 'exchanges';
/**
 * We don't want to support this endpoint anymore in the future. /chains, /tools, /connections, and /tokens should be used instead
 * @deprecated
 */
export interface PossibilitiesRequest {
    chains?: number[];
    bridges?: AllowDenyPrefer;
    exchanges?: AllowDenyPrefer;
    include?: PossibilityTopic[];
}
/**
 * Should not be accessed via the types package anymore
 * @deprecated
 */
export interface PossibilitiesResponse {
    chains?: Chain[];
    tokens?: Token[];
    bridges?: BridgeDefinition[];
    exchanges?: ExchangeDefinition[];
}
export interface GetTokenRequest {
    chain: number | string;
    token: string;
}
export interface ToolConfiguration {
    allowBridges?: string[];
    denyBridges?: string[];
    preferBridges?: string[];
    allowExchanges?: string[];
    denyExchanges?: string[];
    preferExchanges?: string[];
}
export interface QuoteRequest extends ToolConfiguration {
    fromChain: number | string;
    fromToken: string;
    fromAddress: string;
    fromAmount: string;
    toChain: number | string;
    toToken: string;
    toAddress?: string;
    order?: Order;
    slippage?: number | string;
    integrator?: string;
    referrer?: string;
    fee?: number | string;
    insurance?: boolean;
    allowDestinationCall?: boolean;
    fromAmountForGas?: string;
    maxPriceImpact?: number;
}
export interface ContractCallQuoteRequest extends ToolConfiguration {
    fromChain: number | string;
    fromToken: string;
    fromAddress: string;
    toChain: number | string;
    toToken: string;
    toAmount: string;
    toContractAddress: string;
    toContractCallData: string;
    toContractGasLimit: string;
    toApprovalAddress?: string;
    toFallbackAddress?: string;
    contractOutputsToken?: string;
    slippage?: number | string;
    integrator?: string;
    referrer?: string;
    fee?: number | string;
    allowDestinationCall?: boolean;
    maxPriceImpact?: number;
}
export interface ContractCallQuotesRequest extends ToolConfiguration {
    fromChain: number | string;
    fromToken: string;
    fromAddress: string;
    toChain: number | string;
    toFallbackAddress?: string;
    toContractCalls: {
        sendingAmount: string;
        sendingToken: string;
        receivingToken: string;
        contractAddress: string;
        approvalAddress?: string;
        callData: string;
        gasLimit: string;
    }[];
    order?: Order;
    slippage?: number | string;
    integrator?: string;
    referrer?: string;
}
export interface ConnectionsRequest extends ToolConfiguration {
    fromChain?: number | string;
    fromToken?: string;
    toChain?: number | string;
    toToken?: string;
}
export interface Connection {
    fromChainId: number;
    toChainId: number;
    fromTokens: Token[];
    toTokens: Token[];
}
export interface ConnectionsResponse {
    connections: Connection[];
}
export interface GetStatusRequest {
    txHash: string;
    bridge?: string;
    fromChain?: number | string;
    toChain?: number | string;
}
export interface TransactionInfo {
    txHash: string;
    txLink?: string;
    amount?: string;
    token?: Token;
    chainId?: ChainId;
    gasPrice?: string;
    gasUsed?: string;
    gasToken?: Token;
    gasAmount?: string;
    gasAmountUSD?: string;
}
declare const _StatusMessage: readonly ["NOT_FOUND", "INVALID", "PENDING", "DONE", "FAILED"];
export type StatusMessage = (typeof _StatusMessage)[number];
declare const _SubstatusPending: readonly ["WAIT_SOURCE_CONFIRMATIONS", "WAIT_DESTINATION_TRANSACTION", "BRIDGE_NOT_AVAILABLE", "CHAIN_NOT_AVAILABLE", "REFUND_IN_PROGRESS", "UNKNOWN_ERROR"];
export type SubstatusPending = (typeof _SubstatusPending)[number];
declare const _SubstatusDone: readonly ["COMPLETED", "PARTIAL", "REFUNDED"];
export type SubstatusDone = (typeof _SubstatusDone)[number];
declare const _SubstatusFailed: readonly ["NOT_PROCESSABLE_REFUND_NEEDED"];
export type SubstatusFailed = (typeof _SubstatusFailed)[number];
export type Substatus = SubstatusPending | SubstatusDone | SubstatusFailed;
export declare const isSubstatusPending: (substatus: Substatus) => substatus is "UNKNOWN_ERROR" | "WAIT_SOURCE_CONFIRMATIONS" | "WAIT_DESTINATION_TRANSACTION" | "BRIDGE_NOT_AVAILABLE" | "CHAIN_NOT_AVAILABLE" | "REFUND_IN_PROGRESS";
export declare const isSubstatusDone: (substatus: Substatus) => substatus is "COMPLETED" | "PARTIAL" | "REFUNDED";
export declare const isSubstatusFailed: (substatus: Substatus) => substatus is "NOT_PROCESSABLE_REFUND_NEEDED";
export interface StatusInformation {
    status: StatusMessage;
    substatus?: Substatus;
    substatusMessage?: string;
}
export interface StatusResponse extends StatusInformation {
    sending: TransactionInfo;
    receiving?: TransactionInfo;
    tool?: string;
    bridgeExplorerLink?: string;
}
export interface ExtendedChain extends Chain {
    nativeToken: Token;
}
export interface ChainsResponse {
    chains: ExtendedChain[];
}
export interface ToolsRequest {
    chains?: ChainId[];
}
export type TokensRequest = {
    chains?: ChainId[];
};
export type TokensResponse = {
    tokens: {
        [chainId: number]: Token[];
    };
};
export type RequestOptions = {
    signal?: AbortSignal;
};
export interface Integrator {
    integratorId: string;
    feeBalances: FeeBalance[];
}
export type FeeBalance = {
    chainId: ChainId;
    tokenBalances: TokenBalance[];
};
export type TokenBalance = {
    token: Token;
    amount: string;
    amountUsd: string;
};
export interface IntegratorWithdrawalRequest {
    integratorId: string;
    chainId: ChainId;
    tokens?: string[];
}
export interface IntegratorWithdrawalTransactionResponse {
    transactionRequest: TransactionRequest;
}
declare const _LIFuelState: readonly ["PENDING", "DONE", "NOT_FOUND"];
type LIFuelState = (typeof _LIFuelState)[number];
export type LIFuelStatusResponse = {
    status: LIFuelState;
    sending?: TransactionInfo;
    receiving?: TransactionInfo;
};
export type GasRecommendationRequest = {
    chainId: ChainId;
    fromChain?: ChainId;
    fromToken?: string;
};
export type RefetchSourceLIFuelRequest = {
    txHash: string;
    chainId: ChainId;
};
export type LIFuelStatusRequest = {
    txHash: string;
};
export type RefetchLIFuelRequest = {
    txHash: string;
    chainId: ChainId;
};
export type GasRecommendationResponse = {
    available: boolean;
    recommended?: TokenBalance;
    limit?: TokenBalance;
    serviceFee?: TokenBalance;
    fromToken?: Token;
    fromAmount?: string;
    message?: string;
};
export {};
