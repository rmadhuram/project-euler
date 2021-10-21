/*
Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, 
there are exactly 6 routes to the bottom right corner.

How many such routes are there through a 20×20 grid?
*/

/*
This is a recursive solution that will work for small n.
*/

function count(x, y, n) {
  if (x == n && y == n) {
     return 0;
  }
  let ctr = 0
  if (x < n) {
    ctr += count(x+1, y, n)
    ctr++
  } 

  if (y < n) {
     ctr += count(x, y+1, n);
     ctr++
  }

  return ctr
}

let ctr = count(0,0,3) + 2
console.log(ctr);
