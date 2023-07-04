import axios from 'axios'
import type { MatcherFunction } from 'expect'

const httpsUrl: MatcherFunction<[url: unknown]> = function (url) {
  if (typeof url !== 'string') {
    throw new Error('Url must be of type string!')
  }

  if (url.startsWith('https://')) {
    return {
      message: () => `Url ${url} is a secure https url`,
      pass: true
    }
  } else {
    return {
      message: () => `Url ${url} is not a secure https url`,
      pass: false
    }
  }
}

const endsWith: MatcherFunction<[value: unknown, check: unknown]> = function (value, check) {
  if (typeof value !== 'string') {
    throw new Error('Passed value must be of type string!')
  }
  if (typeof check !== 'string') {
    throw new Error('Passed check must be of type string!')
  }

  if (value.endsWith(check)) {
    return {
      message: () => `Value ${value} ends with ${check}`,
      pass: true
    }
  } else {
    return {
      message: () => `Value ${value} does not end with ${check}`,
      pass: false
    }
  }
}

const canGetUrl: MatcherFunction<[value: unknown, check: unknown]> = async function (url) {
  if (typeof url !== 'string') {
    throw new Error('Url must be of type string!')
  }

  return axios.get(url)
    .then(() => ({
      message: () => `Was able to get ${url}`,
      pass: true
    }))
    .catch(() => ({
      message: () => `Not able to GET url: ${url}`,
      pass: false
    }))
}

expect.extend({
  httpsUrl,
  endsWith,
  canGetUrl,
})

declare module 'expect' {
  interface AsymmetricMatchers {
    httpsUrl(): void
    endsWith(check: string): void
    canGetUrl(): Promise<void>
  }
  interface Matchers<R> {
    httpsUrl(): R
    endsWith(check: string): R
    canGetUrl(): Promise<R>
  }
}
