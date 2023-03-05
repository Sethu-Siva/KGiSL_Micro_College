class Person {
    constructor(fname, lname, age, eyecolor) {
        this.firstName = fname;
        this.LastName = lname;
        this.age = age;
        this.eyecolor = eyecolor;
    }
    name() {
        return (this.firstName + " " + this.LastName);
    }
}

Person.prototype.nationality = "English";

console.log(typeof(Person));
var p = new Person("Sethu","Siva",23,"Brown");
console.log(p.name() + " " + p.age + " " + p.eyecolor + " " + p.nationality);