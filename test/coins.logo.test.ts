import { expect, test } from '@jest/globals'
import './matchers'
import { defaultCoins, wrappedTokens } from "../src"

jest.setTimeout(20_000)

describe('Coin logo test', () => {
  const allImages : string[] = []

  // default coins
  allImages.push(
    ...defaultCoins.map((coin) => {
      const baseURL = coin.logoURI
      const tokenSpecificURLs = Object.values(coin.chains).flatMap(({ logoURI }) => logoURI ? [logoURI] : [])
      return [
          baseURL,
          ...tokenSpecificURLs
      ]
    }).flat()
  )

  // wrapped tokens
  allImages.push(
    ...Object.values(wrappedTokens).map((token: any) => token.logoURI)
  )

  test.each([...new Set(allImages)])('that the links for logoURI are working', async (image) => {
    expect(image).httpsUrl()
    await expect(image).canGetUrl()
  })
})
