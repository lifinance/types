import { BridgeTool } from './bridges'
import { ExchangeTools } from './exchanges'

export enum CoinKey {
  ETH = 'ETH',
  MATIC = 'MATIC',
  BNB = 'BNB',
  DAI = 'DAI',
  FTM = 'FTM',
  OKT = 'OKT',
  AVAX = 'AVAX',
  HT = 'HT',
  ONE = 'ONE',
  FSN = 'FSN',
  MOVR = 'MOVR',
  EXP = 'EXP',
  TCH = 'TCH',
  UBQ = 'UBQ',
  META = 'META',
  DIODE = 'DIODE',
  CELO = 'CELO',
  FUSE = 'FUSE',
  TLOS = 'TLOS',
  CRO = 'CRO',

  // Stable coins
  USDT = 'USDT',
  USDC = 'USDC',

  // Testnet
  TEST = 'TEST',
  KAL = 'KAL',
  SDIODE = 'SDIODE',
  SPARK = 'SPARK',

  // Other tokens
  WBTC = 'WBTC',
  WETH = 'WETH',
  SUSHI = 'SUSHI',
  DODO = 'DODO',
  MCB = 'MCB',
  CELR = 'CELR',
  IF = 'IF',
}

export enum ChainKey {
  ETH = 'eth',
  POL = 'pol',
  BSC = 'bsc',
  DAI = 'dai',
  OKT = 'okt',
  FTM = 'ftm',
  AVA = 'ava',
  ARB = 'arb',
  HEC = 'hec',
  OPT = 'opt',
  ONE = 'one',
  FSN = 'fsn',
  MOR = 'mor',
  EXP = 'exp',
  TCH = 'tch',
  UBQ = 'ubq',
  MET = 'met',
  DIO = 'dio',
  CEL = 'cel',
  FUS = 'fus',
  TLO = 'tlo',
  CRO = 'cro',
  BOB = 'bob',

  // Testnets
  ROP = 'rop',
  RIN = 'rin',
  GOR = 'gor',
  METT = 'mett',
  DIOT = 'diot',
  KOV = 'kov',
  MUM = 'mum',
  ARBT = 'arbt',
  OPTT = 'optt',
  BSCT = 'bsct',
  HECT = 'hect',
  ONET = 'onet',
  FUST = 'fust',
  TLOT = 'tlot',
}

export enum ChainId {
  ETH = 1,
  POL = 137,
  BSC = 56,
  DAI = 100,
  OKT = 66,
  FTM = 250,
  AVA = 43114,
  ARB = 42161,
  HEC = 128,
  OPT = 10,
  ONE = 1666600000,
  FSN = 32659,
  MOR = 1285,
  EXP = 2,
  TCH = 7,
  UBQ = 8,
  MET = 11,
  DIO = 15,
  CEL = 42220,
  FUS = 122,
  TLO = 40,
  CRO = 25,
  BOB = 288,

  // Testnets
  ROP = 3,
  RIN = 4,
  GOR = 5,
  METT = 12,
  DIOT = 13,
  KOV = 42,
  MUM = 80001,
  ARBT = 421611,
  OPTT = 69,
  BSCT = 97,
  HECT = 256,
  ONET = 1666700000,
  FUST = 123,
  TLOT = 41,
}

export interface Token {
  address: string
  symbol: string
  decimals: number
  chainId: number
  name: string
  coinKey?: CoinKey
  priceUSD?: string
  logoURI?: string
}

export interface TokenAmount extends Token {
  amount: string
  blockNumber?: number
}

export interface Coin {
  key: CoinKey
  name: string
  logoURI: string
  verified: boolean
  chains: {
    [ChainId: string]: Token
  }
}

export interface ExchangeDefinition {
  tool: ExchangeTools
  chains: number[]
}

export interface BridgeDefinition {
  tool: BridgeTool
  fromChainId: number
  fromToken: Token
  toChainId: number
  toToken: Token
  maximumTransfer: string
  minimumTransfer: string
  swapFeeRate: string
  swapFeeMinimum: string
  swapFeeMaximum: string
}
