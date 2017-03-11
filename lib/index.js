'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toString = exports.equals = exports.sqrt = exports.divide = exports.multiply = exports.subtract = exports.add = exports.conj = exports.abs = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _signum = require('./signum');

var _signum2 = _interopRequireDefault(_signum);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

      var im = (0, _signum2.default)(this.Im) * Math.sqrt((0 - this.Re + Math.sqrt(Math.pow(this.Re, 2) + Math.pow(this.Im, 2))) / 2);

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

exports.default = function (a, b) {
  return new Complex(a, b);
};

var abs = exports.abs = function abs(x) {
  return Math.sqrt(Math.pow(x.Re, 2) + Math.pow(x.Im, 2));
};

var conj = exports.conj = function conj(x) {
  return new Complex(x.Re, -x.Im);
};

var add = exports.add = function add(a, b) {
  return new Complex(a.Re + b.Re, a.Im + b.Im);
};

var subtract = exports.subtract = function subtract(a, b) {
  return new Complex(a.Re - b.Re, a.Im - b.Im);
};

var multiply = exports.multiply = function multiply(a, b) {
  return new Complex(a.Re * b.Re - a.Im * b.Im, a.Im * b.Re + a.Re * b.Im);
};

var divide = exports.divide = function divide(a, b) {
  return new Complex((a.Re * b.Re + a.Im * b.Im) / (Math.pow(b.Re, 2) + Math.pow(b.Im, 2)), (a.Im * b.Re - a.Re * b.Im) / (Math.pow(b.Re, 2) + Math.pow(b.Im, 2)));
};

var sqrt = exports.sqrt = function sqrt(x) {
  var re = Math.sqrt((x.Re + Math.sqrt(Math.pow(x.Re, 2) + Math.pow(x.Im, 2))) / 2);

  var im = (0, _signum2.default)(x.Im) * Math.sqrt((0 - x.Re + Math.sqrt(Math.pow(x.Re, 2) + Math.pow(x.Im, 2))) / 2);

  return new Complex(re, im);
};

var equals = exports.equals = function equals(a, b) {
  return a.Re === b.Re && a.Im === b.Im;
};

var toString = exports.toString = function toString(x) {
  if (x.Re === 0) {
    return x.Im + 'i';
  }
  if (x.Im >= 0) {
    return x.Re + ' + ' + x.Im + 'i';
  } else {
    return x.Re + ' - ' + Math.abs(x.Im) + 'i';
  }
};