
function isAbundant(n) {
  let sum = 0
  for (let i=1; i<=n/2; i++) {
    if (n % i == 0) sum += i
  }
  return (sum > n)
}

let abundants = []
for (let i=1; i<=28123; i++) {
  if (isAbundant(i)) {
    abundants.push(i)
  }
}

let map = {}

for (let i=0; i<abundants.length; i++) {
  for (let j=0; j<=i; j++) {
    map[abundants[i] + abundants[j]] = true
  }
}

let total = 0
for (let i=1; i<=28123; i++) {
  if (!map[i]) {
    console.log(i)
    total += i
  }
}


console.log(total)