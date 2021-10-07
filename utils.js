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