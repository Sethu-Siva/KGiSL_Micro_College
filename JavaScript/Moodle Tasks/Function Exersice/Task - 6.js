function findGrade(marks) {
    if (marks >= 90 && marks <= 100) {
      console.log("S grade");
    } else if (marks >= 80 && marks < 90) {
      console.log("A grade");
    } else if (marks >= 70 && marks < 80) {
      console.log("B grade");
    } else if (marks >= 60 && marks < 70) {
      console.log("C grade");
    } else if (marks >= 50 && marks < 60) {
      console.log("D grade");
    } else if (marks >= 40 && marks < 50) {
      console.log("E grade");
    } else if (marks >= 0 && marks < 40) {
      console.log("Student has failed");
    } else {
      console.log("Invalid marks");
    }
  }
  
  findGrade(95);
  findGrade(85);
  findGrade(75);
  findGrade(65);
  findGrade(55);
  findGrade(45);
  findGrade(35);
  findGrade(105);