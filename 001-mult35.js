/*
Multiples of 3 or 5

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
*/

function sumN(n) {
  return n * (n+1) / 2;
}

let total = 3 * sumN(333) + 5 * sumN(199) - 15 * sumN(66)

console.log(total)