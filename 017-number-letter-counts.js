/*
If the numbers 1 to 5 are written out in words: one, two, three, four, five, then 
there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, 
how many letters would be used?
*/

let units = [
  'zero','one','two','three','four','five','six','seven','eight','nine',
  'ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen',
  'eighteen','nineteen'
]

let tens = ['zero','ten','twenty','thirty','forty','fifty','sixty','seventy',
  'eighty','ninety'
]

// n < 100
function countLT100(n) {
  if (n < 20) return units[n]
  let p1 = Math.floor(n/10)
  let p2 = n % 10
  return tens[p1] + (p2 > 0 ? units[p2] : '')
}

let sum = 0
for (let i=1; i<1000; i++) {
  let p1 = Math.floor(i/100)
  let p2 = i % 100

  let w = ''
  if (p1 > 0) {
    w += units[p1] + 'hundred'
  }
  if (p1 > 0 && p2 > 0) {
    w += 'and'
  }

  if (p2 > 0) w += countLT100(p2)
  sum += w.length
}

sum += (units[1].length + 'thousand'.length)

console.log(sum)



