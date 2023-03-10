"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multicallAddresses = void 0;
const _1 = require(".");
// based on:
// - https://github.com/mds1/multicall#deployments
// - https://github.com/sushiswap/sushiswap-sdk/blob/canary/src/constants/addresses.ts#L323
// - https://github.com/joshstevens19/ethereum-multicall#multicall-contracts
// '0xcA11bde05977b3631167028862bE2a173976CA11' is a Multicall3 contract
// export const multicallAddresses: Record<ChainId, string> = {
exports.multicallAddresses = {
    // Mainnet
    [_1.ChainId.ETH]: '0xcA11bde05977b3631167028862bE2a173976CA11',
    [_1.ChainId.POL]: '0xcA11bde05977b3631167028862bE2a173976CA11',
    [_1.ChainId.BSC]: '0xcA11bde05977b3631167028862bE2a173976CA11',
    [_1.ChainId.DAI]: '0xcA11bde05977b3631167028862bE2a173976CA11',
    [_1.ChainId.OKT]: '0xcA11bde05977b3631167028862bE2a173976CA11',
    [_1.ChainId.FTM]: '0xcA11bde05977b3631167028862bE2a173976CA11',
    [_1.ChainId.AVA]: '0xcA11bde05977b3631167028862bE2a173976CA11',
    [_1.ChainId.ARB]: '0xcA11bde05977b3631167028862bE2a173976CA11',
    [_1.ChainId.HEC]: '0xcA11bde05977b3631167028862bE2a173976CA11',
    [_1.ChainId.OPT]: '0xcA11bde05977b3631167028862bE2a173976CA11',
    [_1.ChainId.ONE]: '0xcA11bde05977b3631167028862bE2a173976CA11',
    [_1.ChainId.FSN]: '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F',
    [_1.ChainId.MOR]: '0xcA11bde05977b3631167028862bE2a173976CA11',
    [_1.ChainId.CEL]: '0xcA11bde05977b3631167028862bE2a173976CA11',
    [_1.ChainId.FUS]: '0xcA11bde05977b3631167028862bE2a173976CA11',
    [_1.ChainId.CRO]: '0xcA11bde05977b3631167028862bE2a173976CA11',
    [_1.ChainId.BOB]: '0xcA11bde05977b3631167028862bE2a173976CA11',
    [_1.ChainId.MOO]: '0xcA11bde05977b3631167028862bE2a173976CA11',
    [_1.ChainId.MAM]: '0xcA11bde05977b3631167028862bE2a173976CA11',
    [_1.ChainId.AUR]: '0xcA11bde05977b3631167028862bE2a173976CA11',
    [_1.ChainId.EVM]: '0xcA11bde05977b3631167028862bE2a173976CA11',
    [_1.ChainId.MET]: '0xcA11bde05977b3631167028862bE2a173976CA11',
    [_1.ChainId.RSK]: '0xcA11bde05977b3631167028862bE2a173976CA11',
    [_1.ChainId.VEL]: '0x6ede559F2Bd951777470595761672091CCD21Ac6',
    // TODO
    // [ChainId.ARN]: '', // TODO
    // [ChainId.EXP]: '', // TODO
    // [ChainId.TCH]: '', // TODO
    // [ChainId.UBQ]: '', // TODO
    // [ChainId.DIO]: '', // TODO
    // [ChainId.TLO]: '', // TODO
    // [ChainId.SHI]: '', // TODO
    // [ChainId.GL1]: '', // TODO
    // [ChainId.TBW]: '', // TODO
    // [ChainId.PALM]: '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F',
    // [ChainId.TELOS]: '0xdDCbf776dF3dE60163066A5ddDF2277cB445E0F3',
    // Testnet
    [_1.ChainId.ROP]: '0xcA11bde05977b3631167028862bE2a173976CA11',
    [_1.ChainId.RIN]: '0xcA11bde05977b3631167028862bE2a173976CA11',
    [_1.ChainId.GOR]: '0xcA11bde05977b3631167028862bE2a173976CA11',
    [_1.ChainId.KOV]: '0xcA11bde05977b3631167028862bE2a173976CA11',
    [_1.ChainId.MUM]: '0xcA11bde05977b3631167028862bE2a173976CA11',
    [_1.ChainId.ARBT]: '0xcA11bde05977b3631167028862bE2a173976CA11',
    [_1.ChainId.BSCT]: '0xcA11bde05977b3631167028862bE2a173976CA11',
    [_1.ChainId.ONET]: '0xdDCbf776dF3dE60163066A5ddDF2277cB445E0F3',
    [_1.ChainId.AVAT]: '0xcA11bde05977b3631167028862bE2a173976CA11',
    [_1.ChainId.OPTT]: '0xcA11bde05977b3631167028862bE2a173976CA11',
    [_1.ChainId.OPTG]: '0xcA11bde05977b3631167028862bE2a173976CA11',
    [_1.ChainId.EVMT]: '0xcA11bde05977b3631167028862bE2a173976CA11',
    [_1.ChainId.MORT]: '0xcA11bde05977b3631167028862bE2a173976CA11',
    [_1.ChainId.FTMT]: '0xcA11bde05977b3631167028862bE2a173976CA11',
    [_1.ChainId.RSKT]: '0xcA11bde05977b3631167028862bE2a173976CA11',
    [_1.ChainId.ARBG]: '0xcA11bde05977b3631167028862bE2a173976CA11',
    // TODO
    // [ChainId.METT]: '', // TODO
    // [ChainId.DIOT]: '', // TODO
    // [ChainId.HECT]: '', // TODO
    // [ChainId.FUST]: '', // TODO
    // [ChainId.TLOT]: '', // TODO
    // none EVM
    // [ChainId.SOL]: '', // NOT NEEDED
    // [ChainId.TER]: '', // NOT NEEDED
    // [ChainId.OAS]: '', // NOT NEEDED
    // [ChainId.SOLT]: '', // NOT NEEDED
    // [ChainId.TERT]: '', // NOT NEEDED
    // [ChainId.OAST]: '', // NOT NEEDED
};
