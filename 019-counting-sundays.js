const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

function isLeap(n) {
  if (n % 100 == 0) {
    // century
    return (n % 400 == 0)
  } else 
    return (n % 4 == 0)
}

function countSundays(startDay) {
  let count = 0
  for (let year = 1900; year <= 2000; year++ ) {
    let leap = isLeap(year)

    for (let i=0; i<12; i++) {
      let nDays = days[i]
      if (leap && i==1) nDays++
  
      if (startDay == 0 && year != 1900) count++
      startDay = (startDay + nDays) % 7
    }
  }
  return count
}

console.log(countSundays(1))