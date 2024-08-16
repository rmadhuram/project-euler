import { primeSieve, getPrimesLT } from "./utils.js";
let sieve = primeSieve(1000000)
sieve[1] = false

function checkTruncatable(n) {
  let num = n + ''

  for (let i = 1; i < num.length; i++) {
    let n1 = +num.substr(i)
    //console.log(n1)
    if (!sieve[n1]) return false
  }

  for (let i = 1; i < num.length; i++) {
    let n1 = +num.substr(0,i)
    //console.log(n1)
    if (!sieve[n1]) return false
  }

  return true
}

let count = 0
let sum = 0
let nums = []
for (let n = 10; n < 1000000; n++) {
  if (sieve[n]) {
    if (checkTruncatable(n)) {
      console.log(n)
      count++
      sum += n
    }
  }
}

console.log(count)
console.log(sum)