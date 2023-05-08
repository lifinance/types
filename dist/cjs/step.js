"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCustomStep = exports.isProtocolStep = exports.isCrossStep = exports.isSwapStep = exports._StepType = exports.emptyExecution = void 0;
exports.emptyExecution = {
    status: 'NOT_STARTED',
    process: [],
};
// STEP
exports._StepType = [
    'lifi',
    'swap',
    'cross',
    'protocol',
    'custom',
];
function isSwapStep(step) {
    return step.type === 'swap';
}
exports.isSwapStep = isSwapStep;
function isCrossStep(step) {
    return step.type === 'cross';
}
exports.isCrossStep = isCrossStep;
function isProtocolStep(step) {
    return step.type === 'protocol';
}
exports.isProtocolStep = isProtocolStep;
function isCustomStep(step) {
    return step.type === 'custom';
}
exports.isCustomStep = isCustomStep;
