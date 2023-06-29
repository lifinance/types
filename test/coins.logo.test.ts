import axios from "axios"
import { defaultCoins } from "../src"

jest.setTimeout(20_000)

describe('Coin logo test', () => {
    test.each(defaultCoins)(
        'that the links for logoURI are working', async (coin) => {
            const baseURL = coin.logoURI
            const tokenSpecificURLs = Object.values(coin.chains).flatMap(({ logoURI }) => logoURI ? [logoURI] : [])
            const failing: string[] = []
            await Promise.allSettled([...new Set([
                baseURL,
                ...tokenSpecificURLs
            ])]
            .map(url => axios.get(url).catch(_ => failing.push(url))))
            expect(failing).toHaveLength(0)
        }
    )
})