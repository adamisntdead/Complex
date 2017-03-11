/* global test, expect */

import Complex, * as complex from '../src/index'

test('Absolute Value', () => {
  expect(Complex(5, 12).abs()).toBe(13)
  expect(Complex(6, 8).abs()).toBe(10)
  expect(Complex(3, 2).abs()).toBe(Math.sqrt(13))
  expect(Complex(3, -2).abs()).toBe(Math.sqrt(13))
  expect(Complex(-3, -5).abs()).toBe(Math.sqrt(34))

  expect(complex.abs(Complex(5, 12))).toBe(13)
  expect(complex.abs(Complex(-3, -5))).toBe(Math.sqrt(34))
})

test('Equality', () => {
  expect(Complex(3, 2).equals(Complex(3, 2))).toBeTruthy()
  expect(Complex(999, 27).equals(Complex(999, 27))).toBeTruthy()
  expect(Complex(365678, -278).equals(Complex(365678, -278))).toBeTruthy()
  expect(Complex(-3, -2).equals(Complex(-3, -2))).toBeTruthy()
  expect(Complex(383, 2).equals(Complex(383, 2))).toBeTruthy()

  expect(complex.equals(Complex(3, 2), Complex(3, 2))).toBeTruthy()
})

test('Complex Conjugate', () => {
  expect(Complex(5, 12).conj().equals(Complex(5, -12))).toBeTruthy()
  expect(Complex(12, 5).conj().equals(Complex(12, -5))).toBeTruthy()
  expect(Complex(1223, -12).conj().equals(Complex(1223, 12))).toBeTruthy()
  expect(Complex(-1223, -12).conj().equals(Complex(-1223, 12))).toBeTruthy()

  expect(complex.conj(Complex(5, 2)).equals(Complex(5, -2))).toBeTruthy()
})

test('Addition', () => {
  expect(Complex(1, 1).add(Complex(2, 2)).equals(Complex(3, 3))).toBeTruthy()
  expect(Complex(12, 55).add(Complex(23, 75)).equals(Complex(35, 130))).toBeTruthy()
  expect(Complex(-10, 20).add(Complex(11, 75)).equals(Complex(1, 95))).toBeTruthy()
  expect(Complex(20, -10).add(Complex(75, 11)).equals(Complex(95, 1))).toBeTruthy()

  expect(complex.add(Complex(20, -10), Complex(75, 11)).equals(Complex(95, 1))).toBeTruthy()
})

test('Subtraction', () => {
  expect(Complex(1, 1).subtract(Complex(1, 1)).equals(Complex(0, 0))).toBeTruthy()
  expect(Complex(10, 1).subtract(Complex(34, 12)).equals(Complex(-24, -11))).toBeTruthy()
  expect(Complex(-2, -1).subtract(Complex(23, 3)).equals(Complex(-25, -4))).toBeTruthy()

  expect(complex.subtract(Complex(-2, -1), Complex(23, 3)).equals(Complex(-25, -4))).toBeTruthy()
})

test('Multiplication', () => {
  expect(Complex(1, 1).multiply(Complex(1, 1)).equals(Complex(0, 2))).toBeTruthy()
  expect(Complex(21, 4).multiply(Complex(76, 2)).equals(Complex(1588, 346))).toBeTruthy()
  expect(Complex(-21, 4).multiply(Complex(76, 2)).equals(Complex(-1604, 262))).toBeTruthy()

  expect(complex.multiply(Complex(-21, 4), Complex(76, 2)).equals(Complex(-1604, 262))).toBeTruthy()
})

test('Division', () => {
  expect(Complex(-21, 4).divide(Complex(76, 2)).equals(Complex(-397 / 1445, 173 / 2890))).toBeTruthy()
  expect(Complex(2, 4).divide(Complex(6, 2)).equals(Complex(1 / 2, 1 / 2))).toBeTruthy()
  expect(Complex(2, 3).divide(Complex(4, -5)).toString()).toBe(Complex(-7 / 41, 22 / 41).toString())

  expect(complex.divide(Complex(2, 3), Complex(4, -5)).toString()).toBe(Complex(-7 / 41, 22 / 41).toString())
})

test('Square Root', () => {
  expect(Complex(4, 4).sqrt().toString()).toBe('2.19736822693562 + 0.9101797211244548i')
  expect(Complex(4, 0).sqrt().toString()).toBe('2 + 0i')
  expect(Complex(0, 4).sqrt().toString()).toBe('1.4142135623730951 + 1.4142135623730951i')

  expect(complex.sqrt(Complex(4, 4)).toString()).toBe('2.19736822693562 + 0.9101797211244548i')
})

test('ToString', () => {
  expect(Complex(5, 12).toString()).toBe('5 + 12i')
  expect(Complex(12, 0).toString()).toBe('12 + 0i')
  expect(Complex(0, 0).toString()).toBe('0i')
  expect(Complex(0, 128).toString()).toBe('128i')
  expect(Complex(-5, -12).toString()).toBe('-5 - 12i')
  expect(Complex(123, -212).toString()).toBe('123 - 212i')
  expect(Complex(-123, 212).toString()).toBe('-123 + 212i')

  expect(complex.toString(Complex(-123, -212))).toBe('-123 - 212i')
  expect(complex.toString(Complex(-123, 212))).toBe('-123 + 212i')
  expect(complex.toString(Complex(0, 212))).toBe('212i')
})
