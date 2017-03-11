const sgn = require('./signum')

// Given as a + bi
class Complex {
  constructor (a, b) {
    this.Re = a
    this.Im = b
  }

  // Absolute Value, sqrt(a^2 + b^2)
  abs () {
    return Math.sqrt(Math.pow(this.Re, 2) + Math.pow(this.Im, 2))
  }

  // Conjugate, The complex conjugate of x + yi is defined to be x − yi.
  conj () {
    return new Complex(this.Re, -this.Im)
  }

  add (x) {
    return new Complex(this.Re + x.Re, this.Im + x.Im)
  }

  subtract (x) {
    return new Complex(this.Re - x.Re, this.Im - x.Im)
  }

  multiply (x) {
    // (a + bi)(c + di) = (ac - bd) + (bc+  ad)i
    return new Complex(
      (this.Re * x.Re) - (this.Im * x.Im),
      (this.Im * x.Re) + (this.Re * x.Im)
    )
  }

  divide (x) {
    return new Complex(
      (((this.Re * x.Re) + (this.Im * x.Im)) / (Math.pow(x.Re, 2) + Math.pow(x.Im, 2))),
      (((this.Im * x.Re) - (this.Re * x.Im)) / (Math.pow(x.Re, 2) + Math.pow(x.Im, 2)))
    )
  }

  sqrt () {
    const re = Math.sqrt(
      (this.Re + (Math.sqrt(Math.pow(this.Re, 2) + Math.pow(this.Im, 2)))) / 2
    )

    const im = sgn(this.Im) * Math.sqrt(
      (0 - this.Re + (Math.sqrt(Math.pow(this.Re, 2) + Math.pow(this.Im, 2)))) / 2
    )

    return new Complex(re, im)
  }

  // Test Equality with other Complex Numbers
  equals (x) {
    return this.Re === x.Re && this.Im === x.Im
  }

  // To String Method
  toString () {
    if (this.Re === 0) {
      return `${this.Im}i`
    }
    if (this.Im >= 0) {
      return `${this.Re} + ${this.Im}i`
    } else {
      return `${this.Re} - ${Math.abs(this.Im)}i`
    }
  }
}

module.exports = (a, b) => new Complex(a, b)

module.exports.abs = (x) => Math.sqrt(Math.pow(x.Re, 2) + Math.pow(x.Im, 2))

module.exports.conj = (x) => new Complex(x.Re, -x.Im)

module.exports.add = (a, b) => new Complex(a.Re + b.Re, a.Im + b.Im)

module.exports.subtract = (a, b) => new Complex(a.Re - b.Re, a.Im - b.Im)

module.exports.multiply = (a, b) => new Complex(
  (a.Re * b.Re) - (a.Im * b.Im),
  (a.Im * b.Re) + (a.Re * b.Im)
)

module.exports.divide = (a, b) => new Complex(
  (((a.Re * b.Re) + (a.Im * b.Im)) / (Math.pow(b.Re, 2) + Math.pow(b.Im, 2))),
  (((a.Im * b.Re) - (a.Re * b.Im)) / (Math.pow(b.Re, 2) + Math.pow(b.Im, 2)))
)

module.exports.sqrt = (x) => {
  const re = Math.sqrt(
    (x.Re + (Math.sqrt(Math.pow(x.Re, 2) + Math.pow(x.Im, 2)))) / 2
  )

  const im = sgn(x.Im) * Math.sqrt(
    (0 - x.Re + (Math.sqrt(Math.pow(x.Re, 2) + Math.pow(x.Im, 2)))) / 2
  )

  return new Complex(re, im)
}

module.exports.equals = (a, b) => a.Re === b.Re && a.Im === b.Im

module.exports.toString = (x) => {
  if (x.Re === 0) {
    return `${x.Im}i`
  }
  if (x.Im >= 0) {
    return `${x.Re} + ${x.Im}i`
  } else {
    return `${x.Re} - ${Math.abs(x.Im)}i`
  }
}
