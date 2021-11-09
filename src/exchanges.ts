import {
  ChainId,
  ChainKey,
  CoinKey,
  findDefaultCoinOnChain,
  findWrappedGasOnChain,
  Token,
} from '.'

export interface Exchange {
  key: string
  name: string
  chainId: number
  logoURI: string
  webUrl: string
  graph?: string
  tokenlistUrl: string
  routerAddress: string
  factoryAddress: string
  initCodeHash: string
  baseTokens: Array<Token>
}

export const supportedExchanges: Array<Exchange> = [
  // 1 - Ethereum
  {
    key: 'uniswap-eth',
    name: 'UniswapV2',
    chainId: ChainId.ETH,
    logoURI: '...',
    webUrl: 'https://app.uniswap.org/#/swap',
    graph: 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2',
    tokenlistUrl: 'https://gateway.ipfs.io/ipns/tokens.uniswap.org',
    routerAddress: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
    factoryAddress: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
    initCodeHash:
      '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f',
    baseTokens: [
      findWrappedGasOnChain(ChainKey.ETH),
      findDefaultCoinOnChain(CoinKey.DAI, ChainKey.ETH),
      findDefaultCoinOnChain(CoinKey.USDC, ChainKey.ETH),
      findDefaultCoinOnChain(CoinKey.USDT, ChainKey.ETH),
      findDefaultCoinOnChain(CoinKey.WBTC, ChainKey.ETH),
    ],
  },
  {
    key: 'sushiswap-eth',
    name: 'SushiSwap',
    chainId: ChainId.ETH,
    logoURI: '...',
    webUrl: 'https://app.sushi.com/swap',
    graph: 'https://api.thegraph.com/subgraphs/name/sushiswap/exchange',
    tokenlistUrl:
      'https://raw.githubusercontent.com/sushiswapclassic/token-list/master/sushiswap.tokenlist.json',
    routerAddress: '0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F',
    factoryAddress: '0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac',
    initCodeHash:
      '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
    baseTokens: [
      findWrappedGasOnChain(ChainKey.ETH),
      findDefaultCoinOnChain(CoinKey.DAI, ChainKey.ETH),
      findDefaultCoinOnChain(CoinKey.USDC, ChainKey.ETH),
      findDefaultCoinOnChain(CoinKey.USDT, ChainKey.ETH),
      findDefaultCoinOnChain(CoinKey.WBTC, ChainKey.ETH),
      {
        id: '0x383518188C0C6d7730D91b2c03a03C837814a899',
        symbol: 'OHM',
        decimals: 9,
        chainId: ChainId.ETH,
        chainKey: ChainKey.ETH,
      } as Token,
      findDefaultCoinOnChain(CoinKey.SUSHI, ChainKey.ETH),
    ],
  },

  // 137 - Polygon
  {
    key: 'quickswap-pol',
    name: 'Quickswap',
    chainId: ChainId.POL,
    logoURI: '...',
    webUrl: 'https://quickswap.exchange/',
    graph: 'https://api.thegraph.com/subgraphs/name/sameepsi/quickswap06',
    tokenlistUrl:
      'https://unpkg.com/quickswap-default-token-list@1.0.71/build/quickswap-default.tokenlist.json',
    routerAddress: '0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff',
    factoryAddress: '0x5757371414417b8C6CAad45bAeF941aBc7d3Ab32',
    initCodeHash:
      '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f',
    baseTokens: [
      findWrappedGasOnChain(ChainKey.POL),
      findDefaultCoinOnChain(CoinKey.DAI, ChainKey.POL),
      findDefaultCoinOnChain(CoinKey.USDC, ChainKey.POL),
      findDefaultCoinOnChain(CoinKey.USDT, ChainKey.POL),
      findDefaultCoinOnChain(CoinKey.ETH, ChainKey.POL),
      findDefaultCoinOnChain(CoinKey.WBTC, ChainKey.POL),
      {
        id: '0x831753DD7087CaC61aB5644b308642cc1c33Dc13',
        symbol: 'QUICK',
        decimals: 18,
        chainId: ChainId.POL,
        chainKey: ChainKey.POL,
      } as Token,
    ],
  }, // https://github.com/QuickSwap/QuickSwap-sdk/blob/master/src/constants.ts
  {
    key: 'honeyswap-pol',
    name: 'Honeyswap',
    chainId: ChainId.POL,
    logoURI: '...',
    webUrl: 'https://app.honeyswap.org/',
    graph: 'https://api.thegraph.com/subgraphs/name/1hive/honeyswap-polygon',
    tokenlistUrl: 'https://tokens.honeyswap.org/',
    routerAddress: '0xaD340d0CD0B117B0140671E7cB39770e7675C848',
    factoryAddress: '0x03daa61d8007443a6584e3d8f85105096543c19c',
    initCodeHash:
      '0xae81bbc68f315fbbf7617eb881349af83b1e95241f616966e1e0583ecd0793fe',
    baseTokens: [
      findWrappedGasOnChain(ChainKey.POL),
      findDefaultCoinOnChain(CoinKey.ETH, ChainKey.POL),
      {
        id: '0xb371248dd0f9e4061ccf8850e9223ca48aa7ca4b',
        symbol: 'HNY',
        decimals: 18,
        chainId: ChainId.POL,
        chainKey: ChainKey.POL,
      } as Token,
    ],
  },
  {
    key: 'sushiswap-pol',
    name: 'SushiSwap',
    chainId: ChainId.POL,
    logoURI: '...',
    webUrl: 'https://app.sushi.com/swap',
    graph: 'https://api.thegraph.com/subgraphs/name/sushiswap/matic-exchange',
    tokenlistUrl:
      'https://raw.githubusercontent.com/sushiswap/default-token-list/master/tokens/matic.json',
    routerAddress: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
    factoryAddress: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
    initCodeHash:
      '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
    baseTokens: [
      findWrappedGasOnChain(ChainKey.POL),
      findDefaultCoinOnChain(CoinKey.USDC, ChainKey.POL),
      findDefaultCoinOnChain(CoinKey.DAI, ChainKey.POL),
      findDefaultCoinOnChain(CoinKey.USDT, ChainKey.POL),
      findDefaultCoinOnChain(CoinKey.ETH, ChainKey.POL),
      findDefaultCoinOnChain(CoinKey.WBTC, ChainKey.POL),
      findDefaultCoinOnChain(CoinKey.SUSHI, ChainKey.POL),
    ],
  },

  // 56 - Binance Smart Chain
  {
    key: 'pancakeswap-bsc',
    name: 'Pancake',
    chainId: ChainId.BSC,
    logoURI: '...',
    webUrl: 'https://exchange.pancakeswap.finance/',
    graph: 'https://api.thegraph.com/subgraphs/name/bscnodes/pancakeswap',
    tokenlistUrl:
      'https://tokens.pancakeswap.finance/pancakeswap-extended.json',
    routerAddress: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    factoryAddress: '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73',
    initCodeHash:
      '0x00fb7f630766e6a796048ea87d01acd3068e8ff67d078148a3fa3f4a84f69bd5',
    baseTokens: [
      findWrappedGasOnChain(ChainKey.BSC),
      {
        id: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
        symbol: 'BUSD',
        decimals: 18,
        chainId: ChainId.BSC,
        chainKey: ChainKey.BSC,
      } as Token,
      {
        id: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
        symbol: 'CAKE',
        decimals: 18,
        chainId: ChainId.BSC,
        chainKey: ChainKey.BSC,
      } as Token,
      {
        id: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
        symbol: 'BTCB',
        decimals: 18,
        chainId: ChainId.BSC,
        chainKey: ChainKey.BSC,
      } as Token,
    ],
  }, // https://github.com/pancakeswap/pancake-swap-sdk/blob/master/src/constants.ts
  {
    key: 'sushiswap-bsc',
    name: 'SushiSwap',
    chainId: ChainId.BSC,
    logoURI: '...',
    webUrl: 'https://app.sushi.com/swap',
    graph: 'https://api.thegraph.com/subgraphs/name/sushiswap/bsc-exchange',
    tokenlistUrl:
      'https://raw.githubusercontent.com/sushiswap/default-token-list/master/tokens/bsc.json',
    routerAddress: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
    factoryAddress: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
    initCodeHash:
      '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
    baseTokens: [
      findWrappedGasOnChain(ChainKey.BSC),
      findDefaultCoinOnChain(CoinKey.ETH, ChainKey.BSC),
      findDefaultCoinOnChain(CoinKey.DAI, ChainKey.BSC),
      findDefaultCoinOnChain(CoinKey.USDC, ChainKey.BSC),
      findDefaultCoinOnChain(CoinKey.USDT, ChainKey.BSC),
      {
        id: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
        symbol: 'BUSD',
        decimals: 18,
        chainId: ChainId.BSC,
        chainKey: ChainKey.BSC,
      } as Token,
      {
        id: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
        symbol: 'BTCB',
        decimals: 18,
        chainId: ChainId.BSC,
        chainKey: ChainKey.BSC,
      } as Token,
      findDefaultCoinOnChain(CoinKey.SUSHI, ChainKey.BSC),
    ],
  },

  // 100 - xDai
  {
    key: 'honeyswap-dai',
    name: 'Honeyswap',
    chainId: ChainId.DAI,
    logoURI: '...',
    webUrl: 'https://app.honeyswap.org/',
    graph: 'https://api.thegraph.com/subgraphs/name/1hive/honeyswap-xdai',
    tokenlistUrl: 'https://tokens.honeyswap.org/',
    routerAddress: '0x1C232F01118CB8B424793ae03F870aa7D0ac7f77',
    factoryAddress: '0xA818b4F111Ccac7AA31D0BCc0806d64F2E0737D7',
    initCodeHash:
      '0x3f88503e8580ab941773b59034fb4b2a63e86dbc031b3633a925533ad3ed2b93',
    baseTokens: [
      findWrappedGasOnChain(ChainKey.DAI),
      findDefaultCoinOnChain(CoinKey.WETH, ChainKey.DAI),
      findDefaultCoinOnChain(CoinKey.USDC, ChainKey.DAI),
      {
        id: '0x71850b7e9ee3f13ab46d67167341e4bdc905eef9',
        symbol: 'HNY',
        decimals: 18,
        chainId: ChainId.DAI,
        chainKey: ChainKey.DAI,
      } as Token,
    ],
  }, // https://github.com/1Hive/honeyswap-sdk/blob/master/src/constants.ts
  {
    key: 'sushiswap-dai',
    name: 'SushiSwap',
    chainId: ChainId.DAI,
    logoURI: '...',
    webUrl: 'https://app.sushi.com/swap',
    graph: 'https://api.thegraph.com/subgraphs/name/sushiswap/xdai-exchange',
    tokenlistUrl:
      'https://raw.githubusercontent.com/sushiswap/default-token-list/master/tokens/xdai.json',
    routerAddress: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
    factoryAddress: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
    initCodeHash:
      '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
    baseTokens: [
      findWrappedGasOnChain(ChainKey.DAI),
      findDefaultCoinOnChain(CoinKey.USDC, ChainKey.DAI),
      findDefaultCoinOnChain(CoinKey.USDT, ChainKey.DAI),
      findDefaultCoinOnChain(CoinKey.WBTC, ChainKey.DAI),
      findDefaultCoinOnChain(CoinKey.WETH, ChainKey.DAI),
      findDefaultCoinOnChain(CoinKey.SUSHI, ChainKey.DAI),
    ],
  },

  // 250 - Fantom
  {
    key: 'spookyswap-ftm',
    name: 'SpookySwap',
    chainId: ChainId.FTM,
    logoURI: '...',
    webUrl: 'https://spookyswap.finance/swap',
    tokenlistUrl:
      'https://raw.githubusercontent.com/SpookySwap/spooky-info/master/src/constants/token/spookyswap.json',
    routerAddress: '0xF491e7B69E4244ad4002BC14e878a34207E38c29',
    factoryAddress: '0x152eE697f2E276fA89E96742e9bB9aB1F2E61bE3',
    initCodeHash:
      '0xcdf2deca40a0bd56de8e3ce5c7df6727e5b1bf2ac96f283fa9c4b3e6b42ea9d2',
    baseTokens: [
      findWrappedGasOnChain(ChainKey.FTM),
      findDefaultCoinOnChain(CoinKey.USDC, ChainKey.FTM),
      findDefaultCoinOnChain(CoinKey.USDT, ChainKey.FTM),
      findDefaultCoinOnChain(CoinKey.DAI, ChainKey.FTM),
    ],
  }, // https://github.com/SpookySwap/spookyswap-sdk/blob/master/src/constants.ts
  {
    key: 'sushiswap-ftm',
    name: 'SushiSwap',
    chainId: ChainId.FTM,
    logoURI: '...',
    webUrl: 'https://app.sushi.com/swap',
    graph: 'https://api.thegraph.com/subgraphs/name/sushiswap/fantom-exchange',
    tokenlistUrl:
      'https://raw.githubusercontent.com/sushiswap/default-token-list/master/tokens/fantom.json',
    routerAddress: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
    factoryAddress: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
    initCodeHash:
      '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
    baseTokens: [
      findWrappedGasOnChain(ChainKey.FTM),
      findDefaultCoinOnChain(CoinKey.DAI, ChainKey.FTM),
      findDefaultCoinOnChain(CoinKey.USDC, ChainKey.FTM),
      findDefaultCoinOnChain(CoinKey.WBTC, ChainKey.FTM),
      findDefaultCoinOnChain(CoinKey.WETH, ChainKey.FTM),
      findDefaultCoinOnChain(CoinKey.SUSHI, ChainKey.FTM),
    ],
  },
  // 1666600000 - Harmony Mainnet Shard 0
  {
    key: 'viperswap-one',
    name: 'ViperSwap',
    chainId: ChainId.ONE,
    logoURI: '...',
    webUrl: 'https://viper.exchange/#/swap',
    tokenlistUrl:
      'https://d1xrz6ki9z98vb.cloudfront.net/venomswap/lists/venomswap-default.tokenlist.json',
    routerAddress: '',
    factoryAddress: '0x7D02c116b98d0965ba7B642ace0183ad8b8D2196',
    initCodeHash:
      '0x162f79e638367cd45a118c778971dfd8d96c625d2798d3b71994b035cfe9b6dc',
    baseTokens: [
      findWrappedGasOnChain(ChainKey.ONE),
      {
        id: '0xE176EBE47d621b984a73036B9DA5d834411ef734',
        symbol: 'BUSD',
        decimals: 18,
        chainId: ChainId.ONE,
        chainKey: ChainKey.ONE,
      } as Token,
      {
        id: '0xEa589E93Ff18b1a1F1e9BaC7EF3E86Ab62addc79',
        symbol: 'VIPER',
        decimals: 18,
        chainId: ChainId.ONE,
        chainKey: ChainKey.ONE,
      } as Token,
    ],
  }, // https://github.com/VenomProtocol/venomswap-sdk/blob/main/src/constants.ts
  {
    key: 'sushiswap-one',
    name: 'SushiSwap',
    chainId: ChainId.ONE,
    logoURI: '...',
    webUrl: 'https://app.sushi.com/swap',
    tokenlistUrl:
      'https://raw.githubusercontent.com/sushiswap/default-token-list/master/tokens/harmony.json',
    routerAddress: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
    factoryAddress: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
    initCodeHash:
      '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
    baseTokens: [
      findWrappedGasOnChain(ChainKey.ONE),
      findDefaultCoinOnChain(CoinKey.DAI, ChainKey.ONE),
      findDefaultCoinOnChain(CoinKey.USDC, ChainKey.ONE),
      findDefaultCoinOnChain(CoinKey.USDT, ChainKey.ONE),
      findDefaultCoinOnChain(CoinKey.ETH, ChainKey.ONE),
      findDefaultCoinOnChain(CoinKey.WBTC, ChainKey.ONE),
      findDefaultCoinOnChain(CoinKey.SUSHI, ChainKey.ONE),
    ],
  }, // https://github.com/sushiswap/sushiswap-sdk/blob/canary/src/constants/addresses.ts

  // 43114 - Avalanche
  {
    key: 'sushiswap-ava',
    name: 'SushiSwap',
    chainId: ChainId.AVA,
    logoURI: '...',
    webUrl: 'https://app.sushi.com/swap',
    tokenlistUrl:
      'https://raw.githubusercontent.com/sushiswap/default-token-list/master/tokens/avalanche.json',
    routerAddress: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
    factoryAddress: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
    initCodeHash:
      '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
    baseTokens: [
      findWrappedGasOnChain(ChainKey.AVA),
      findDefaultCoinOnChain(CoinKey.USDC, ChainKey.AVA),
      findDefaultCoinOnChain(CoinKey.USDT, ChainKey.AVA),
      findDefaultCoinOnChain(CoinKey.DAI, ChainKey.AVA),
      findDefaultCoinOnChain(CoinKey.WBTC, ChainKey.AVA),
      findDefaultCoinOnChain(CoinKey.WETH, ChainKey.AVA),
      findDefaultCoinOnChain(CoinKey.SUSHI, ChainKey.AVA),
    ],
  },

  // 42161 - Arbitrum One
  {
    key: 'sushiswap-arb',
    name: 'SushiSwap',
    chainId: ChainId.ARB,
    logoURI: '...',
    webUrl: 'https://app.sushi.com/swap',
    tokenlistUrl:
      'https://raw.githubusercontent.com/sushiswap/default-token-list/master/tokens/arbitrum.json',
    routerAddress: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
    factoryAddress: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
    initCodeHash:
      '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
    baseTokens: [
      findDefaultCoinOnChain(CoinKey.WETH, ChainKey.ARB),
      findDefaultCoinOnChain(CoinKey.WBTC, ChainKey.ARB),
      findDefaultCoinOnChain(CoinKey.USDC, ChainKey.ARB),
      findDefaultCoinOnChain(CoinKey.USDT, ChainKey.ARB),
      findDefaultCoinOnChain(CoinKey.SUSHI, ChainKey.ARB),
      {
        id: '0x3E6648C5a70A150A88bCE65F4aD4d506Fe15d2AF',
        symbol: 'SPELL',
        decimals: 18,
        chainId: ChainId.ARB,
        chainKey: ChainKey.ARB,
      } as Token,
    ],
  },

  // 10 - Optimistic Ethereum
  // Uniswap V3:
  // {
  //   key: 'uniswap-opt',
  //   name: 'UniswapV3',
  //   chainId: 10,
  //   logoURI: '...',
  //   webUrl: 'https://app.uniswap.org/#/swap',
  //   graph: '',
  //   tokenlistUrl: 'https://static.optimism.io/optimism.tokenlist.json',
  //   routerAddress: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
  //   factoryAddress: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
  //   initCodeHash: '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f',
  //   baseTokens: [
  //     findWrappedGasOnChain(ChainKey.OPT),
  //     findDefaultCoinOnChain(CoinKey.DAI, ChainKey.OPT),
  //     findDefaultCoinOnChain(CoinKey.USDC, ChainKey.OPT),
  //     findDefaultCoinOnChain(CoinKey.USDT, ChainKey.OPT),
  //     findDefaultCoinOnChain(CoinKey.WBTC, ChainKey.OPT),
  //   ]
  // },

  // TESTNETS
  // 3 - Ropsten
  {
    key: 'uniswap-rop',
    name: 'Uniswap',
    chainId: ChainId.ROP,
    logoURI: '...',
    webUrl: 'https://app.uniswap.org/',
    tokenlistUrl:
      'https://raw.githubusercontent.com/compound-finance/token-list/master/compound.tokenlist.json',
    routerAddress: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
    factoryAddress: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
    initCodeHash:
      '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f',
    baseTokens: [
      findDefaultCoinOnChain(CoinKey.ETH, ChainKey.ROP),
      findDefaultCoinOnChain(CoinKey.WETH, ChainKey.ROP),
    ],
  },

  // TODO: sushiswap does not work properly
  // {
  //   key: 'sushiswap-rop',
  //   name: 'SushiSwap',
  //   chainId: ChainId.ROP,
  //   logoURI: '...',
  //   webUrl: 'https://app.sushi.com/swap',
  //   tokenlistUrl: 'https://raw.githubusercontent.com/sushiswap/default-token-list/master/tokens/ropsten.json',
  //   routerAddress: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  //   factoryAddress: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  //   initCodeHash: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  // },

  // 4 - Rinkeby
  {
    key: 'uniswap-rin',
    name: 'Uniswap',
    chainId: ChainId.RIN,
    logoURI: '...',
    webUrl: 'https://app.uniswap.org/',
    tokenlistUrl:
      'https://raw.githubusercontent.com/compound-finance/token-list/master/compound.tokenlist.json',
    routerAddress: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
    factoryAddress: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
    initCodeHash:
      '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f',
    baseTokens: [
      findDefaultCoinOnChain(CoinKey.ETH, ChainKey.RIN),
      findDefaultCoinOnChain(CoinKey.WETH, ChainKey.RIN),
    ],
  },

  // TODO: sushiswap does not work properly
  // {
  //   key: 'sushiswap-rin',
  //   name: 'SushiSwap',
  //   chainId: ChainId.RIN,
  //   logoURI: '...',
  //   webUrl: 'https://app.sushi.com/swap',
  //   tokenlistUrl: 'https://raw.githubusercontent.com/sushiswap/default-token-list/master/tokens/rinkeby.json',
  //   routerAddress: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  //   factoryAddress: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  //   initCodeHash: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  // },

  // 5 - Goerli
  {
    key: 'uniswap-gor',
    name: 'Uniswap',
    chainId: ChainId.GOR,
    logoURI: '...',
    webUrl: 'https://app.uniswap.org/',
    tokenlistUrl:
      'https://raw.githubusercontent.com/compound-finance/token-list/master/compound.tokenlist.json',
    routerAddress: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
    factoryAddress: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
    initCodeHash:
      '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f',
    baseTokens: [
      findDefaultCoinOnChain(CoinKey.ETH, ChainKey.GOR),
      findDefaultCoinOnChain(CoinKey.WETH, ChainKey.GOR),
    ],
  },

  // TODO: sushiswap does not work properly
  // {
  //   key: 'sushiswap-gor',
  //   name: 'SushiSwap',
  //   chainId: ChainId.GOR,
  //   logoURI: '...',
  //   webUrl: 'https://app.sushi.com/swap',
  //   tokenlistUrl: 'https://raw.githubusercontent.com/sushiswap/default-token-list/master/tokens/goerli.json',
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
    logoURI: '...',
    webUrl: 'https://app.uniswap.org/',
    tokenlistUrl:
      'https://raw.githubusercontent.com/compound-finance/token-list/master/compound.tokenlist.json',
    routerAddress: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
    factoryAddress: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
    initCodeHash:
      '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f',
    baseTokens: [
      findDefaultCoinOnChain(CoinKey.ETH, ChainKey.KOV),
      findDefaultCoinOnChain(CoinKey.WETH, ChainKey.KOV),
    ],
  },

  // TODO: sushiswap does not work properly
  // {
  //   key: 'sushiswap-kov',
  //   name: 'SushiSwap',
  //   chainId: ChainId.KOV,
  //   logoURI: '...',
  //   webUrl: 'https://app.sushi.com/swap',
  //   tokenlistUrl: 'https://raw.githubusercontent.com/sushiswap/default-token-list/master/tokens/kovan.json',
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
    logoURI: '...',
    webUrl: 'https://app.sushi.com/swap',
    tokenlistUrl:
      'https://raw.githubusercontent.com/sushiswap/default-token-list/master/tokens/harmony-testnet.json',
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
    logoURI: '...',
    webUrl: 'https://app.sushi.com/swap',
    tokenlistUrl:
      'https://raw.githubusercontent.com/sushiswap/default-token-list/master/tokens/harmony-testnet.json',
    routerAddress: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
    factoryAddress: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
    initCodeHash:
      '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
    baseTokens: [findWrappedGasOnChain(ChainKey.ONET)],
  },
]

export const getExchangeByKey = (key: string): Exchange => {
  const exchange = supportedExchanges.find((exchange) => exchange.key === key)
  if (!exchange) {
    throw new Error('Invalid key')
  }
  return exchange
}
