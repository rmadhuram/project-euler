/*
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2^1000?
*/

let n = BigInt(1)
for (let i = 1; i<=1000; i++) {
  n = n * BigInt(2)
}
let digits = n.toString()
let sum = 0
for (let i=0; i<digits.length; i++) {
  sum += +digits[i]
}

console.log(sum)