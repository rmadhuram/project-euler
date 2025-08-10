import { isPandigital } from './utils.js'
const primes = [2, 3, 5, 7, 11, 13, 17]
const factors = []

function precompute(n) {
  let arr = []
  for (let i = 0; i < 1000; i++) {
    if (i % n == 0) arr.push((i + '').padStart(3, '0'))
  }
  return arr
}

for (let p of primes) {
  factors[p] = precompute(p)
}

let sum = BigInt(0)

function findNum(level, num) {
  if (level == primes.length) {
    for (let i = 1; i < 10; i++) {
      let num1 = i + num
      if (isPandigital(num1)) {
        sum += BigInt(+num1)
      }
    }
  } else {
    for (let n of factors[primes[level]]) {
      if (num == '') {
        findNum(level + 1, n)
      } else if (num.substr(num.length - 2, 2) == n.substr(0, 2)) {
        findNum(level + 1, num + n.substr(2, 1))
      }
    }
  }
}

findNum(0, '')
console.log(sum)

