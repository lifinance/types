
export enum BridgeTool {
  nxtp = 'nxtp',
  hop = 'hop',
  anyswap = 'anyswap',
  cbridge = 'cbridge',
  horizon = 'horizon',
}

export interface Bridge {
  key: BridgeTool
  name: string
  logoURI: string
  bridgeUrl?: string
  discordUrl?: string
  supportUrl?: string
  docsUrl?: string
  explorerUrl?: string
}

export const supportedBridges: Array<Bridge> = [
  {
    key: BridgeTool.nxtp,
    name: 'Connext',
    logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/bridges/connext.png',
    bridgeUrl: 'https://xpollinate.io/',
    discordUrl: 'https://chat.connext.network/',
    supportUrl: 'https://www.notion.so/connext/Connext-NXTP-Support-19a357ebabdd4e888cfcd138fe3e4644',
    docsUrl: 'https://docs.connext.network/',
    explorerUrl: 'https://connextscan.io/',
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
  },
  {
    key: BridgeTool.anyswap,
    name: 'Multichain (AnySwap)',
    logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/bridges/anyswap.png',
    bridgeUrl: 'https://app.multichain.org/',
    // discordUrl: '',
    supportUrl: 'https://multichain.zendesk.com/hc/en-us',
    docsUrl: 'https://docs.multichain.org/',
    explorerUrl: 'https://anyswap.net/',
  },
  {
    key: BridgeTool.cbridge,
    name: 'cBRIDGE',
    logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/bridges/cbridge.png',
    bridgeUrl: 'https://cbridge.celer.network/',
    discordUrl: 'https://discord.com/invite/uGx4fjQ',
    supportUrl: 'https://form.typeform.com/to/Q4LMjUaK',
    docsUrl: 'https://cbridge-docs.celer.network/',
    // explorerUrl: '',
    // analyticsUrl: 'https://cbridge-analytics.celer.network/',
  },
  {
    key: BridgeTool.horizon,
    name: 'Horizon',
    logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/bridges/horizon.png',
    bridgeUrl: 'https://bridge.harmony.one/',
    discordUrl: 'https://harmony.one/discord',
    supportUrl: 'https://bridge.harmony.one/help',
    docsUrl: 'https://docs.harmony.one/home/general/horizon-bridge',
    explorerUrl: 'https://bridge.harmony.one/explorer',
  },
]
