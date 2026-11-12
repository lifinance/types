import {
  type BaseToken,
  ChainId,
  type Estimate,
  type EstimateHop,
} from '../src/index.js'

// Hand-authored contract fixtures, not captured API responses. They run as
// part of `pnpm typecheck`.
type Expect<T extends true> = T
type IsAssignable<From, To> = [From] extends [To] ? true : false

const xlm: BaseToken = {
  chainId: ChainId.XLM,
  address: 'CAS3J7GYLGXMF6TDJBBYYSE3HQ6BBSMLNUQ34T6TZMYMW2EVH34XOWMA',
}
const usdc: BaseToken = {
  chainId: ChainId.XLM,
  address: 'CCW67TSZV3SSS2HXMBQ5JFGCKJNXKZM7UQUWUZPUTHXSTZLEO7SJMI75',
}

// A split route: path 0 is one hop, path 1 runs two hops in order.
export const splitHops = [
  {
    venue: 'Aquarius',
    pool: 'CA6PUJLBYKZKUEKLZJMKBZLEKP2OTHANDEOWSFF44FTSYLKQPIICCJBE',
    path: 0,
    fromToken: xlm,
    toToken: usdc,
    fromAmount: '29925000000000',
    toAmount: '4341653984083',
  },
  {
    venue: 'Soroswap',
    path: 1,
    fromToken: xlm,
    toToken: { chainId: ChainId.XLM, address: 'CDTK' },
    fromAmount: '2493750000000',
    toAmount: '355461713221',
  },
  {
    venue: 'Soroswap',
    path: 1,
    fromToken: { chainId: ChainId.XLM, address: 'CDTK' },
    toToken: usdc,
    fromAmount: '355461713221',
    toAmount: '343894132746',
  },
] satisfies EstimateHop[]

// `pool` and `path` are optional: a venue without pools, or a route that
// does not split, still fits.
export const minimalHop = {
  venue: 'Comet',
  fromToken: xlm,
  toToken: usdc,
  fromAmount: '1',
  toAmount: '1',
} satisfies EstimateHop

export const estimateWithHops = {
  tool: 'soroswap',
  fromAmount: '50000000000000',
  toAmount: '7278485675064',
  toAmountMin: '7242093246688',
  approvalAddress: '',
  executionDuration: 30,
  hops: splitHops,
} satisfies Estimate

// `hops` is optional, so an estimate without it stays valid.
export type EstimateWithoutHopsIsEstimate = Expect<
  IsAssignable<Omit<Estimate, 'hops'>, Estimate>
>

// @ts-expect-error a hop names its venue
export const hopWithoutVenue: EstimateHop = {
  fromToken: xlm,
  toToken: usdc,
  fromAmount: '1',
  toAmount: '1',
}
