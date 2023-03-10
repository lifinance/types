"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prefixChainId = void 0;
const ethers_1 = require("ethers");
const prefixChainId = (chainId) => {
    return '0x' + ethers_1.BigNumber.from(chainId)._hex.split('0x')[1].replace(/\b0+/g, '');
};
exports.prefixChainId = prefixChainId;
