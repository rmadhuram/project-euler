/* 
Even Fibonacci numbers

Each new term in the Fibonacci sequence is generated by adding the previous two terms. 
By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed 
four million, find the sum of the even-valued terms.
*/

let fib = [1,2]
let sum = 2
let n = 2

while (true) {
  fib[n] = fib[n-1] + fib[n-2]
  if (fib[n] > 4000000) break;
  if (fib[n] % 2 == 0) sum += fib[n]
  n++;
}

console.log(sum)
