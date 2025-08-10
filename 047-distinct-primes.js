import { getPrimeFactors, primeSieve } from './utils.js'

let pastFactors = [[], [], [], []]

for (let n = 100000; n<1000000; n++) {
  let factors = getPrimeFactors(n)
  pastFactors = pastFactors.slice(1)
  pastFactors.push(factors)

  let isFour = true
  for (let i = 0; i < pastFactors.length; i++) {
    if (pastFactors[i].length != 4) {
      isFour = false;
      break
    }
  }

  if (isFour) {
    console.log(n, pastFactors)
  }
}