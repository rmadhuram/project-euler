import { primeSieve, getPrimesLT } from "./utils.js";
let primes = getPrimesLT(1000)
let sieve = primeSieve(10000)
let maxCount = 0, maxA, maxB

function getNPrimes(a, b) {
  let n = 0;
  while (true) {
    let v = n*n + a*n + b
    if (v < 0 || !sieve[v]) break
    n++
  } 
  if (n > 50) {
    console.log(a, b, n)
  }
  if (n > maxCount) {
    maxCount = n
    maxA = a
    maxB = b
  }
}

for (let a = -1000; a <= 1000; a++) {
  for (let b of primes) {
    getNPrimes(a, b)
  }
}

console.log(maxCount, maxA, maxB, maxA * maxB)