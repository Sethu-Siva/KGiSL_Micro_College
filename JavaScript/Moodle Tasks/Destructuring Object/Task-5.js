const student = {
    // data property
    firstName: 'Monica',
};

Object.defineProperty(student, "getFname", {
    get : function () {
        return this.firstName;
    }
});

Object.defineProperty(student, "setFname", {
    set : function (value) {
        this.firstName = value;
    }
});

console.log(student.getFname);
student.setFname = "Sethu";
console.log(student.getFname);