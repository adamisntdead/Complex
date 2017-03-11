const sgn = (x) => {
  if (x < 0) {
    return -1
  } else if (x === 0) {
    return 0
  } else if (x > 0) {
    return 1
  }
}

module.exports = sgn
