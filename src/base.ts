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
  TCH = 'tch',
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
  META = 'meta',
  DIODE = 'diode',
  CELO = 'celo',
  FUSE = 'fuse',
  TLOS = 'tlos',
  CRO = 'cro',
  BOB = 'boba',

  // Testnets
  ROP = 'rop',
  RIN = 'rin',
  GOR = 'gor',
  KAL = 'kal',
  SDIODE = 'sdiode',
  KOV = 'kov',
  MUM = 'mum',
  ARBT = 'arbt',
  OPTT = 'optt',
  BSCT = 'bsct',
  HECT = 'hect',
  ONET = 'onet',
  SPARK = 'spark',
  TLOST = 'tlost',
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

  // Testnets
  ROP = 3,
  RIN = 4,
  GOR = 5,
  KOV = 42,
  MUM = 80001,
  ARBT = 421611,
  OPTT = 69,
  BSCT = 97,
  HECT = 256,
  ONET = 1666700000,
}

export interface Token {
  id: string
  symbol: string
  decimals: number
  chainId: number
  name: string
  chainKey: ChainKey
  key: CoinKey
  priceUSD?: string
  logoURI: string
}

export interface TokenAmount extends Token {
  amount: string
}

export interface Coin {
  key: CoinKey
  name: string
  logoURI: string
  verified: boolean
  chains: {
    [ChainKey: string]: Token
  }
}
