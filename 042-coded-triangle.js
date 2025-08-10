import fs from 'fs'

let data = fs.readFileSync('042-words.txt', 'utf8')
let words = data.split(',').map(w => w.replace(/"/g, ''))

let map = {}    
for (let i = 1; i <= 50; i++) {
  map[i * (i + 1) / 2] = true
}

let nTriangles = 0
for (let word of words) {
  let score = word.split('').reduce((acc, char) => acc + char.charCodeAt(0) - 64, 0)
  if (map[score]) {
    nTriangles++
  }
}

console.log(nTriangles)
