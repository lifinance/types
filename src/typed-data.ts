/**
 * Hex-encoded string (e.g. `0xabc...`).
 */
export type Hex = `0x${string}`

/**
 * 20-byte Ethereum address as a hex string.
 */
export type Address = `0x${string}`

/**
 * 32-byte hash as a hex string.
 */
export type Hash = `0x${string}`

/**
 * EIP-712 typed-data domain separator.
 * @link https://eips.ethereum.org/EIPS/eip-712
 */
export type TypedDataDomain = {
  chainId?: number | bigint | undefined
  name?: string | undefined
  salt?: Hex | undefined
  verifyingContract?: Address | undefined
  version?: string | undefined
}

/**
 * EIP-712 typed-data parameter (single field in a struct).
 */
export type TypedDataParameter = {
  name: string
  type: string
}
