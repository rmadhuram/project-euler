import { getPrimeFactors, getPermutations } from './utils.js'

function testFactors() {
  // Test factors
  for (let i = 1; i < 1000; i++) {
    console.log(i, getPrimeFactors(i))
  }
}

function testPermutations() {
  let arr = [1, 2, 3, 4]
  console.log(getPermutations(arr, 2))
}

testPermutations()
