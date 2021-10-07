/* 
Largest palindrome product

A palindromic number reads the same both ways. 
The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

import { isPalindromeNum } from "./utils.js";

let largest = 0
for (let i = 100; i<1000; i++) {
  for (let j = 100; j<1000; j++) {
    let k = i * j
    if (isPalindromeNum(k) && k > largest) {
      largest = k
    }
  }
}

console.log(largest)