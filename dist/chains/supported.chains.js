/*
    This file is for legacy compatibility only.
    Data regarding supported chains *should* be fetched from the API.
    This file is only used to provide legacy compatibility for existing tools.
*/
import { ChainId, ChainKey, CoinKey } from '../base';
import { multicallAddresses } from '../multicall';
import { ChainType } from './Chain';
import { prefixChainId } from './EVMChain';
// chainNames aligned with https://github.com/ethereum-lists/chains/tree/master/_data/chains
export const supportedEVMChains = [
    // 1 - Ethereum
    {
        key: ChainKey.ETH,
        chainType: ChainType.EVM,
        name: 'Ethereum',
        coin: CoinKey.ETH,
        id: 1,
        mainnet: true,
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/ethereum.svg',
        tokenlistUrl: 'https://gateway.ipfs.io/ipns/tokens.uniswap.org',
        multicallAddress: multicallAddresses[ChainId.ETH],
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
        chainType: ChainType.EVM,
        name: 'Polygon',
        coin: CoinKey.MATIC,
        id: 137,
        mainnet: true,
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/polygon.svg',
        tokenlistUrl: 'https://unpkg.com/quickswap-default-token-list@1.0.71/build/quickswap-default.tokenlist.json',
        faucetUrls: ['https://stakely.io/faucet/polygon-matic'],
        multicallAddress: multicallAddresses[ChainId.POL],
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
            rpcUrls: [
                'https://polygon-rpc.com/',
                'https://rpc-mainnet.maticvigil.com/',
            ],
        },
    },
    // 56 - Binance Smart Chain
    {
        key: ChainKey.BSC,
        chainType: ChainType.EVM,
        name: 'BSC',
        coin: CoinKey.BNB,
        id: 56,
        mainnet: true,
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/bsc.svg',
        tokenlistUrl: 'https://tokens.pancakeswap.finance/pancakeswap-extended.json',
        faucetUrls: ['https://stakely.io/faucet/bsc-chain-bnb'],
        multicallAddress: multicallAddresses[ChainId.BSC],
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
    // 100 - Gnosis
    {
        key: ChainKey.DAI,
        chainType: ChainType.EVM,
        name: 'Gnosis',
        coin: CoinKey.DAI,
        id: 100,
        mainnet: true,
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/gnosis.svg',
        tokenlistUrl: 'https://tokens.honeyswap.org/',
        faucetUrls: ['https://stakely.io/faucet/xdai-chain'],
        multicallAddress: multicallAddresses[ChainId.DAI],
        // https://www.xdaichain.com/for-users/wallets/metamask/metamask-setup
        metamask: {
            chainId: prefixChainId(100),
            blockExplorerUrls: ['https://blockscout.com/xdai/mainnet/'],
            chainName: 'Gnosis Chain',
            nativeCurrency: {
                name: 'xDai',
                symbol: 'xDai',
                decimals: 18,
            },
            rpcUrls: [
                'https://rpc.gnosischain.com/',
                'https://rpc.ankr.com/gnosis',
                'https://xdai-rpc.gateway.pokt.network',
            ],
        },
    },
    // 250 - Fantom
    {
        key: ChainKey.FTM,
        chainType: ChainType.EVM,
        name: 'Fantom',
        coin: CoinKey.FTM,
        id: 250,
        mainnet: true,
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/fantom.svg',
        tokenlistUrl: 'https://raw.githubusercontent.com/SpookySwap/spooky-info/master/src/constants/token/spookyswap.json',
        faucetUrls: [
            'https://stakely.io/faucet/fantom-blockchain-ftm',
            'https://docs.spookyswap.finance/getting-started/how-to-get-fantom-gas',
        ],
        multicallAddress: multicallAddresses[ChainId.FTM],
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
    // 66 - OKXChain
    {
        key: ChainKey.OKT,
        chainType: ChainType.EVM,
        name: 'OKXChain',
        coin: CoinKey.OKT,
        id: 66,
        mainnet: true,
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/okx.svg',
        tokenlistUrl: 'https://raw.githubusercontent.com/sushiswap/default-token-list/master/tokens/okex.json',
        multicallAddress: multicallAddresses[ChainId.OKT],
        // https://okc-docs.readthedocs.io/en/latest/developers/quick-start-for-mainnet.html
        metamask: {
            chainId: prefixChainId(66),
            blockExplorerUrls: ['https://www.oklink.com/en/okc/'],
            chainName: 'OKXChain Mainnet',
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
        chainType: ChainType.EVM,
        name: 'Avalanche',
        coin: CoinKey.AVAX,
        id: 43114,
        mainnet: true,
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/avalanche.svg',
        tokenlistUrl: 'https://raw.githubusercontent.com/sushiswap/default-token-list/master/tokens/avalanche.json',
        multicallAddress: multicallAddresses[ChainId.AVA],
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
    // 42161 - Arbitrum
    {
        key: ChainKey.ARB,
        chainType: ChainType.EVM,
        name: 'Arbitrum',
        coin: CoinKey.ETH,
        id: 42161,
        mainnet: true,
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/arbitrum.svg',
        tokenlistUrl: 'https://raw.githubusercontent.com/sushiswap/default-token-list/master/tokens/arbitrum.json',
        faucetUrls: ['https://bridge.arbitrum.io/'],
        multicallAddress: multicallAddresses[ChainId.ARB],
        metamask: {
            chainId: prefixChainId(42161),
            blockExplorerUrls: ['https://arbiscan.io/'],
            chainName: 'Arbitrum',
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
        chainType: ChainType.EVM,
        name: 'Huobi ECO Chain Mainnet',
        coin: CoinKey.HT,
        id: 128,
        mainnet: true,
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/heco.png',
        tokenlistUrl: 'https://raw.githubusercontent.com/sushiswap/default-token-list/master/tokens/heco.json',
        multicallAddress: multicallAddresses[ChainId.HEC],
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
    // 10 - Optimism
    {
        key: ChainKey.OPT,
        chainType: ChainType.EVM,
        name: 'Optimism',
        coin: CoinKey.ETH,
        id: 10,
        mainnet: true,
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/optimism.svg',
        tokenlistUrl: 'https://static.optimism.io/optimism.tokenlist.json',
        faucetUrls: ['https://gateway.optimism.io/'],
        multicallAddress: multicallAddresses[ChainId.OPT],
        metamask: {
            chainId: prefixChainId(10),
            blockExplorerUrls: ['https://optimistic.etherscan.io/'],
            chainName: 'Optimism',
            nativeCurrency: {
                name: 'ETH',
                symbol: 'ETH',
                decimals: 18,
            },
            rpcUrls: ['https://mainnet.optimism.io/'],
        },
    },
    // 32659 - Fusion (anyswap)
    {
        key: ChainKey.FSN,
        chainType: ChainType.EVM,
        name: 'Fusion Mainnet',
        coin: CoinKey.FSN,
        id: 32659,
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/fusion.png',
        mainnet: true,
        multicallAddress: multicallAddresses[ChainId.FSN],
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
        chainType: ChainType.EVM,
        name: 'Harmony',
        coin: CoinKey.ONE,
        id: 1666600000,
        mainnet: true,
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/harmony.svg',
        tokenlistUrl: 'https://d1xrz6ki9z98vb.cloudfront.net/venomswap/lists/venomswap-default.tokenlist.json',
        faucetUrls: ['https://stakely.io/faucet/harmony-one'],
        multicallAddress: multicallAddresses[ChainId.ONE],
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
        chainType: ChainType.EVM,
        name: 'Moonriver',
        coin: CoinKey.MOVR,
        id: 1285,
        mainnet: true,
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/moonriver.svg',
        tokenlistUrl: 'https://raw.githubusercontent.com/sushiswap/default-token-list/master/tokens/moonriver.json',
        multicallAddress: multicallAddresses[ChainId.MOR],
        metamask: {
            chainId: prefixChainId(1285),
            blockExplorerUrls: ['https://blockscout.moonriver.moonbeam.network/'],
            chainName: 'Moonriver',
            nativeCurrency: {
                name: 'Moonriver',
                symbol: 'MOVR',
                decimals: 18,
            },
            rpcUrls: ['https://rpc.api.moonriver.moonbeam.network'],
        },
    },
    // 1284 Moonbeam
    {
        key: ChainKey.MOO,
        chainType: ChainType.EVM,
        name: 'Moonbeam',
        coin: CoinKey.GLMR,
        id: 1284,
        mainnet: true,
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/moonbeam.svg',
        tokenlistUrl: 'https://raw.githubusercontent.com/BeamSwap/beamswap-tokenlist/main/tokenlist.json',
        multicallAddress: multicallAddresses[ChainId.MOO],
        metamask: {
            chainId: prefixChainId(1284),
            blockExplorerUrls: ['https://blockscout.moonbeam.network/'],
            chainName: 'Moonbeam',
            nativeCurrency: {
                name: 'GLMR',
                symbol: 'GLMR',
                decimals: 18,
            },
            rpcUrls: ['https://rpc.api.moonbeam.network'],
        },
    },
    // 2 - Expanse Network
    {
        key: ChainKey.EXP,
        chainType: ChainType.EVM,
        name: 'Expanse Network',
        coin: CoinKey.EXP,
        id: 2,
        mainnet: true,
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/expanse.png',
        multicallAddress: multicallAddresses[ChainId.EXP],
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
        chainType: ChainType.EVM,
        name: 'ThaiChain',
        coin: CoinKey.TCH,
        id: 7,
        mainnet: true,
        multicallAddress: multicallAddresses[ChainId.TCH],
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
        chainType: ChainType.EVM,
        name: 'Ubiq',
        coin: CoinKey.UBQ,
        id: 8,
        mainnet: true,
        multicallAddress: multicallAddresses[ChainId.UBQ],
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
        chainType: ChainType.EVM,
        name: 'Metadium Mainnet',
        coin: CoinKey.META,
        id: 11,
        mainnet: true,
        multicallAddress: multicallAddresses[ChainId.MET],
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
        chainType: ChainType.EVM,
        name: 'DIODE',
        coin: CoinKey.DIODE,
        id: 15,
        mainnet: true,
        multicallAddress: multicallAddresses[ChainId.DIO],
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
        chainType: ChainType.EVM,
        name: 'CELO',
        coin: CoinKey.CELO,
        id: 42220,
        mainnet: true,
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/celo.svg',
        tokenlistUrl: 'https://raw.githubusercontent.com/sushiswap/default-token-list/master/tokens/celo.json',
        faucetUrls: [
            'https://stakely.io/faucet/celo-platform',
            'https://free-online-app.com/faucet-for-eth-evm-chains/',
        ],
        multicallAddress: multicallAddresses[ChainId.CEL],
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
        chainType: ChainType.EVM,
        name: 'FUSE',
        coin: CoinKey.FUSE,
        id: 122,
        mainnet: true,
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/fuse.svg',
        tokenlistUrl: 'https://raw.githubusercontent.com/sushiswap/default-token-list/master/tokens/fuse.json',
        multicallAddress: multicallAddresses[ChainId.FUS],
        metamask: {
            chainId: prefixChainId(122),
            blockExplorerUrls: ['https://explorer.fuse.io/'],
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
        chainType: ChainType.EVM,
        name: 'Telos',
        coin: CoinKey.TLOS,
        id: 40,
        mainnet: true,
        tokenlistUrl: 'https://raw.githubusercontent.com/sushiswap/default-token-list/master/tokens/telos.json',
        multicallAddress: multicallAddresses[ChainId.TLO],
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
        chainType: ChainType.EVM,
        name: 'Cronos',
        coin: CoinKey.CRO,
        id: 25,
        mainnet: true,
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/cronos.svg',
        tokenlistUrl: 'https://raw.githubusercontent.com/cronaswap/cronaswap-tokenlists/main/cronaswap-default.tokenlist.json',
        multicallAddress: multicallAddresses[ChainId.CRO],
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
        chainType: ChainType.EVM,
        name: 'Boba',
        coin: CoinKey.ETH,
        id: 288,
        mainnet: true,
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/boba.png',
        // TODO: we should update token list url to latest one
        tokenlistUrl: 'https://raw.githubusercontent.com/OolongSwap/boba-community-token-list/main/build/boba.tokenlist.json',
        multicallAddress: multicallAddresses[ChainId.BOB],
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
    // 27 ShibaChain
    {
        key: ChainKey.SHI,
        chainType: ChainType.EVM,
        name: 'Shiba',
        coin: CoinKey.SHIB,
        id: 27,
        mainnet: true,
        multicallAddress: multicallAddresses[ChainId.SHI],
        metamask: {
            chainId: prefixChainId(27),
            blockExplorerUrls: ['https://exp.shibachain.net/'],
            chainName: 'Shiba',
            nativeCurrency: {
                name: 'SHIB',
                symbol: 'SHIB',
                decimals: 18,
            },
            rpcUrls: ['https://rpc.shibachain.net'],
        },
    },
    // 29 Genesis L1
    {
        key: ChainKey.GL1,
        chainType: ChainType.EVM,
        name: 'Genesis L1',
        coin: CoinKey.L1,
        id: 29,
        mainnet: true,
        multicallAddress: multicallAddresses[ChainId.GL1],
        metamask: {
            chainId: prefixChainId(29),
            blockExplorerUrls: ['https://explorer.genesisl1.org/'],
            chainName: 'Genesis L1',
            nativeCurrency: {
                name: 'L1',
                symbol: 'L1',
                decimals: 18,
            },
            rpcUrls: ['https://rpc.genesisl1.org'],
        },
    },
    // 30 RSK Mainnet
    {
        key: ChainKey.RSK,
        chainType: ChainType.EVM,
        name: 'RSK Mainnet',
        coin: CoinKey.RBTC,
        id: 30,
        mainnet: true,
        multicallAddress: multicallAddresses[ChainId.RSK],
        metamask: {
            chainId: prefixChainId(30),
            blockExplorerUrls: ['https://explorer.rsk.co/'],
            chainName: 'RSK Mainnet',
            nativeCurrency: {
                name: 'RBTC',
                symbol: 'RBTC',
                decimals: 18,
            },
            rpcUrls: ['https://public-node.rsk.co'],
        },
    },
    // 35 TBWG Chain
    {
        key: ChainKey.TBW,
        chainType: ChainType.EVM,
        name: 'TBWG',
        coin: CoinKey.TBG,
        id: 35,
        mainnet: true,
        multicallAddress: multicallAddresses[ChainId.TBW],
        metamask: {
            chainId: prefixChainId(35),
            blockExplorerUrls: ['https://tbwg.io/'],
            chainName: 'TBWG',
            nativeCurrency: {
                name: 'TBG',
                symbol: 'TBG',
                decimals: 18,
            },
            rpcUrls: ['https://rpc.tbwg.io'],
        },
    },
    // 106 Velas EVM Mainnet
    {
        key: ChainKey.VEL,
        chainType: ChainType.EVM,
        name: 'Velas',
        coin: CoinKey.VLX,
        id: 106,
        mainnet: true,
        multicallAddress: multicallAddresses[ChainId.VEL],
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/velas.png',
        faucetUrls: ['https://stakely.io/faucet/velas-vlx'],
        metamask: {
            chainId: prefixChainId(106),
            blockExplorerUrls: ['https://evmexplorer.velas.com/'],
            chainName: 'Velas',
            nativeCurrency: {
                name: 'VLX',
                symbol: 'VLX',
                decimals: 18,
            },
            rpcUrls: ['https://evmexplorer.velas.com/rpc'],
        },
    },
    // 1088 Metis Andromeda Mainnet
    {
        key: ChainKey.MAM,
        chainType: ChainType.EVM,
        name: 'Metis',
        coin: CoinKey.METIS,
        id: 1088,
        mainnet: true,
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/metis.png',
        tokenlistUrl: 'https://raw.githubusercontent.com/digitalnativeinc/default-token-list/dnf/tokens/metis.json',
        multicallAddress: multicallAddresses[ChainId.MAM],
        metamask: {
            chainId: prefixChainId(1088),
            blockExplorerUrls: ['https://andromeda-explorer.metis.io/'],
            chainName: 'Metis',
            nativeCurrency: {
                name: 'METIS',
                symbol: 'METIS',
                decimals: 18,
            },
            rpcUrls: ['https://andromeda.metis.io/?owner=1088'],
        },
    },
    // 1313161554 Aurora Mainnet
    {
        key: ChainKey.AUR,
        chainType: ChainType.EVM,
        name: 'Aurora',
        coin: CoinKey.ETH,
        id: 1313161554,
        mainnet: true,
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/aurora.png',
        tokenlistUrl: 'https://aurora.dev/tokens.json',
        multicallAddress: multicallAddresses[ChainId.AUR],
        metamask: {
            chainId: prefixChainId(1313161554),
            blockExplorerUrls: ['https://aurorascan.dev/'],
            chainName: 'Aurora',
            nativeCurrency: {
                name: 'ETH',
                symbol: 'ETH',
                decimals: 18,
            },
            rpcUrls: ['https://mainnet.aurora.dev'],
        },
    },
    // EVM = 9001,
    {
        key: ChainKey.EVM,
        chainType: ChainType.EVM,
        name: 'Evmos',
        coin: CoinKey.EVM,
        id: 9001,
        mainnet: true,
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/evmos.svg',
        multicallAddress: multicallAddresses[ChainId.EVM],
        metamask: {
            chainId: prefixChainId(9001),
            blockExplorerUrls: ['https://evm.evmos.org/'],
            chainName: 'Evmos',
            nativeCurrency: {
                name: 'EVMOS',
                symbol: 'EVMOS',
                decimals: 18,
            },
            rpcUrls: ['https://eth.bd.evmos.org:8545'],
        },
    },
    // TESTNETS
    // 3 - Ropsten
    {
        key: ChainKey.ROP,
        chainType: ChainType.EVM,
        name: 'Ropsten',
        coin: CoinKey.ETH,
        id: 3,
        mainnet: false,
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/ethereum_ropsten.png',
        tokenlistUrl: 'https://raw.githubusercontent.com/compound-finance/token-list/master/compound.tokenlist.json',
        faucetUrls: [
            'https://faucet.ropsten.be/',
            'https://app.compound.finance/', // https://teller.gitbook.io/teller-1/testing-guide/getting-testnet-tokens-ropsten-1
        ],
        multicallAddress: multicallAddresses[ChainId.ROP],
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
        chainType: ChainType.EVM,
        name: 'Rinkeby',
        coin: CoinKey.ETH,
        id: 4,
        mainnet: false,
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/ethereum_rinkeby.png',
        tokenlistUrl: 'https://raw.githubusercontent.com/compound-finance/token-list/master/compound.tokenlist.json',
        faucetUrls: ['https://faucet.rinkeby.io/'],
        multicallAddress: multicallAddresses[ChainId.RIN],
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
        chainType: ChainType.EVM,
        name: 'Goerli',
        coin: CoinKey.ETH,
        id: 5,
        mainnet: false,
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/ethereum_goerli.png',
        tokenlistUrl: 'https://raw.githubusercontent.com/compound-finance/token-list/master/compound.tokenlist.json',
        faucetUrls: ['https://goerli-faucet.slock.it/'],
        multicallAddress: multicallAddresses[ChainId.GOR],
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
        chainType: ChainType.EVM,
        name: 'Metadium Testnet',
        coin: CoinKey.KAL,
        id: 12,
        mainnet: false,
        multicallAddress: multicallAddresses[ChainId.METT],
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
        chainType: ChainType.EVM,
        name: 'DIODE',
        coin: CoinKey.SDIODE,
        id: 13,
        mainnet: false,
        multicallAddress: multicallAddresses[ChainId.DIOT],
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
        chainType: ChainType.EVM,
        name: 'Kovan',
        coin: CoinKey.ETH,
        id: 42,
        mainnet: false,
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/ethereum_kovan.png',
        tokenlistUrl: 'https://raw.githubusercontent.com/compound-finance/token-list/master/compound.tokenlist.json',
        faucetUrls: [
            'https://ethdrop.dev/',
            'https://gitter.im/kovan-testnet/faucet',
        ],
        multicallAddress: multicallAddresses[ChainId.KOV],
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
        chainType: ChainType.EVM,
        name: 'Polygon Testnet',
        coin: CoinKey.MATIC,
        id: 80001,
        mainnet: false,
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/polygon_test.png',
        tokenlistUrl: 'https://raw.githubusercontent.com/elkfinance/tokens/main/mumbai.tokenlist.json',
        faucetUrls: ['https://faucet.matic.network/'],
        multicallAddress: multicallAddresses[ChainId.MUM],
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
        chainType: ChainType.EVM,
        name: 'Arbitrum Testnet',
        coin: CoinKey.ETH,
        id: 421611,
        mainnet: false,
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/arbitrum_test.png',
        faucetUrls: ['https://bridge.arbitrum.io/'],
        multicallAddress: multicallAddresses[ChainId.ARBT],
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
    {
        key: ChainKey.ARBG,
        chainType: ChainType.EVM,
        name: 'Arbitrum Görli',
        coin: CoinKey.ETH,
        id: 421613,
        mainnet: false,
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/arbitrum_test.png',
        faucetUrls: ['https://bridge.arbitrum.io/'],
        multicallAddress: multicallAddresses[ChainId.ARBG],
        metamask: {
            chainId: prefixChainId(421613),
            blockExplorerUrls: ['https://goerli-rollup-explorer.arbitrum.io'],
            chainName: 'Arbitrum Görli',
            nativeCurrency: {
                name: 'AGOR',
                symbol: 'AGOR',
                decimals: 18,
            },
            rpcUrls: ['https://goerli-rollup.arbitrum.io/rpc/	'],
        },
    },
    // 69 - Optimistic Ethereum (Kovan)
    {
        key: ChainKey.OPTT,
        chainType: ChainType.EVM,
        name: 'Optimism Testnet',
        coin: CoinKey.ETH,
        id: 69,
        mainnet: false,
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/optimism_test.png',
        faucetUrls: ['https://gateway.optimism.io/'],
        multicallAddress: multicallAddresses[ChainId.OPTT],
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
    // 420 - Optimistic Ethereum (Kovan)
    {
        key: ChainKey.OPTG,
        chainType: ChainType.EVM,
        name: 'Optimistic Ethereum Testnet Goerli',
        coin: CoinKey.ETH,
        id: 420,
        mainnet: false,
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/optimism_test.png',
        faucetUrls: ['https://gateway.optimism.io/'],
        multicallAddress: multicallAddresses[ChainId.OPTG],
        metamask: {
            chainId: prefixChainId(69),
            blockExplorerUrls: ['https://blockscout.com/optimism/goerli/'],
            chainName: 'Optimistic Ethereum Testnet Goerli',
            nativeCurrency: {
                name: 'tETH',
                symbol: 'tETH',
                decimals: 18,
            },
            rpcUrls: ['https://goerli.optimism.io/'],
        },
    },
    // 97 - Binance Smart Chain Testnet
    {
        key: ChainKey.BSCT,
        chainType: ChainType.EVM,
        name: 'Binance Smart Chain Testnet',
        coin: CoinKey.BNB,
        id: 97,
        mainnet: false,
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/bsc_test.png',
        faucetUrls: ['https://testnet.binance.org/faucet-smart'],
        multicallAddress: multicallAddresses[ChainId.BSCT],
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
        chainType: ChainType.EVM,
        name: 'Huobi ECO Chain Testnet',
        coin: 'HTT',
        id: 256,
        mainnet: false,
        faucetUrls: ['https://scan-testnet.hecochain.com/faucet'],
        multicallAddress: multicallAddresses[ChainId.HECT],
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
        chainType: ChainType.EVM,
        name: 'Harmony Testnet',
        coin: CoinKey.ONE,
        id: 1666700000,
        mainnet: false,
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/harmony_test.png',
        // https://docs.harmony.one/home/developers/wallets/metamask/connect-metamask-to-the-harmony-chain
        multicallAddress: multicallAddresses[ChainId.ONET],
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
        chainType: ChainType.EVM,
        name: 'SPARK',
        coin: CoinKey.SPARK,
        id: 123,
        mainnet: false,
        multicallAddress: multicallAddresses[ChainId.FUST],
        metamask: {
            chainId: prefixChainId(123),
            blockExplorerUrls: ['https://explorer.fusespark.io/'],
            chainName: 'Fuse Sparknet',
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
        chainType: ChainType.EVM,
        name: 'Telos Testnet',
        coin: CoinKey.TLOS,
        id: 41,
        mainnet: false,
        faucetUrls: ['https://app.telos.net/testnet/developers'],
        multicallAddress: multicallAddresses[ChainId.TLOT],
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
    // 31 RSK Testnet
    {
        key: ChainKey.RSKT,
        chainType: ChainType.EVM,
        name: 'RSK Testnet',
        coin: CoinKey.TRBTC,
        id: 31,
        mainnet: true,
        multicallAddress: multicallAddresses[ChainId.RSKT],
        metamask: {
            chainId: prefixChainId(31),
            blockExplorerUrls: ['https://rsk.co/'],
            chainName: 'RSK Testnet',
            nativeCurrency: {
                name: 'tRBTC',
                symbol: 'TRBTC',
                decimals: 18,
            },
            rpcUrls: ['https://public-node.testnet.rsk.co'],
        },
    },
    // 43113 - Avalanche Fuji Testnet
    {
        key: ChainKey.AVAT,
        chainType: ChainType.EVM,
        name: 'Avalanche Fuji Testnet',
        coin: CoinKey.AVAX,
        id: 43113,
        mainnet: false,
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/avalanche_test.png',
        multicallAddress: multicallAddresses[ChainId.AVAT],
        faucetUrls: ['https://faucet.avax-test.network/'],
        // https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-43113.json
        metamask: {
            chainId: prefixChainId(43113),
            blockExplorerUrls: ['https://testnet.snowtrace.io'],
            chainName: 'Avalanche Fuji Testnet',
            nativeCurrency: {
                name: 'AVAX',
                symbol: 'AVAX',
                decimals: 18,
            },
            rpcUrls: ['https://api.avax-test.network/ext/bc/C/rpc'],
        },
    },
    // 59140 - ConsenSys zkEVM Testnet
    {
        key: ChainKey.CZKT,
        chainType: ChainType.EVM,
        name: 'ConsenSys zkEVM Testnet',
        coin: CoinKey.ETH,
        id: 59140,
        mainnet: false,
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/consensys_zkevm_test.png',
        // multicallAddress: multicallAddresses[ChainId.CZKT], // Not deployed yet
        faucetUrls: ['https://goerli.zkevm.consensys.net/'],
        metamask: {
            chainId: prefixChainId(59140),
            blockExplorerUrls: ['https://explorer.goerli.zkevm.consensys.net'],
            chainName: 'ConsenSys zkEVM Testnet',
            nativeCurrency: {
                name: 'crETH',
                symbol: 'crETH',
                decimals: 18,
            },
            rpcUrls: [],
        },
    },
    // TODO: Add
    // EVMT = 9000,
    // MORT = 1287,
    // FTMT = 4002,
    // https://faucet.buni.finance/
    // kucoin faucet: https://stakely.io/faucet/kucoin-kcc-kcs
];
export const supportedSolanaChains = [
    {
        key: ChainKey.SOL,
        chainType: ChainType.Solana,
        name: 'Solana',
        coin: CoinKey.SOL,
        id: ChainId.SOL,
        mainnet: true,
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/solana.svg',
        faucetUrls: ['https://stakely.io/faucet/solana-sol'],
        metamask: {
            chainId: ChainId.SOL.toString(),
            blockExplorerUrls: [
                'https://explorer.solana.com/',
                'https://solscan.io/',
                'https://solana.fm/',
            ],
            chainName: 'Solana',
            nativeCurrency: {
                name: 'SOL',
                symbol: 'SOL',
                decimals: 9,
            },
            rpcUrls: ['https://api.mainnet-beta.solana.com'],
        },
    },
];
// This assignment is required to avoid breaking
// changes with the new non EVM support types release
// This will be removed in the future
export const supportedChains = [...supportedEVMChains, ...supportedSolanaChains];
