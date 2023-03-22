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
  SHIB = 'SHIB',
  L1 = 'L1',
  RBTC = 'RBTC',
  TBG = 'TBG',
  VLX = 'VLX',
  GLMR = 'GLMR',
  METIS = 'METIS',
  SOL = 'SOL',
  EVM = 'EVM',

  // Stable coins
  USDT = 'USDT',
  USDC = 'USDC',

  // Testnet
  TEST = 'TEST',
  KAL = 'KAL',
  SDIODE = 'SDIODE',
  SPARK = 'SPARK',
  TRBTC = 'TRBTC',

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
  SHI = 'shi',
  GL1 = 'gl1',
  RSK = 'rsk',
  TBW = 'tbw',
  VEL = 'vel',
  MOO = 'moo',
  MAM = 'mam',
  AUR = 'aur',
  TER = 'ter',
  OAS = 'oas',
  SOL = 'sol',
  EVM = 'evm',
  ARN = 'arn',

  // Testnets
  ROP = 'rop',
  RIN = 'rin',
  GOR = 'gor',
  METT = 'mett',
  DIOT = 'diot',
  KOV = 'kov',
  MUM = 'mum',
  ARBT = 'arbt',
  ARBG = 'arbg',
  OPTT = 'optt',
  OPTG = 'optg',
  BSCT = 'bsct',
  HECT = 'hect',
  ONET = 'onet',
  FUST = 'fust',
  TLOT = 'tlot',
  RSKT = 'rskt',
  SOLT = 'solt',
  OAST = 'oast',
  TERT = 'tert',
  AVAT = 'avat',
  EVMT = 'evmt',
  MORT = 'mort',
  FTMT = 'ftmt',
  CZKT = 'czkt',
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
  SHI = 27,
  GL1 = 29,
  RSK = 30,
  TBW = 35,
  VEL = 106,
  MOO = 1284,
  MAM = 1088,
  AUR = 1313161554,
  SOL = 1151111081099710, // this id is made up by the LI.FI team!
  TER = 1161011141099710, // this id is made up by the LI.FI team!
  OAS = 111971151099710, // this id is made up by the LI.FI team!
  EVM = 9001,
  ARN = 42170,

  // Testnets
  ROP = 3,
  RIN = 4,
  GOR = 5,
  METT = 12,
  DIOT = 13,
  KOV = 42,
  MUM = 80001,
  ARBT = 421611,
  ARBG = 421613,
  OPTT = 69,
  OPTG = 420,
  BSCT = 97,
  HECT = 256,
  ONET = 1666700000,
  FUST = 123,
  TLOT = 41,
  RSKT = 31,
  SOLT = 1151111081161011, // this id is made up by the LI.FI team!
  TERT = 1161011141161011, // this id is made up by the LI.FI team!
  OAST = 1119711511610111, // this id is made up by the LI.FI team!
  AVAT = 43113,
  EVMT = 9000,
  MORT = 1287,
  FTMT = 4002,
  CZKT = 59140,
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

/**
 * Should not be accessed via the types package anymore
 * @deprecated
 */
export interface BridgeDefinition {
  tool: BridgeTool
  fromChainId: number
  fromTokenAddress: string
  toChainId: number
  toTokenAddress: string
  maximumTransfer: string
  minimumTransfer: string
  swapFeeRate: string
  swapFeeMinimum: string
  swapFeeMaximum: string
}
