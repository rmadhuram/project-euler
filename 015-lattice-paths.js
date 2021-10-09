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

let num = BigInt(1)
let denom = BigInt(1)
for (let i=40; i>20; i--) num *= BigInt(i);
for (let i=20; i>0; i--) denom *= BigInt(i);
console.log(num/denom)