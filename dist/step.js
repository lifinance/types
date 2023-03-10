export const emptyExecution = {
    status: 'NOT_STARTED',
    process: [],
};
export function isSwapStep(step) {
    return step.type === 'swap';
}
export function isCrossStep(step) {
    return step.type === 'cross';
}
export function isCustomStep(step) {
    return step.type === 'custom';
}
export function isProtocolStep(step) {
    return step.type === 'protocol';
}
