import Ajv from 'ajv'
import { OrderSchema } from '../src'

let ajv: Ajv
beforeAll(() => {
  ajv = new Ajv()
})

test('Order Schema', () => {
  const validate = ajv.compile(OrderSchema)
  expect(validate('BEST_VALUE')).toBeTruthy()
  expect(validate.errors).toBeFalsy()
  expect(validate('BEST_FEE')).toBeTruthy()
  expect(validate.errors).toBeFalsy()
  expect(validate('BEST_FEE_GAS')).toBeTruthy()
  expect(validate.errors).toBeFalsy()
  expect(validate('ERRORS')).toBeFalsy()
  expect(validate.errors).toBeTruthy()
})
