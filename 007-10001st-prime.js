/*
10001st prime

By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, 
we can see that the 6th prime is 13.

What is the 10 001st prime number?
*/

import { primeSieve } from './utils.js'

const MAX = 200000; // 200,000 determined by prime number theorem & trial and error!
let sieve = primeSieve(MAX) 
let k = 0
for (let i = 2; i < MAX; i++) {
  if (sieve[i]) k++
  if (k == 10001) {
    console.log(i)
    break;
  }
}