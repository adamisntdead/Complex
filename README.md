<h1 align="center">Imagine</h1>
<p align="center">
  ⚡️ A Toy Complex Number Library in Javascript ⚡️
</p>

> [![GitHub issues](https://img.shields.io/github/issues/adamisntdead/Imagine.svg)](https://github.com/adamisntdead/Imagine/issues) 
[![Travis](https://img.shields.io/travis/adamisntdead/Imagine.svg)](https://travis-ci.org/adamisntdead/Imagine)
[![npm](https://img.shields.io/npm/v/imaginejs.svg)](https://www.npmjs.com/package/imaginejs)
![](https://img.shields.io/badge/Code%20Style-Standard-lightgrey.svg)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/9957af7d170e405bb25a1f7615d13074)](https://www.codacy.com/app/adamisntdead/Imagine?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=adamisntdead/Imagine&amp;utm_campaign=Badge_Grade)

### Features

* Complex Numbers!!!i!!!i!!!i!!!!
* Addition, Subtraction
* Multiplication, Division
* Square Roots
* Absolute Values
* A lovely formatted `toString()` method

### Usage
Install it first:

```bash
$ npm install --save imaginejs
```
Now you can use the library

```Javascript
const complex = require('imaginejs');

// Make a new Complex number, 4 + 2i
const num = complex(4, 2)

// Add another complex Number
const newNum = num.add(complex(6,3)) // returns 10 + 5i

// Test some Equality
newNum.equals(num) // False

// find the absolute value and print
console.log(newNum.abs().toString) // "10 + 5i"

// Do a random sum
complex.multiply(Complex(21, 4), Complex(76, 2)) // returns 1588 + 346i
```

All methods require a complex object to be used, and the library includes the following methods:

* `abs()`
* `add(y)`
* `subtract(y)`
* `multiply(y)`
* `divide(y)`
* `sqrt()`
* `toString`
* `equals(x)`

The methods can be used on the `complex` object like `Complex(3, 2).abs()` or as static methods, `Complex.abs(Complex(3, 2))`

### Tests
Even though this is a toy library, its all tested! (Cause thats whats good)

Heres the results of the tests and the coverage:

```
 PASS  tests/signum.test.js
 PASS  tests/index.test.js
```

File       |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
-----------|----------|----------|----------|----------|----------------|
All files  |      100 |    94.44 |      100 |      100 |                |
 index.js  |      100 |      100 |      100 |      100 |                |
 signum.js |      100 |    83.33 |      100 |      100 |                |

```
Test Suites: 2 passed, 2 total
Tests:       10 passed, 10 total
Snapshots:   0 total
Time:        1.362s
Ran all test suites matching "tests".
```