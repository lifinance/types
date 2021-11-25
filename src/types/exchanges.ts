import { Token } from './base'

export interface Exchange {
  key: string
  name: string
  chainId: number
  logoURI: string
  webUrl: string
  graph?: string
  tokenlistUrl: string
  routerAddress: string
  factoryAddress: string
  initCodeHash: string
  baseTokens: Array<Token>
}
