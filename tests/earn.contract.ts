import type {
  EarnAnalytics,
  EarnCaps,
  EarnChain,
  EarnPack,
  EarnPortfolioResponse,
  EarnPosition,
  EarnProtocol,
  EarnRewardToken,
  EarnTvl,
  EarnUnderlyingToken,
  EarnVault,
  EarnVaultListResponse,
  EarnVerificationBreakdown,
} from '../src/index.js'

// Hand-authored contract fixtures, not captured wallet data. These tests check
// the public barrel and run as part of `pnpm typecheck`, outside build output.
type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2
    ? true
    : false
type Expect<T extends true> = T

export const underlyingToken = { address: '0x1' } satisfies EarnUnderlyingToken
export const rewardToken = { address: '0x2' } satisfies EarnRewardToken
export const protocol = {
  id: 'morpho',
  name: 'Morpho',
  url: 'https://morpho.org',
  logoUri: 'https://example.com/logo.svg',
} satisfies EarnProtocol

export const analytics = {
  apy: { base: null, reward: null, total: 5.34 },
  apy1d: null,
  apy7d: null,
  apy30d: 5.12,
  tvl: { usd: 1000, native: '1000000000' },
  updatedAt: '2026-09-01T00:00:00.000Z',
} satisfies EarnAnalytics

// All three token arrays can be absent while metadata is unresolved.
export const sparseVault = {
  address: '0x3',
  chainId: 1,
  name: 'Example vault',
  slug: 'example-vault',
  network: 'ethereum',
  protocol,
  syncedAt: '2026-09-01T00:00:00.000Z',
  tags: [],
  analytics,
  isTransactional: false,
  isRedeemable: false,
  depositPacks: [],
  redeemPacks: [],
  verificationStatus: 'none',
  verificationStatusBreakdown: [],
} satisfies EarnVault

export const populatedVault = {
  ...sparseVault,
  underlyingTokens: [underlyingToken],
  rewardTokens: [rewardToken],
  lpTokens: [{ address: '0x4', symbol: 'LP', decimals: 18 }],
  caps: { totalCap: '1000', maxCap: '2000' },
  timeLock: 0,
  kyc: false,
  depositPacks: [{ name: 'deposit', stepsType: 'instant' }],
  redeemPacks: [{ name: 'redeem', stepsType: 'complex' }],
  verificationStatus: 'flagged',
  verificationStatusBreakdown: [{ result: 'flagged', reason: 'stale_data' }],
} satisfies EarnVault

export const finalVaultPage = {
  data: [sparseVault, populatedVault],
  total: 2,
  normalizedAt: '2026-09-01T00:00:00.000Z',
} satisfies EarnVaultListResponse

export const position = {
  chainId: 1,
  address: null,
  protocolName: null,
  asset: { address: '0x5', name: 'Example', symbol: 'EX', decimals: 18 },
  balanceUsd: null,
  balanceNative: '1000000000000000000',
} satisfies EarnPosition

export const firstPortfolioPage = {
  data: [position],
  nextCursor: 'opaque-cursor',
  limit: 1,
} satisfies EarnPortfolioResponse
export const finalPortfolioPage = {
  data: [],
  limit: 1,
} satisfies EarnPortfolioResponse

export function nextPortfolioCursor(page: EarnPortfolioResponse) {
  return page.nextCursor
}
export function displayPositionAddress(item: EarnPosition) {
  return item.address === null ? 'Unknown vault' : item.address.toLowerCase()
}
export function tokenSymbols(vault: EarnVault) {
  return vault.underlyingTokens?.map((token) => token.symbol ?? 'Unknown') ?? []
}

export const chain = {
  chainId: 1,
  name: 'Ethereum',
  networkCaip: 'eip155:1',
} satisfies EarnChain

// Exact assertions catch drift in optionality, nullability, scalar types and
// bounded enums; positive fixtures alone would also accept over-broad types.
export type ContractAssertions = [
  Expect<Equal<EarnUnderlyingToken['symbol'], string | undefined>>,
  Expect<Equal<EarnUnderlyingToken['decimals'], number | undefined>>,
  Expect<
    Equal<EarnVault['underlyingTokens'], EarnUnderlyingToken[] | undefined>
  >,
  Expect<Equal<EarnPosition['address'], string | null>>,
  Expect<Equal<EarnPosition['balanceNative'], string>>,
  Expect<Equal<EarnPortfolioResponse['data'], EarnPosition[]>>,
  Expect<Equal<EarnPortfolioResponse['limit'], number>>,
  Expect<Equal<EarnPortfolioResponse['nextCursor'], string | undefined>>,
  Expect<Equal<EarnVaultListResponse['nextCursor'], string | undefined>>,
  Expect<Equal<EarnVaultListResponse['normalizedAt'], string>>,
  Expect<Equal<EarnProtocol['id'], string>>,
  Expect<Equal<EarnTvl['usd'], number>>,
  Expect<Equal<EarnTvl['native'], string | undefined>>,
  Expect<Equal<EarnCaps['totalCap'], string | undefined>>,
  Expect<Equal<EarnCaps['maxCap'], string | undefined>>,
  Expect<Equal<EarnAnalytics['apy30d'], number>>,
  Expect<Equal<EarnPack['stepsType'], 'instant' | 'complex'>>,
  Expect<Equal<EarnVault['verificationStatus'], 'none' | 'flagged'>>,
  Expect<Equal<EarnVerificationBreakdown['result'], 'none' | 'flagged'>>,
  Expect<
    Equal<
      EarnVerificationBreakdown['reason'],
      'none' | 'zero_apy' | 'apy_outlier' | 'stale_data'
    >
  >,
]

// @ts-expect-error A current portfolio envelope must include data and limit.
export const missingPortfolioFields: EarnPortfolioResponse = {}
// @ts-expect-error The legacy positions envelope is not the current endpoint.
export const legacyPortfolio: EarnPortfolioResponse = { positions: [] }
// @ts-expect-error USD TVL is a JSON number, not a numeric string.
export const stringTvl: EarnTvl = { usd: '1000' }
// @ts-expect-error Null addresses require a null check, not an undefined check.
export const unsafeAddress = (item: EarnPosition) => item.address.toLowerCase()
// @ts-expect-error Verification results do not include passed.
export const passedStatus: EarnVerificationBreakdown['result'] = 'passed'
