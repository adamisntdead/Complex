"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (x) {
  if (x < 0) {
    return -1;
  } else if (x === 0) {
    return 0;
  } else if (x > 0) {
    return 1;
  }
};