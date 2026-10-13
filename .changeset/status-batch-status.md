---
"@lifi/types": minor
---

Add the optional `batchStatus` to `StatusResponse`: for an ERC-4337 bundle, one `BatchStatusEntry` per LI.FI userOp, with its `index` in the bundle and its `userOpHash`.
