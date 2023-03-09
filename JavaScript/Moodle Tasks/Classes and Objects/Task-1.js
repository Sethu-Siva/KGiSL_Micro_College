class Person
{
    constructor(name,age)
    {
        this.name = name;
        this.age = age;
    }

    discribe = () => {return (this.name + ", " + this.age + " years old.")}
}

var john = new Person("John",19);
console.log(john.discribe());

var sethu = new Person("Sethu",23);
console.log(sethu.discribe());