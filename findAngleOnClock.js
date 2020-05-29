// Create a function or method that when given a time (a string in HH:MM format) give this 
// smallest angle created between the hour and minute hands. 


// At four o’clock the minute hand is on the 12 and the hour hand is on the 4.  
// The angle formed is 4/12 of the total number of degrees in a circle, 360.
// 4/12 * 360 = 120 degrees


// 360 degrees total 60 minutes total = 6 degrees per minute

// The minute hand on the clock will point at 15 minutes, allowing us to calculate it's 
// position on the circle.

// (15 min)(6) = 90

// 360 total 12 hours total = 30 degrees per hour

// We can calculate where the hour hand will be at 8:00.

// (8 hr)(30) = 240

// However, the hour hand will actually be between the 8 and the 9, since we are looking
// at 8:15 rather than an absolute hour mark. 15 minutes is equal to one-fourth of an hour. 
// Use the same equation to find the additional position of the hour hand.

// 240 + (1/4 hr)(30)

// 240 + 7.5

// 247.5

// We are looking for the angle between the two hands of the clock. The will be equal to
// the difference between the two angle measures.

// 247.5 − 90 = 157.5 

const returnAngle = (str) => {
    let hour = Number(str.split(":")[0])
    let minute = Number(str.split(":")[1])
    
    if (minute === 0){
      return (hour/12 * 360)
    } else {
      let minuteHandAngle = minute * 6
      let hourAngle = hour * 30 
      let percentOfHour = (minute/60) * 30
      let actualHourHand = hourAngle + percentOfHour
      let finalAngle = actualHourHand - minuteHandAngle
      return finalAngle
    }
}
  
console.log(returnAngle("12:34"))
  // returnAngle("05:00")
  // returnAngle("08:15")
  // returnAngle("03:10")
  // returnAngle("04:00")
  // returnAngle("02:00")
  