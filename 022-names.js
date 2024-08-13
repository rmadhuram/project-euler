let fs = require('fs')

let data = fs.readFileSync('./022-names.txt', 'utf-8')
data = data.split(',').map(x => x.replaceAll('"', ''))
data.sort()

let total = 0
for (let i=0; i<data.length; i++) {
  let str = data[i]
  let sum = 0
  for (let j=0; j<str.length; j++) {
    sum += (str.charCodeAt(j) - 64)
  }
  total += (i+1)*sum
}
console.log(total)