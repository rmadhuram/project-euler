// Even Fibonacci numbers

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
