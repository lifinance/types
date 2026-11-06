---
"@lifi/types": minor
---

Add the Smart Deposits contract: status lookup by deposit address, the status `smartDeposits` block, `SmartDepositsStatusResponse`, typed `estimate.toolData`, and the `smartDepositsComposed` and `amountFlexible` step markers.
`GetStatusRequest` gains a `{ depositAddress, fromChain }` variant; code that narrows with `'txHash' in r ? r.txHash : r.taskId` must handle it.
