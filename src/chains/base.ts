export enum ChainKey {
  // EVM
  ETH = 'eth',
  POL = 'pol',
  BSC = 'bsc',
  DAI = 'dai',
  FTM = 'ftm',
  AVA = 'ava',
  ARB = 'arb',
  OPT = 'opt',
  ONE = 'one',
  FSN = 'fsn',
  MOR = 'mor',
  CEL = 'cel',
  FUS = 'fus',
  TLO = 'tlo',
  CRO = 'cro',
  BOB = 'bob',
  RSK = 'rsk',
  VEL = 'vel',
  MOO = 'moo',
  MAM = 'mam',
  AUR = 'aur',
  EVM = 'evm',
  ARN = 'arn',
  ERA = 'era',
  PZE = 'pze',
  LNA = 'lna',
  BAS = 'bas',
  SCL = 'scl',
  MOD = 'mod',
  MNT = 'mnt',
  BLS = 'bls',
  SEI = 'sei',
  FRA = 'fra',
  TAI = 'tai',
  GRA = 'gra',
  IMX = 'imx',
  KAI = 'kai',
  XLY = 'xly',
  OPB = 'opb',
  WCC = 'wcc',
  LSK = 'lsk',
  ABS = 'abs',
  BER = 'ber',
  SON = 'son',
  UNI = 'uni',
  APE = 'ape',
  SOE = 'soe',
  INK = 'ink',
  LNS = 'lns',
  SWL = 'swl',

  // None-EVM
  SOL = 'sol',
  TER = 'ter',
  OAS = 'oas',

  // MVM
  SUI = 'sui',

  // UTXO
  BTC = 'btc',
  BCH = 'bch',
  LTC = 'ltc',
  DGE = 'dge',
}

export enum ChainId {
  ETH = 1,
  POL = 137,
  BSC = 56,
  DAI = 100,
  FTM = 250,
  AVA = 43114,
  ARB = 42161,
  OPT = 10,
  ONE = 1666600000,
  FSN = 32659,
  MOR = 1285,
  CEL = 42220,
  FUS = 122,
  TLO = 40,
  CRO = 25,
  BOB = 288,
  RSK = 30,
  VEL = 106,
  MOO = 1284,
  MAM = 1088,
  AUR = 1313161554,
  EVM = 9001,
  ARN = 42170,
  ERA = 324,
  PZE = 1101,
  LNA = 59144,
  BAS = 8453,
  SCL = 534352,
  MOD = 34443,
  MNT = 5000,
  BLS = 81457,
  SEI = 1329,
  FRA = 252,
  TAI = 167000,
  GRA = 1625,
  IMX = 13371,
  KAI = 8217,
  XLY = 196,
  OPB = 204,
  WCC = 480,
  LSK = 1135,
  ABS = 2741,
  BER = 80094,
  SON = 146,
  UNI = 130,
  APE = 33139,
  SOE = 1868,
  INK = 57073,
  LNS = 232,
  SWL = 1923,

  // None-EVM (IDs are made up by the LI.FI team)
  SOL = 1151111081099710,
  TER = 1161011141099710,
  OAS = 111971151099710,

  // MVM (IDs are made up by the LI.FI team)
  SUI = 9270000000000000, // First 16 non-letter hex digits of SUI genesis blob

  // UTXO (IDs are made up by the LI.FI team)
  BTC = 20000000000001,
  BCH = 20000000000002,
  LTC = 20000000000003,
  DGE = 20000000000004,
}
