function findDaysInMonth(month, year) {
    if (month < 1 || month > 12) {
      console.log("Invalid month");
    } else if (month === 2) {
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log("The Month has 29 days.");
      } else {
        console.log("The Month has 28 days.");
      }
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
      console.log("The Month has 30 days.");
    } else {
      console.log("The Month has 31 days.");
    }
  }
  
  findDaysInMonth(2, 2012);
  findDaysInMonth(2, 2014);
  findDaysInMonth(4, 2022);
  findDaysInMonth(12, 2023);
  findDaysInMonth(13, 2023);
  