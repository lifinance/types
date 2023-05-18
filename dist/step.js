export const emptyExecution = {
    status: 'NOT_STARTED',
    process: [],
};
// STEP
export const _StepType = [
    'lifi',
    'swap',
    'cross',
    'protocol',
    'custom',
];
export function isSwapStep(step) {
    return step.type === 'swap';
}
export function isCrossStep(step) {
    return step.type === 'cross';
}
export function isProtocolStep(step) {
    return step.type === 'protocol';
}
export function isCustomStep(step) {
    return step.type === 'custom';
}
