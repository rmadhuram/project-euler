let map = []
for (let a = 1; a <= 500; a++) {
  for (let b = a; b <= 500; b++) {
    let c = Math.sqrt(a * a + b * b)
    if (Number.isInteger(c)) {
      let perimeter = a + b + c
      if (!map[perimeter]) {
        map[perimeter] = []
      }
      map[perimeter].push([a, b])
    }
  }
}

let maxTriplets = 0
let maxP = 0

map.keys().forEach(k => {
  if (map[k] && map[k].length > maxTriplets) {
    maxTriplets = map[k].length
    maxP = k
  }
})

console.log(maxP)
