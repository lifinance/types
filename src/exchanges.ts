import {
  ChainId,
  CoinKey,
  findDefaultToken,
  findWrappedGasOnChain,
  Token,
} from '.'

/**
 * @deprecated
 * These values are now obtainable from the LiFi API
 */
export enum ExchangeTool {
  oneinch = '1inch',
  paraswap = 'paraswap',
  openocean = 'openocean',
  zerox = '0x',
  dodo = 'dodo',
}

/**
 * @deprecated
 * These values are now obtainable from the LiFi API
 */
export type ExchangeTools = ExchangeTool | string

export interface ExchangeAggregator {
  key: ExchangeTool
  name: string
  logoURI: string
  webUrl: string
}

/**
 * @deprecated
 * These values are now obtainable from the LiFi API
 */
export const supportedExchangeAggregators: Array<ExchangeAggregator> = [
  {
    key: ExchangeTool.oneinch,
    name: '1inch',
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/exchanges/oneinch.png',
    webUrl: 'https://app.1inch.io/',
  },
  {
    key: ExchangeTool.paraswap,
    name: 'ParaSwap',
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/exchanges/paraswap.png',
    webUrl: 'https://paraswap.io/',
  },
  {
    key: ExchangeTool.openocean,
    name: 'OpenOcean',
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/exchanges/openocean.png',
    webUrl: 'https://openocean.finance/classic',
  },
  {
    key: ExchangeTool.zerox,
    name: '0x',
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/exchanges/zerox.png',
    webUrl: 'https://matcha.xyz/markets/',
  },
  {
    key: ExchangeTool.dodo,
    name: 'DODO',
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/exchanges/dodo.png',
    webUrl: 'https://app.dodoex.io/',
  },
]

export interface Exchange {
  key: ExchangeTools
  name: string
  chainId: number
  logoURI: string
  webUrl: string
  graph?: string
  tokenlistUrl: string
  routerAddress: string
  factoryAddress: string
  initCodeHash: string
  baseTokens: readonly Token[]
}

/**
 * @deprecated
 * These values are now obtainable from the LiFi API
 */
export const supportedExchanges: Array<Exchange> = [
  // 1 - Ethereum
  {
    key: 'uniswap-eth',
    name: 'UniswapV2',
    chainId: ChainId.ETH,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/exchanges/uniswap.png',
    webUrl: 'https://app.uniswap.org/#/swap',
    graph: 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2',
    tokenlistUrl: 'https://gateway.ipfs.io/ipns/tokens.uniswap.org',
    routerAddress: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
    factoryAddress: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
    initCodeHash:
      '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f',
    baseTokens: [
      findWrappedGasOnChain(ChainId.ETH),
      findDefaultToken(CoinKey.DAI, ChainId.ETH),
      findDefaultToken(CoinKey.USDC, ChainId.ETH),
      findDefaultToken(CoinKey.USDT, ChainId.ETH),
      findDefaultToken(CoinKey.WBTC, ChainId.ETH),
    ],
  },
  {
    key: 'sushiswap-eth',
    name: 'SushiSwap',
    chainId: ChainId.ETH,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/exchanges/sushi.png',
    webUrl: 'https://app.sushi.com/swap',
    graph: 'https://api.thegraph.com/subgraphs/name/sushiswap/exchange',
    tokenlistUrl:
      'https://raw.githubusercontent.com/sushiswapclassic/token-list/master/sushiswap.tokenlist.json',
    routerAddress: '0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F',
    factoryAddress: '0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac',
    initCodeHash:
      '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
    baseTokens: [
      findWrappedGasOnChain(ChainId.ETH),
      findDefaultToken(CoinKey.DAI, ChainId.ETH),
      findDefaultToken(CoinKey.USDC, ChainId.ETH),
      findDefaultToken(CoinKey.USDT, ChainId.ETH),
      findDefaultToken(CoinKey.WBTC, ChainId.ETH),
      {
        address: '0x383518188c0c6d7730d91b2c03a03c837814a899',
        symbol: 'OHM',
        decimals: 9,
        chainId: ChainId.ETH,
      } as Token,
      findDefaultToken(CoinKey.SUSHI, ChainId.ETH),
    ],
  },

  // 137 - Polygon
  {
    key: 'quickswap-pol',
    name: 'Quickswap',
    chainId: ChainId.POL,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/exchanges/quick.png',
    webUrl: 'https://quickswap.exchange/',
    graph: 'https://api.thegraph.com/subgraphs/name/sameepsi/quickswap06',
    tokenlistUrl:
      'https://unpkg.com/quickswap-default-token-list@1.0.71/build/quickswap-default.tokenlist.json',
    routerAddress: '0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff',
    factoryAddress: '0x5757371414417b8C6CAad45bAeF941aBc7d3Ab32',
    initCodeHash:
      '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f',
    baseTokens: [
      findWrappedGasOnChain(ChainId.POL),
      findDefaultToken(CoinKey.DAI, ChainId.POL),
      findDefaultToken(CoinKey.USDC, ChainId.POL),
      findDefaultToken(CoinKey.USDT, ChainId.POL),
      findDefaultToken(CoinKey.ETH, ChainId.POL),
      findDefaultToken(CoinKey.WBTC, ChainId.POL),
      {
        address: '0x831753dd7087cac61ab5644b308642cc1c33dc13',
        symbol: 'QUICK',
        decimals: 18,
        chainId: ChainId.POL,
      } as Token,
    ],
  }, // https://github.com/QuickSwap/QuickSwap-sdk/blob/master/src/constants.ts
  {
    key: 'honeyswap-pol',
    name: 'Honeyswap',
    chainId: ChainId.POL,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/exchanges/honey.png',
    webUrl: 'https://app.honeyswap.org/',
    graph: 'https://api.thegraph.com/subgraphs/name/1hive/honeyswap-polygon',
    tokenlistUrl: 'https://tokens.honeyswap.org/',
    routerAddress: '0xaD340d0CD0B117B0140671E7cB39770e7675C848',
    factoryAddress: '0x03daa61d8007443a6584e3d8f85105096543c19c',
    initCodeHash:
      '0xae81bbc68f315fbbf7617eb881349af83b1e95241f616966e1e0583ecd0793fe',
    baseTokens: [
      findWrappedGasOnChain(ChainId.POL),
      findDefaultToken(CoinKey.ETH, ChainId.POL),
      {
        address: '0xb371248dd0f9e4061ccf8850e9223ca48aa7ca4b',
        symbol: 'HNY',
        decimals: 18,
        chainId: ChainId.POL,
      } as Token,
    ],
  },
  {
    key: 'sushiswap-pol',
    name: 'SushiSwap',
    chainId: ChainId.POL,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/exchanges/sushi.png',
    webUrl: 'https://app.sushi.com/swap',
    graph: 'https://api.thegraph.com/subgraphs/name/sushiswap/matic-exchange',
    tokenlistUrl:
      'https://raw.githubusercontent.com/sushiswap/list/master/lists/token-lists/default-token-list/tokens/polygon.json',
    routerAddress: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
    factoryAddress: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
    initCodeHash:
      '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
    baseTokens: [
      findWrappedGasOnChain(ChainId.POL),
      findDefaultToken(CoinKey.USDC, ChainId.POL),
      findDefaultToken(CoinKey.DAI, ChainId.POL),
      findDefaultToken(CoinKey.USDT, ChainId.POL),
      findDefaultToken(CoinKey.ETH, ChainId.POL),
      findDefaultToken(CoinKey.WBTC, ChainId.POL),
      findDefaultToken(CoinKey.SUSHI, ChainId.POL),
    ],
  },

  // 56 - Binance Smart Chain
  {
    key: 'pancakeswap-bsc',
    name: 'Pancake',
    chainId: ChainId.BSC,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/exchanges/pancake.png',
    webUrl: 'https://exchange.pancakeswap.finance/',
    graph: 'https://api.thegraph.com/subgraphs/name/bscnodes/pancakeswap',
    tokenlistUrl:
      'https://tokens.pancakeswap.finance/pancakeswap-extended.json',
    routerAddress: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    factoryAddress: '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73',
    initCodeHash:
      '0x00fb7f630766e6a796048ea87d01acd3068e8ff67d078148a3fa3f4a84f69bd5',
    baseTokens: [
      findWrappedGasOnChain(ChainId.BSC),
      {
        address: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
        symbol: 'BUSD',
        decimals: 18,
        chainId: ChainId.BSC,
      } as Token,
      {
        address: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
        symbol: 'CAKE',
        decimals: 18,
        chainId: ChainId.BSC,
      } as Token,
      {
        address: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
        symbol: 'BTCB',
        decimals: 18,
        chainId: ChainId.BSC,
      } as Token,
    ],
  }, // https://github.com/pancakeswap/pancake-swap-sdk/blob/master/src/constants.ts
  {
    key: 'sushiswap-bsc',
    name: 'SushiSwap',
    chainId: ChainId.BSC,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/exchanges/sushi.png',
    webUrl: 'https://app.sushi.com/swap',
    graph: 'https://api.thegraph.com/subgraphs/name/sushiswap/bsc-exchange',
    tokenlistUrl:
      'https://raw.githubusercontent.com/sushiswap/list/master/lists/token-lists/default-token-list/tokens/bsc.json',
    routerAddress: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
    factoryAddress: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
    initCodeHash:
      '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
    baseTokens: [
      findWrappedGasOnChain(ChainId.BSC),
      findDefaultToken(CoinKey.ETH, ChainId.BSC),
      findDefaultToken(CoinKey.DAI, ChainId.BSC),
      findDefaultToken(CoinKey.USDC, ChainId.BSC),
      findDefaultToken(CoinKey.USDT, ChainId.BSC),
      {
        address: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
        symbol: 'BUSD',
        decimals: 18,
        chainId: ChainId.BSC,
      } as Token,
      {
        address: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
        symbol: 'BTCB',
        decimals: 18,
        chainId: ChainId.BSC,
      } as Token,
      findDefaultToken(CoinKey.SUSHI, ChainId.BSC),
    ],
  },

  // 100 - Gnosis
  {
    key: 'honeyswap-dai',
    name: 'Honeyswap',
    chainId: ChainId.DAI,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/exchanges/honey.png',
    webUrl: 'https://app.honeyswap.org/',
    graph: 'https://api.thegraph.com/subgraphs/name/1hive/honeyswap-xdai',
    tokenlistUrl: 'https://tokens.honeyswap.org/',
    routerAddress: '0x1C232F01118CB8B424793ae03F870aa7D0ac7f77',
    factoryAddress: '0xA818b4F111Ccac7AA31D0BCc0806d64F2E0737D7',
    initCodeHash:
      '0x3f88503e8580ab941773b59034fb4b2a63e86dbc031b3633a925533ad3ed2b93',
    baseTokens: [
      findWrappedGasOnChain(ChainId.DAI),
      findDefaultToken(CoinKey.WETH, ChainId.DAI),
      findDefaultToken(CoinKey.USDC, ChainId.DAI),
      {
        address: '0x71850b7e9ee3f13ab46d67167341e4bdc905eef9',
        symbol: 'HNY',
        decimals: 18,
        chainId: ChainId.DAI,
      } as Token,
    ],
  }, // https://github.com/1Hive/honeyswap-sdk/blob/master/src/constants.ts
  {
    key: 'sushiswap-dai',
    name: 'SushiSwap',
    chainId: ChainId.DAI,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/exchanges/sushi.png',
    webUrl: 'https://app.sushi.com/swap',
    graph: 'https://api.thegraph.com/subgraphs/name/sushiswap/xdai-exchange',
    tokenlistUrl:
      'https://raw.githubusercontent.com/sushiswap/list/master/lists/token-lists/default-token-list/tokens/xdai.json',
    routerAddress: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
    factoryAddress: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
    initCodeHash:
      '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
    baseTokens: [
      findWrappedGasOnChain(ChainId.DAI),
      findDefaultToken(CoinKey.USDC, ChainId.DAI),
      findDefaultToken(CoinKey.USDT, ChainId.DAI),
      findDefaultToken(CoinKey.WBTC, ChainId.DAI),
      findDefaultToken(CoinKey.WETH, ChainId.DAI),
      findDefaultToken(CoinKey.SUSHI, ChainId.DAI),
    ],
  },

  // 250 - Fantom
  {
    key: 'spookyswap-ftm',
    name: 'SpookySwap',
    chainId: ChainId.FTM,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/exchanges/spooky.png',
    webUrl: 'https://spookyswap.finance/swap',
    tokenlistUrl:
      'https://raw.githubusercontent.com/SpookySwap/spooky-info/master/src/constants/token/spookyswap.json',
    routerAddress: '0xF491e7B69E4244ad4002BC14e878a34207E38c29',
    factoryAddress: '0x152eE697f2E276fA89E96742e9bB9aB1F2E61bE3',
    initCodeHash:
      '0xcdf2deca40a0bd56de8e3ce5c7df6727e5b1bf2ac96f283fa9c4b3e6b42ea9d2',
    baseTokens: [
      findWrappedGasOnChain(ChainId.FTM),
      findDefaultToken(CoinKey.USDC, ChainId.FTM),
      findDefaultToken(CoinKey.USDT, ChainId.FTM),
      findDefaultToken(CoinKey.DAI, ChainId.FTM),
    ],
  }, // https://github.com/SpookySwap/spookyswap-sdk/blob/master/src/constants.ts
  {
    key: 'sushiswap-ftm',
    name: 'SushiSwap',
    chainId: ChainId.FTM,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/exchanges/sushi.png',
    webUrl: 'https://app.sushi.com/swap',
    graph: 'https://api.thegraph.com/subgraphs/name/sushiswap/fantom-exchange',
    tokenlistUrl:
      'https://raw.githubusercontent.com/sushiswap/list/master/lists/token-lists/default-token-list/tokens/fantom.json',
    routerAddress: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
    factoryAddress: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
    initCodeHash:
      '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
    baseTokens: [
      findWrappedGasOnChain(ChainId.FTM),
      findDefaultToken(CoinKey.DAI, ChainId.FTM),
      findDefaultToken(CoinKey.USDC, ChainId.FTM),
      findDefaultToken(CoinKey.WBTC, ChainId.FTM),
      findDefaultToken(CoinKey.WETH, ChainId.FTM),
      findDefaultToken(CoinKey.SUSHI, ChainId.FTM),
    ],
  },
  {
    key: 'spiritswap',
    name: 'SpiritSwap',
    chainId: ChainId.FTM,
    logoURI:
      'https://github.com/Layer3Org/spiritswap-tokens-list-icon/blob/master/token-list/images/inspirit.png?raw=true',
    webUrl: 'https://app.spiritswap.finance/#/',
    tokenlistUrl:
      'https://gist.githubusercontent.com/mathiasmoeller/493b1ed01c2a789b2e785e51a2808412/raw/b157b697c72e8f3a6d5ef4851ceeb59bd4b64cd6/spiritswap_tokenlist.json',
    routerAddress: '0x16327E3FbDaCA3bcF7E38F5Af2599D2DDc33aE52',
    factoryAddress: '0xEF45d134b73241eDa7703fa787148D9C9F4950b0',
    initCodeHash:
      '0xe242e798f6cee26a9cb0bbf24653bf066e5356ffeac160907fe2cc108e238617',
    baseTokens: [
      findWrappedGasOnChain(ChainId.FTM),
      findDefaultToken(CoinKey.WBTC, ChainId.FTM),
      findDefaultToken(CoinKey.WETH, ChainId.FTM),
      findDefaultToken(CoinKey.USDC, ChainId.FTM),
      findDefaultToken(CoinKey.DAI, ChainId.FTM),
    ],
  },

  // 1666600000 - Harmony Mainnet Shard 0
  {
    key: 'viperswap-one',
    name: 'ViperSwap',
    chainId: ChainId.ONE,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/exchanges/viper.png',
    webUrl: 'https://viper.exchange/#/swap',
    tokenlistUrl:
      'https://d1xrz6ki9z98vb.cloudfront.net/venomswap/lists/venomswap-default.tokenlist.json',
    routerAddress: '0xf012702a5f0e54015362cBCA26a26fc90AA832a3',
    factoryAddress: '0x7D02c116b98d0965ba7B642ace0183ad8b8D2196',
    initCodeHash:
      '0x162f79e638367cd45a118c778971dfd8d96c625d2798d3b71994b035cfe9b6dc',
    baseTokens: [
      findDefaultToken(CoinKey.ONE, ChainId.ONE),
      findWrappedGasOnChain(ChainId.ONE),
      {
        address: '0xEf977d2f931C1978Db5F6747666fa1eACB0d0339',
        symbol: '1DAI',
        decimals: 18,
        chainId: ChainId.ONE,
      } as Token,
      {
        address: '0xE176EBE47d621b984a73036B9DA5d834411ef734',
        symbol: 'BUSD',
        decimals: 18,
        chainId: ChainId.ONE,
      } as Token,
      {
        address: '0x985458E523dB3d53125813eD68c274899e9DfAb4',
        symbol: '1USDC',
        decimals: 6,
        chainId: ChainId.ONE,
      } as Token,
      {
        address: '0xEa589E93Ff18b1a1F1e9BaC7EF3E86Ab62addc79',
        symbol: 'VIPER',
        decimals: 18,
        chainId: ChainId.ONE,
      } as Token,
      {
        address: '0x0dc78c79B4eB080eaD5C1d16559225a46b580694',
        symbol: 'WAGMI',
        decimals: 9,
        chainId: ChainId.ONE,
      } as Token,
    ],
  }, // https://github.com/VenomProtocol/venomswap-sdk/blob/main/src/constants.ts
  {
    key: 'sushiswap-one',
    name: 'SushiSwap',
    chainId: ChainId.ONE,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/exchanges/sushi.png',
    webUrl: 'https://app.sushi.com/swap',
    tokenlistUrl:
      'https://raw.githubusercontent.com/sushiswap/list/master/lists/token-lists/default-token-list/tokens/harmony.json',
    routerAddress: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
    factoryAddress: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
    initCodeHash:
      '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
    baseTokens: [
      findWrappedGasOnChain(ChainId.ONE),
      findDefaultToken(CoinKey.DAI, ChainId.ONE),
      findDefaultToken(CoinKey.USDC, ChainId.ONE),
      findDefaultToken(CoinKey.USDT, ChainId.ONE),
      findDefaultToken(CoinKey.ETH, ChainId.ONE),
      findDefaultToken(CoinKey.WBTC, ChainId.ONE),
      findDefaultToken(CoinKey.SUSHI, ChainId.ONE),
    ],
  }, // https://github.com/sushiswap/sushiswap-sdk/blob/canary/src/constants/addresses.ts

  // 43114 - Avalanche
  {
    key: 'sushiswap-ava',
    name: 'SushiSwap',
    chainId: ChainId.AVA,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/exchanges/sushi.png',
    webUrl: 'https://app.sushi.com/swap',
    tokenlistUrl:
      'https://raw.githubusercontent.com/sushiswap/list/master/lists/token-lists/default-token-list/tokens/avalanche.json',
    routerAddress: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
    factoryAddress: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
    initCodeHash:
      '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
    baseTokens: [
      findWrappedGasOnChain(ChainId.AVA),
      findDefaultToken(CoinKey.USDC, ChainId.AVA),
      findDefaultToken(CoinKey.USDT, ChainId.AVA),
      findDefaultToken(CoinKey.DAI, ChainId.AVA),
      findDefaultToken(CoinKey.WBTC, ChainId.AVA),
      findDefaultToken(CoinKey.WETH, ChainId.AVA),
      findDefaultToken(CoinKey.SUSHI, ChainId.AVA),
    ],
  },

  // 42161 - Arbitrum One
  {
    key: 'sushiswap-arb',
    name: 'SushiSwap',
    chainId: ChainId.ARB,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/exchanges/sushi.png',
    webUrl: 'https://app.sushi.com/swap',
    tokenlistUrl:
      'https://raw.githubusercontent.com/sushiswap/list/master/lists/token-lists/default-token-list/tokens/arbitrum.json',
    routerAddress: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
    factoryAddress: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
    initCodeHash:
      '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
    baseTokens: [
      findDefaultToken(CoinKey.WETH, ChainId.ARB),
      findDefaultToken(CoinKey.WBTC, ChainId.ARB),
      findDefaultToken(CoinKey.USDC, ChainId.ARB),
      findDefaultToken(CoinKey.USDT, ChainId.ARB),
      findDefaultToken(CoinKey.SUSHI, ChainId.ARB),
      {
        address: '0x3e6648c5a70a150a88bce65f4ad4d506fe15d2af',
        symbol: 'SPELL',
        decimals: 18,
        chainId: ChainId.ARB,
      } as Token,
    ],
  },

  // 10 - Optimistic Ethereum
  // Uniswap V3:
  // {
  //   key: 'uniswap-opt',
  //   name: 'UniswapV3',
  //   chainId: 10,
  //   logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/exchanges/uniswap.png',
  //   webUrl: 'https://app.uniswap.org/#/swap',
  //   graph: '',
  //   tokenlistUrl: 'https://static.optimism.io/optimism.tokenlist.json',
  //   routerAddress: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
  //   factoryAddress: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
  //   initCodeHash: '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f',
  //   baseTokens: [
  //     findWrappedGasOnChain(ChainId.OPT),
  //     findDefaultToken(CoinKey.DAI, ChainId.OPT),
  //     findDefaultToken(CoinKey.USDC, ChainId.OPT),
  //     findDefaultToken(CoinKey.USDT, ChainId.OPT),
  //     findDefaultToken(CoinKey.WBTC, ChainId.OPT),
  //   ]
  // },

  // 1285 - Moonriver
  {
    key: 'sushiswap-mor',
    name: 'SushiSwap',
    chainId: ChainId.MOR,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/exchanges/sushi.png',
    webUrl: 'https://app.sushi.com/swap',
    tokenlistUrl:
      'https://raw.githubusercontent.com/sushiswap/list/master/lists/token-lists/default-token-list/tokens/moonriver.json',
    routerAddress: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
    factoryAddress: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
    initCodeHash:
      '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
    baseTokens: [
      findWrappedGasOnChain(ChainId.MOR),
      findDefaultToken(CoinKey.WETH, ChainId.MOR),
      findDefaultToken(CoinKey.WBTC, ChainId.MOR),
      findDefaultToken(CoinKey.USDC, ChainId.MOR),
      findDefaultToken(CoinKey.USDT, ChainId.MOR),
      findDefaultToken(CoinKey.SUSHI, ChainId.MOR),
      {
        address: '0x1a93b23281cc1cde4c4741353f3064709a16197d',
        symbol: 'FRAX',
        decimals: 18,
        chainId: ChainId.MOR,
      } as Token,
      {
        address: '0x0cae51e1032e8461f4806e26332c030e34de3adb',
        symbol: 'MIM',
        decimals: 18,
        chainId: ChainId.MOR,
      } as Token,
      {
        address: '0x3d2d044e8c6dad46b4f7896418d3d4dfaad902be',
        symbol: 'aROME',
        decimals: 9,
        chainId: ChainId.MOR,
      } as Token,
    ],
  },
  {
    key: 'solarbeam-mor',
    name: 'Solarbeam',
    chainId: ChainId.MOR,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/exchanges/solarbeam.png',
    webUrl: 'https://app.solarbeam.io/exchange/swap',
    tokenlistUrl:
      'https://raw.githubusercontent.com/solarbeamio/solarbeam-tokenlist/main/solarbeam.tokenlist.json',
    routerAddress: '0xAA30eF758139ae4a7f798112902Bf6d65612045f',
    factoryAddress: '0x049581aEB6Fe262727f290165C29BDAB065a1B68',
    initCodeHash:
      '0x9a100ded5f254443fbd264cb7e87831e398a8b642e061670a9bc35ba27293dbf',
    baseTokens: [
      findWrappedGasOnChain(ChainId.MOR),
      findDefaultToken(CoinKey.USDC, ChainId.MOR),
      {
        address: '0x1a93b23281cc1cde4c4741353f3064709a16197d',
        symbol: 'FRAX',
        decimals: 18,
        chainId: ChainId.MOR,
      } as Token,
      {
        address: '0x6bd193ee6d2104f14f94e2ca6efefae561a4334b',
        symbol: 'SOLAR',
        decimals: 18,
        chainId: ChainId.MOR,
      } as Token,
    ],
  },

  // 128 - HECO Chain
  {
    key: 'sushiswap-hec',
    name: 'SushiSwap',
    chainId: ChainId.HEC,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/exchanges/sushi.png',
    webUrl: 'https://app.sushi.com/swap',
    tokenlistUrl:
      'https://raw.githubusercontent.com/sushiswap/list/master/lists/token-lists/default-token-list/tokens/heco.json',
    routerAddress: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
    factoryAddress: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
    initCodeHash:
      '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
    baseTokens: [
      findWrappedGasOnChain(ChainId.HEC),
      findDefaultToken(CoinKey.ETH, ChainId.HEC),
      findDefaultToken(CoinKey.USDC, ChainId.HEC),
      findDefaultToken(CoinKey.USDT, ChainId.HEC),
      findDefaultToken(CoinKey.SUSHI, ChainId.HEC),
      {
        address: '0x66a79d23e58475d2738179ca52cd0b41d73f0bea',
        symbol: 'HBTC',
        decimals: 18,
        chainId: ChainId.HEC,
      } as Token,
      {
        address: '0x3d760a45d0887dfd89a2f5385a236b29cb46ed2a',
        symbol: 'DAIHECO',
        decimals: 18,
        chainId: ChainId.HEC,
      } as Token,
    ],
  },

  // 66 - OKEX
  {
    key: 'sushiswap-okt',
    name: 'SushiSwap',
    chainId: ChainId.OKT,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/exchanges/sushi.png',
    webUrl: 'https://app.sushi.com/swap',
    tokenlistUrl:
      'https://raw.githubusercontent.com/sushiswap/list/master/lists/token-lists/default-token-list/tokens/okex.json',
    routerAddress: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
    factoryAddress: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
    initCodeHash:
      '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
    baseTokens: [
      findWrappedGasOnChain(ChainId.OKT),
      findDefaultToken(CoinKey.ETH, ChainId.OKT),
      findDefaultToken(CoinKey.WBTC, ChainId.OKT),
      findDefaultToken(CoinKey.DAI, ChainId.OKT),
      findDefaultToken(CoinKey.USDC, ChainId.OKT),
      findDefaultToken(CoinKey.USDT, ChainId.OKT),
      findDefaultToken(CoinKey.SUSHI, ChainId.OKT),
    ],
  },
  {
    key: 'jswap-okt',
    name: 'JSwap',
    chainId: ChainId.OKT,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/exchanges/jswap.png',
    webUrl: 'https://app.jswap.finance/#/swap',
    tokenlistUrl:
      'https://resources.jswap.finance/token-list/oec/extended.tokenlist.json',
    routerAddress: '0x069A306A638ac9d3a68a6BD8BE898774C073DCb3',
    factoryAddress: '0xd654CbF99F2907F06c88399AE123606121247D5C',
    initCodeHash:
      '0xf6608394468275c0df88a8568e9fbf7295a0aebddd5ae966ce6dbf5bb4ee68a0',
    baseTokens: [
      findDefaultToken(CoinKey.OKT, ChainId.OKT),
      findDefaultToken(CoinKey.ETH, ChainId.OKT),
      findDefaultToken(CoinKey.USDT, ChainId.OKT),
      {
        address: '0x54e4622dc504176b3bb432dccaf504569699a7ff',
        symbol: 'BTCK',
        decimals: 18,
        chainId: ChainId.OKT,
      } as Token,
      {
        address: '0xdf54b6c6195ea4d948d03bfd818d365cf175cfc2',
        symbol: 'OKB',
        decimals: 18,
        chainId: ChainId.OKT,
      } as Token,
      {
        address: '0x5fac926bf1e638944bb16fb5b787b5ba4bc85b0a',
        symbol: 'JF',
        decimals: 18,
        chainId: ChainId.OKT,
      } as Token,
    ],
  },

  // 25 - Cronos Mainnet Beta
  {
    key: 'cronaswap-cro',
    name: 'CronaSwap',
    chainId: ChainId.CRO,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/exchanges/cronaswap.png',
    webUrl: 'https://app.cronaswap.org/swap',
    tokenlistUrl:
      'https://raw.githubusercontent.com/cronaswap/default-token-list/main/assets/tokens/cronos.json',
    routerAddress: '0xcd7d16fB918511BF7269eC4f48d61D79Fb26f918',
    factoryAddress: '0x73A48f8f521EB31c55c0e1274dB0898dE599Cb11',
    initCodeHash:
      '0xc93158cffa5b575e32566e81e847754ce517f8fa988d3e25cf346d916216e06f',
    baseTokens: [
      findDefaultToken(CoinKey.CRO, ChainId.CRO),
      findDefaultToken(CoinKey.USDC, ChainId.CRO),
      {
        address: '0xadbd1231fb360047525bedf962581f3eee7b49fe',
        symbol: 'CRONA',
        decimals: 18,
        chainId: ChainId.CRO,
      } as Token,
    ],
  },
  // TODO: For cronos chain, we will add KyberSwap in the near future, they're still in development

  // 1284 - Moonbeam
  {
    key: 'stellaswap-moo',
    name: 'StellaSwap',
    chainId: ChainId.MOO,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/exchanges/stellaswap.png',
    webUrl: 'https://app.stellaswap.com/',
    tokenlistUrl:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/tokens/stellaswap.json',
    routerAddress: '0xd0A01ec574D1fC6652eDF79cb2F880fd47D34Ab1',
    factoryAddress: '0x68A384D826D3678f78BB9FB1533c7E9577dACc0E',
    initCodeHash:
      '0x48a6ca3d52d0d0a6c53a83cc3c8688dd46ea4cb786b169ee959b95ad30f61643',
    baseTokens: [
      {
        address: '0x0E358838ce72d5e61E0018a2ffaC4bEC5F4c88d2',
        symbol: 'STELLA',
        decimals: 18,
        chainId: ChainId.MOO,
      } as Token,
      {
        address: '0x818ec0A7Fe18Ff94269904fCED6AE3DaE6d6dC0b',
        symbol: 'USDC',
        decimals: 6,
        chainId: ChainId.MOO,
      } as Token,
      {
        address: '0xAcc15dC74880C9944775448304B263D191c6077F',
        symbol: 'WGLMR',
        decimals: 18,
        chainId: ChainId.MOO,
      } as Token,
    ],
  },
  {
    key: 'beamswap-moo',
    name: 'BeamSwap',
    chainId: ChainId.MOO,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/exchanges/beamswap.png',
    webUrl: 'https://app.beamswap.io/',
    tokenlistUrl:
      'https://raw.githubusercontent.com/BeamSwap/beamswap-tokenlist/main/tokenlist.json',
    routerAddress: '0x96b244391D98B62D19aE89b1A4dCcf0fc56970C7',
    factoryAddress: '0x985BcA32293A7A496300a48081947321177a86FD',
    initCodeHash:
      '0xe31da4209ffcce713230a74b5287fa8ec84797c9e77e1f7cfeccea015cdc97ea',
    baseTokens: [
      findWrappedGasOnChain(ChainId.MOO),
      findDefaultToken(CoinKey.BNB, ChainId.MOO),
      findDefaultToken(CoinKey.ETH, ChainId.MOO),
      {
        chainId: 1284,
        address: '0xeFAeeE334F0Fd1712f9a8cc375f427D9Cdd40d73',
        symbol: 'USDT',
        name: 'USDT Token',
        decimals: 6,
      },
      {
        chainId: 1284,
        address: '0xA649325Aa7C5093d12D6F98EB4378deAe68CE23F',
        symbol: 'BUSD',
        name: 'BUSD Token',
        decimals: 18,
      },
      {
        chainId: 1284,
        address: '0x818ec0A7Fe18Ff94269904fCED6AE3DaE6d6dC0b',
        symbol: 'USDC',
        name: 'USDC Token',
        decimals: 6,
      },
    ],
  },

  // 122 - Fuse Mainnet // TODO: incomplete
  // {
  //   key: 'fuseswap-fus',
  //   name: 'FuseSwap',
  //   chainId: ChainId.FUS,
  //   logoURI:
  //     'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/exchanges/fuseswap.png',
  //   webUrl: 'https://app.fuse.fi/#/swap',
  //   graph: 'https://api.thegraph.com/subgraphs/name/fuseio/fuseswap',
  //   tokenlistUrl:
  //     'https://raw.githubusercontent.com/fuseio/fuseswap-default-token-list/master/build/fuseswap-default.tokenlist.json',
  //   // we should add router address, factory address and init code hash
  //   routerAddress: '',
  //   factoryAddress: '',
  //   initCodeHash: '',
  //   baseTokens: [
  //     findWrappedGasOnChain(ChainId.FUS),
  //     findDefaultToken(CoinKey.FUSE, ChainId.FUS),
  //     findDefaultToken(CoinKey.USDC, ChainId.FUS),
  //     findDefaultToken(CoinKey.USDT, ChainId.FUS),
  //     findDefaultToken(CoinKey.WBTC, ChainId.FUS),
  //     findDefaultToken(CoinKey.WETH, ChainId.FUS),
  //     {
  //       address: '0x249be57637d8b013ad64785404b24aebae9b098b',
  //       symbol: 'fUSD',
  //       decimals: 18,
  //       chainId: ChainId.FUS,
  //     } as Token,
  //   ],
  // },
  {
    key: 'sushiswap-fus',
    name: 'SushiSwap',
    chainId: ChainId.FUS,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/exchanges/sushi.png',
    webUrl: 'https://app.sushi.com/swap',
    tokenlistUrl:
      'https://raw.githubusercontent.com/sushiswap/list/master/lists/token-lists/default-token-list/tokens/fuse.json',
    routerAddress: '0xF4d73326C13a4Fc5FD7A064217e12780e9Bd62c3',
    factoryAddress: '0x43eA90e2b786728520e4f930d2A71a477BF2737C',
    initCodeHash:
      '0x1901958ef8b470f2c0a3875a79ee0bd303866d85102c0f1ea820d317024d50b5',
    baseTokens: [
      findWrappedGasOnChain(ChainId.FUS),
      findDefaultToken(CoinKey.USDC, ChainId.FUS),
      findDefaultToken(CoinKey.USDT, ChainId.FUS),
      findDefaultToken(CoinKey.WBTC, ChainId.FUS),
      findDefaultToken(CoinKey.WETH, ChainId.FUS),
      findDefaultToken(CoinKey.DAI, ChainId.FUS),
      findDefaultToken(CoinKey.SUSHI, ChainId.FUS),
    ],
  },

  // 42220 Celo Mainnet
  {
    key: 'ubeswap-cel',
    name: 'UbeSwap',
    chainId: ChainId.CEL,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/exchanges/ubeswap.png',
    webUrl: 'https://app.ubeswap.org/#/swap',
    graph: 'https://api.thegraph.com/subgraphs/name/ubeswap/ubeswap',
    tokenlistUrl:
      'https://raw.githubusercontent.com/Ubeswap/default-token-list/master/ubeswap.token-list.json',
    routerAddress: '0xE3D8bd6Aed4F159bc8000a9cD47CffDb95F96121',
    factoryAddress: '0x62d5b84bE28a183aBB507E125B384122D2C25fAE',
    initCodeHash:
      '0xb3b8ff62960acea3a88039ebcf80699f15786f1b17cebd82802f7375827a339c',
    baseTokens: [
      findWrappedGasOnChain(ChainId.CEL),
      {
        address: '0x918146359264c492bd6934071c6bd31c854edbc3',
        symbol: 'mCUSD',
        decimals: 18,
        chainId: ChainId.CEL,
      } as Token,
      {
        address: '0xe273ad7ee11dcfaa87383ad5977ee1504ac07568',
        symbol: 'mCEUR',
        decimals: 18,
        chainId: ChainId.CEL,
      } as Token,
    ],
  },
  {
    key: 'sushiswap-cel',
    name: 'SushiSwap',
    chainId: ChainId.CEL,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/exchanges/sushi.png',
    webUrl: 'https://app.sushi.com/swap',
    tokenlistUrl:
      'https://raw.githubusercontent.com/sushiswap/list/master/lists/token-lists/default-token-list/tokens/celo.json',
    routerAddress: '0x1421bDe4B10e8dd459b3BCb598810B1337D56842',
    factoryAddress: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
    initCodeHash:
      '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
    baseTokens: [
      findWrappedGasOnChain(ChainId.CEL),
      findDefaultToken(CoinKey.USDC, ChainId.CEL),
      findDefaultToken(CoinKey.WBTC, ChainId.CEL),
      findDefaultToken(CoinKey.WETH, ChainId.CEL),
      findDefaultToken(CoinKey.SUSHI, ChainId.CEL),
      {
        address: '0x765de816845861e75a25fca122bb6898b8b1282a',
        symbol: 'cUSD',
        decimals: 18,
        chainId: ChainId.CEL,
      } as Token,
      {
        address: '0xd8763cba276a3738e6de85b4b3bf5fded6d6ca73',
        symbol: 'cEUR',
        decimals: 18,
        chainId: ChainId.CEL,
      } as Token,
    ],
  },

  // 1088 Metis Andromeda Mainnet // TODO: incomplete
  // {
  //   key: 'standard-mam',
  //   name: 'Standard',
  //   chainId: ChainId.MAM,
  //   logoURI:
  //     'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/exchanges/standard.png',
  //   webUrl: 'https://apps.standard.tech/trade',
  //   tokenlistUrl:
  //     'https://raw.githubusercontent.com/digitalnativeinc/default-token-list/dnf/tokens/metis.json',
  //   // we should add router address, factory address and init code hash
  //   routerAddress: '',
  //   factoryAddress: '',
  //   initCodeHash: '',
  //   baseTokens: [
  //     findWrappedGasOnChain(ChainId.MAM),
  //     {
  //       address: '0xc12cac7090baa48ec750cceec57c80768f6ee58e',
  //       symbol: 'STND',
  //       decimals: 18,
  //       chainId: ChainId.MAM,
  //     } as Token,
  //     {
  //       address: '0xea32a96608495e54156ae48931a7c20f0dcc1a21',
  //       symbol: 'm.USDC',
  //       decimals: 6,
  //       chainId: ChainId.MAM,
  //     } as Token,
  //     {
  //       address: '0xbb06dca3ae6887fabf931640f67cab3e3a16f4dc',
  //       symbol: 'm.USDT',
  //       decimals: 6,
  //       chainId: ChainId.MAM,
  //     } as Token,
  //   ],
  // },

  // 288 Boba Network
  {
    key: 'oolongswap-bob',
    name: 'OolongSwap',
    chainId: ChainId.BOB,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/exchanges/oolongswap.png',
    webUrl: 'https://oolongswap.com/#/swap',
    tokenlistUrl:
      'https://raw.githubusercontent.com/OolongSwap/boba-community-token-list/main/build/boba.tokenlist.json',
    routerAddress: '0x17C83E2B96ACfb5190d63F5E46d93c107eC0b514',
    factoryAddress: '0x7DDaF116889D655D1c486bEB95017a8211265d29',
    initCodeHash:
      '0x1db9efb13a1398e31bb71895c392fa1217130f78dc65080174491adcec5da9b9',
    baseTokens: [
      findDefaultToken(CoinKey.ETH, ChainId.BOB),
      findWrappedGasOnChain(ChainId.BOB),
      findDefaultToken(CoinKey.WBTC, ChainId.BOB),
      findDefaultToken(CoinKey.DAI, ChainId.BOB),
      findDefaultToken(CoinKey.USDC, ChainId.BOB),
      findDefaultToken(CoinKey.USDT, ChainId.BOB),
      {
        address: '0xa18bf3994c0cc6e3b63ac420308e5383f53120d7',
        symbol: 'BOBA',
        decimals: 18,
        chainId: ChainId.BOB,
      } as Token,
      {
        address: '0x5008f837883ea9a07271a1b5eb0658404f5a9610',
        symbol: 'OLO',
        decimals: 18,
        chainId: ChainId.BOB,
      } as Token,
    ],
  },

  // TESTNETS
  // 3 - Ropsten
  {
    key: 'uniswap-rop',
    name: 'Uniswap',
    chainId: ChainId.ROP,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/exchanges/uniswap.png',
    webUrl: 'https://app.uniswap.org/',
    tokenlistUrl:
      'https://raw.githubusercontent.com/compound-finance/token-list/master/compound.tokenlist.json',
    routerAddress: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
    factoryAddress: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
    initCodeHash:
      '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f',
    baseTokens: [
      findDefaultToken(CoinKey.ETH, ChainId.ROP),
      findDefaultToken(CoinKey.WETH, ChainId.ROP),
    ],
  },

  // TODO: sushiswap does not work properly
  // {
  //   key: 'sushiswap-rop',
  //   name: 'SushiSwap',
  //   chainId: ChainId.ROP,
  //   logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/exchanges/sushi.png',
  //   webUrl: 'https://app.sushi.com/swap',
  //   tokenlistUrl: 'https://raw.githubusercontent.com/sushiswap/list/master/lists/token-lists/default-token-list/tokens/ropsten.json',
  //   routerAddress: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  //   factoryAddress: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  //   initCodeHash: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  // },

  // 4 - Rinkeby
  {
    key: 'uniswap-rin',
    name: 'Uniswap',
    chainId: ChainId.RIN,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/exchanges/uniswap.png',
    webUrl: 'https://app.uniswap.org/',
    tokenlistUrl:
      'https://raw.githubusercontent.com/compound-finance/token-list/master/compound.tokenlist.json',
    routerAddress: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
    factoryAddress: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
    initCodeHash:
      '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f',
    baseTokens: [
      findDefaultToken(CoinKey.ETH, ChainId.RIN),
      findDefaultToken(CoinKey.WETH, ChainId.RIN),
    ],
  },

  // TODO: sushiswap does not work properly
  // {
  //   key: 'sushiswap-rin',
  //   name: 'SushiSwap',
  //   chainId: ChainId.RIN,
  //   logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/exchanges/sushi.png',
  //   webUrl: 'https://app.sushi.com/swap',
  //   tokenlistUrl: 'https://raw.githubusercontent.com/sushiswap/list/master/lists/token-lists/default-token-list/tokens/rinkeby.json',
  //   routerAddress: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  //   factoryAddress: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  //   initCodeHash: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  // },

  // 5 - Goerli
  {
    key: 'uniswap-gor',
    name: 'Uniswap',
    chainId: ChainId.GOR,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/exchanges/uniswap.png',
    webUrl: 'https://app.uniswap.org/',
    tokenlistUrl:
      'https://raw.githubusercontent.com/compound-finance/token-list/master/compound.tokenlist.json',
    routerAddress: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
    factoryAddress: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
    initCodeHash:
      '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f',
    baseTokens: [
      findDefaultToken(CoinKey.ETH, ChainId.GOR),
      findDefaultToken(CoinKey.WETH, ChainId.GOR),
    ],
  },

  // TODO: sushiswap does not work properly
  // {
  //   key: 'sushiswap-gor',
  //   name: 'SushiSwap',
  //   chainId: ChainId.GOR,
  //   logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/exchanges/sushi.png',
  //   webUrl: 'https://app.sushi.com/swap',
  //   tokenlistUrl: 'https://raw.githubusercontent.com/sushiswap/list/master/lists/token-lists/default-token-list/tokens/goerli.json',
  //   routerAddress: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  //   factoryAddress: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  //   initCodeHash: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  //   baseTokens: [],
  // },

  // 42 - Kovan
  {
    key: 'uniswap-kov',
    name: 'Uniswap',
    chainId: ChainId.KOV,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/exchanges/uniswap.png',
    webUrl: 'https://app.uniswap.org/',
    tokenlistUrl:
      'https://raw.githubusercontent.com/compound-finance/token-list/master/compound.tokenlist.json',
    routerAddress: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
    factoryAddress: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
    initCodeHash:
      '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f',
    baseTokens: [
      findDefaultToken(CoinKey.ETH, ChainId.KOV),
      findDefaultToken(CoinKey.WETH, ChainId.KOV),
    ],
  },

  // TODO: sushiswap does not work properly
  // {
  //   key: 'sushiswap-kov',
  //   name: 'SushiSwap',
  //   chainId: ChainId.KOV,
  //   logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/exchanges/sushi.png',
  //   webUrl: 'https://app.sushi.com/swap',
  //   tokenlistUrl: 'https://raw.githubusercontent.com/sushiswap/list/master/lists/token-lists/default-token-list/tokens/kovan.json',
  //   routerAddress: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  //   factoryAddress: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  //   initCodeHash: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  //   baseTokens: [],
  // },

  // 1666700000 - HARMONY TESTNET
  // TODO: Only sushiswap support ONET but official swap website also does not work correctly

  {
    key: 'sushiswap-onet',
    name: 'SushiSwap',
    chainId: ChainId.ONET,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/exchanges/sushi.png',
    webUrl: 'https://app.sushi.com/swap',
    tokenlistUrl:
      'https://raw.githubusercontent.com/sushiswap/list/master/lists/token-lists/default-token-list/tokens/harmony-testnet.json',
    routerAddress: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
    factoryAddress: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
    initCodeHash:
      '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
    baseTokens: [],
  },

  // 97 - Binance Smart Chain TESTNET
  // TODO: Only sushiswap support BSCT but official swap website also does not work correctly
  {
    key: 'sushiswap-bsct',
    name: 'SushiSwap',
    chainId: ChainId.BSCT,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/exchanges/sushi.png',
    webUrl: 'https://app.sushi.com/swap',
    tokenlistUrl:
      'https://raw.githubusercontent.com/sushiswap/list/master/lists/token-lists/default-token-list/tokens/harmony-testnet.json',
    routerAddress: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
    factoryAddress: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
    initCodeHash:
      '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
    baseTokens: [findWrappedGasOnChain(ChainId.ONET)],
  },
]

/**
 * @deprecated
 * Available exchanges should be queried from the API
 */
export const getExchangeByKey = (key: string): Exchange => {
  const exchange = supportedExchanges.find((exchange) => exchange.key === key)
  if (!exchange) {
    throw new Error('Invalid key')
  }
  return exchange
}
