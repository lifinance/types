import { BigNumber } from 'ethers';
export const prefixChainId = (chainId) => {
    return '0x' + BigNumber.from(chainId)._hex.split('0x')[1].replace(/\b0+/g, '');
};
