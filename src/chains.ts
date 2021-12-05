import { BigNumber } from 'ethers'
import { ChainKey, CoinKey } from './base'

export interface Chain {
  key: ChainKey
  name: string
  coin: CoinKey
  id: number
  mainnet: boolean
  tokenlistUrl?: string
  faucetUrls?: string[]
  metamask: AddEthereumChainParameter
}

export interface AddEthereumChainParameter {
  chainId: string
  blockExplorerUrls: string[]
  chainName: string
  nativeCurrency: {
    name: string
    symbol: string
    decimals: number
  }
  rpcUrls: string[]
}

export const prefixChainId = (chainId: number): string => {
  return '0x' + BigNumber.from(chainId)._hex.split('0x')[1].replace(/\b0+/g, '')
}

// chainNames aligned with https://github.com/ethereum-lists/chains/tree/master/_data/chains
export const supportedChains: Array<Chain> = [
  // 1 - Ethereum
  {
    key: ChainKey.ETH,
    name: 'Ethereum',
    coin: CoinKey.ETH,
    id: 1,
    mainnet: true,
    tokenlistUrl: 'https://gateway.ipfs.io/ipns/tokens.uniswap.org',

    metamask: {
      chainId: prefixChainId(1),
      blockExplorerUrls: ['https://etherscan.io/'],
      chainName: 'Ethereum Mainnet',
      nativeCurrency: {
        name: 'ETH',
        symbol: 'ETH',
        decimals: 18,
      },
      rpcUrls: [
        'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
      ],
    },
  },
  // 137 - Polygon
  {
    key: ChainKey.POL,
    name: 'Polygon',
    coin: CoinKey.MATIC,
    id: 137,
    mainnet: true,
    tokenlistUrl:
      'https://unpkg.com/quickswap-default-token-list@1.0.71/build/quickswap-default.tokenlist.json',
    faucetUrls: ['https://stakely.io/faucet/polygon-matic'],

    // https://docs.matic.network/docs/develop/metamask/config-matic/
    metamask: {
      chainId: prefixChainId(137),
      blockExplorerUrls: [
        'https://polygonscan.com/',
        'https://explorer-mainnet.maticvigil.com/',
      ],
      chainName: 'Matic(Polygon) Mainnet',
      nativeCurrency: {
        name: 'MATIC',
        symbol: 'MATIC',
        decimals: 18,
      },
      rpcUrls: ['https://rpc-mainnet.maticvigil.com/'],
    },
  },
  // 56 - Binance Smart Chain
  {
    key: ChainKey.BSC,
    name: 'BSC',
    coin: CoinKey.BNB,
    id: 56,
    mainnet: true,
    tokenlistUrl:
      'https://tokens.pancakeswap.finance/pancakeswap-extended.json',
    faucetUrls: ['https://stakely.io/faucet/bsc-chain-bnb'],

    // https://docs.binance.org/smart-chain/wallet/metamask.html
    metamask: {
      chainId: prefixChainId(56),
      blockExplorerUrls: ['https://bscscan.com/'],
      chainName: 'Binance Smart Chain Mainnet',
      nativeCurrency: {
        name: 'BNB',
        symbol: 'BNB',
        decimals: 18,
      },
      rpcUrls: [
        'https://bsc-dataseed.binance.org/',
        'https://bsc-dataseed1.defibit.io/',
        'https://bsc-dataseed1.ninicoin.io/',
      ],
    },
  },
  // 100 - xDai
  {
    key: ChainKey.DAI,
    name: 'xDai',
    coin: CoinKey.DAI,
    id: 100,
    mainnet: true,
    tokenlistUrl: 'https://tokens.honeyswap.org/',
    faucetUrls: ['https://stakely.io/faucet/xdai-chain'],

    // https://www.xdaichain.com/for-users/wallets/metamask/metamask-setup
    metamask: {
      chainId: prefixChainId(100),
      blockExplorerUrls: ['https://blockscout.com/xdai/mainnet/'],
      chainName: 'xDAI Chain',
      nativeCurrency: {
        name: 'xDai',
        symbol: 'xDai',
        decimals: 18,
      },
      rpcUrls: [
        'https://rpc.xdaichain.com/',
        'https://dai.poa.network/',
        'https://xdai.poanetwork.dev/',
        'https://xdai.1hive.org/',
      ],
    },
  },
  // 250 - Fantom
  {
    key: ChainKey.FTM,
    name: 'Fantom',
    coin: CoinKey.FTM,
    id: 250,
    mainnet: true,
    tokenlistUrl:
      'https://raw.githubusercontent.com/SpookySwap/spooky-info/master/src/constants/token/spookyswap.json',
    faucetUrls: [
      'https://stakely.io/faucet/fantom-blockchain-ftm',
      'https://docs.spookyswap.finance/getting-started/how-to-get-fantom-gas',
    ],

    // https://docs.fantom.foundation/tutorials/set-up-metamask
    metamask: {
      chainId: prefixChainId(250),
      blockExplorerUrls: ['https://ftmscan.com/'],
      chainName: 'Fantom Opera',
      nativeCurrency: {
        name: 'FTM',
        symbol: 'FTM',
        decimals: 18,
      },
      rpcUrls: ['https://rpc.ftm.tools/', 'https://rpcapi.fantom.network'],
    },
  },
  // 66 - OKExCHain
  {
    key: ChainKey.OKT,
    name: 'OKExCHain',
    coin: CoinKey.OKT,
    id: 66,
    mainnet: true,
    tokenlistUrl:
      'https://raw.githubusercontent.com/sushiswap/default-token-list/master/tokens/okex.json',

    // https://okexchain-docs.readthedocs.io/en/latest/developers/quick-start-for-mainnet.html
    metamask: {
      chainId: prefixChainId(66),
      blockExplorerUrls: ['https://www.oklink.com/okexchain/'],
      chainName: 'OKExChain Mainnet',
      nativeCurrency: {
        name: 'OKT',
        symbol: 'OKT',
        decimals: 18,
      },
      rpcUrls: ['https://exchainrpc.okex.org'],
    },
  },
  // 43114 - Avalanche
  {
    key: ChainKey.AVA,
    name: 'Avalanche',
    coin: CoinKey.AVAX,
    id: 43114,
    mainnet: true,
    tokenlistUrl:
      'https://raw.githubusercontent.com/sushiswap/default-token-list/master/tokens/avalanche.json',

    // https://support.avax.network/en/articles/4626956-how-do-i-set-up-metamask-on-avalanche
    metamask: {
      chainId: prefixChainId(43114),
      blockExplorerUrls: ['https://cchain.explorer.avax.network/'],
      chainName: 'Avalanche Mainnet',
      nativeCurrency: {
        name: 'AVAX',
        symbol: 'AVAX',
        decimals: 18,
      },
      rpcUrls: ['https://api.avax.network/ext/bc/C/rpc'],
    },
  },
  // 42161 - Arbitrum One
  {
    key: ChainKey.ARB,
    name: 'Arbitrum One',
    coin: CoinKey.ETH,
    id: 42161,
    mainnet: true,
    tokenlistUrl:
      'https://raw.githubusercontent.com/sushiswap/default-token-list/master/tokens/arbitrum.json',
    faucetUrls: ['https://bridge.arbitrum.io/'],

    metamask: {
      chainId: prefixChainId(42161),
      blockExplorerUrls: ['https://arbiscan.io/'],
      chainName: 'Arbitrum One',
      nativeCurrency: {
        name: 'AETH',
        symbol: 'AETH',
        decimals: 18, // check
      },
      rpcUrls: ['https://arb1.arbitrum.io/rpc'],
    },
  },
  // 128 - Huobi ECO Chain Mainnet
  {
    key: ChainKey.HEC,
    name: 'Huobi ECO Chain Mainnet',
    coin: CoinKey.HT,
    id: 128,
    mainnet: true,
    tokenlistUrl:
      'https://raw.githubusercontent.com/sushiswap/default-token-list/master/tokens/heco.json',

    metamask: {
      chainId: prefixChainId(128),
      blockExplorerUrls: ['https://hecoinfo.com/'],
      chainName: 'Huobi ECO Chain Mainnet',
      nativeCurrency: {
        name: 'HT',
        symbol: 'HT',
        decimals: 18,
      },
      rpcUrls: ['https://http-mainnet.hecochain.com'],
    },
  },
  // 10 - Optimistic Ethereum
  {
    key: ChainKey.OPT,
    name: 'Optimistic Ethereum',
    coin: CoinKey.ETH,
    id: 10,
    mainnet: true,
    tokenlistUrl: 'https://static.optimism.io/optimism.tokenlist.json',

    faucetUrls: ['https://gateway.optimism.io/'],

    metamask: {
      chainId: prefixChainId(10),
      blockExplorerUrls: ['https://optimistic.etherscan.io/'],
      chainName: 'Optimistic Ethereum',
      nativeCurrency: {
        name: 'OETH',
        symbol: 'OETH',
        decimals: 18,
      },
      rpcUrls: ['https://mainnet.optimism.io/'],
    },
  },

  // 32659 - Fusion (anyswap)
  {
    key: ChainKey.FSN,
    name: 'Fusion Mainnet',
    coin: CoinKey.FSN,
    id: 32659,
    mainnet: true,

    // https://support.avax.network/en/articles/4626956-how-do-i-set-up-metamask-on-avalanche
    metamask: {
      chainId: prefixChainId(32659),
      blockExplorerUrls: ['https://fsnex.com/'],
      chainName: 'Fusion Mainnet',

      nativeCurrency: {
        name: 'FSN',
        symbol: 'FSN',
        decimals: 18,
      },
      rpcUrls: ['https://fsnmainnet2.anyswap.exchange'],
    },
  },

  // 1666600000 - Harmony Mainnet Shard 0
  {
    key: ChainKey.ONE,
    name: 'Harmony',
    coin: CoinKey.ONE,
    id: 1666600000,
    mainnet: true,
    tokenlistUrl:
      'https://d1xrz6ki9z98vb.cloudfront.net/venomswap/lists/venomswap-default.tokenlist.json',
    faucetUrls: ['https://stakely.io/faucet/harmony-one'],

    // https://docs.harmony.one/home/developers/wallets/metamask/connect-metamask-to-the-harmony-chain
    metamask: {
      chainId: prefixChainId(1666600000),
      blockExplorerUrls: ['https://explorer.harmony.one/'],
      chainName: 'Harmony Mainnet Shard 0',

      nativeCurrency: {
        name: 'ONE',
        symbol: 'ONE',
        decimals: 18,
      },
      rpcUrls: ['https://api.harmony.one'],
    },
  },

  // 1285 - Moonriver
  {
    key: ChainKey.MOR,
    name: 'Moonriver',
    coin: CoinKey.MOVR,
    id: 1285,
    mainnet: true,
    tokenlistUrl:
      'https://raw.githubusercontent.com/sushiswap/default-token-list/master/tokens/moonriver.json',

    metamask: {
      chainId: prefixChainId(1285),
      blockExplorerUrls: ['https://blockscout.moonriver.moonbeam.network/'],
      chainName: 'Moonriver',

      nativeCurrency: {
        name: 'Moonriver',
        symbol: 'MOVR',
        decimals: 18,
      },
      rpcUrls: ['https://rpc.moonriver.moonbeam.network'],
    },
  },

  // 2 - Expanse Network
  {
    key: ChainKey.EXP,
    name: 'Expanse Network',
    coin: CoinKey.EXP,
    id: 2,
    mainnet: true,

    metamask: {
      chainId: prefixChainId(2),
      blockExplorerUrls: ['https://expanse.tech/'],
      chainName: 'Expanse Network',

      nativeCurrency: {
        name: 'EXP',
        symbol: 'EXP',
        decimals: 18,
      },
      rpcUrls: ['https://node.expanse.tech'],
    },
  },
  // 7 - ThaiChain
  {
    key: ChainKey.TCH,
    name: 'ThaiChain',
    coin: CoinKey.TCH,
    id: 7,
    mainnet: true,

    metamask: {
      chainId: prefixChainId(7),
      blockExplorerUrls: ['https://thaichain.io/'],
      chainName: 'ThaiChain',

      nativeCurrency: {
        name: 'TCH',
        symbol: 'TCH',
        decimals: 18,
      },
      rpcUrls: ['https://rpc.dome.cloud/'],
    },
  },
  // 8 - Ubiq
  {
    key: ChainKey.UBQ,
    name: 'Ubiq',
    coin: CoinKey.UBQ,
    id: 8,
    mainnet: true,

    metamask: {
      chainId: prefixChainId(8),
      blockExplorerUrls: ['https://ubiqscan.io/'],
      chainName: 'Ubiq',

      nativeCurrency: {
        name: 'UBQ',
        symbol: 'UBQ',
        decimals: 18,
      },
      rpcUrls: ['https://rpc.octano.dev/'],
    },
  },
  // 11 - Metadium Mainnet
  {
    key: ChainKey.MET,
    name: 'Metadium Mainnet',
    coin: CoinKey.META,
    id: 11,
    mainnet: true,

    metamask: {
      chainId: prefixChainId(11),
      blockExplorerUrls: ['https://metadium.com/'],
      chainName: 'Metadium Mainnet',

      nativeCurrency: {
        name: 'META',
        symbol: 'META',
        decimals: 18,
      },
      rpcUrls: ['https://api.metadium.com/prod'],
    },
  },
  // 15 - Diode Prenet
  {
    key: ChainKey.DIO,
    name: 'DIODE',
    coin: CoinKey.DIODE,
    id: 15,
    mainnet: true,

    metamask: {
      chainId: prefixChainId(15),
      blockExplorerUrls: ['https://diode.io/prenet/'],
      chainName: 'Diode Prenet',

      nativeCurrency: {
        name: 'Diodes',
        symbol: 'DIODE',
        decimals: 18,
      },
      rpcUrls: ['https://prenet.diode.io:8443/'],
    },
  },
  // 42220 Celo Mainnet
  {
    key: ChainKey.CEL,
    name: 'CELO',
    coin: CoinKey.CELO,
    id: 42220,
    mainnet: true,
    tokenlistUrl:
      'https://raw.githubusercontent.com/sushiswap/default-token-list/master/tokens/celo.json',
    faucetUrls: [
      'https://stakely.io/faucet/celo-platform',
      'https://free-online-app.com/faucet-for-eth-evm-chains/',
    ],

    metamask: {
      chainId: prefixChainId(42220),
      blockExplorerUrls: ['https://explorer.celo.org/'],
      chainName: 'Celo Mainnet',

      nativeCurrency: {
        name: 'CELO',
        symbol: 'CELO',
        decimals: 18,
      },
      rpcUrls: ['https://forno.celo.org'],
    },
  },
  // 122 Fuse Mainnet
  {
    key: ChainKey.FUS,
    name: 'FUSE',
    coin: CoinKey.FUSE,
    id: 122,
    mainnet: true,
    tokenlistUrl:
      'https://raw.githubusercontent.com/sushiswap/default-token-list/master/tokens/fuse.json',

    metamask: {
      chainId: prefixChainId(122),
      blockExplorerUrls: ['https://fuse.io/'],
      chainName: 'Fuse Mainnet',

      nativeCurrency: {
        name: 'FUSE',
        symbol: 'FUSE',
        decimals: 18,
      },
      rpcUrls: ['https://rpc.fuse.io'],
    },
  },
  // 40 Telos EVM Mainnet
  {
    key: ChainKey.TLO,
    name: 'Telos',
    coin: CoinKey.TLOS,
    id: 40,
    mainnet: true,
    tokenlistUrl:
      'https://raw.githubusercontent.com/sushiswap/default-token-list/master/tokens/telos.json',

    metamask: {
      chainId: prefixChainId(40),
      blockExplorerUrls: ['https://telos.net/'],
      chainName: 'Telos EVM Mainnet',

      nativeCurrency: {
        name: 'Telos',
        symbol: 'TLOS',
        decimals: 18,
      },
      rpcUrls: ['https://mainnet.telos.net/evm'],
    },
  },
  // 25 Cronos Mainnet Beta
  {
    key: ChainKey.CRO,
    name: 'Cronos',
    coin: CoinKey.CRO,
    id: 25,
    mainnet: true,

    metamask: {
      chainId: prefixChainId(25),
      blockExplorerUrls: ['https://cronos.crypto.org/explorer/'],
      chainName: 'Cronos',

      nativeCurrency: {
        name: 'Crypto.org Coin',
        symbol: 'CRO',
        decimals: 18,
      },
      rpcUrls: ['https://evm-cronos.crypto.org'],
    },
  },
  // 288 Boba Network
  {
    key: ChainKey.BOB,
    name: 'Boba',
    coin: CoinKey.ETH,
    id: 288,
    mainnet: true,

    metamask: {
      chainId: prefixChainId(288),
      blockExplorerUrls: ['https://blockexplorer.boba.network/'],
      chainName: 'Boba',

      nativeCurrency: {
        name: 'ETH',
        symbol: 'ETH',
        decimals: 18,
      },
      rpcUrls: ['https://mainnet.boba.network/'],
    },
  },

  // TESTNETS
  // 3 - Ropsten
  {
    key: ChainKey.ROP,
    name: 'Ropsten',
    coin: CoinKey.ETH,
    id: 3,
    mainnet: false,
    tokenlistUrl:
      'https://raw.githubusercontent.com/compound-finance/token-list/master/compound.tokenlist.json',
    faucetUrls: [
      'https://faucet.ropsten.be/',
      'https://app.compound.finance/', // https://teller.gitbook.io/teller-1/testing-guide/getting-testnet-tokens-ropsten-1
    ],

    metamask: {
      chainId: prefixChainId(3),
      blockExplorerUrls: ['https://ropsten.etherscan.io/'],
      chainName: 'Ethereum Testnet Ropsten',
      nativeCurrency: {
        name: 'ETH',
        symbol: 'ETH',
        decimals: 18,
      },
      rpcUrls: [
        'https://ropsten.infura.io/v3/d1caeba320f94122ba8f791f50122c4c',
      ],
    },
  },
  // 4 - Rinkeby
  {
    key: ChainKey.RIN,
    name: 'Rinkeby',
    coin: CoinKey.ETH,
    id: 4,
    mainnet: false,
    tokenlistUrl:
      'https://raw.githubusercontent.com/compound-finance/token-list/master/compound.tokenlist.json',
    faucetUrls: ['https://faucet.rinkeby.io/'],

    metamask: {
      chainId: prefixChainId(4),
      blockExplorerUrls: ['https://rinkeby.etherscan.io/'],
      chainName: 'Ethereum Testnet Rinkeby',
      nativeCurrency: {
        name: 'ETH',
        symbol: 'ETH',
        decimals: 18,
      },
      rpcUrls: [
        'https://rinkeby.infura.io/v3/d1caeba320f94122ba8f791f50122c4c',
      ],
    },
  },
  // 5 - Goerli
  {
    key: ChainKey.GOR,
    name: 'Goerli',
    coin: CoinKey.ETH,
    id: 5,
    mainnet: false,
    tokenlistUrl:
      'https://raw.githubusercontent.com/compound-finance/token-list/master/compound.tokenlist.json',
    faucetUrls: ['https://goerli-faucet.slock.it/'],

    metamask: {
      chainId: prefixChainId(5),
      blockExplorerUrls: ['https://goerli.etherscan.io/'],
      chainName: 'Ethereum Testnet Görli',
      nativeCurrency: {
        name: 'ETH',
        symbol: 'ETH',
        decimals: 18,
      },
      rpcUrls: ['https://goerli.infura.io/v3/d1caeba320f94122ba8f791f50122c4c'],
    },
  },
  // 12 - Metadium Testnet
  {
    key: ChainKey.METT,
    name: 'Metadium Testnet',
    coin: CoinKey.KAL,
    id: 12,
    mainnet: false,

    metamask: {
      chainId: prefixChainId(12),
      blockExplorerUrls: ['https://metadium.com/'],
      chainName: 'Metadium Testnet',

      nativeCurrency: {
        name: 'KAL',
        symbol: 'KAL',
        decimals: 18,
      },
      rpcUrls: ['https://api.metadium.com/dev'],
    },
  },
  // 13 - Diode Testnet Staging
  {
    key: ChainKey.DIOT,
    name: 'DIODE',
    coin: CoinKey.SDIODE,
    id: 13,
    mainnet: false,

    metamask: {
      chainId: prefixChainId(13),
      blockExplorerUrls: ['https://diode.io/staging/'],
      chainName: 'Diode Testnet Staging',

      nativeCurrency: {
        name: 'Staging Diodes',
        symbol: 'sDIODE',
        decimals: 18,
      },
      rpcUrls: ['https://staging.diode.io:8443/'],
    },
  },
  // 42 - Kovan
  {
    key: ChainKey.KOV,
    name: 'Kovan',
    coin: CoinKey.ETH,
    id: 42,
    mainnet: false,
    tokenlistUrl:
      'https://raw.githubusercontent.com/compound-finance/token-list/master/compound.tokenlist.json',
    faucetUrls: [
      'https://ethdrop.dev/',
      'https://gitter.im/kovan-testnet/faucet',
    ],

    metamask: {
      chainId: prefixChainId(42),
      blockExplorerUrls: ['https://kovan.etherscan.io/'],
      chainName: 'Ethereum Testnet Kovan',
      nativeCurrency: {
        name: 'ETH',
        symbol: 'ETH',
        decimals: 18,
      },
      rpcUrls: ['https://kovan.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'],
    },
  },
  // 80001 - Mumbai Polygon Testnet
  {
    key: ChainKey.MUM,
    name: 'Polygon Testnet',
    coin: CoinKey.MATIC,
    id: 80001,
    mainnet: false,
    tokenlistUrl:
      'https://raw.githubusercontent.com/elkfinance/tokens/main/mumbai.tokenlist.json',
    faucetUrls: ['https://faucet.matic.network/'],

    metamask: {
      chainId: prefixChainId(80001),
      blockExplorerUrls: ['https://explorer-mumbai.maticvigil.com/'],
      chainName: 'Matic(Polygon) Testnet Mumbai',
      nativeCurrency: {
        name: 'MATIC',
        symbol: 'tMATIC',
        decimals: 18,
      },
      rpcUrls: ['https://rpc-mumbai.matic.today'],
    },
  },
  // 421611 - Arbitrum Testnet
  {
    key: ChainKey.ARBT,
    name: 'Arbitrum Testnet',
    coin: CoinKey.ETH,
    id: 421611,
    mainnet: false,
    faucetUrls: ['https://bridge.arbitrum.io/'],

    metamask: {
      chainId: prefixChainId(421611),
      blockExplorerUrls: ['https://rinkeby-explorer.arbitrum.io/#/'],
      chainName: 'Arbitrum Testnet Rinkeby',
      nativeCurrency: {
        name: 'ARETH',
        symbol: 'ARETH',
        decimals: 18,
      },
      rpcUrls: ['https://rinkeby.arbitrum.io/rpc'],
    },
  },
  // 69 - Optimistic Ethereum (Kovan)
  {
    key: ChainKey.OPTT,
    name: 'Optimism Testnet',
    coin: CoinKey.ETH,
    id: 69,
    mainnet: false,
    faucetUrls: ['https://gateway.optimism.io/'],

    metamask: {
      chainId: prefixChainId(69),
      blockExplorerUrls: ['https://kovan-optimistic.etherscan.io/'],
      chainName: 'Optimistic Ethereum Testnet Kovan',
      nativeCurrency: {
        name: 'tETH',
        symbol: 'tETH',
        decimals: 18,
      },
      rpcUrls: ['https://kovan.optimism.io'],
    },
  },
  // 97 - Binance Smart Chain Testnet
  {
    key: ChainKey.BSCT,
    name: 'Binance Smart Chain Testnet',
    coin: CoinKey.BNB,
    id: 97,
    mainnet: false,
    faucetUrls: ['https://testnet.binance.org/faucet-smart'],

    metamask: {
      chainId: prefixChainId(97),
      blockExplorerUrls: ['https://testnet.bscscan.com/'],
      chainName: 'Binance Smart Chain Testnet',
      nativeCurrency: {
        name: 'tBNB',
        symbol: 'tBNB',
        decimals: 18,
      },
      rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
    },
  },

  // 256 - Huobi ECO Chain Testnet
  {
    key: ChainKey.HECT,
    name: 'Huobi ECO Chain Testnet',
    coin: 'HTT' as CoinKey,
    id: 256,
    mainnet: false,
    faucetUrls: ['https://scan-testnet.hecochain.com/faucet'],

    metamask: {
      chainId: prefixChainId(256),
      blockExplorerUrls: ['https://scan-testnet.hecochain.com/'],
      chainName: 'Huobi ECO Chain Testnet',
      nativeCurrency: {
        name: 'HT',
        symbol: 'HT',
        decimals: 18,
      },
      rpcUrls: [
        'https://http-testnet.hecochain.com',
        'wss://ws-testnet.hecochain.com',
      ],
    },
  },
  // 1666700000 - Harmony Testnet 0
  {
    key: ChainKey.ONET,
    name: 'Harmony Testnet',
    coin: CoinKey.ONE,
    id: 1666700000,
    mainnet: false,
    // https://docs.harmony.one/home/developers/wallets/metamask/connect-metamask-to-the-harmony-chain
    metamask: {
      chainId: prefixChainId(1666700000),
      blockExplorerUrls: [
        'https://explorer.pops.one/',
        'https://explorer.testnet.harmony.one/',
      ],
      chainName: 'Harmony Testnet Shard 0',

      nativeCurrency: {
        name: 'ONE',
        symbol: 'ONE',
        decimals: 18,
      },
      rpcUrls: ['https://api.s0.b.hmny.io'],
    },
  },
  // 123 Fuse Sparknet
  {
    key: ChainKey.FUST,
    name: 'SPARK',
    coin: CoinKey.SPARK,
    id: 123,
    mainnet: false,

    metamask: {
      chainId: prefixChainId(123),
      blockExplorerUrls: [
        'https://docs.fuse.io/general/fuse-network-blockchain/fuse-testnet/',
      ],
      chainName: 'Fuse Mainnet',

      nativeCurrency: {
        name: 'Spark',
        symbol: 'SPARK',
        decimals: 18,
      },
      rpcUrls: ['https://rpc.fusespark.io'],
    },
  },
  // 41 Telos EVM Testnet
  {
    key: ChainKey.TLOT,
    name: 'Telos Testnet',
    coin: CoinKey.TLOS,
    id: 41,
    mainnet: false,
    faucetUrls: ['https://app.telos.net/testnet/developers'],

    metamask: {
      chainId: prefixChainId(41),
      blockExplorerUrls: ['https://telos.net/'],
      chainName: 'Telos EVM Mainnet',

      nativeCurrency: {
        name: 'Telos',
        symbol: 'TLOS',
        decimals: 18,
      },
      rpcUrls: ['https://testnet.telos.net/evm'],
    },
  },

  // https://faucet.buni.finance/
  // solana faucet: https://stakely.io/faucet/solana-sol
  // kucoin faucet: https://stakely.io/faucet/kucoin-kcc-kcs
  // Velas faucet: https://stakely.io/faucet/velas-vlx
]

export const getChainByKey = (chainKey: ChainKey): Chain => {
  const chain = supportedChains.find((chain) => chain.key === chainKey)
  if (!chain) {
    throw new Error('Invalid chainKey')
  }
  return chain
}

export const getChainById = (chainId: number): Chain => {
  const chain = supportedChains.find((chain) => chain.id === chainId)
  if (!chain) {
    throw new Error('Invalid chainId')
  }
  return chain
}
