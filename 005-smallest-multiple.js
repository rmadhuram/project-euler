/*
Smallest multiple

2520 is the smallest number that can be divided by each of the numbers 
from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of 
the numbers from 1 to 20?
*/

import { euclidGCD } from './utils.js'

let lcm = 1
for (let i = 2; i <= 20; i++) {
  let gcd = euclidGCD(lcm, i)
  lcm = (lcm / gcd) * i
}

console.log(lcm)


