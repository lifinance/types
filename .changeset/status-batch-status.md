---
"@lifi/types": minor
---

Add the optional `batchStatus` to `StatusResponse`: for an ERC-4337 bundle, one `BatchStatusEntry` per LI.FI userOp, with its `index` in the bundle, `userOpHash`, `sender`, `success` and `gas`, and a `BatchStatusCall` (a `StatusResponse` with its `callIndex`) for each LI.FI call the userOp made.
