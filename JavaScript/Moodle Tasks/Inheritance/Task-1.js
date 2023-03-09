class Person
{
    constructor(name, age, gender)
    {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    
    introduce()
    {
        console.log(`Hi, my name is ${this.name}, and I am ${this.age} years old.`);
    }
}
  
class Teacher extends Person
{
    constructor(name, age, gender, subject)
    {
        super(name, age, gender);
        this.subject = subject;
    }
    
    teach()
    {
        console.log(`I teach ${this.subject}.`);
    }
}
  
const Sethu = new Teacher("Sethuraj", 23, "male", "Java");
Sethu.introduce();
Sethu.teach(); 