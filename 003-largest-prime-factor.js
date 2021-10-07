// Largest prime factor
import {primeSieve} from './utils.js'

let k = 600851475143
let n = Math.floor(Math.sqrt(k)) + 1
let seive = primeSieve(n)
for (let i = n-1; i>0; i--) {
  if (seive[i] && k%i == 0) {
    console.log(i);
    break;
  }
}
