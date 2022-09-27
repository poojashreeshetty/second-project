//object that is executing the current function
//this keyword belongs to the object it belongs to
//it has different value depending on where it is used.
//alone this refers to the global object
//in regular this refer to global object
//in method this refer to own object
//in function in strict mode , this is undefined

//1.if the function is part of an object we call that function as an method and this references to object itself

// 1.const video={
//     name:"a",
//     second:"b",
//     third:"c",
//     play(){
//         console.log(this);
//     }
// }
// video.play();// play is method of video object so it references the video object.

//2
// const video={
//     name:"a",
//     second:"b",
//     third:"c",
//     play(){
//         console.log(this);
//     }
// };
// video.stop=function(){console.log(this) }; //stop is the method in the video object
// video.stop();

// 3.const video={
//         name:"a",
//         second:"b",
//         third:"c",
//         play(){
//             console.log(this.name); // a
//             console.log(this);
//         }
//     }
//     video.play();// play is method of video object so it references the video object.
    

// 4.let laptop2 = {
//   first:"a",
//   second:"b",
//   third:"c",
//   greet: function()
//   {
//     console.log(this.first)
//   }
// }  

// let laptop1 = {
//   first:"aa",
//   second:"bb",
//   third:"cc",
//   greet: function()
//   {
//     console.log(this.first)
//   }
// }

// laptop1.greet();
// laptop2.greet();

// let laptop2 = {
//   first:88,
//   second:"b",
//   third:"c",
//   greet: function()
//   {
//     console.log(this.first)
//   }
// }  

// let laptop1 = {
//   first:99,
//   second:"bb",
//   third:"cc",
//   greet: function()
//   {
//     console.log(this.first)
//   }
// }

// function getfastcomp(e,j){
// if(laptop1.first> laptop2.first)
// {
//   console.log(laptop1)
// }
// else{
//   console.log(laptop2)
// }
// } 

// getfastcomp(laptop1,laptop2) // passing the object //laptop1 object will execute


//2.if the function is regular function it is not part of an object references to the global object,window .
//by default it will point to window object
// 1. function play(){
//     console.log(this); //this is pointing to window
//  }
//  play();


//2.in normal function in strict mode , this is undefined
// "use strict"
// function play()
// {
//     console.log(this); // this is undefined
// }
// play();


//3.constructor.
//if we make it as current function use constructor
//now this is pointing to play object
//instead of window object we get play object
//new operator creates new empty object {}

// 1. function play(title){
//     this.title=title;     
//     console.log(this);
//  }

//  const c = new play("a");


//4.methods
//A function that is a property of an object is called its method.
//And, in the real world, a user can act: select something from the shopping cart, login, logout etc.
//Actions are represented in JavaScript by functions in properties.

// 1.let user = {
//     name: "John",
//     age: 30
//   };
//   user.sayHi = function() {
//     alert("Hello!");
//   };
//   user.sayHi(); // Hello!


//2.we can use predeclare
//let user = {
  // ...
//};
// first, declare
// function sayHi() {
//   alert("Hello!");
// }
// // then add as a method
// user.sayHi = sayHi;
// user.sayHi(); // Hello!


//3.method shorthand
//we can omit "function" and just write sayHi().
// let user={
//     // say:function(){

//     // } // instead of this
//     say(){
//         alert("hello");
//     }
// };


// 4.let user = {
//     name: "John",
//     age: 30,
  
//     sayHi() {
//       console.log(this.name); // "user" instead of "this", or this instead of use 
//     }
//   };
//   user.sayHi();









