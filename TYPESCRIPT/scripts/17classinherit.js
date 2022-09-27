//class inheritence
//extend inherit from the parent class
//super keyword used to invoke the constructor of the parent class
//and also super keyword used to get access to the method that are define in the parent class
//class inheritence is possible with extends keyword
//extend keyword is used to create a new class that inherit from a parent class
//1.if the derived class has not having its own constructor when we
//cretae a new instance of employee the constructor method pf class
//person which is a parent class is invoked
// class Person {
//     constructor() {
//         console.log("person constructor")
//     }
// }
// class Employee extends Person {
// }
// let e = new Employee();//person constructor
//2.use parameter
//eventhough the employee class doesnot have a paameter
//it is going to invoke the constructor of the parent class
//pooja is going to replace name in parent class
// class Person {
//     constructor(name) {
//         console.log(name + “ person constructor”)//pooja person constructor
//     }
// }
// class Employee extends Person {
// }
// let e = new Employee(“pooja”);
//3.if we have constructor within the child class
//use super keyword
//the parent class constructor needs to be called before
//the subclass constructor so the
//super keyowrd is going to invoke constructor of the parent class
// class Person {
//     constructor(name) {
//         console.log(name + “ person constructor”)
//     }
// }
// class Employee extends Person {
//     constructor(name) {
//         super(name);
//         console.log(name + “ employee constructor”)
//     }
// }
// let e = new Employee(“pooja”);
//pooja person constructor
// pooja employee constructor
//4.crete method
//inheriting the parent class
// class Person {
//     constructor(name) {
//         console.log(name + “ person constructor”)
//     }
//     getId() {
//         return 10;
//     }
// }
// class Employee extends Person {
//     constructor(name) {
//         super(name);
//         console.log(name + “ employee constructor”)
//     }
// }
// let e = new Employee(“pooja”);
// console.log(e.getId());
// pooja person constructor
//  pooja employee constructor
//  10
//5.use getid method in child class(derived class)
//when the derived class has the method -it will execute
//if it is not present it is going to call from parent method
// class Person {
//     constructor(name) {
//         console.log(name + “ person constructor”)
//     }
//     getId() {
//         return 10;
//     }
// }
// class Employee extends Person {
//     constructor(name) {
//         super(name);
//         console.log(name + “ employee constructor”)
//     }
//     getId() {
//         return 50;
//     }
// }
// let e = new Employee(“pooja”);
// console.log(e.getId());
// pooja person constructor
// pooja employee constructor
// 50
//6.how to access method from parent
// class Person {
//     constructor(name) {
//         console.log(name + “ person constructor”)
//     }
//     getId() {
//         return 10;
//     }
// }
// class Employee extends Person {
//     constructor(name) {
//         super(name);
//         console.log(name + “ employee constructor”)
//     }
//     getId() {
//         return super.getId();
//     }
// }
// let e = new Employee(“pooja”);
// console.log(e.getId());
// pooja person constructor
// pooja employee constructor
// 10
//# sourceMappingURL=17classinherit.js.map