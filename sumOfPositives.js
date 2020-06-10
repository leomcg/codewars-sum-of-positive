const sumOfPositives = (array) => {
  sum = array.filter(cur => cur > 0).reduce((a, b) => a + b)
  return sum
}

