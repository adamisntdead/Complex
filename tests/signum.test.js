/* global test, expect */

const sig = require('../src/signum')

test('Signum Function', () => {
  expect(sig(-34)).toBe(-1)
  expect(sig(0)).toBe(0)
  expect(sig(3424)).toBe(1)
})
