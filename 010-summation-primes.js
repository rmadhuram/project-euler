/*
Summation of primes

The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
Find the sum of all the primes below two million.
*/

import { primeSieve } from './utils.js'

let sieve = primeSieve(2000000)
let sum = 0
for (let i=2; i<2000000; i++) {
  sum += (sieve[i] ? i : 0)
}
console.log(sum)