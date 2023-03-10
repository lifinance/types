/**
 * @deprecated
 * These values are now obtainable from the LI.FI API
 */
export var BridgeTool;
(function (BridgeTool) {
    BridgeTool["connext"] = "connext";
    BridgeTool["hop"] = "hop";
    BridgeTool["multichain"] = "multichain";
    BridgeTool["cbridge"] = "cbridge";
    BridgeTool["hyphen"] = "hyphen";
    BridgeTool["polygon"] = "polygon";
    BridgeTool["arbitrum"] = "arbitrum";
    BridgeTool["avalanche"] = "avalanche";
    BridgeTool["optimism"] = "optimism";
    BridgeTool["across"] = "across";
    BridgeTool["portal"] = "portal";
    BridgeTool["stargate"] = "stargate";
})(BridgeTool || (BridgeTool = {}));
/**
 * @deprecated
 * These values are now obtainable from the LI.FI API
 */
export const supportedBridges = [
    {
        key: BridgeTool.connext,
        name: 'Connext',
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/bridges/connext.png',
        bridgeUrl: 'https://xpollinate.io/',
        discordUrl: 'https://chat.connext.network/',
        supportUrl: 'https://www.notion.so/connext/Connext-NXTP-Support-19a357ebabdd4e888cfcd138fe3e4644',
        docsUrl: 'https://docs.connext.network/',
        explorerUrl: 'https://connextscan.io/',
        analyticsUrl: 'https://connextscan.io/',
    },
    {
        key: BridgeTool.hop,
        name: 'Hop',
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/bridges/hop.png',
        bridgeUrl: 'https://app.hop.exchange/',
        discordUrl: 'https://discord.gg/PwCF88emV4',
        supportUrl: 'https://help.hop.exchange/hc/en-us',
        docsUrl: 'https://docs.hop.exchange/',
        explorerUrl: 'https://explorer.hop.exchange/mainnet/',
        analyticsUrl: 'https://explorer.hop.exchange/mainnet/',
    },
    {
        key: BridgeTool.multichain,
        name: 'Multichain',
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/bridges/anyswap.png',
        bridgeUrl: 'https://app.multichain.org/',
        // discordUrl: '',
        supportUrl: 'https://multichain.zendesk.com/hc/en-us',
        docsUrl: 'https://docs.multichain.org/',
        explorerUrl: 'https://anyswap.net/',
    },
    {
        key: BridgeTool.cbridge,
        name: 'cBridge',
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/bridges/cbridge.png',
        bridgeUrl: 'https://cbridge.celer.network/',
        discordUrl: 'https://discord.com/invite/uGx4fjQ',
        supportUrl: 'https://form.typeform.com/to/Q4LMjUaK',
        docsUrl: 'https://cbridge-docs.celer.network/',
        // explorerUrl: '',
        analyticsUrl: 'https://cbridge-analytics.celer.network/',
    },
    {
        key: BridgeTool.hyphen,
        name: 'Hyphen',
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/bridges/hyphen.png',
        bridgeUrl: 'https://hyphen.biconomy.io/',
        discordUrl: 'https://discord.com/invite/HKHxgyEExQ',
        supportUrl: 'https://discord.com/invite/HKHxgyEExQ',
        docsUrl: 'https://docs.biconomy.io/products/hyphen-instant-cross-chain-transfers',
        // explorerUrl: '',
        analyticsUrl: 'https://hyphen-info.biconomy.io/',
    },
    {
        key: BridgeTool.polygon,
        name: 'Polygon Bridge (PoS)',
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/bridges/polygon.png',
        bridgeUrl: 'https://wallet.polygon.technology/bridge',
        // discordUrl: '',
        supportUrl: 'https://forum.matic.network/',
        docsUrl: 'https://docs.polygon.technology/docs/develop/ethereum-polygon/pos/getting-started',
        // explorerUrl: '',
        // analyticsUrl: '',
    },
    {
        key: BridgeTool.arbitrum,
        name: 'Arbitrum Bridge',
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/bridges/arbitrum.png',
        bridgeUrl: 'https://bridge.arbitrum.io/',
        discordUrl: 'https://discord.gg/ZpZuw7p',
        supportUrl: 'https://discord.gg/ZpZuw7p',
        docsUrl: 'https://developer.offchainlabs.com/docs/bridging_assets',
        // explorerUrl: '',
    },
    {
        key: BridgeTool.avalanche,
        name: 'AVAX Bridge',
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/bridges/avalanche.png',
        bridgeUrl: 'https://bridge.avax.network/',
        discordUrl: 'https://chat.avalabs.org/',
        supportUrl: 'https://docs.avax.network/learn/avalanche-bridge-faq/',
        docsUrl: 'https://docs.avax.network/learn/avalanche-bridge-faq/',
        // explorerUrl: '',
        // analyticsUrl: '',
    },
    {
        key: BridgeTool.optimism,
        name: 'Optimism Gateway',
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/bridges/optimism.png',
        bridgeUrl: 'https://gateway.optimism.io/',
        discordUrl: 'https://discord.com/invite/jrnFEvq',
        supportUrl: 'https://discord.com/invite/jrnFEvq',
        docsUrl: 'https://community.optimism.io/docs/developers/bridge/basics/',
        // explorerUrl: '',
        // analyticsUrl: '',
    },
    {
        key: BridgeTool.across,
        name: 'Across',
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/bridges/acrossv2.png',
        bridgeUrl: 'https://across.to/',
        discordUrl: 'https://discord.gg/t4SZySkn',
        supportUrl: 'https://discord.gg/t4SZySkn',
        docsUrl: 'https://docs.across.to/',
    },
    {
        key: BridgeTool.portal,
        name: 'Wormhole Portal',
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/bridges/wormhole_portal.png',
        bridgeUrl: 'https://portalbridge.com/',
        discordUrl: 'https://discord.com/invite/wormholecrypto',
        supportUrl: 'https://discord.com/invite/wormholecrypto',
        docsUrl: 'https://docs.wormholenetwork.com/wormhole/',
    },
    {
        key: BridgeTool.stargate,
        name: 'Stargate',
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/5685c638772f533edad80fcb210b4bb89e30a50f/src/assets/icons/bridges/stargate.png',
        bridgeUrl: 'https://stargate.finance/',
        discordUrl: 'https://discord.com/invite/TyjeQ45',
        supportUrl: 'https://discord.com/invite/TyjeQ45',
        docsUrl: 'https://stargateprotocol.gitbook.io/stargate/',
    },
    // {
    //   key: BridgeTool.,
    //   name: '',
    //   logoURI:
    //     'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/bridges/.png',
    //   bridgeUrl: '',
    //   discordUrl: '',
    //   supportUrl: '',
    //   docsUrl: '',
    //   explorerUrl: '',
    //   analyticsUrl: '',
    // },
    // for cronos chain, we should confirm if these bridges are available to integrate
    // https://bridge.evodefi.com/
    // https://app.relaychain.com/#/
    // for metis network, we should confirm these bridges as well
    // https://bridge.metis.io/home
    // https://apps.standard.tech/bridge
];
