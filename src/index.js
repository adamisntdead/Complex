const sgn = require('./signum')

// Given as a + bi
class Complex {
  constructor(a, b) {
    this.Re = a
    this.Im = b
  }

  // Absolute Value, sqrt(a^2 + b^2)
  abs() {
    return Math.sqrt(Math.pow(this.Re, 2) + Math.pow(this.Im, 2))
  }

  // Conjugate, The complex conjugate of x + yi is defined to be x − yi.
  conj() {
    return new Complex(this.Re, -this.Im)
  }

  add(x) {
    return new Complex(this.Re + x.Re, this.Im + x.Im)
  }

  subtract(x) {
    return new Complex(this.Re - x.Re, this.Im - x.Im)
  }

  multiply(x) {
    // (a + bi)(c + di) = (ac - bd) + (bc+  ad)i
    return new Complex(
      (this.Re * x.Re) - (this.Im * x.Im),
      (this.Im * x.Re) + (this.Re * x.Im)
    )
  }

  divide(x) {
    return new Complex(
      (((this.Re * x.Re) + (this.Im * x.Im)) /(Math.pow(x.Re, 2) + Math.pow(x.Im, 2))),
      (((this.Im * x.Re) - (this.Re * x.Im)) / (Math.pow(x.Re, 2) + Math.pow(x.Im, 2)))
    )
  }

  sqrt() {
    const re = Math.sqrt(
      (this.Re + (Math.sqrt(Math.pow(this.Re, 2) + Math.pow(this.Im, 2)))) / 2
    )

    const im = sgn(this.Im) * Math.sqrt(
      (0 - this.Re + (Math.sqrt(Math.pow(this.Re, 2) + Math.pow(this.Im, 2)))) / 2
    )

    return new Complex(re, im)
  }

  // Test Equality with other Complex Numbers
  equals(x) {
    return this.Re === x.Re && this.Im === x.Im
  }

  // To String Method
  toString() {
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
