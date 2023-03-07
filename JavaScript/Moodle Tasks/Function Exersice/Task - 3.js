function checkInRange(num, start, end) {
    if (num >= start && num <= end) {
      console.log("Between the range");
    } else {
      console.log("Outside the range");
    }
  }
  
  checkInRange(15, 11, 30);
  checkInRange(20, 34, 51);