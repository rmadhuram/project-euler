import { getPermutations, getPrimesLT } from "./utils.js";

let primes = getPrimesLT(10000)
primes = primes.filter(n => n > 1000)
console.log(primes)

let primeMap = {}
for (let p of primes) {
  let key = (p + '').split('').sort().join('-')
  if (!primeMap[key]) primeMap[key] = []
  primeMap[key].push(p)
}

for (let key in primeMap) {
  if (primeMap[key].length < 3) continue
  let nums = primeMap[key]
  let perms = getPermutations(nums, 3)
  for (let perm of perms) {
    let [a, b, c] = perm
    if (b - a != c - b) continue
    console.log(a, b, c)
  } 
}
