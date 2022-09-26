//in es2015 class body contain only methods and not properties
//three types of methods, first one is constructor, 



//1.contsrucor methosd is used for cfreating and initializing an object
//and for every class that can only be one constructor
// class Person{
//     constructor(name)
//     {
//         this.name=name;
//         console.log(`${this.name} constructor`);
//     }
// }
// let p =new Person("pooja");//pooja constructor





//2.static method
//which can be called without instantiating a class
// class Person{
//     constructor(name)
//     {
//         this.name=name;
//         console.log(`${this.name} constructor`);
//     }

//     static staticMethod(){
//         console.log("static method");
//     }
// }
// let p =new Person("pooja");//pooja constructor
// Person.staticMethod();//static method




//third type is prototype method
// class Person{
//     constructor(name)
//     {
//         this.name=name;
//         console.log(`${this.name} constructor`);
//     }

//     static staticMethod(){
//         console.log("static method");
//     }
//     greetPerson(){
// console.log(`helllo  ${this.name}`);
//     }
// }
// let p =new Person("pooja");//pooja constructor
// Person.staticMethod();//static method
// p.greetPerson();//hello pooja

//contrsuctor called during object ceatiobn
//static method called directly with help of class
//prototype method which can be called witrh each object

