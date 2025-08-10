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

export function isPrime(n) {
  let isPrime = true
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      isPrime = false
      break
    }
  }
  return isPrime
}

// Get all primes less than n, using sieve
export function getPrimesLT(n) {
  let sieve = primeSieve(n)
  let res = []
  for (let i=2; i<sieve.length; i++) {
    if (sieve[i]) res.push(i)
  }
  return res
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

export function getPrimeFactors(n) {
  let factors = []
  for (let i = 2; i <= Math.sqrt(n); i++) {
    let prod = 1;
    while (n % i == 0) {
      prod *= i
      n /= i
    }
    if (prod > 1) factors.push(prod)
  }
  if (n > 1) factors.push(n)
  return factors
}

// Find sum of all numbers in an array.
export function sumOfArray(arr) {
  let sum = 0
  for (let i=0; i<arr.length; i++) {
    sum += arr[i]
  }
  return sum
}

export function isPandigital(n) {
  let str = n.toString()
  let arr = str.split('')
  arr.sort()
  return arr.join('') == '0123456789'
}

export function getPermutations(arr, N) {
  if (N == 1) return arr.map(x => [x])
  let res = []
  for (let i = 0; i < arr.length; i++) {
    let rest = getPermutations(arr.slice(0, i).concat(arr.slice(i+1)), N-1)
    for (let r of rest) {
      res.push([arr[i]].concat(r))
    }
  }
  return res
}
