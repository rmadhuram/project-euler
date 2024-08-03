let fact = []
fact[0] = 1

// precompute factorials.
for (let i = 1; i < 10; i++) {
  fact[i] = i * fact[i-1]
}

// Get next number in chain.
function calcNext(n) {
  let sum = 0
  for (let k of n+'') {
    sum += fact[+k]
  }
  return sum
}

let nSixty = 0
let graph = {}
for (let n = 1; n < 1000000; n++) {
  if (n % 10000 == 0) {
    console.log(`calc for ${n}`)
  }
  
  let k = n
  while (true) {
    let k1 = calcNext(k)
    if (graph[k1]) {
      graph[k] = k1
      break;
    } 
    graph[k] = k1
    k = k1
  }

  // walk to find the path length
  let pathLength = 0
  let map = {}
  k = n
  while (!map[k]) {
    pathLength++
    map[k] = 1
    k = graph[k]
  }

  if (pathLength == 60) {
    console.log(`   *** Found: ${n}`)
    nSixty++
  }
}

console.log(nSixty)