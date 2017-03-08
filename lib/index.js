'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var sgn = require('./signum');

// Given as a + bi

var Complex = function () {
  function Complex(a, b) {
    _classCallCheck(this, Complex);

    this.Re = a;
    this.Im = b;
  }

  // Absolute Value, sqrt(a^2 + b^2)


  _createClass(Complex, [{
    key: 'abs',
    value: function abs() {
      return Math.sqrt(Math.pow(this.Re, 2) + Math.pow(this.Im, 2));
    }

    // Conjugate, The complex conjugate of x + yi is defined to be x − yi.

  }, {
    key: 'conj',
    value: function conj() {
      return new Complex(this.Re, -this.Im);
    }
  }, {
    key: 'add',
    value: function add(x) {
      return new Complex(this.Re + x.Re, this.Im + x.Im);
    }
  }, {
    key: 'subtract',
    value: function subtract(x) {
      return new Complex(this.Re - x.Re, this.Im - x.Im);
    }
  }, {
    key: 'multiply',
    value: function multiply(x) {
      // (a + bi)(c + di) = (ac - bd) + (bc+  ad)i
      return new Complex(this.Re * x.Re - this.Im * x.Im, this.Im * x.Re + this.Re * x.Im);
    }
  }, {
    key: 'divide',
    value: function divide(x) {
      return new Complex((this.Re * x.Re + this.Im * x.Im) / (Math.pow(x.Re, 2) + Math.pow(x.Im, 2)), (this.Im * x.Re - this.Re * x.Im) / (Math.pow(x.Re, 2) + Math.pow(x.Im, 2)));
    }
  }, {
    key: 'sqrt',
    value: function sqrt() {
      var re = Math.sqrt((this.Re + Math.sqrt(Math.pow(this.Re, 2) + Math.pow(this.Im, 2))) / 2);

      var im = sgn(this.Im) * Math.sqrt((0 - this.Re + Math.sqrt(Math.pow(this.Re, 2) + Math.pow(this.Im, 2))) / 2);

      return new Complex(re, im);
    }

    // Test Equality with other Complex Numbers

  }, {
    key: 'equals',
    value: function equals(x) {
      return this.Re === x.Re && this.Im === x.Im;
    }

    // To String Method

  }, {
    key: 'toString',
    value: function toString() {
      if (this.Re === 0) {
        return this.Im + 'i';
      }
      if (this.Im >= 0) {
        return this.Re + ' + ' + this.Im + 'i';
      } else {
        return this.Re + ' - ' + Math.abs(this.Im) + 'i';
      }
    }
  }]);

  return Complex;
}();

module.exports = function (a, b) {
  return new Complex(a, b);
};