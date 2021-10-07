// Multiples of 3 or 5

function sumN(n) {
  return n * (n+1) / 2;
}

let total = 3 * sumN(333) + 5 * sumN(199) - 15 * sumN(66)

console.log(total)