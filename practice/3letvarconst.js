//* in global this=window.
//let is little more strict than var.
//const is strict than let.


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
let a=20;
a=90;
console.log(a)
const b=90;
b=900;
console.log(b)














