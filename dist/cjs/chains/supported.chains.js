"use strict";
/*
    This file is for legacy compatibility only.
    Data regarding supported chains *should* be fetched from the API.
    This file is only used to provide legacy compatibility for existing tools.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.supportedChains = exports.supportedSolanaChains = exports.supportedEVMChains = void 0;
const base_1 = require("../base");
const multicall_1 = require("../multicall");
const Chain_1 = require("./Chain");
const EVMChain_1 = require("./EVMChain");
// chainNames aligned with https://github.com/ethereum-lists/chains/tree/master/_data/chains
exports.supportedEVMChains = [
    // 1 - Ethereum
    {
        key: base_1.ChainKey.ETH,
        chainType: Chain_1.ChainType.EVM,
        name: 'Ethereum',
        coin: base_1.CoinKey.ETH,
        id: 1,
        mainnet: true,
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/ethereum.svg',
        tokenlistUrl: 'https://gateway.ipfs.io/ipns/tokens.uniswap.org',
        multicallAddress: multicall_1.multicallAddresses[base_1.ChainId.ETH],
        metamask: {
            chainId: (0, EVMChain_1.prefixChainId)(1),
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
        key: base_1.ChainKey.POL,
        chainType: Chain_1.ChainType.EVM,
        name: 'Polygon',
        coin: base_1.CoinKey.MATIC,
        id: 137,
        mainnet: true,
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/polygon.svg',
        tokenlistUrl: 'https://unpkg.com/quickswap-default-token-list@1.0.71/build/quickswap-default.tokenlist.json',
        faucetUrls: ['https://stakely.io/faucet/polygon-matic'],
        multicallAddress: multicall_1.multicallAddresses[base_1.ChainId.POL],
        // https://docs.matic.network/docs/develop/metamask/config-matic/
        metamask: {
            chainId: (0, EVMChain_1.prefixChainId)(137),
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
        key: base_1.ChainKey.BSC,
        chainType: Chain_1.ChainType.EVM,
        name: 'BSC',
        coin: base_1.CoinKey.BNB,
        id: 56,
        mainnet: true,
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/bsc.svg',
        tokenlistUrl: 'https://tokens.pancakeswap.finance/pancakeswap-extended.json',
        faucetUrls: ['https://stakely.io/faucet/bsc-chain-bnb'],
        multicallAddress: multicall_1.multicallAddresses[base_1.ChainId.BSC],
        // https://docs.binance.org/smart-chain/wallet/metamask.html
        metamask: {
            chainId: (0, EVMChain_1.prefixChainId)(56),
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
        key: base_1.ChainKey.DAI,
        chainType: Chain_1.ChainType.EVM,
        name: 'Gnosis',
        coin: base_1.CoinKey.DAI,
        id: 100,
        mainnet: true,
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/gnosis.svg',
        tokenlistUrl: 'https://tokens.honeyswap.org/',
        faucetUrls: ['https://stakely.io/faucet/xdai-chain'],
        multicallAddress: multicall_1.multicallAddresses[base_1.ChainId.DAI],
        // https://www.xdaichain.com/for-users/wallets/metamask/metamask-setup
        metamask: {
            chainId: (0, EVMChain_1.prefixChainId)(100),
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
        key: base_1.ChainKey.FTM,
        chainType: Chain_1.ChainType.EVM,
        name: 'Fantom',
        coin: base_1.CoinKey.FTM,
        id: 250,
        mainnet: true,
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/fantom.svg',
        tokenlistUrl: 'https://raw.githubusercontent.com/SpookySwap/spooky-info/master/src/constants/token/spookyswap.json',
        faucetUrls: [
            'https://stakely.io/faucet/fantom-blockchain-ftm',
            'https://docs.spookyswap.finance/getting-started/how-to-get-fantom-gas',
        ],
        multicallAddress: multicall_1.multicallAddresses[base_1.ChainId.FTM],
        // https://docs.fantom.foundation/tutorials/set-up-metamask
        metamask: {
            chainId: (0, EVMChain_1.prefixChainId)(250),
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
        key: base_1.ChainKey.OKT,
        chainType: Chain_1.ChainType.EVM,
        name: 'OKXChain',
        coin: base_1.CoinKey.OKT,
        id: 66,
        mainnet: true,
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/okx.svg',
        tokenlistUrl: 'https://raw.githubusercontent.com/sushiswap/default-token-list/master/tokens/okex.json',
        multicallAddress: multicall_1.multicallAddresses[base_1.ChainId.OKT],
        // https://okc-docs.readthedocs.io/en/latest/developers/quick-start-for-mainnet.html
        metamask: {
            chainId: (0, EVMChain_1.prefixChainId)(66),
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
        key: base_1.ChainKey.AVA,
        chainType: Chain_1.ChainType.EVM,
        name: 'Avalanche',
        coin: base_1.CoinKey.AVAX,
        id: 43114,
        mainnet: true,
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/avalanche.svg',
        tokenlistUrl: 'https://raw.githubusercontent.com/sushiswap/default-token-list/master/tokens/avalanche.json',
        multicallAddress: multicall_1.multicallAddresses[base_1.ChainId.AVA],
        // https://support.avax.network/en/articles/4626956-how-do-i-set-up-metamask-on-avalanche
        metamask: {
            chainId: (0, EVMChain_1.prefixChainId)(43114),
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
        key: base_1.ChainKey.ARB,
        chainType: Chain_1.ChainType.EVM,
        name: 'Arbitrum',
        coin: base_1.CoinKey.ETH,
        id: 42161,
        mainnet: true,
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/arbitrum.svg',
        tokenlistUrl: 'https://raw.githubusercontent.com/sushiswap/default-token-list/master/tokens/arbitrum.json',
        faucetUrls: ['https://bridge.arbitrum.io/'],
        multicallAddress: multicall_1.multicallAddresses[base_1.ChainId.ARB],
        metamask: {
            chainId: (0, EVMChain_1.prefixChainId)(42161),
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
        key: base_1.ChainKey.HEC,
        chainType: Chain_1.ChainType.EVM,
        name: 'Huobi ECO Chain Mainnet',
        coin: base_1.CoinKey.HT,
        id: 128,
        mainnet: true,
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/heco.png',
        tokenlistUrl: 'https://raw.githubusercontent.com/sushiswap/default-token-list/master/tokens/heco.json',
        multicallAddress: multicall_1.multicallAddresses[base_1.ChainId.HEC],
        metamask: {
            chainId: (0, EVMChain_1.prefixChainId)(128),
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
        key: base_1.ChainKey.OPT,
        chainType: Chain_1.ChainType.EVM,
        name: 'Optimism',
        coin: base_1.CoinKey.ETH,
        id: 10,
        mainnet: true,
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/optimism.svg',
        tokenlistUrl: 'https://static.optimism.io/optimism.tokenlist.json',
        faucetUrls: ['https://gateway.optimism.io/'],
        multicallAddress: multicall_1.multicallAddresses[base_1.ChainId.OPT],
        metamask: {
            chainId: (0, EVMChain_1.prefixChainId)(10),
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
        key: base_1.ChainKey.FSN,
        chainType: Chain_1.ChainType.EVM,
        name: 'Fusion Mainnet',
        coin: base_1.CoinKey.FSN,
        id: 32659,
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/fusion.png',
        mainnet: true,
        multicallAddress: multicall_1.multicallAddresses[base_1.ChainId.FSN],
        // https://support.avax.network/en/articles/4626956-how-do-i-set-up-metamask-on-avalanche
        metamask: {
            chainId: (0, EVMChain_1.prefixChainId)(32659),
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
        key: base_1.ChainKey.ONE,
        chainType: Chain_1.ChainType.EVM,
        name: 'Harmony',
        coin: base_1.CoinKey.ONE,
        id: 1666600000,
        mainnet: true,
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/harmony.svg',
        tokenlistUrl: 'https://d1xrz6ki9z98vb.cloudfront.net/venomswap/lists/venomswap-default.tokenlist.json',
        faucetUrls: ['https://stakely.io/faucet/harmony-one'],
        multicallAddress: multicall_1.multicallAddresses[base_1.ChainId.ONE],
        // https://docs.harmony.one/home/developers/wallets/metamask/connect-metamask-to-the-harmony-chain
        metamask: {
            chainId: (0, EVMChain_1.prefixChainId)(1666600000),
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
        key: base_1.ChainKey.MOR,
        chainType: Chain_1.ChainType.EVM,
        name: 'Moonriver',
        coin: base_1.CoinKey.MOVR,
        id: 1285,
        mainnet: true,
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/moonriver.svg',
        tokenlistUrl: 'https://raw.githubusercontent.com/sushiswap/default-token-list/master/tokens/moonriver.json',
        multicallAddress: multicall_1.multicallAddresses[base_1.ChainId.MOR],
        metamask: {
            chainId: (0, EVMChain_1.prefixChainId)(1285),
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
        key: base_1.ChainKey.MOO,
        chainType: Chain_1.ChainType.EVM,
        name: 'Moonbeam',
        coin: base_1.CoinKey.GLMR,
        id: 1284,
        mainnet: true,
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/moonbeam.svg',
        tokenlistUrl: 'https://raw.githubusercontent.com/BeamSwap/beamswap-tokenlist/main/tokenlist.json',
        multicallAddress: multicall_1.multicallAddresses[base_1.ChainId.MOO],
        metamask: {
            chainId: (0, EVMChain_1.prefixChainId)(1284),
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
        key: base_1.ChainKey.EXP,
        chainType: Chain_1.ChainType.EVM,
        name: 'Expanse Network',
        coin: base_1.CoinKey.EXP,
        id: 2,
        mainnet: true,
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/expanse.png',
        multicallAddress: multicall_1.multicallAddresses[base_1.ChainId.EXP],
        metamask: {
            chainId: (0, EVMChain_1.prefixChainId)(2),
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
        key: base_1.ChainKey.TCH,
        chainType: Chain_1.ChainType.EVM,
        name: 'ThaiChain',
        coin: base_1.CoinKey.TCH,
        id: 7,
        mainnet: true,
        multicallAddress: multicall_1.multicallAddresses[base_1.ChainId.TCH],
        metamask: {
            chainId: (0, EVMChain_1.prefixChainId)(7),
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
        key: base_1.ChainKey.UBQ,
        chainType: Chain_1.ChainType.EVM,
        name: 'Ubiq',
        coin: base_1.CoinKey.UBQ,
        id: 8,
        mainnet: true,
        multicallAddress: multicall_1.multicallAddresses[base_1.ChainId.UBQ],
        metamask: {
            chainId: (0, EVMChain_1.prefixChainId)(8),
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
        key: base_1.ChainKey.MET,
        chainType: Chain_1.ChainType.EVM,
        name: 'Metadium Mainnet',
        coin: base_1.CoinKey.META,
        id: 11,
        mainnet: true,
        multicallAddress: multicall_1.multicallAddresses[base_1.ChainId.MET],
        metamask: {
            chainId: (0, EVMChain_1.prefixChainId)(11),
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
        key: base_1.ChainKey.DIO,
        chainType: Chain_1.ChainType.EVM,
        name: 'DIODE',
        coin: base_1.CoinKey.DIODE,
        id: 15,
        mainnet: true,
        multicallAddress: multicall_1.multicallAddresses[base_1.ChainId.DIO],
        metamask: {
            chainId: (0, EVMChain_1.prefixChainId)(15),
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
        key: base_1.ChainKey.CEL,
        chainType: Chain_1.ChainType.EVM,
        name: 'CELO',
        coin: base_1.CoinKey.CELO,
        id: 42220,
        mainnet: true,
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/celo.svg',
        tokenlistUrl: 'https://raw.githubusercontent.com/sushiswap/default-token-list/master/tokens/celo.json',
        faucetUrls: [
            'https://stakely.io/faucet/celo-platform',
            'https://free-online-app.com/faucet-for-eth-evm-chains/',
        ],
        multicallAddress: multicall_1.multicallAddresses[base_1.ChainId.CEL],
        metamask: {
            chainId: (0, EVMChain_1.prefixChainId)(42220),
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
        key: base_1.ChainKey.FUS,
        chainType: Chain_1.ChainType.EVM,
        name: 'FUSE',
        coin: base_1.CoinKey.FUSE,
        id: 122,
        mainnet: true,
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/fuse.svg',
        tokenlistUrl: 'https://raw.githubusercontent.com/sushiswap/default-token-list/master/tokens/fuse.json',
        multicallAddress: multicall_1.multicallAddresses[base_1.ChainId.FUS],
        metamask: {
            chainId: (0, EVMChain_1.prefixChainId)(122),
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
        key: base_1.ChainKey.TLO,
        chainType: Chain_1.ChainType.EVM,
        name: 'Telos',
        coin: base_1.CoinKey.TLOS,
        id: 40,
        mainnet: true,
        tokenlistUrl: 'https://raw.githubusercontent.com/sushiswap/default-token-list/master/tokens/telos.json',
        multicallAddress: multicall_1.multicallAddresses[base_1.ChainId.TLO],
        metamask: {
            chainId: (0, EVMChain_1.prefixChainId)(40),
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
        key: base_1.ChainKey.CRO,
        chainType: Chain_1.ChainType.EVM,
        name: 'Cronos',
        coin: base_1.CoinKey.CRO,
        id: 25,
        mainnet: true,
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/cronos.svg',
        tokenlistUrl: 'https://raw.githubusercontent.com/cronaswap/cronaswap-tokenlists/main/cronaswap-default.tokenlist.json',
        multicallAddress: multicall_1.multicallAddresses[base_1.ChainId.CRO],
        metamask: {
            chainId: (0, EVMChain_1.prefixChainId)(25),
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
        key: base_1.ChainKey.BOB,
        chainType: Chain_1.ChainType.EVM,
        name: 'Boba',
        coin: base_1.CoinKey.ETH,
        id: 288,
        mainnet: true,
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/boba.png',
        // TODO: we should update token list url to latest one
        tokenlistUrl: 'https://raw.githubusercontent.com/OolongSwap/boba-community-token-list/main/build/boba.tokenlist.json',
        multicallAddress: multicall_1.multicallAddresses[base_1.ChainId.BOB],
        metamask: {
            chainId: (0, EVMChain_1.prefixChainId)(288),
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
        key: base_1.ChainKey.SHI,
        chainType: Chain_1.ChainType.EVM,
        name: 'Shiba',
        coin: base_1.CoinKey.SHIB,
        id: 27,
        mainnet: true,
        multicallAddress: multicall_1.multicallAddresses[base_1.ChainId.SHI],
        metamask: {
            chainId: (0, EVMChain_1.prefixChainId)(27),
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
        key: base_1.ChainKey.GL1,
        chainType: Chain_1.ChainType.EVM,
        name: 'Genesis L1',
        coin: base_1.CoinKey.L1,
        id: 29,
        mainnet: true,
        multicallAddress: multicall_1.multicallAddresses[base_1.ChainId.GL1],
        metamask: {
            chainId: (0, EVMChain_1.prefixChainId)(29),
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
        key: base_1.ChainKey.RSK,
        chainType: Chain_1.ChainType.EVM,
        name: 'RSK Mainnet',
        coin: base_1.CoinKey.RBTC,
        id: 30,
        mainnet: true,
        multicallAddress: multicall_1.multicallAddresses[base_1.ChainId.RSK],
        metamask: {
            chainId: (0, EVMChain_1.prefixChainId)(30),
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
        key: base_1.ChainKey.TBW,
        chainType: Chain_1.ChainType.EVM,
        name: 'TBWG',
        coin: base_1.CoinKey.TBG,
        id: 35,
        mainnet: true,
        multicallAddress: multicall_1.multicallAddresses[base_1.ChainId.TBW],
        metamask: {
            chainId: (0, EVMChain_1.prefixChainId)(35),
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
        key: base_1.ChainKey.VEL,
        chainType: Chain_1.ChainType.EVM,
        name: 'Velas',
        coin: base_1.CoinKey.VLX,
        id: 106,
        mainnet: true,
        multicallAddress: multicall_1.multicallAddresses[base_1.ChainId.VEL],
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/velas.png',
        faucetUrls: ['https://stakely.io/faucet/velas-vlx'],
        metamask: {
            chainId: (0, EVMChain_1.prefixChainId)(106),
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
        key: base_1.ChainKey.MAM,
        chainType: Chain_1.ChainType.EVM,
        name: 'Metis',
        coin: base_1.CoinKey.METIS,
        id: 1088,
        mainnet: true,
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/metis.png',
        tokenlistUrl: 'https://raw.githubusercontent.com/digitalnativeinc/default-token-list/dnf/tokens/metis.json',
        multicallAddress: multicall_1.multicallAddresses[base_1.ChainId.MAM],
        metamask: {
            chainId: (0, EVMChain_1.prefixChainId)(1088),
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
        key: base_1.ChainKey.AUR,
        chainType: Chain_1.ChainType.EVM,
        name: 'Aurora',
        coin: base_1.CoinKey.ETH,
        id: 1313161554,
        mainnet: true,
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/aurora.png',
        tokenlistUrl: 'https://aurora.dev/tokens.json',
        multicallAddress: multicall_1.multicallAddresses[base_1.ChainId.AUR],
        metamask: {
            chainId: (0, EVMChain_1.prefixChainId)(1313161554),
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
        key: base_1.ChainKey.EVM,
        chainType: Chain_1.ChainType.EVM,
        name: 'Evmos',
        coin: base_1.CoinKey.EVM,
        id: 9001,
        mainnet: true,
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/evmos.svg',
        multicallAddress: multicall_1.multicallAddresses[base_1.ChainId.EVM],
        metamask: {
            chainId: (0, EVMChain_1.prefixChainId)(9001),
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
    // 324 - zksync ERA
    {
        key: base_1.ChainKey.ERA,
        chainType: Chain_1.ChainType.EVM,
        name: 'zkSync Era',
        coin: base_1.CoinKey.ETH,
        id: 324,
        mainnet: true,
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/zksync.png',
        metamask: {
            chainId: (0, EVMChain_1.prefixChainId)(324),
            blockExplorerUrls: ['https://zkscan.io/'],
            chainName: 'zkSync Era Mainnet',
            nativeCurrency: {
                name: 'ETH',
                symbol: 'ETH',
                decimals: 18,
            },
            rpcUrls: ['https://mainnet.era.zksync.io'],
        },
    },
    // 1101 - Polygon zkEVM
    {
        key: base_1.ChainKey.PZE,
        chainType: Chain_1.ChainType.EVM,
        name: 'Polygon zkEVM',
        coin: base_1.CoinKey.ETH,
        id: 1101,
        mainnet: true,
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/zkevm.png',
        multicallAddress: multicall_1.multicallAddresses[base_1.ChainId.PZE],
        metamask: {
            chainId: (0, EVMChain_1.prefixChainId)(1101),
            blockExplorerUrls: ['https://zkevm.polygonscan.com'],
            chainName: 'Polygon zkEVM',
            nativeCurrency: {
                name: 'ETH',
                symbol: 'ETH',
                decimals: 18,
            },
            rpcUrls: ['https://polygon-rpc.com/zkevm'],
        },
    },
    // TESTNETS
    // 5 - Goerli
    {
        key: base_1.ChainKey.GOR,
        chainType: Chain_1.ChainType.EVM,
        name: 'Goerli',
        coin: base_1.CoinKey.ETH,
        id: 5,
        mainnet: false,
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/ethereum_goerli.png',
        tokenlistUrl: 'https://raw.githubusercontent.com/compound-finance/token-list/master/compound.tokenlist.json',
        faucetUrls: ['https://goerli-faucet.slock.it/'],
        multicallAddress: multicall_1.multicallAddresses[base_1.ChainId.GOR],
        metamask: {
            chainId: (0, EVMChain_1.prefixChainId)(5),
            blockExplorerUrls: ['https://goerli.etherscan.io/'],
            chainName: 'Ethereum Testnet Görli',
            nativeCurrency: {
                name: 'ETH',
                symbol: 'ETH',
                decimals: 18,
            },
            rpcUrls: ['https://rpc.ankr.com/eth_goerli'],
        },
    },
    // 12 - Metadium Testnet
    {
        key: base_1.ChainKey.METT,
        chainType: Chain_1.ChainType.EVM,
        name: 'Metadium Testnet',
        coin: base_1.CoinKey.KAL,
        id: 12,
        mainnet: false,
        multicallAddress: multicall_1.multicallAddresses[base_1.ChainId.METT],
        metamask: {
            chainId: (0, EVMChain_1.prefixChainId)(12),
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
        key: base_1.ChainKey.DIOT,
        chainType: Chain_1.ChainType.EVM,
        name: 'DIODE',
        coin: base_1.CoinKey.SDIODE,
        id: 13,
        mainnet: false,
        multicallAddress: multicall_1.multicallAddresses[base_1.ChainId.DIOT],
        metamask: {
            chainId: (0, EVMChain_1.prefixChainId)(13),
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
    // 80001 - Mumbai Polygon Testnet
    {
        key: base_1.ChainKey.MUM,
        chainType: Chain_1.ChainType.EVM,
        name: 'Polygon Testnet',
        coin: base_1.CoinKey.MATIC,
        id: 80001,
        mainnet: false,
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/polygon_test.png',
        tokenlistUrl: 'https://raw.githubusercontent.com/elkfinance/tokens/main/mumbai.tokenlist.json',
        faucetUrls: ['https://faucet.matic.network/'],
        multicallAddress: multicall_1.multicallAddresses[base_1.ChainId.MUM],
        metamask: {
            chainId: (0, EVMChain_1.prefixChainId)(80001),
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
    {
        key: base_1.ChainKey.ARBG,
        chainType: Chain_1.ChainType.EVM,
        name: 'Arbitrum Görli',
        coin: base_1.CoinKey.ETH,
        id: 421613,
        mainnet: false,
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/arbitrum_test.png',
        faucetUrls: ['https://bridge.arbitrum.io/'],
        multicallAddress: multicall_1.multicallAddresses[base_1.ChainId.ARBG],
        metamask: {
            chainId: (0, EVMChain_1.prefixChainId)(421613),
            blockExplorerUrls: ['https://goerli-rollup-explorer.arbitrum.io/'],
            chainName: 'Arbitrum Görli',
            nativeCurrency: {
                name: 'AGOR',
                symbol: 'AGOR',
                decimals: 18,
            },
            rpcUrls: ['https://goerli-rollup.arbitrum.io/rpc/	'],
        },
    },
    // 420 - Optimistic Ethereum (Goerli)
    {
        key: base_1.ChainKey.OPTG,
        chainType: Chain_1.ChainType.EVM,
        name: 'Optimistic Ethereum Testnet Goerli',
        coin: base_1.CoinKey.ETH,
        id: 420,
        mainnet: false,
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/optimism_test.png',
        faucetUrls: ['https://gateway.optimism.io/'],
        multicallAddress: multicall_1.multicallAddresses[base_1.ChainId.OPTG],
        metamask: {
            chainId: (0, EVMChain_1.prefixChainId)(69),
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
        key: base_1.ChainKey.BSCT,
        chainType: Chain_1.ChainType.EVM,
        name: 'Binance Smart Chain Testnet',
        coin: base_1.CoinKey.BNB,
        id: 97,
        mainnet: false,
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/bsc_test.png',
        faucetUrls: ['https://testnet.binance.org/faucet-smart'],
        multicallAddress: multicall_1.multicallAddresses[base_1.ChainId.BSCT],
        metamask: {
            chainId: (0, EVMChain_1.prefixChainId)(97),
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
        key: base_1.ChainKey.HECT,
        chainType: Chain_1.ChainType.EVM,
        name: 'Huobi ECO Chain Testnet',
        coin: 'HTT',
        id: 256,
        mainnet: false,
        faucetUrls: ['https://scan-testnet.hecochain.com/faucet'],
        multicallAddress: multicall_1.multicallAddresses[base_1.ChainId.HECT],
        metamask: {
            chainId: (0, EVMChain_1.prefixChainId)(256),
            blockExplorerUrls: ['https://scan-testnet.hecochain.com/'],
            chainName: 'Huobi ECO Chain Testnet',
            nativeCurrency: {
                name: 'HT',
                symbol: 'HT',
                decimals: 18,
            },
            rpcUrls: ['https://http-testnet.hecochain.com'],
        },
    },
    // 1666700000 - Harmony Testnet 0
    {
        key: base_1.ChainKey.ONET,
        chainType: Chain_1.ChainType.EVM,
        name: 'Harmony Testnet',
        coin: base_1.CoinKey.ONE,
        id: 1666700000,
        mainnet: false,
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/harmony_test.png',
        // https://docs.harmony.one/home/developers/wallets/metamask/connect-metamask-to-the-harmony-chain
        multicallAddress: multicall_1.multicallAddresses[base_1.ChainId.ONET],
        metamask: {
            chainId: (0, EVMChain_1.prefixChainId)(1666700000),
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
        key: base_1.ChainKey.FUST,
        chainType: Chain_1.ChainType.EVM,
        name: 'SPARK',
        coin: base_1.CoinKey.SPARK,
        id: 123,
        mainnet: false,
        multicallAddress: multicall_1.multicallAddresses[base_1.ChainId.FUST],
        metamask: {
            chainId: (0, EVMChain_1.prefixChainId)(123),
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
        key: base_1.ChainKey.TLOT,
        chainType: Chain_1.ChainType.EVM,
        name: 'Telos Testnet',
        coin: base_1.CoinKey.TLOS,
        id: 41,
        mainnet: false,
        faucetUrls: ['https://app.telos.net/testnet/developers'],
        multicallAddress: multicall_1.multicallAddresses[base_1.ChainId.TLOT],
        metamask: {
            chainId: (0, EVMChain_1.prefixChainId)(41),
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
        key: base_1.ChainKey.RSKT,
        chainType: Chain_1.ChainType.EVM,
        name: 'RSK Testnet',
        coin: base_1.CoinKey.TRBTC,
        id: 31,
        mainnet: true,
        multicallAddress: multicall_1.multicallAddresses[base_1.ChainId.RSKT],
        metamask: {
            chainId: (0, EVMChain_1.prefixChainId)(31),
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
        key: base_1.ChainKey.AVAT,
        chainType: Chain_1.ChainType.EVM,
        name: 'Avalanche Fuji Testnet',
        coin: base_1.CoinKey.AVAX,
        id: 43113,
        mainnet: false,
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/avalanche_test.png',
        multicallAddress: multicall_1.multicallAddresses[base_1.ChainId.AVAT],
        faucetUrls: ['https://faucet.avax-test.network/'],
        // https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-43113.json
        metamask: {
            chainId: (0, EVMChain_1.prefixChainId)(43113),
            blockExplorerUrls: ['https://testnet.snowtrace.io/'],
            chainName: 'Avalanche Fuji Testnet',
            nativeCurrency: {
                name: 'AVAX',
                symbol: 'AVAX',
                decimals: 18,
            },
            rpcUrls: ['https://api.avax-test.network/ext/bc/C/rpc'],
        },
    },
    // 59140 - Linea (formerly ConsenSys zkEVM) Testnet
    {
        key: base_1.ChainKey.LNAT,
        chainType: Chain_1.ChainType.EVM,
        name: 'Linea Testnet',
        coin: base_1.CoinKey.ETH,
        id: 59140,
        mainnet: false,
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/linea.svg',
        // multicallAddress: multicallAddresses[ChainId.LNAT], // Not deployed yet
        faucetUrls: ['https://faucetlink.to/goerli'],
        metamask: {
            chainId: (0, EVMChain_1.prefixChainId)(59140),
            blockExplorerUrls: ['https://explorer.goerli.linea.build/'],
            chainName: 'Linea Testnet',
            nativeCurrency: {
                name: 'crETH',
                symbol: 'crETH',
                decimals: 18,
            },
            rpcUrls: ['https://rpc.goerli.linea.build'],
        },
    },
    // TODO: Add
    // EVMT = 9000,
    // MORT = 1287,
    // FTMT = 4002,
    // https://faucet.buni.finance/
    // kucoin faucet: https://stakely.io/faucet/kucoin-kcc-kcs
];
exports.supportedSolanaChains = [
    {
        key: base_1.ChainKey.SOL,
        chainType: Chain_1.ChainType.Solana,
        name: 'Solana',
        coin: base_1.CoinKey.SOL,
        id: base_1.ChainId.SOL,
        mainnet: true,
        logoURI: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/solana.svg',
        faucetUrls: ['https://stakely.io/faucet/solana-sol'],
        metamask: {
            chainId: base_1.ChainId.SOL.toString(),
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
exports.supportedChains = [...exports.supportedEVMChains, ...exports.supportedSolanaChains];
