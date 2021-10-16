/*
The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1

It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.
*/

var map = {1:1}
function getLength(n) {
  let nOrig = n
  let len = 0
  let stack = []
  while (n != 1 || map[n]) {
    stack.push(n)
    if (map[n]) {
       len = map[n]
       break
    }
    if (n % 2 == 0) {
      n = n/2
    } else {
      n = 3*n + 1
    }
  }

  while (stack.length > 0) {
    let k = stack.pop()
    map[k] = len++
  }

  return map[nOrig]
}


let maxN = 0;
let maxLen = 0;
for (let i=1; i<1000000; i++) {
  let len = getLength(i)
  if (len > maxLen) {
    maxLen = len
    maxN = i
  }
}
console.log(maxN, maxLen)


/*
let n = 0
let i = 0
let sum = 0
while (n < 77) {
  i++
  let len = getLength(i)
  if (len == 77) {
    console.log(i)
    sum += i
    n++
  }
}
console.log(sum)
*/


//console.log(getLength(6649279))
/*
console.log(getLength(5))
console.log(map)
console.log(getLength(13))
console.log(map)
*/