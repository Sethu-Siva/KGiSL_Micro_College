let Students = {
    firstName : "Sethu",
    lastName : "Siva",
    marks : {
        tamil : 94,
        english : 77,
        maths : 71,
        science : 94,
        Social : 99
    }
};

console.log(Students.firstName);
console.log(Students.lastName);
console.log(Students.marks.tamil);
console.log(Students.marks.english);
console.log(Students.marks.maths);
console.log(Students.marks.science);
console.log(Students.marks.Social);

console.log(Students["firstName"]);
console.log(Students["lastName"]);
console.log(Students["marks"]["tamil"]);
console.log(Students["marks"]["english"]);
console.log(Students["marks"]["maths"]);
console.log(Students["marks"]["science"]);
console.log(Students["marks"]["Social"]);