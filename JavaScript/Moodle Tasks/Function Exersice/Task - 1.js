function findLargest(num1, num2, num3){
    if (num1 > num2 && num1 > num3) {
      console.log(num1 + " is the largest.");
    } else if (num2 > num1 && num2 > num3) {
      console.log(num2 + " is the largest.");
    } else {
      console.log(num3 + " is the largest.");
    }
  }
  
  findLargest(5, 10, 3); 
  findLargest(4, 8, 12);
  findLargest(7, 7, 7);