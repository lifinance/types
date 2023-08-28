import { StaticToken, ChainId, Coin, CoinKey } from './base'

type BasicToken = {
  address: string
  decimals: number
  name?: string
  symbol?: string
}

type BasicCoin = {
  key: CoinKey
  name: string
  logoURI: string
  verified: boolean
  chains: {
    [key: number]: BasicToken
  }
}
const basicCoins: BasicCoin[] = [
  // NATIVE COINS
  // > ETH
  {
    key: CoinKey.ETH,
    name: CoinKey.ETH,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
    verified: true,
    chains: {
      [ChainId.ETH]: {
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
      },
      [ChainId.BSC]: {
        address: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
        decimals: 18,
      },
      [ChainId.SOL]: {
        address: '7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs',
        decimals: 8,
        name: 'Wrapped SOL (Wormhole)',
      },
      [ChainId.POL]: {
        address: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
        decimals: 18,
      },
      [ChainId.DAI]: {
        address: '0x6a023ccd1ff6f2045c3309768ead9e68f978f6e1',
        decimals: 18,
        symbol: 'WETH',
        name: 'Wrapped Ether',
      },
      [ChainId.OPT]: {
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
      },
      [ChainId.ARB]: {
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
      },
      [ChainId.ERA]: {
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
      },
      [ChainId.PZE]: {
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
      },
      [ChainId.BAS]: {
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
      },
      [ChainId.LNA]: {
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
      },
      [ChainId.FTM]: {
        address: '0x74b23882a30290451a17c44f4f05243b6b58c76d',
        decimals: 18,
      },
      [ChainId.AVA]: {
        address: '0x49d5c2bdffac6ce2bfdb6640f4f80f226bc10bab',
        decimals: 18,
        symbol: 'WETH.e',
        name: 'Wrapped Ether',
      },
      // [ChainId.ARB]: { // WETH
      //   address: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
      //   decimals: 18,
      [ChainId.ONE]: {
        address: '0x6983d1e6def3690c4d616b13597a09e6193ea013',
        decimals: 18,
      },
      [ChainId.HEC]: {
        address: '0x64ff637fb478863b7468bc97d30a5bf3a428a1fd',
        decimals: 18,
        name: 'Heco-Peg ETH Token',
      },
      [ChainId.OKT]: {
        address: '0xef71ca2ee68f45b9ad6f72fbdb33d707b872315c',
        decimals: 18,
        symbol: 'ETHK',
        name: 'ETHK',
      },
      [ChainId.BOB]: {
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
      },
      [ChainId.MOO]: {
        address: '0xfa9343c3897324496a05fc75abed6bac29f8a40f',
        decimals: 18,
      },
      [ChainId.AUR]: {
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
        symbol: 'AETH',
        name: 'AETH',
      },
      // https://evmexplorer.velas.com/token/0x85219708c49aa701871Ad330A94EA0f41dFf24Ca
      [ChainId.VEL]: {
        address: '0x85219708c49aa701871ad330a94ea0f41dff24ca',
        decimals: 18,
      },

      // Testnets
      [ChainId.GOR]: {
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
      },
      [ChainId.ONET]: {
        address: '0x268d6ff391b41b36a13b1693bd25f87fb4e4b392',
        decimals: 18,
      },
      [ChainId.BSCT]: {
        address: '0xd66c6b4f0be8ce5b39d52e0fd1344c389929b378',
        decimals: 18,
      },
      [ChainId.OPTG]: {
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
      },
      [ChainId.ARBG]: {
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
      },
      [ChainId.LNAT]: {
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
      },
    },
  },
  // > MATIC
  {
    key: CoinKey.MATIC,
    name: CoinKey.MATIC,
    logoURI:
      'https://static.debank.com/image/matic_token/logo_url/matic/6f5a6b6f0732a7a235131bd7804d357c.png',
    verified: true,
    chains: {
      [ChainId.ETH]: {
        address: '0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0',
        decimals: 18,
        name: 'Matic Token',
      },
      [ChainId.SOL]: {
        address: 'Gz7VkD4MacbEB6yC5XD3HcumEiYx2EtDYYrfikGsvopG',
        decimals: 8,
        name: 'Wrapped Matic (Wormhole)',
      },
      [ChainId.BSC]: {
        address: '0xcc42724c6683b7e57334c4e856f4c9965ed682bd',
        decimals: 18,
        name: 'Matic Token',
      },
      [ChainId.POL]: {
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
      },
      [ChainId.DAI]: {
        address: '0x7122d7661c4564b7c6cd4878b06766489a6028a2',
        decimals: 18,
        name: 'Matic Token',
      },
      // https://evmexplorer.velas.com/token/0x6ab0B8C1a35F9F4Ce107cCBd05049CB1Dbd99Ec5/
      [ChainId.VEL]: {
        address: '0x6ab0b8c1a35f9f4ce107ccbd05049cb1dbd99ec5',
        decimals: 18,
      },

      // Testnet
      [ChainId.MUM]: {
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
      },
      [ChainId.LNAT]: {
        address: '0xa55C7E1274bE5db2275a0BDd055f81e8263b7954',
        decimals: 18,
      },
    },
  },
  // > BNB
  {
    key: CoinKey.BNB,
    name: CoinKey.BNB,
    logoURI:
      'https://assets.coingecko.com/coins/images/825/small/binance-coin-logo.png?1547034615',
    verified: true,
    chains: {
      [ChainId.ETH]: {
        address: '0xb8c77482e45f1f44de1745f52c74426c631bdd52',
        decimals: 18,
      },
      [ChainId.SOL]: {
        address: '9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa',
        decimals: 8,
        name: 'Wrapped BNB (Wormhole)',
      },
      [ChainId.BSC]: {
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
      },
      [ChainId.POL]: {
        address: '0xa649325aa7c5093d12d6f98eb4378deae68ce23f',
        decimals: 18,
      },
      [ChainId.DAI]: {
        address: '0xca8d20f3e0144a72c6b5d576e9bd3fd8557e2b04',
        decimals: 18,
        symbol: 'WBNB',
        name: 'Wrapped BNB',
      },
      [ChainId.ONE]: {
        address: '0xb1f6e61e1e113625593a22fa6aa94f8052bc39e0',
        decimals: 18,
        symbol: 'bscBNB',
      },
      [ChainId.MOO]: {
        address: '0xc9baa8cfdde8e328787e29b4b078abf2dadc2055',
        decimals: 18,
      },
      // https://evmexplorer.velas.com/token/0x2B8e9cD44C9e09D936149549a8d207c918ecB5C4
      [ChainId.VEL]: {
        address: '0x2b8e9cd44c9e09d936149549a8d207c918ecb5c4',
        decimals: 18,
      },

      // Testnet
      [ChainId.BSCT]: {
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
      },
      [ChainId.ONET]: {
        address: '0xbef55684b382bae72051813a898d17282066c007',
        decimals: 18,
      },
      [ChainId.LNAT]: {
        address: '0x5471ea8f739dd37E9B81Be9c5c77754D8AA953E4',
        decimals: 18,
      },
    },
  },
  // > DAI
  {
    key: CoinKey.DAI,
    name: 'DAI Stablecoin',
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
    verified: true,
    chains: {
      [ChainId.ETH]: {
        address: '0x6b175474e89094c44da98b954eedeac495271d0f',
        decimals: 18,
      },
      [ChainId.SOL]: {
        address: 'EjmyN6qEC1Tf1JxiG1ae7UTJhUxSwk1TCWNWqxWV4J6o',
        decimals: 8,
        name: 'DAI Stablecoin (Wormhole)',
      },
      [ChainId.BSC]: {
        address: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
        decimals: 18,
      },
      [ChainId.POL]: {
        address: '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063',
        decimals: 18,
        name: '(PoS) DAI Stablecoin',
      },
      [ChainId.DAI]: {
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
        symbol: 'xDAI',
        name: 'xDAI Native Token',
      },
      [ChainId.OPT]: {
        address: '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1',
        decimals: 18,
      },
      [ChainId.ERA]: {
        address: '0x4bef76b6b7f2823c6c1f4fcfeacd85c24548ad7e',
        decimals: 18,
      },
      [ChainId.FTM]: {
        address: '0x8d11ec38a3eb5e956b052f67da8bdc9bef8abf3e',
        decimals: 18,
      },
      [ChainId.ONE]: {
        address: '0xef977d2f931c1978db5f6747666fa1eacb0d0339',
        decimals: 18,
        symbol: '1DAI',
      },
      [ChainId.AVA]: {
        address: '0xd586e7f844cea2f87f50152665bcbc2c279d8d70',
        decimals: 18,
        symbol: 'DAI.e',
      },
      [ChainId.ARB]: {
        address: '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1',
        decimals: 18,
      },
      [ChainId.OKT]: {
        address: '0x21cde7e32a6caf4742d00d44b07279e7596d26b9',
        decimals: 18,
        symbol: 'DAIK',
      },
      [ChainId.CRO]: {
        address: '0xf2001b145b43032aaf5ee2884e456ccd805f677d',
        decimals: 18,
      },
      [ChainId.FUS]: {
        address: '0x94ba7a27c7a95863d1bdc7645ac2951e0cca06ba',
        decimals: 18,
        name: 'DAI Stablecoin',
      },
      [ChainId.CEL]: {
        address: '0x90ca507a5d4458a4c6c6249d186b6dcb02a5bccd',
        decimals: 18,
      },
      [ChainId.MOO]: {
        address: '0x765277eebeca2e31912c9946eae1021199b39c61',
        decimals: 18,
      },
      [ChainId.BOB]: {
        address: '0xf74195bb8a5cf652411867c5c2c5b8c2a402be35',
        decimals: 18,
      },
      [ChainId.EVM]: {
        address: '0x461d52769884ca6235B685EF2040F47d30C94EB5',
        decimals: 18,
      },
      // https://evmexplorer.velas.com/token/0xE3F5a90F9cb311505cd691a46596599aA1A0AD7D
      [ChainId.VEL]: {
        address: '0xe3f5a90f9cb311505cd691a46596599aa1a0ad7d',
        decimals: 18,
      },

      // Testnets
      [ChainId.GOR]: {
        address: '0xdc31ee1784292379fbb2964b3b9c4124d8f89c60', // other: 0xc61ba16e864efbd06a9fe30aab39d18b8f63710a'
        decimals: 18,
      },
      [ChainId.MUM]: {
        address: '0xb224913ce3851b0a0d7c0fb461eef40f2e31ddb8',
        decimals: 18,
      },
      // 42, 0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa, 18
    },
  },
  // > FTM
  {
    key: CoinKey.FTM,
    name: CoinKey.FTM,
    logoURI:
      'https://static.debank.com/image/ftm_token/logo_url/ftm/33fdb9c5067e94f3a1b9e78f6fa86984.png',
    verified: true,
    chains: {
      [ChainId.FTM]: {
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
      },
      [ChainId.SOL]: {
        address: '8gC27rQF4NEDYfyf5aS8ZmQJUum5gufowKGYRRba4ENN',
        decimals: 8,
        name: 'Fantom Token (Wormhole)',
      },
    },
  },
  // > OKT
  {
    key: CoinKey.OKT,
    name: CoinKey.OKT,
    logoURI:
      'https://static.debank.com/image/okt_token/logo_url/okt/1228cd92320b3d33769bd08eecfb5391.png',
    verified: true,
    chains: {
      [ChainId.OKT]: {
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
      },
    },
  },
  // > AVAX
  {
    key: CoinKey.AVAX,
    name: CoinKey.AVAX,
    logoURI:
      'https://static.debank.com/image/avax_token/logo_url/avax/0b9c84359c84d6bdd5bfda9c2d4c4a82.png',
    verified: true,
    chains: {
      [ChainId.AVA]: {
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
      },
      [ChainId.SOL]: {
        address: 'KgV1GvrHQmRBY8sHQQeUKwTm2r2h8t4C8qt12Cw1HVE',
        decimals: 8,
        name: 'Avalanche (Wormhole)',
      },
      [ChainId.AVAT]: {
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
      },

      // Testnets
      [ChainId.LNAT]: {
        address: '0x265B25e22bcd7f10a5bD6E6410F10537Cc7567e8',
        decimals: 18,
      },
    },
  },
  // > HT
  {
    key: CoinKey.HT,
    name: CoinKey.HT,
    logoURI:
      'https://static.debank.com/image/heco_token/logo_url/heco/c399dcddde07e1944c4dd8f922832b53.png',
    verified: true,
    chains: {
      [ChainId.HEC]: {
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
      },
    },
  },
  // > ONE
  {
    key: CoinKey.ONE,
    name: CoinKey.ONE,
    logoURI:
      'https://assets.coingecko.com/coins/images/18183/small/wonelogo.png',
    verified: true,
    chains: {
      [ChainId.ONE]: {
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
      },
      [ChainId.BSC]: {
        address: '0x03ff0ff224f904be3118461335064bb48df47938',
        decimals: 18,
        name: 'Harmony ONE',
      },

      // Testnet
      [ChainId.ONET]: {
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
      },
    },
  },
  // > FSN
  {
    key: CoinKey.FSN,
    name: CoinKey.FSN,
    logoURI: 'https://www.bscscan.com/token/images/anyFSN_32.png',
    verified: true,
    chains: {
      [ChainId.FSN]: {
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
      },
    },
  },
  // > MOVR
  {
    key: CoinKey.MOVR,
    name: CoinKey.MOVR,
    logoURI: 'https://assets.coingecko.com/coins/images/17984/small/9285.png',
    verified: true,
    chains: {
      [ChainId.MOR]: {
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
      },
      [ChainId.MOO]: {
        address: '0x1d4c2a246311bb9f827f4c768e277ff5787b7d7e',
        decimals: 18,
      },
    },
  },

  // OTHER STABLECOINS
  // USDT
  {
    key: CoinKey.USDT,
    name: CoinKey.USDT,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png',
    verified: true,
    chains: {
      [ChainId.ETH]: {
        address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
        decimals: 6,
      },
      [ChainId.SOL]: {
        address: 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB',
        decimals: 6,
        name: 'USDT',
      },
      [ChainId.BSC]: {
        address: '0x55d398326f99059ff775485246999027b3197955',
        decimals: 18,
      },
      [ChainId.POL]: {
        address: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
        decimals: 6,
      },
      [ChainId.DAI]: {
        address: '0x4ecaba5870353805a9f068101a40e0f32ed605c6',
        decimals: 6,
      },
      [ChainId.OPT]: {
        address: '0x94b008aa00579c1307b0ef2c499ad98a8ce58e58',
        decimals: 6,
      },
      [ChainId.FTM]: {
        address: '0x049d68029688eabf473097a2fc38ef61633a3c7a',
        decimals: 6,
      },
      [ChainId.ARB]: {
        address: '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9',
        decimals: 6,
      },
      [ChainId.ONE]: {
        address: '0x3c2b8be99c50593081eaa2a724f0b8285f5aba8f',
        decimals: 6,
      },
      [ChainId.AVA]: {
        address: '0xc7198437980c041c805a1edcba50c1ce5db95118',
        decimals: 6,
        symbol: 'USDT.e',
        name: 'Tether USD',
      },
      [ChainId.MOR]: {
        address: '0xb44a9b6905af7c801311e8f4e76932ee959c663c',
        decimals: 6,
      },
      [ChainId.OKT]: {
        address: '0x382bb369d343125bfb2117af9c149795c6c65c50',
        decimals: 18,
      },
      [ChainId.CRO]: {
        address: '0x66e428c3f67a68878562e79a0234c1f83c208770',
        decimals: 6,
      },
      [ChainId.HEC]: {
        address: '0xa71edc38d189767582c38a3145b5873052c3e47a',
        decimals: 18,
      },
      [ChainId.FUS]: {
        address: '0xfadbbf8ce7d5b7041be672561bba99f79c532e10',
        decimals: 6,
      },
      [ChainId.CEL]: {
        address: '0x88eec49252c8cbc039dcdb394c0c2ba2f1637ea0',
        decimals: 6,
      },
      [ChainId.MOO]: {
        address: '0xefaeee334f0fd1712f9a8cc375f427d9cdd40d73',
        decimals: 6,
      },
      [ChainId.BOB]: {
        address: '0x5de1677344d3cb0d7d465c10b72a8f60699c062d',
        decimals: 6,
      },
      [ChainId.EVM]: {
        address: '0x7FF4a56B32ee13D7D4D405887E0eA37d61Ed919e',
        decimals: 6,
      },
      [ChainId.AUR]: {
        address: '0x4988a896b1227218e4A686fdE5EabdcAbd91571f',
        decimals: 6,
      },
      // https://evmexplorer.velas.com/token/0x01445C31581c354b7338AC35693AB2001B50b9aE
      [ChainId.VEL]: {
        address: '0x01445c31581c354b7338ac35693ab2001b50b9ae',
        decimals: 6,
        name: 'Multichain USDT',
      },
      [ChainId.LNA]: {
        address: '0xa219439258ca9da29e9cc4ce5596924745e12b93',
        decimals: 6,
        name: 'USDT',
      },

      // Testnets
      [ChainId.GOR]: {
        address: '0x509ee0d083ddf8ac028f2a56731412edd63223b9',
        decimals: 6,
      },
    },
  },

  // ======= STARGATE TESTNET TOKENS =======
  // stargate USDC testtoken
  {
    key: CoinKey.sgUSDC,
    name: CoinKey.sgUSDC,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
    verified: true,
    chains: {
      [ChainId.GOR]: {
        address: '0xDf0360Ad8C5ccf25095Aa97ee5F2785c8d848620',
        decimals: 6,
      },
      [ChainId.MUM]: {
        address: '0x742DfA5Aa70a8212857966D491D67B09Ce7D6ec7',
        decimals: 6,
      },
      [ChainId.ARBG]: {
        address: '0x6aad876244e7a1ad44ec4824ce813729e5b6c291',
        decimals: 6,
      },
    },
  },

  // stargate BUSD testtoken
  {
    key: CoinKey.sgBUSD,
    name: CoinKey.sgBUSD,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
    verified: true,
    chains: {
      [ChainId.BSCT]: {
        address: '0x1010Bb1b9Dff29e6233E7947e045e0ba58f6E92e',
        decimals: 6,
      },
    },
  },

  // stargate USDT testtoken
  {
    key: CoinKey.sgUSDT,
    name: CoinKey.sgUSDT,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
    verified: true,
    chains: {
      [ChainId.GOR]: {
        address: '0x5bcc22abec37337630c0e0dd41d64fd86caee951',
        decimals: 6,
      },
      [ChainId.MUM]: {
        address: '0x6fc340be8e378c2ff56476409ef48da9a3b781a0',
        decimals: 6,
      },
      [ChainId.BSCT]: {
        address: '0xf49e250aeb5abdf660d643583adfd0be41464efd',
        decimals: 6,
      },
      [ChainId.ARBG]: {
        address: '0x533046f316590c19d99c74ee661c6d541b64471c',
        decimals: 6,
      },
    },
  },

  // stargate USDT testtoken
  {
    key: CoinKey.sgMETIS,
    name: CoinKey.sgMETIS,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
    verified: true,
    chains: {
      [ChainId.GOR]: {
        address: '0x9874a71b976daa037741d18b86bc6b2f9957fc8a',
        decimals: 18,
      },
      [ChainId.BSCT]: {
        address: '0x8362af3426e6c7a77438f29bdc81c8f27cd541ab',
        decimals: 18,
      },
    },
  },

  // stargate WOO testtoken
  {
    key: CoinKey.sgWOO,
    name: CoinKey.sgWOO,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
    verified: true,
    chains: {
      [ChainId.GOR]: {
        address: '0xc9ba30be110864264577ad091c47f986318b213e',
        decimals: 18,
      },
      [ChainId.MUM]: {
        address: '0xb9C468f4308f3f937B4Fc79946244459bBC3cf65',
        decimals: 18,
      },
      [ChainId.BSCT]: {
        address: '0x6df6db769dd1c845596f7e65a1c86c98d6147cc3',
        decimals: 18,
      },
      [ChainId.ARBG]: {
        address: '0xac9da6d889e82d08de63f5752f91b151ffe059fb',
        decimals: 18,
      },
    },
  },

  // cBridge CELER testtoken
  {
    key: CoinKey.cbtCELR,
    name: CoinKey.cbtCELR,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
    verified: true,
    chains: {
      [ChainId.GOR]: {
        address: '0x5D3c0F4cA5EE99f8E8F59Ff9A5fAb04F6a7e007f',
        decimals: 18,
      },
      [ChainId.BSCT]: {
        address: '0x5471ea8f739dd37E9B81Be9c5c77754D8AA953E4',
        decimals: 18,
      },
    },
  },

  // cBridge USDT testtoken
  {
    key: CoinKey.cbtUSDT,
    name: CoinKey.cbtUSDT,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
    verified: true,
    chains: {
      [ChainId.GOR]: {
        address: '0xf4b2cbc3ba04c478f0dc824f4806ac39982dce73',
        decimals: 6,
      },
      [ChainId.BSCT]: {
        address: '0x7d43AABC515C356145049227CeE54B608342c0ad',
        decimals: 6,
      },
    },
  },
  // cBridge WUSDT testtoken
  {
    key: CoinKey.cbtWUSDT,
    name: CoinKey.cbtWUSDT,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
    verified: true,
    chains: {
      [ChainId.GOR]: {
        address: '0x9D39Fc627A6d9d9F8C831c16995b209548cc3401',
        decimals: 6,
      },
      [ChainId.BSCT]: {
        address: '0xC826C23327098cd8A37f140114F2173A8F62DD29',
        decimals: 6,
      },
    },
  },

  // cBridge WUSDC testtoken
  {
    key: CoinKey.cbtWUSDC,
    name: CoinKey.cbtWUSDC,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
    verified: true,
    chains: {
      [ChainId.GOR]: {
        address: '0x4a63Afc71427807586dA190Bb0D3adB461fF9589',
        decimals: 6,
      },
    },
  },

  // cBridge USDC testtoken
  {
    key: CoinKey.cbtUSDC,
    name: CoinKey.cbtUSDC,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
    verified: true,
    chains: {
      [ChainId.MUM]: {
        address: '0x6de33698e9e9b787e09d3bd7771ef63557e148bb',
        decimals: 6,
      },
      [ChainId.AVAT]: {
        address: '0x2979a1cb90EEB9e75d7fB4f9813FCC40E4a7fD8b',
        decimals: 6,
      },
      [ChainId.BSCT]: {
        address: '0x317F8d18FB16E49a958Becd0EA72f8E153d25654',
        decimals: 6,
      },
      [ChainId.GOR]: {
        address: '0xCbE56b00d173A26a5978cE90Db2E33622fD95A28',
        decimals: 6,
      },
    },
  },
  // USDC
  {
    key: CoinKey.USDC,
    name: 'USD Coin',
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
    verified: true,
    chains: {
      [ChainId.BAS]: {
        address: '0xd9aaec86b65d86f6a7b5b1b0c42ffa531710b6ca',
        decimals: 6,
        name: 'USD Base Coin',
      },
      [ChainId.ETH]: {
        address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
        decimals: 6,
      },
      [ChainId.SOL]: {
        address: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
        decimals: 6,
        name: 'USD Coin',
      },
      [ChainId.BSC]: {
        address: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
        decimals: 18,
      },
      [ChainId.POL]: {
        address: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
        decimals: 6,
      },
      [ChainId.DAI]: {
        address: '0xddafbb505ad214d7b80b1f830fccc89b60fb7a83',
        decimals: 6,
      },
      [ChainId.OPT]: {
        address: '0x7f5c764cbc14f9669b88837ca1490cca17c31607',
        decimals: 6,
      },
      [ChainId.ERA]: {
        address: '0x3355df6d4c9c3035724fd0e3914de96a5a83aaf4',
        decimals: 6,
      },
      [ChainId.PZE]: {
        address: '0xa8ce8aee21bc2a48a5ef670afcc9274c7bbbc035',
        decimals: 6,
      },
      [ChainId.FTM]: {
        address: '0x04068da6c83afcfa0e13ba15a6696662335d5b75',
        decimals: 6,
      },
      [ChainId.ARB]: {
        address: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
        decimals: 6,
      },
      [ChainId.ONE]: {
        address: '0x985458e523db3d53125813ed68c274899e9dfab4',
        decimals: 6,
      },
      [ChainId.AVA]: {
        address: '0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e',
        decimals: 6,
      },
      [ChainId.MOR]: {
        address: '0xe3f5a90f9cb311505cd691a46596599aa1a0ad7d',
        decimals: 6,
      },
      [ChainId.HEC]: {
        address: '0x9362bbef4b8313a8aa9f0c9808b80577aa26b73b',
        decimals: 6,
      },
      [ChainId.OKT]: {
        address: '0xc946daf81b08146b1c7a8da2a851ddf2b3eaaf85',
        decimals: 18,
      },
      [ChainId.CRO]: {
        address: '0xc21223249ca28397b4b6541dffaecc539bff0c59',
        decimals: 6,
      },
      [ChainId.FUS]: {
        address: '0x620fd5fa44be6af63715ef4e65ddfa0387ad13f5',
        decimals: 6,
      },
      [ChainId.CEL]: {
        address: '0xef4229c8c3250c675f21bcefa42f58efbff6002a',
        decimals: 6,
      },
      [ChainId.MOO]: {
        address: '0x818ec0a7fe18ff94269904fced6ae3dae6d6dc0b',
        decimals: 6,
      },
      [ChainId.BOB]: {
        address: '0x66a2a913e447d6b4bf33efbec43aaef87890fbbc',
        decimals: 6,
      },
      [ChainId.EVM]: {
        address: '0x51e44FfaD5C2B122C8b635671FCC8139dc636E82',
        decimals: 6,
      },
      [ChainId.AUR]: {
        address: '0xB12BFcA5A55806AaF64E99521918A4bf0fC40802',
        decimals: 6,
      },
      // https://evmexplorer.velas.com/token/0xe2C120f188eBd5389F71Cf4d9C16d05b62A58993
      [ChainId.VEL]: {
        address: '0xe2c120f188ebd5389f71cf4d9c16d05b62a58993',
        decimals: 6,
        name: 'Multichain USDC',
      },
      [ChainId.LNA]: {
        address: '0x176211869ca2b568f2a7d4ee941e073a821ee1ff',
        decimals: 6,
        name: 'USDC.e',
      },

      // Testnets
      [ChainId.GOR]: {
        address: '0xd87ba7a50b2e7e660f678a895e4b72e7cb4ccd9c',
        decimals: 6,
      },
      [ChainId.MUM]: {
        address: '0x6d4dd09982853f08d9966ac3ca4eb5885f16f2b2',
        decimals: 6,
      },
      [ChainId.LNAT]: {
        address: '0x964FF70695da981027c81020B1c58d833D49A640',
        decimals: 6,
        name: 'Linea USD Coin',
      },
      // 42, 0xb7a4f3e9097c08da09517b5ab877f7a917224ede, 6
    },
  },
  // USDC.e
  // Represents the USD Coin (USDC) bridged from Ethereum (as opposed to the 'native' USDC issued by Circle)
  {
    key: CoinKey.USDCe,
    name: CoinKey.USDCe,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
    verified: true,
    chains: {
      [ChainId.ARB]: {
        address: '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8',
        decimals: 6,
        name: 'Bridged USD Coin',
        symbol: 'USDC.e',
      },
      [ChainId.AVA]: {
        address: '0xa7d7079b0fead91f3e65f86e8915cb59c1a4c664',
        decimals: 6,
        name: 'Bridged USD Coin',
        symbol: 'USDC.e',
      },
    },
  },
  // BUSD
  {
    key: CoinKey.BUSD,
    name: CoinKey.BUSD,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/binance/assets/BUSD-BD1/logo.png',
    verified: true,
    chains: {
      [ChainId.ETH]: {
        address: '0x4Fabb145d64652a948d72533023f6E7A623C7C53',
        decimals: 18,
      },
      [ChainId.BSC]: {
        address: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
        decimals: 18,
      },
      [ChainId.OPT]: {
        address: '0x9C9e5fD8bbc25984B178FdCE6117Defa39d2db39',
        decimals: 18,
      },
      [ChainId.POL]: {
        address: '0x9C9e5fD8bbc25984B178FdCE6117Defa39d2db39',
        decimals: 18,
      },
      [ChainId.AVA]: {
        address: '0x9C9e5fD8bbc25984B178FdCE6117Defa39d2db39',
        decimals: 18,
      },
      [ChainId.SOL]: {
        address: '33fsBLA8djQm82RpHmE3SuVrPGtZBWNYExsEUeKX1HXX',
        decimals: 18,
      },
      [ChainId.FUS]: {
        address: '0x6a5F6A8121592BeCd6747a38d67451B310F7f156',
        decimals: 18,
      },
      [ChainId.VEL]: {
        address: '0xc111c29a988ae0c0087d97b33c6e6766808a3bd3',
        decimals: 18,
      },
      [ChainId.ONE]: {
        address: '0xe176ebe47d621b984a73036b9da5d834411ef734',
        decimals: 18,
      },

      // testnets
      [ChainId.BSCT]: {
        address: '0xeB3Eb991D39Dac92616da64b7c6D5af5cCFf1627',
        decimals: 18,
      },
      [ChainId.LNAT]: {
        address: '0x7d43AABC515C356145049227CeE54B608342c0ad',
        decimals: 18,
      },
    },
  },

  // TEST COIN
  {
    key: CoinKey.TEST,
    name: CoinKey.TEST,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
    verified: false,
    chains: {
      [ChainId.GOR]: {
        address: '0x8a1cad3703e0beae0e0237369b4fcd04228d1682',
        decimals: 18,
      },
      [ChainId.MUM]: {
        address: '0xe71678794fff8846bff855f716b0ce9d9a78e844',
        decimals: 18,
      },
      [ChainId.BSCT]: {
        address: '0xd86bcb7d85163fbc81756bb9cc22225d6abccadb',
        decimals: 18,
      },
    },
  },

  // Connext testnet coins
  {
    key: CoinKey.CXTT,
    name: CoinKey.CXTT,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
    verified: false,
    chains: {
      [ChainId.GOR]: {
        address: '0x7ea6eA49B0b0Ae9c5db7907d139D9Cd3439862a1',
        name: 'Goerli CXTT',
        decimals: 18,
      },
      [ChainId.LNAT]: {
        address: '0xb706319d37b945727e71ae0d4353699d19112576',
        decimals: 18,
      },
      [ChainId.MUM]: {
        address: '0xeDb95D8037f769B72AAab41deeC92903A98C9E16',
        decimals: 18,
      },
      [ChainId.ARBG]: {
        address: '0xDC805eAaaBd6F68904cA706C221c72F8a8a68F9f',
        decimals: 18,
      },
      [ChainId.OPTG]: {
        address: '0x68Db1c8d85C09d546097C65ec7DCBFF4D6497CbF',
        decimals: 18,
      },
    },
  },

  // > WBTC
  {
    key: CoinKey.WBTC,
    name: CoinKey.WBTC,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
    verified: true,
    chains: {
      [ChainId.ETH]: {
        address: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
        decimals: 8,
      },
      [ChainId.SOL]: {
        address: 'qfnqNqs3nCAHjnyCgLRDbBtq4p2MtHZxw8YjSyYhPoL',
        decimals: 8,
        name: 'Wrapped BTC (Wormhole)',
      },
      [ChainId.POL]: {
        address: '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6',
        decimals: 8,
      },
      [ChainId.DAI]: {
        address: '0x8e5bbbb09ed1ebde8674cda39a0c169401db4252',
        decimals: 8,
      },
      [ChainId.FTM]: {
        address: '0x321162cd933e2be498cd2267a90534a804051b11',
        decimals: 8,
      },
      [ChainId.OPT]: {
        address: '0x68f180fcce6836688e9084f035309e29bf0a2095',
        decimals: 8,
      },
      [ChainId.AVA]: {
        address: '0x50b7545627a5162f82a992c33b87adc75187b218',
        decimals: 8,
      },
      [ChainId.ARB]: {
        address: '0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f',
        decimals: 8,
      },
      [ChainId.ONE]: {
        address: '0x3095c7557bcb296ccc6e363de01b760ba031f2d9',
        decimals: 8,
      },
      [ChainId.MOR]: {
        address: '0xe6a991ffa8cfe62b0bf6bf72959a3d4f11b2e0f5',
        decimals: 8,
      },
      [ChainId.OKT]: {
        address: '0x506f731f7656e2fb34b587b912808f2a7ab640bd',
        decimals: 18,
      },
      [ChainId.CRO]: {
        address: '0x062e66477faf219f25d27dced647bf57c3107d52',
        decimals: 8,
      },
      [ChainId.FUS]: {
        address: '0x33284f95ccb7b948d9d352e1439561cf83d8d00d',
        decimals: 8,
      },
      [ChainId.CEL]: {
        address: '0xbaab46e28388d2779e6e31fd00cf0e5ad95e327b',
        decimals: 8,
      },
      [ChainId.MOO]: {
        address: '0x922d641a426dcffaef11680e5358f34d97d112e1',
        decimals: 8,
      },
      [ChainId.BOB]: {
        address: '0xdc0486f8bf31df57a952bcd3c1d3e166e3d9ec8b',
        decimals: 8,
      },
      [ChainId.EVM]: {
        address: '0xF80699Dc594e00aE7bA200c7533a07C1604A106D',
        decimals: 8,
      },
      [ChainId.AUR]: {
        address: '0xF4eB217Ba2454613b15dBdea6e5f22276410e89e',
        decimals: 8,
      },
    },
  },

  // > WETH
  {
    key: CoinKey.WETH,
    name: CoinKey.WETH,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
    verified: true,
    chains: {
      [ChainId.ETH]: {
        address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
        decimals: 18,
      },
      [ChainId.SOL]: {
        address: 'AaAEw2VCw1XzgvKB8Rj2DyK2ZVau9fbt2bE8hZFWsMyE',
        decimals: 9,
        name: 'Allbridge from Ethereum',
      },
      [ChainId.BSC]: {
        address: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
        decimals: 18,
      },
      [ChainId.DAI]: {
        address: '0x6a023ccd1ff6f2045c3309768ead9e68f978f6e1',
        decimals: 18,
        symbol: 'WETH',
        name: 'Wrapped Ether',
      },
      [ChainId.POL]: {
        address: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
        decimals: 18,
        symbol: 'WETH',
        name: 'Wrapped Ether',
      },
      [ChainId.FTM]: {
        address: '0x74b23882a30290451a17c44f4f05243b6b58c76d',
        decimals: 18,
      },
      [ChainId.BAS]: {
        address: '0x4200000000000000000000000000000000000006',
        decimals: 18,
      },
      [ChainId.LNA]: {
        address: '0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f',
        decimals: 18,
      },
      [ChainId.AVA]: {
        address: '0x49d5c2bdffac6ce2bfdb6640f4f80f226bc10bab',
        decimals: 18,
        symbol: 'WETH.e',
        name: 'Wrapped Ether',
      },
      [ChainId.ARB]: {
        address: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
        decimals: 18,
      },
      [ChainId.OPT]: {
        address: '0x4200000000000000000000000000000000000006',
        decimals: 18,
      },
      [ChainId.MOR]: {
        address: '0x639a647fbe20b6c8ac19e48e2de44ea792c62c5c',
        decimals: 18,
      },
      [ChainId.HEC]: {
        address: '0x639a647fbe20b6c8ac19e48e2de44ea792c62c5c',
        decimals: 18,
      },
      [ChainId.CRO]: {
        address: '0xe44fd7fcb2b1581822d0c862b68222998a0c299a',
        decimals: 18,
      },
      [ChainId.FUS]: {
        address: '0xa722c13135930332eb3d749b2f0906559d2c5b99',
        decimals: 18,
      },
      [ChainId.CEL]: {
        address: '0x122013fd7df1c6f636a5bb8f03108e876548b455',
        decimals: 18,
      },
      [ChainId.MOO]: {
        address: '0xfA9343C3897324496A05fC75abeD6bAC29f8A40f',
        decimals: 18,
      },
      [ChainId.BOB]: {
        address: '0xdeaddeaddeaddeaddeaddeaddeaddeaddead0000',
        decimals: 18,
      },
      [ChainId.EVM]: {
        address: '0x5842C5532b61aCF3227679a8b1BD0242a41752f2',
        decimals: 18,
      },
      [ChainId.AUR]: {
        address: '0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB',
        decimals: 18,
      },

      // Testnets
      [ChainId.GOR]: {
        address: '0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6',
        decimals: 18,
      },
      [ChainId.MUM]: {
        address: '0xa6fa4fb5f76172d178d61b04b0ecd319c5d1c0aa',
        decimals: 18,
      },
      [ChainId.OPTG]: {
        address: '0x4200000000000000000000000000000000000006',
        decimals: 18,
      },
      [ChainId.LNAT]: {
        address: '0x2C1b868d6596a18e32E61B901E4060C872647b6C',
        decimals: 18,
      },
    },
  },

  // > SUSHI
  {
    key: CoinKey.SUSHI,
    name: CoinKey.SUSHI,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
    verified: true,
    chains: {
      [ChainId.ETH]: {
        address: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2',
        decimals: 18,
      },
      [ChainId.SOL]: {
        address: 'ChVzxWRmrTeSgwd3Ui3UumcN8KX7VK3WaD4KGeSKpypj',
        decimals: 8,
      },
      [ChainId.POL]: {
        address: '0x0b3f868e0be5597d5db7feb59e1cadbb0fdda50a',
        decimals: 18,
      },
      [ChainId.BSC]: {
        address: '0x947950bcc74888a40ffa2593c5798f11fc9124c4',
        decimals: 18,
      },
      [ChainId.DAI]: {
        address: '0x2995d1317dcd4f0ab89f4ae60f3f020a4f17c7ce',
        decimals: 18,
      },
      [ChainId.FTM]: {
        address: '0xae75a438b2e0cb8bb01ec1e1e376de11d44477cc',
        decimals: 18,
      },
      [ChainId.AVA]: {
        // guessed from debank api
        address: '0x37b608519f91f70f2eeb0e5ed9af4061722e4f76',
        decimals: 18,
      },
      [ChainId.ARB]: {
        address: '0xd4d42f0b6def4ce0383636770ef773390d85c61a',
        decimals: 18,
      },
      [ChainId.ONE]: {
        address: '0xbec775cb42abfa4288de81f387a9b1a3c4bc552a',
        decimals: 18,
      },
      [ChainId.MOR]: {
        address: '0xf390830df829cf22c53c8840554b98eafc5dcbc2',
        decimals: 18,
      },
      [ChainId.OKT]: {
        address: '0x2218e0d5e0173769f5b4939a3ae423f7e5e4eab7',
        decimals: 18,
      },
      [ChainId.HEC]: {
        address: '0x52e00b2da5bd7940ffe26b609a42f957f31118d5',
        decimals: 18,
      },
      [ChainId.FUS]: {
        address: '0x90708b20ccc1eb95a4fa7c8b18fd2c22a0ff9e78',
        decimals: 18,
      },
      [ChainId.CEL]: {
        address: '0x29dfce9c22003a4999930382fd00f9fd6133acd1',
        decimals: 18,
      },
    },
  },

  // used by cBridge v1:
  // > DODO
  {
    key: CoinKey.DODO,
    name: CoinKey.DODO,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x43Dfc4159D86F3A37A5A4B3D4580b888ad7d4DDd/logo.png',
    verified: true,
    chains: {
      [ChainId.ETH]: {
        address: '0x43dfc4159d86f3a37a5a4b3d4580b888ad7d4ddd',
        decimals: 18,
      },
      [ChainId.BSC]: {
        address: '0x67ee3cb086f8a16f34bee3ca72fad36f7db929e2',
        decimals: 18,
      },
      [ChainId.ARB]: {
        address: '0x69eb4fa4a2fbd498c257c57ea8b7655a2559a581',
        decimals: 18,
      },
    },
  },
  // > MCB
  {
    key: CoinKey.MCB,
    name: CoinKey.MCB,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x4e352cF164E64ADCBad318C3a1e222E9EBa4Ce42/logo.png',
    verified: true,
    chains: {
      [ChainId.ETH]: {
        address: '0x4e352cf164e64adcbad318c3a1e222e9eba4ce42',
        decimals: 18,
      },
      [ChainId.ARB]: {
        address: '0x4e352cf164e64adcbad318c3a1e222e9eba4ce42',
        decimals: 18,
      },
    },
  },
  // > CELR
  {
    key: CoinKey.CELR,
    name: CoinKey.CELR,
    logoURI:
      'https://static.debank.com/image/bsc_token/logo_url/0x1f9f6a696c6fd109cd3956f45dc709d2b3902163/1eb9c8f251098ea22a2cb30a877da86a.png',
    verified: true,
    chains: {
      [ChainId.ETH]: {
        address: '0x4f9254c83eb525f9fcf346490bbb3ed28a81c667',
        decimals: 18,
      },
      [ChainId.BSC]: {
        address: '0x1f9f6a696c6fd109cd3956f45dc709d2b3902163',
        decimals: 18,
      },
      [ChainId.ARB]: {
        address: '0x3a8b787f78d775aecfeea15706d4221b40f345ab',
        decimals: 18,
      },
    },
  },
  // > IF
  {
    key: CoinKey.IF,
    name: CoinKey.IF,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10932.png',
    verified: true,
    chains: {
      [ChainId.ETH]: {
        address: '0xb0e1fc65c1a741b4662b813eb787d369b8614af1',
        decimals: 18,
      },
      [ChainId.BSC]: {
        address: '0xb0e1fc65c1a741b4662b813eb787d369b8614af1',
        decimals: 18,
      },
    },
  },
  // > CRO
  {
    key: CoinKey.CRO,
    name: CoinKey.CRO,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3635.png',
    verified: true,
    chains: {
      [ChainId.CRO]: {
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
      },
    },
  },
  // > FUS
  {
    key: CoinKey.FUSE,
    name: CoinKey.FUSE,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5634.png',
    verified: true,
    chains: {
      [ChainId.FUS]: {
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
      },
    },
  },
  // > CEL
  {
    key: CoinKey.CELO,
    name: CoinKey.CELO,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5567.png',
    verified: true,
    chains: {
      [ChainId.CEL]: {
        // The CELO token is not a native token (0x000...).
        // Instead it is this ERC20 token: https://explorer.celo.org/token/0x471EcE3750Da237f93B8E339c536989b8978a438
        address: '0x471ece3750da237f93b8e339c536989b8978a438',
        decimals: 18,
      },
      [ChainId.SOL]: {
        address: 'GNCjk3FmPPgZTkbQRSxr6nCvLtYMbXKMnRxg8BgJs62e',
        decimals: 9,
        name: 'Allbridge from Celo',
      },
    },
  },
  // > GLMR
  {
    key: CoinKey.GLMR,
    name: CoinKey.GLMR,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6836.png',
    verified: true,
    chains: {
      [ChainId.MOO]: {
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
      },
    },
  },
  // > METIS
  {
    key: CoinKey.METIS,
    name: CoinKey.METIS,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/9640.png',
    verified: true,
    chains: {
      [ChainId.MAM]: {
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
      },
    },
  },
  // > EVM
  {
    key: CoinKey.EVM,
    name: 'EVMOS',
    logoURI:
      'https://raw.githubusercontent.com/cronus-finance/token-list/main/assets/evmos/0xD4949664cD82660AaE99bEdc034a0deA8A0bd517/logo.png',
    verified: true,
    chains: {
      [ChainId.EVM]: {
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
        symbol: 'EVMOS',
        name: 'EVMOS',
      },
    },
  },
  // > VEL
  {
    key: CoinKey.VLX,
    name: 'Velas',
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/tokens/vlx.png',
    verified: true,
    chains: {
      [ChainId.VEL]: {
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
      },
    },
  },
  // > Solana
  {
    key: CoinKey.SOL,
    name: CoinKey.SOL,
    logoURI: 'https://assets.coingecko.com/coins/images/4128/small/solana.png',
    verified: true,
    chains: {
      [ChainId.SOL]: {
        address: 'So11111111111111111111111111111111111111112',
        decimals: 9,
        name: 'Wrapped SOL',
      },
      [ChainId.ETH]: {
        address: '0xD31a59c85aE9D8edEFeC411D448f90841571b89c',
        decimals: 9,
        name: 'Wrapped SOL (Wormhole)',
      },
      [ChainId.POL]: {
        address: '0xd93f7E271cB87c23AaA73edC008A79646d1F9912',
        decimals: 9,
        name: 'Wrapped SOL (Wormhole)',
      },
      [ChainId.FTM]: {
        address: '0xd99021C2A33e4Cf243010539c9e9b7c52E0236c1',
        decimals: 9,
        name: 'Token Wrapped SOL (Wormhole)',
      },
      [ChainId.AVA]: {
        address: '0xFE6B19286885a4F7F55AdAD09C3Cd1f906D2478F',
        decimals: 9,
        symbol: 'WSOL',
        name: 'Wrapped SOL (Wormhole)',
      },
      [ChainId.AUR]: {
        address: '0x3370C8961A1697F22B49c99669C1d98fE63d031D',
        decimals: 9,
        symbol: 'WSOL',
        name: 'Token Wrapped SOL (Wormhole)',
      },
      [ChainId.CEL]: {
        address: '0x4581E64115d46CcdeE65Be2336bEc86c9BA54C01',
        decimals: 9,
        symbol: 'WSOL',
        name: 'Token Wrapped SOL (Wormhole)',
      },
    },
  },
]

export const defaultCoins: Array<Coin> = basicCoins.map((coin) => {
  const defaultCoin: Coin = {
    key: coin.key,
    name: coin.name,
    logoURI: coin.logoURI,
    verified: coin.verified,
    chains: {},
  }

  for (const [chainId, token] of Object.entries(coin.chains)) {
    defaultCoin.chains[chainId] = {
      address: token.address.toLowerCase(),
      decimals: token.decimals,
      symbol: token.symbol ?? coin.key,
      chainId: parseInt(chainId), // Object.entries, Object.keys etc. only return keys as strings. Therefore, we have to parse them here
      coinKey: coin.key,
      name: token.name ?? coin.name ?? coin.key,
      logoURI: coin.logoURI,
    }
  }

  return defaultCoin
})

// Wrapped version of gas on chain
export const wrappedTokens: { [ChainId: string]: StaticToken } = {
  [ChainId.ETH]: {
    // https://ww7.etherscan.io/token/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2
    address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    symbol: 'WETH',
    decimals: 18,
    chainId: ChainId.ETH,
    coinKey: CoinKey.WETH,
    name: 'WETH',
    logoURI:
      'https://static.debank.com/image/eth_token/logo_url/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2/61844453e63cf81301f845d7864236f6.png',
  },
  [ChainId.SOL]: {
    address: 'So11111111111111111111111111111111111111112',
    symbol: 'SOL',
    decimals: 9,
    chainId: ChainId.SOL,
    coinKey: CoinKey.SOL,
    name: 'Wrapped SOL',
    logoURI: 'https://assets.coingecko.com/coins/images/4128/small/solana.png',
  },
  [ChainId.BSC]: {
    // https://bscscan.com/token/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c
    address: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    symbol: 'WBNB',
    decimals: 18,
    chainId: ChainId.BSC,
    coinKey: 'WBNB' as CoinKey,
    name: 'WBNB',
    logoURI:
      'https://static.debank.com/image/coin/logo_url/bnb/9784283a36f23a58982fc964574ea530.png',
  },
  [ChainId.POL]: {
    // https://polygonscan.com/token/0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270
    address: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
    symbol: 'WMATIC',
    decimals: 18,
    chainId: ChainId.POL,
    coinKey: 'WMATIC' as CoinKey,
    name: 'WMATIC',
    logoURI:
      'https://static.debank.com/image/matic_token/logo_url/0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270/f6e604ba0324726a3d687c618aa4f163.png',
  },
  [ChainId.DAI]: {
    // https://blockscout.com/xdai/mainnet/address/0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d
    address: '0xe91d153e0b41518a2ce8dd3d7944fa863463a97d',
    symbol: 'WXDAI',
    decimals: 18,
    chainId: ChainId.DAI,
    coinKey: 'WXDAI' as CoinKey,
    name: 'WXDAI',
    logoURI:
      'https://static.debank.com/image/xdai_token/logo_url/0xe91d153e0b41518a2ce8dd3d7944fa863463a97d/3fedab836c5425fc3fc2eb542c34c81a.png',
  },
  [ChainId.OPT]: {
    // https://optimistic.etherscan.io/token/0x4200000000000000000000000000000000000006
    address: '0x4200000000000000000000000000000000000006',
    symbol: 'WETH',
    decimals: 18,
    chainId: ChainId.OPT,
    coinKey: CoinKey.WETH,
    name: 'Wrapped ETH',
    logoURI:
      'https://static.debank.com/image/op_token/logo_url/0x4200000000000000000000000000000000000006/61844453e63cf81301f845d7864236f6.png',
  },
  [ChainId.ERA]: {
    // https://explorer.zksync.io/address/0x5aea5775959fbc2557cc8789bc1bf90a239d9a91
    address: '0x5aea5775959fbc2557cc8789bc1bf90a239d9a91',
    symbol: 'WETH',
    decimals: 18,
    chainId: ChainId.ERA,
    coinKey: CoinKey.WETH,
    name: 'Wrapped Ether',
    logoURI:
      'https://static.debank.com/image/era_token/logo_url/0x5aea5775959fbc2557cc8789bc1bf90a239d9a91/61844453e63cf81301f845d7864236f6.png',
  },
  [ChainId.PZE]: {
    // https://zkevm.polygonscan.com/token/0x4f9a0e7fd2bf6067db6994cf12e4495df938e6e9
    address: '0x4f9a0e7fd2bf6067db6994cf12e4495df938e6e9',
    symbol: 'WETH',
    decimals: 18,
    chainId: ChainId.PZE,
    coinKey: CoinKey.WETH,
    name: 'Wrapped Ether',
    logoURI:
      'https://static.debank.com/image/pze_token/logo_url/0x4f9a0e7fd2bf6067db6994cf12e4495df938e6e9/61844453e63cf81301f845d7864236f6.png',
  },
  [ChainId.BAS]: {
    // https://basescan.org/address/0x4200000000000000000000000000000000000006
    address: '0x4200000000000000000000000000000000000006',
    symbol: 'WETH',
    decimals: 18,
    chainId: ChainId.BAS,
    coinKey: CoinKey.WETH,
    name: 'Wrapped Ether',
    logoURI:
      'https://static.debank.com/image/coin/logo_url/eth/d61441782d4a08a7479d54aea211679e.png',
  },
  [ChainId.LNA]: {
    // https://lineascan.build/address/0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f
    address: '0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f',
    symbol: 'WETH',
    decimals: 18,
    chainId: ChainId.LNA,
    coinKey: CoinKey.WETH,
    name: 'Wrapped Ether',
    logoURI:
      'https://static.debank.com/image/mtr_token/logo_url/0x79a61d3a28f8c8537a3df63092927cfa1150fb3c/61844453e63cf81301f845d7864236f6.png',
  },
  [ChainId.FTM]: {
    //
    address: '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83',
    symbol: 'wFTM',
    decimals: 18,
    chainId: ChainId.FTM,
    coinKey: 'wFTM' as CoinKey,
    name: 'wFTM',
    logoURI:
      'https://static.debank.com/image/ftm_token/logo_url/0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83/2b7d91858f9c62aafc8d7778b9c22f57.png',
  },
  [ChainId.ONE]: {
    address: '0xcf664087a5bb0237a0bad6742852ec6c8d69a27a',
    symbol: 'WONE',
    decimals: 18,
    chainId: ChainId.ONE,
    coinKey: 'WONE' as CoinKey,
    name: 'WRAPPED ONE',
    logoURI:
      'https://assets.coingecko.com/coins/images/18183/small/wonelogo.png',
  },
  [ChainId.AVA]: {
    address: '0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7',
    symbol: 'WAVAX',
    decimals: 18,
    chainId: ChainId.AVA,
    coinKey: 'WAVAX' as CoinKey,
    name: 'Wrapped AVAX',
    logoURI:
      'https://static.debank.com/image/avax_token/logo_url/0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7/753d82f0137617110f8dec56309b4065.png',
  },
  [ChainId.ARB]: {
    address: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
    symbol: 'WETH',
    decimals: 18,
    chainId: ChainId.ARB,
    coinKey: CoinKey.WETH,
    name: 'WETH',
    logoURI:
      'https://static.debank.com/image/era_token/logo_url/0x5aea5775959fbc2557cc8789bc1bf90a239d9a91/61844453e63cf81301f845d7864236f6.png',
  },
  [ChainId.MOR]: {
    address: '0x98878b06940ae243284ca214f92bb71a2b032b8a',
    symbol: 'WMOVR',
    decimals: 18,
    chainId: ChainId.MOR,
    coinKey: 'WMOVR' as CoinKey,
    name: 'WMOVR',
    logoURI: 'https://assets.coingecko.com/coins/images/17984/small/9285.png',
  },
  [ChainId.OKT]: {
    address: '0x8f8526dbfd6e38e3d8307702ca8469bae6c56c15',
    symbol: 'wOKT',
    decimals: 18,
    chainId: ChainId.OKT,
    coinKey: 'wOKT' as CoinKey,
    name: 'wOKT',
    logoURI:
      'https://static.debank.com/image/okt_token/logo_url/okt/1228cd92320b3d33769bd08eecfb5391.png',
  },
  [ChainId.HEC]: {
    address: '0x5545153ccfca01fbd7dd11c0b23ba694d9509a6f',
    symbol: 'wHT',
    decimals: 18,
    chainId: ChainId.HEC,
    coinKey: 'wHT' as CoinKey,
    name: 'wHT',
    logoURI:
      'https://static.debank.com/image/heco_token/logo_url/heco/c399dcddde07e1944c4dd8f922832b53.png',
  },
  [ChainId.CRO]: {
    address: '0x5c7f8a570d578ed84e63fdfa7b1ee72deae1ae23',
    symbol: 'WCRO',
    decimals: 18,
    chainId: ChainId.CRO,
    coinKey: 'WCRO' as CoinKey,
    name: 'WCRO',
    logoURI:
      'https://raw.githubusercontent.com/cronaswap/default-token-list/main/assets/tokens/cronos/0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23/logo.png',
  },
  [ChainId.FUS]: {
    address: '0x0be9e53fd7edac9f859882afdda116645287c629',
    symbol: 'WFUSE',
    decimals: 18,
    chainId: ChainId.FUS,
    coinKey: 'WFUSE' as CoinKey,
    name: 'Wrapped Fuse',
    logoURI: 'https://fuselogo.s3.eu-central-1.amazonaws.com/wfuse.png',
  },
  [ChainId.MOO]: {
    address: '0xacc15dc74880c9944775448304b263d191c6077f',
    symbol: 'WGLMR',
    decimals: 18,
    chainId: ChainId.MOO,
    coinKey: 'WGLMR' as CoinKey,
    name: 'Wrapped GLMR',
    logoURI:
      'https://static.debank.com/image/mobm_token/logo_url/0xacc15dc74880c9944775448304b263d191c6077f/a8442077d76b258297181c3e6eb8c9cc.png',
  },
  [ChainId.MAM]: {
    address: '0x75cb093E4D61d2A2e65D8e0BBb01DE8d89b53481',
    symbol: 'WMETIS',
    decimals: 18,
    chainId: ChainId.MAM,
    coinKey: 'WMETIS' as CoinKey,
    name: 'Wrapped Metis',
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/9640.png',
  },
  [ChainId.BOB]: {
    address: '0xdeaddeaddeaddeaddeaddeaddeaddeaddead0000',
    symbol: 'WETH',
    decimals: 18,
    chainId: ChainId.BOB,
    coinKey: CoinKey.WETH,
    name: 'Wrapped ETH',
    logoURI:
      'https://static.debank.com/image/boba_token/logo_url/0xdeaddeaddeaddeaddeaddeaddeaddeaddead0000/b1947b38a90e559eb950453965714be4.png',
  },
  [ChainId.CEL]: {
    address: '0x471ece3750da237f93b8e339c536989b8978a438',
    symbol: 'CELO',
    decimals: 18,
    chainId: ChainId.CEL,
    coinKey: CoinKey.CELO,
    name: 'Celo native asset',
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5567.png',
  },
  [ChainId.EVM]: {
    address: '0xd4949664cd82660aae99bedc034a0dea8a0bd517',
    symbol: 'WEVMOS',
    decimals: 18,
    chainId: ChainId.EVM,
    coinKey: 'WEVMOS' as CoinKey,
    name: 'Wrapped Evmos',
    logoURI:
      'https://raw.githubusercontent.com/cronus-finance/token-list/main/assets/evmos/0xD4949664cD82660AaE99bEdc034a0deA8A0bd517/logo.png',
  },
  [ChainId.AUR]: {
    address: '0x0000000000000000000000000000000000000000',
    symbol: 'AETH',
    decimals: 18,
    chainId: ChainId.AUR,
    coinKey: 'AETH' as CoinKey,
    name: 'AETH',
    logoURI:
      'https://static.debank.com/image/aurora_token/logo_url/aurora/d61441782d4a08a7479d54aea211679e.png',
  },
  [ChainId.VEL]: {
    address: '0xc579d1f3cf86749e05cd06f7ade17856c2ce3126',
    symbol: 'WVLX',
    decimals: 18,
    chainId: ChainId.VEL,
    coinKey: 'WVLX' as CoinKey,
    name: 'Wrapped VLX',
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/tokens/vlx.png',
  },

  // Testnets
  [ChainId.GOR]: {
    // https://goerli.etherscan.io/token/0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6
    address: '0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6',
    symbol: 'WETH',
    decimals: 18,
    chainId: ChainId.GOR,
    coinKey: CoinKey.WETH,
    name: 'WETH',
    logoURI:
      'https://static.debank.com/image/era_token/logo_url/0x5aea5775959fbc2557cc8789bc1bf90a239d9a91/61844453e63cf81301f845d7864236f6.png',
  },
  [ChainId.MUM]: {
    // https://mumbai.polygonscan.com/token/0x9c3c9283d3e44854697cd22d3faa240cfb032889
    address: '0x9c3c9283d3e44854697cd22d3faa240cfb032889',
    symbol: 'WMATIC',
    decimals: 18,
    chainId: ChainId.MUM,
    coinKey: 'WMATIC' as CoinKey,
    name: 'WMATIC',
    logoURI:
      'https://static.debank.com/image/matic_token/logo_url/0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270/f6e604ba0324726a3d687c618aa4f163.png',
  },
  [ChainId.ONET]: {
    address: '0x7466d7d0c21fa05f32f5a0fa27e12bdc06348ce2',
    symbol: 'WONE',
    decimals: 18,
    chainId: ChainId.ONET,
    coinKey: 'WONE' as CoinKey,
    name: 'WRAPPED ONE',
    logoURI:
      'https://assets.coingecko.com/coins/images/18183/small/wonelogo.png',
  },
  [ChainId.ARBG]: {
    // https://goerli.arbiscan.io/token/0x42da9eE191833756c618778145A86E6709f70C9b
    address: '0x42da9eE191833756c618778145A86E6709f70C9b',
    symbol: 'WETH',
    decimals: 18,
    chainId: ChainId.ARBG,
    coinKey: CoinKey.WETH,
    name: 'WETH',
    logoURI:
      'https://static.debank.com/image/era_token/logo_url/0x5aea5775959fbc2557cc8789bc1bf90a239d9a91/61844453e63cf81301f845d7864236f6.png',
  },
  [ChainId.OPTG]: {
    // https://blockscout.com/optimism/goerli/address/0x4200000000000000000000000000000000000006
    address: '0x4200000000000000000000000000000000000006',
    symbol: 'WETH',
    decimals: 18,
    chainId: ChainId.OPTG,
    coinKey: CoinKey.WETH,
    name: 'WETH',
    logoURI:
      'https://static.debank.com/image/era_token/logo_url/0x5aea5775959fbc2557cc8789bc1bf90a239d9a91/61844453e63cf81301f845d7864236f6.png',
  },
  [ChainId.BSCT]: {
    // https://testnet.bscscan.com/token/0xae13d989dac2f0debff460ac112a837c89baa7cd
    address: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd',
    symbol: 'WBNB',
    decimals: 18,
    chainId: ChainId.BSCT,
    coinKey: 'WBNB' as CoinKey,
    name: 'WBNB',
    logoURI:
      'https://static.debank.com/image/coin/logo_url/bnb/9784283a36f23a58982fc964574ea530.png',
  },
  [ChainId.LNAT]: {
    // https://explorer.prealpha.zkevm.consensys.net/address/0x2C1b868d6596a18e32E61B901E4060C872647b6C
    address: '0x2C1b868d6596a18e32E61B901E4060C872647b6C',
    symbol: 'WETH',
    decimals: 18,
    chainId: ChainId.LNAT,
    coinKey: CoinKey.WETH,
    name: 'WETH',
    logoURI:
      'https://static.debank.com/image/era_token/logo_url/0x5aea5775959fbc2557cc8789bc1bf90a239d9a91/61844453e63cf81301f845d7864236f6.png',
  },
  [ChainId.AVAT]: {
    // https://testnet.snowtrace.io/token/0xd00ae08403B9bbb9124bB305C09058E32C39A48c
    address: '0xd00ae08403B9bbb9124bB305C09058E32C39A48c',
    symbol: 'WAVAX',
    decimals: 18,
    chainId: ChainId.AVA,
    coinKey: 'WAVAX' as CoinKey,
    name: 'Wrapped AVAX',
    logoURI:
      'https://static.debank.com/image/avax_token/logo_url/0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7/753d82f0137617110f8dec56309b4065.png',
  },
}

export const findDefaultCoin = (coinKey: CoinKey): Coin => {
  const coin = defaultCoins.find((coin) => coin.key === coinKey)
  if (!coin) {
    throw new Error('Invalid Coin')
  }
  return coin
}
export const findDefaultToken = (
  coinKey: CoinKey,
  chainId: ChainId
): StaticToken => {
  const coin = findDefaultCoin(coinKey)
  const token = coin.chains[chainId]
  if (!token) {
    throw new Error(`Invalid chain ${chainId} to coin ${coinKey}`)
  }
  return token
}

export const findWrappedGasOnChain = (chainId: ChainId): StaticToken => {
  const token = wrappedTokens[chainId]
  if (!token) {
    throw new Error(`Wrapped Gas Token not defined for chain ${chainId}.`)
  }
  return token
}

export const findTokenByChainIdAndAddress = (
  chainId: number,
  tokenAddress: string
): StaticToken | null => {
  return (
    defaultCoins
      .flatMap(({ chains }) => Object.values(chains))
      .find(
        (token) =>
          token.chainId === chainId &&
          tokenAddress.toLowerCase() === token.address.toLowerCase()
      ) ?? null
  )
}
