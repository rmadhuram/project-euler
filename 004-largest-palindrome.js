// Largest palindrome product
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