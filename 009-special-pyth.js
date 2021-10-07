/*
Special Pythagorean triplet

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/

/*
Solution:
---------

a^2 + b^2 = (1000-(a+b))^2
          = 10^6 + (a+b)^2 - 2000(a+b)
          = 10^6 + a2 + b2 + 2ab -2000a -2000 b

=> 2000a + 2000b - 2ab = 10^6
=> 2b(1000 - a) + 2000a =10^6
=> b = (10^6 - 2000a)/2(1000-a)
*/

for (let a = 1; a < 1000; a++) {
  let b = (1000000 - 2000*a) / (2.0*(1000-a))
  if (Math.abs(Math.round(b) - b) < 0.0001) {
    if (b > 0) {
      console.log(a,b)
      let c = 1000-(a+b)
      console.log(a * b * c)
    }
  }
}