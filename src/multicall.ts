import { ChainId } from '.'

// based on:
// - https://github.com/sushiswap/sushiswap-sdk/blob/canary/src/constants/addresses.ts#L323
// - https://github.com/joshstevens19/ethereum-multicall#multicall-contracts
export const multicallAddresses: { [ChainId: number]: string } = {
  // Mainnet
  [ChainId.ETH]: '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696',
  [ChainId.POL]: '0x02817C1e3543c2d908a590F5dB6bc97f933dB4BD',
  [ChainId.BSC]: '0xa9193376D09C7f31283C54e56D013fCF370Cd9D9',
  [ChainId.DAI]: '0x67dA5f2FfaDDfF067AB9d5F025F8810634d84287',
  [ChainId.OKT]: '0xF4d73326C13a4Fc5FD7A064217e12780e9Bd62c3',
  [ChainId.FTM]: '0x22D4cF72C45F8198CfbF4B568dBdB5A85e8DC0B5',
  [ChainId.AVA]: '0xdDCbf776dF3dE60163066A5ddDF2277cB445E0F3',
  [ChainId.ARB]: '0x80C7DD17B01855a6D2347444a0FCC36136a314de',
  [ChainId.HEC]: '0xdDCbf776dF3dE60163066A5ddDF2277cB445E0F3',
  // [ChainId.OPT]: NOT FOUND
  [ChainId.ONE]: '0xdDCbf776dF3dE60163066A5ddDF2277cB445E0F3',
  [ChainId.FSN]: '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F',
  [ChainId.MOR]: '0x270f2F35bED92B7A59eA5F08F6B3fd34c8D9D9b5',
  // [ChainId.EXP]: '', // TODO
  // [ChainId.TCH]: '', // TODO
  // [ChainId.UBQ]: '', // TODO
  // [ChainId.MET]: '', // TODO
  // [ChainId.DIO]: '', // TODO
  [ChainId.CEL]: '0x9aac9048fC8139667D6a2597B902865bfdc225d3',
  [ChainId.FUS]: '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F',
  // [ChainId.TLO]: '', // TODO
  [ChainId.CRO]: '0x5e954f5972EC6BFc7dECd75779F10d848230345F',
  [ChainId.BOB]: '0xfb91c019D9F12A0f9c23B4762fa64A34F8daDb4A', // TODO: check
  // [ChainId.SHI]: '', // TODO
  // [ChainId.GL1]: '', // TODO
  // [ChainId.RSK]: '', // TODO
  // [ChainId.TBW]: '', // TODO
  // [ChainId.VEL]: '', // TODO
  [ChainId.MOO]: '0x6477204E12A7236b9619385ea453F370aD897bb2',
  // [ChainId.MAM]: '', // TODO
  // [ChainId.PALM]: '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F',
  // [ChainId.TELOS]: '0xdDCbf776dF3dE60163066A5ddDF2277cB445E0F3',

  // Testnet
  [ChainId.ROP]: '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696',
  [ChainId.RIN]: '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696',
  [ChainId.GOR]: '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696',
  // [ChainId.METT]: '', // TODO
  // [ChainId.DIOT]: '', // TODO
  [ChainId.KOV]: '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696',
  [ChainId.MUM]: '0xc1400d49baa8e307B4462cD46E0a20109D25F50f',
  [ChainId.ARBT]: '0xa501c031958F579dB7676fF1CE78AD305794d579',
  // [ChainId.OPTT]: '', // TODO
  [ChainId.BSCT]: '0xae11C5B5f29A6a25e955F0CB8ddCc416f522AF5C',
  // [ChainId.HECT]: '', // TODO
  [ChainId.ONET]: '0xdDCbf776dF3dE60163066A5ddDF2277cB445E0F3',
  // [ChainId.FUST]: '', // TODO
  // [ChainId.TLOT]: '', // TODO
  // [ChainId.RSKT]: '', // TODO
}
