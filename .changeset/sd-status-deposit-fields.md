---
"@lifi/types": major
---

Add `expiresAt`, `requiredDeposit` and `refundOutlook` to `SmartDepositsStatus`, which may now carry neither a `deposit` nor a `refund` block.
Migration: code that assumed `smartDeposits` always holds `deposit` or `refund` must handle neither.
