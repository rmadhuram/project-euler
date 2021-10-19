// Returns a prime sieve of size n
export function primeSieve(n) {
  let arr = new Array(n).fill(true)
  let i = 2
  while (i < Math.sqrt(n)) {
    let j = 2 * i
    while (j < n) {
      arr[j] = false
      j += i
    }
    i++
  }
  return arr;
}

// Is it a palindromic number?
export function isPalindromeNum(n) {
  let k = 0
  let i = n
  while (i > 0) {
    k = 10 * k + (i%10)
    i = Math.floor(i / 10)
  }
  return (k == n)
}

// Euclud's algorithm for GCD
export function euclidGCD(a, b) {
  if (b == 0) return a;
  return euclidGCD(b, a % b)
}

// Find the number of factors of a given number.
export function getNFactors(n) {
  let nFact = 1
  for (let i = 1; i<=Math.sqrt(n); i++) {
    if (n % i == 0) {
      if (i == Math.sqrt(n)) nFact++
      else nFact += 2
    }
  }
  return nFact
}

// Get all proper factors of n (excludes n)
export function getAllFactors(n) {
  let facts = [1]
  for (let i = 2; i<=Math.sqrt(n); i++) {
    if (n % i == 0) {
      if (i == Math.sqrt(n)) facts.push(i)
      else {
        facts.push(i)
        facts.push(n/i)
      }
    }
  }
  return facts
}

// Find sum of all numbers in an array.
export function sumOfArray(arr) {
  let sum = 0
  for (let i=0; i<arr.length; i++) {
    sum += arr[i]
  }
  return sum
}