/*
Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, 
there are exactly 6 routes to the bottom right corner.

How many such routes are there through a 20×20 grid?
*/

/*
Solution:

For 2x2, there are 4C2 combinations.
RRDD
RDRD
RDDR
DRRD
DRDR
DDRR

For nxn grid, there are 2nCn combinations!

*/

var ctr = 0;
function count(x, y, n) {
  if (x == n && y == n) {
     ctr++;
     return;
  }
  if (x < n) count(x+1, y, n);
  if (y < n) count(x, y+1, n);
}

count(0,0,3)
console.log(ctr);
