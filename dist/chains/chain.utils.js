import { supportedEVMChains, supportedSolanaChains } from './supported.chains';
const supportedChains = [
    // This will be added in the future
    // ...supportedSolanaChains,
    ...supportedEVMChains,
    ...supportedSolanaChains,
];
export const getChainByKey = (chainKey) => {
    const chain = supportedChains.find((c) => c.key === chainKey);
    if (!chain) {
        throw new Error('Invalid chainKey');
    }
    return chain;
};
export const getChainById = (chainId) => {
    const chain = supportedChains.find((c) => c.id === chainId);
    if (!chain) {
        throw new Error('Invalid chainId');
    }
    return chain;
};
