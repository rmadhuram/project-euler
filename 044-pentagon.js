let N = 10000
let pentagon = [] 
let pmap = {}
for (let i = 1; i < N; i++) {
  let n = i * (3 * i - 1) / 2;
  pmap[n] = 1
  pentagon.push(n)
}

for (let i = 1; i < N; i++) {
  for (let j = 1; j < i; j++) {
    let sum = pentagon[i] + pentagon[j]
    let diff = pentagon[i] - pentagon[j]
    if (pmap[sum] && pmap[diff]) {
      console.log(pentagon[i], pentagon[j], diff)
    }
  }
}

