"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isProtocolStep = exports.isCustomStep = exports.isCrossStep = exports.isSwapStep = exports.emptyExecution = void 0;
exports.emptyExecution = {
    status: 'NOT_STARTED',
    process: [],
};
function isSwapStep(step) {
    return step.type === 'swap';
}
exports.isSwapStep = isSwapStep;
function isCrossStep(step) {
    return step.type === 'cross';
}
exports.isCrossStep = isCrossStep;
function isCustomStep(step) {
    return step.type === 'custom';
}
exports.isCustomStep = isCustomStep;
function isProtocolStep(step) {
    return step.type === 'protocol';
}
exports.isProtocolStep = isProtocolStep;
