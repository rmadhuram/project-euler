function isPandigital(n) {
  let s = n + ''
  return s.split('').sort().join('') === '123456789'
}

let max = 0
for (let i = 1; i < 99999; i++) {
  let j = 1
  let s = ''
  while (true) {
   s += (i * j + '')
    if (s.length > 9) break
    if (isPandigital(s)) {
      max = Math.max(max, s)
      console.log(s)
      break;
    }
    j++
  }
}

console.log(max)
