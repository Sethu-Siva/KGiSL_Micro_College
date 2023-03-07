function evalNumbers(num1, num2, operation) {
    if (operation === "add") {
      console.log(num1 + num2);
    } else if (operation === "subtract") {
      console.log(num1 - num2);
    } else if (operation === "multiply") {
      console.log(num1 * num2);
    } else if (operation === "divide") {
      console.log(num1 / num2);
    } else if (operation === "modulus") {
      console.log(num1 % num2);
    } else {
      console.log("Invalid operation");
    }
  }
  
  evalNumbers(4, 5, "add");
  evalNumbers(10, 3, "divide");
  evalNumbers(7, 2, "modulus");
  evalNumbers(2, 3, "power");