//* in global this=window.
//let is little more strict than var.
//const is strict than let.
//type error says that 
//syntax eror do not initialize, missing syntax , if there is no duplicate declaration
//reference error- when javascript engine try to find out a specific variable but we canot access.
//when to use - const has higher priority, whwnever we want to put some value which is not changed later, when we dont want to assign anything to the same variable 
//so always put our declaration and initialization on top.
//let const block scope 
//var is a function scope
//each block scope have lixical scope.


////1.for let const allocated in different memoery space
// let a=10;
// console.log(a)// a is 10.
// var b=100;
//1.before execution javascript is allocate memory to a :undefined in a different memmory space in case of let and const.tehy are not on the global space.
//2.and var : undefined it is in the global spacee.
//3.when we execute line by line in the first linr a:10 , undefined will be replaced. still in a separate memory space , prints a:10 next line
//4.b:100.


// //2.
// console.log(a);//undefined.memory is allocated but it is not yet initialized.
// console.log(c);//reference error:cannot access  b before initialization.b is not defined.not stord in a window object, it is stored in a separate zone
// console.log(b);//reference error:cannot access  b before initialization.b is not defined.
// let b=100;
// var a=10;
// const c=20;



//3.let redeclaration is not allowed,const redeclaration is not allowed. var redeclaration is allowed.
// 1.let a=10;
// let a=100;
// console.log(a);//syntax error a has already been declared.

// 2.const a=10;
// const a=20;
// console.log(a);//syntax error a has already been declared.

// 3.var a=10;
// var a=20;
// console.log(a);//output 20.


// 4.let a=10;
// var a=20;
// const a=90;
// console.log(a)//syntax error


//4.const is very much strict than let.in let we can declare and anywhere we can initialise, but in const we cant,const should be initialize in the same line where we declared.

// 1.let a;
// const b=1000;
// a=90;

// 2.const a;
// const a=100;
// console.log(a);//syntax error - missing initializer in const declaration.


//5.we canot assign any value later in case of const ,reassign is not allowed in const, let -allowed.
// let a=20;
// a=90;
// console.log(a)
// const b=90;
// b=900;
// console.log(b)//type error   b is a type of const.




//5.blocks - defined by curly braces, used to combine multiple javascript program into one grp.combine multiple statement



//6.let and const is block scope , var is function scope.
//block scope - what all variables and functions that we can acces inside the block,let and const are block scope coz they stored in a different memory space.
// 1.{
//     var a=10;
//     let b=20;
//     const c=30;
// }
// inspect- b and c are in block.canot access outside the block , var we can bcoz it is in global scope.

// 2.{
//  var a=10;
//  let b=20;
//  const c=30;
//  console.log(a);
//  console.log(b);
//  console.log(c);
// }
// console.log(a);
// console.log(b);//eference error : b is not defined.
// console.log(c);//same

// 3.var a=100;
// {
//     var a=1000;
//     let b=200;
//     const c=300; 
//     console.log(a);//1000 stored in same memory space . it will replace.
//     console.log(b);//200
//     console.log(c);//300
// }

//4. var a=100;
// let b=2000;
// const c=3000;
// {
//     var a=1000;
//     let b=200;
//     const c=300; 
//     console.log(a);//1000 stored in same memory space . it will replace.,shadowed.
//     console.log(b);//200
//     console.log(c);//300
// }
// console.log(a);//1000
// console.log(b);//2000 it in the script. 
// console.log(c);//3000 it is in script.
//Block
// b: 200
// c: 300
// Script
// b: 2000
// c: 3000
// Window
// Global
// a: 1000

// let x = 10;
// Here x is 10
//{
//    let x = 2;
//    Here x is 2
//}
//Here x is 10 

// 5.let a=20;
// {
//     let a=20;//this is possible
// }

// 6. let a=70;
// {
//     var a=70; // syntax error : a has already been declared.
// }

// 7.let a=70
// function x(){
//     var a=70; // var is a function scope
// }

// 8.var a=20;
// {
//     let a=200;
//     console.log(a);//output 200
// }

//9.each block scope have lecical scope
// const a=10;
// {
//     const b=20;
//     {
//         const c = 30;
//         console.log(c);//30
//     }
// }
//console.log(a)//10
// Block
// c: 30
// Block
// b: 20
// Script
// a: 10




//let and const are hoisted but they are in temporal deadzone

let a=10;//script a:undefined
console.log(a);
var b=100;

//what is temporal deadzone
//temporal deadzone is the time , since when the let variable was hoisted
// and till it initialize the value 
//the time betwween that is temporal deadzone
//variable hoisted in separate space,but cant access,but it not initialized




     


    














