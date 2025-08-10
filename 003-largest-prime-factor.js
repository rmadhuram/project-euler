/*
Largest prime factor

The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?
*/

import { isPrime } from './utils.js'

let k = 620
let n = Math.floor(Math.sqrt(k)) + 1
let max = 0
for (let i = n-1; i>0; i--) {
  if (k % i == 0) {
    let factor1 = i
    let factor2 = k / i
    if (isPrime(factor1)) {
      max = Math.max(max, factor1)
    }
    if (isPrime(factor2)) {
      max = Math.max(max, factor2)
    }
  }
}
console.log(max)
