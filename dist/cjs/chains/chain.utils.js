"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChainById = exports.getChainByKey = void 0;
const supported_chains_1 = require("./supported.chains");
const supportedChains = [
    // This will be added in the future
    // ...supportedSolanaChains,
    ...supported_chains_1.supportedEVMChains,
    ...supported_chains_1.supportedSolanaChains,
];
const getChainByKey = (chainKey) => {
    const chain = supportedChains.find((c) => c.key === chainKey);
    if (!chain) {
        throw new Error('Invalid chainKey');
    }
    return chain;
};
exports.getChainByKey = getChainByKey;
const getChainById = (chainId) => {
    const chain = supportedChains.find((c) => c.id === chainId);
    if (!chain) {
        throw new Error('Invalid chainId');
    }
    return chain;
};
exports.getChainById = getChainById;
