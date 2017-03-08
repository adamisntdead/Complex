<h1 align="center">Complex</h1>
<p align="center">
  ⚡️ A Toy Complex Number Library in Javascript ⚡️
</p>

---------

### Features

* Complex Numbers!!!i!!!i!!!i!!!!
* Addition, Subtraction
* Multiplication, Division
* Square Roots
* Absolute Values
* A lovely formatted `toString()` method

### Usage
```Javascript
const complex = require('./local-path-to-complex/lib/index');

// Make a new Complex number, 4 + 2i
const num = complex(4, 2)

// Add another complex Number
const newNum = num.add(complex(6,3)) // returns 10 + 5i

// Test some Equality
newNum.equals(num) // False

// find the absolute value and print
console.log(newNum.abs().toString) // "10 + 5i"
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
