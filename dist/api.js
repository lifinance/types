export const Orders = ['RECOMMENDED', 'FASTEST', 'CHEAPEST', 'SAFEST'];
export const _InsuranceState = [
    'INSURED',
    'INSURABLE',
    'NOT_INSURABLE',
];
const _StatusMessage = [
    // The transaction was not found -- likely not mined yet
    'NOT_FOUND',
    // A third party service is not available
    'INVALID',
    // The transfer is pending
    'PENDING',
    // The transfer is done
    'DONE',
    // The transfer failed
    'FAILED',
];
const _SubstatusPending = [
    // The bridge is waiting for additional confirmations
    'WAIT_SOURCE_CONFIRMATIONS',
    // The off-chain logic is in progress, waiting for the destination tx to be mined
    'WAIT_DESTINATION_TRANSACTION',
    // The bridge API / subgraph is temporarily unavailable
    'BRIDGE_NOT_AVAILABLE',
    // The RPC for source/destination chain is temporarily unavailable
    'CHAIN_NOT_AVAILABLE',
    // A refund has been requested and is in progress
    'REFUND_IN_PROGRESS',
    // We cannot determine the status of the transfer
    'UNKNOWN_ERROR',
];
const _SubstatusDone = [
    // The transfer was successful
    'COMPLETED',
    // The transfer was partially successful
    // This can happen for specific bridges like Across
    // which may provide alternative tokens in case of low liquidity
    'PARTIAL',
    // The transfer was not successful but it has been refunded
    'REFUNDED',
];
const _SubstatusFailed = [
    // The transfer cannot be completed, a refund is required
    'NOT_PROCESSABLE_REFUND_NEEDED',
];
export const isSubstatusPending = (substatus) => _SubstatusPending.includes(substatus);
export const isSubstatusDone = (substatus) => _SubstatusDone.includes(substatus);
export const isSubstatusFailed = (substatus) => _SubstatusFailed.includes(substatus);
const _LIFuelState = ['PENDING', 'DONE', 'NOT_FOUND'];
