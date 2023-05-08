/**
 * @deprecated
 * These values are now obtainable from the LI.FI API
 */
export declare enum BridgeTool {
    connext = "connext",
    hop = "hop",
    multichain = "multichain",
    cbridge = "cbridge",
    hyphen = "hyphen",
    polygon = "polygon",
    arbitrum = "arbitrum",
    avalanche = "avalanche",
    optimism = "optimism",
    across = "across",
    portal = "portal",
    stargate = "stargate"
}
export interface Bridge {
    key: BridgeTool;
    name: string;
    logoURI: string;
    bridgeUrl?: string;
    discordUrl?: string;
    supportUrl?: string;
    docsUrl?: string;
    explorerUrl?: string;
    analyticsUrl?: string;
}
/**
 * @deprecated
 * These values are now obtainable from the LI.FI API
 */
export declare const supportedBridges: Array<Bridge>;
