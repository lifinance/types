---
"@lifi/types": major
---

Remove the deprecated chains Moonbeam (`MOO`, 1284), Boba (`BOB`, 288), BOB (`BOC`, 60808), opBNB (`OPB`, 204), Lens (`LNS`, 232), Blast (`BLS`, 81457), Fusion (`FSN`, 32659), Gravity (`GRA`, 1625) and Lisk (`LSK`, 1135) from `ChainKey` and `ChainId`.
Remove the coin keys that only these chains used: `CoinKey.GLMR`, `CoinKey.FSN`, `CoinKey.USDB`, `CoinKey.GHO`, `CoinKey.WGHO` and `CoinKey.WG`.
Note: `ChainKey.BOB` / `ChainId.BOB` was Boba; the BOB chain was `BOC`. Both are removed.
