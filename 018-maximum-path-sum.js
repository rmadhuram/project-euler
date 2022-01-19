/**
 * By starting at the top of the triangle below and moving to adjacent numbers on the 
 * row below, the maximum total from top to bottom is 23.
 * 3
 * 7 4
 * 2 4 6
 * 8 5 9 3
 * That is, 3 + 7 + 4 + 9 = 23.
 * 
 * Find the maximum total from top to bottom of the triangle below:
 * 
 * NOTE: As there are only 16384 routes, it is possible to solve this problem by trying every 
 * route. However, Problem 67, is the same challenge with a triangle containing one-hundred rows; 
 * it cannot be solved by brute force, and requires a clever method! ;o)
 */

/** 
 * This DP solution finds the max by memoizing in an efficient manner.
 */

let data = `75
95 64
17 47 82
18 35 87 10
20 04 82 47 65
19 01 23 75 03 34
88 02 77 73 07 63 67
99 65 04 28 06 16 70 92
41 41 26 56 83 40 80 70 33
41 48 72 33 47 32 37 16 94 29
53 71 44 65 25 43 91 52 97 51 14
70 11 33 28 77 73 17 78 39 68 17 57
91 71 52 38 17 14 91 43 58 50 27 29 48
63 66 04 68 89 53 67 30 73 16 69 87 40 31
04 62 98 27 23 09 70 98 73 93 38 53 60 04 23`

data = `77
37  62
42  51  33
55  14  40  30
22  67  42  24  10
35  45  17  24  35  47
68  90  35  76  66  21  46
53  53  72  75  87  36  52  12
07  56  42  52  32  05  38  53  65
49  00  53  02  04  82  82  53  25  17`

data = data.split('\n')
for (let i=0; i<data.length; i++) {
  data[i] = data[i].split('  ').map(x => +x)
}

for (let i=1; i<data.length; i++) {
  for (let j=0; j<=i; j++) {
    if (j==0) { 
      data[i][j] += data[i-1][j]
    } else if (j==i) {
      data[i][j] += data[i-1][j-1]
    } else {
      data[i][j] = Math.max(data[i][j] + data[i-1][j-1], data[i][j] + data[i-1][j])
    }
  }
}

console.log(Math.max(...data[data.length-1]))

