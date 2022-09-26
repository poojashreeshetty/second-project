//1.The basic syntax is:
// class MyClass {
//     // class methods
//     constructor() { ... }
//     method1() { ... }
//     method2() { ... }
//     method3() { ... }
//     ...
//   }
//Then use new MyClass() to create a new object with all the listed methods.
//The constructor() method is called automatically by new, so we can initialize the object there.




class User {
    constructor(name) {
      this.name = name;
    }
    sayHi() {
      alert(this.name);
    }
  }
  // Usage:
  let user = new User("John");
  user.sayHi();
//When new User("John") is called:
//A new object is created.
//The constructor runs with the given argument and assigns it to this.name.
//Then we can call object methods, such as user.sayHi().

//user
// User {name: 'John'}
// name: "John"
// [[Prototype]]: Object
// constructor: class User
// sayHi: ƒ sayHi()
// [[Prototype]]: Object
//Stores class methods, such as sayHi, in User.prototype.
//After new User object is created, when we call its method, it’s taken from the prototype, just as described in the chapter F.prototype. 
//So the object has access to class methods.








