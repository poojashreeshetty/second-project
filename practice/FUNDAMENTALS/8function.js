//1.different between function statements and function expression
//*hoisting
//if we call before creating the function -
//during the memory creation phase a is created amemory for the function a
//but in case of a function expression b is treated like variable it is assigned undefined initially
//1.function statement also known as function declaration
// a();//a called
// function a() {
//     console.log("a called");
// }

//2.function expression
//function acts like a value
// 1.b();//type error :b is not a function.
// var b = function () {
//     console.log("b called");
// }

//2.var b = function () {
//     console.log("b called");
// }
//b()//b called



// 3,function demo() {
//     a = 20;
// }
// demo()
// console.log(a); //output will be 20 bcoz hoisted - hoisting means it moves declaration at the top of the scope

// 4,function demoo(){
//     var b=20
// }
// demoo();
// console.log(b) //b is not defined

//5.function showMessage() {
// let message = "Hello, I'm JavaScript!"; // local variable
// alert( message );
// }
//   showMessage(); // Hello, I'm JavaScript!
//   alert( message ); // <-- Error! The variable is local to the function

//6.function can access outer variable
//A function can access an outer variable
// let userName = 'John';
// function showMessage() {
//   let message = 'Hello, ' + userName;
//   alert(message);
// }
// showMessage(); // Hello, John

//7.let userName = 'John';
// function showMessage() {
//   let userName = "Bob"; 
//   let message = 'Hello, ' + userName;
//   console.log(message);
// }
// console.log( userName ); 
// showMessage();
// console.log( userName ); 
 
//8. let userName = 'John';
// function showMessage() {
//    userName = "Bob"; // (1) changed the outer variable
//    let message = 'Hello, ' + userName;
//   console.log(message);
// }
// console.log( userName ); // John before the function call
// showMessage();
// console.log( userName ); // Bob, the value was modified by the function

//practice
// let username = ‘jhon’;
// function show() {
//     username = “bob”;//shadowing it will modify at the script
//     let msg = “hello” + username;
//     alert(msg);
// }
// alert(username);
// show();
// alert(username);

// let username = ‘jhon’;
// function show() {
//     var username = “bob”;//shadowing
//     let msg = “hello” + username;
//     alert(msg);
// }
// alert(username);
// show();
// alert(username);



//2.anonymous function
//1.anonymous function does not have their own identity
//anonymous function used in a place where functions are used as an values
//*var b = function () { //like this -- use it to some variable, just like any other value to a variable like that--var
//     console.log("b called");
// }

// *function() { //syntax error : function statement require a function name
// } //anonymous function


//3.named function expression
//instead of using anonymous use function with the name
// var b = function x() {
//     console.log("b called");
// }
// b();//b called
// x();//reference error :x is not defined


//4.difference between parameters and arguments
//function parameters - names listed in the functions defination
//function arguments-real value passed to the function

//1. var b = function x(a,b) {//parameters-a,b arguments-1,2
//     console.log(a+b);
// }
// b(1, 2);

// 2.function showMessage(from, text) { // parameters: from, text
//     alert(from + ': ' + text);
//   }
//   showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
//   showMessage('Ann', "What's up?"); // Ann: What's up? (**)


//5.first class functions-passing another function inside a function
//ability to use functions as value, and can be passed it as an argument, and can be returned from the function
//1.we can pass the function as an value
//var b = function x(a) {
//     console.log(a);
// }
// b(function () {    //apply function as an argument
// });               //otput ƒ () {} //return function

//2.for named function
// var b = function x(a) {
//     console.log(a);
// }
// function xyz() {
// }
// b(xyz);   //output ƒ xyz() {}

//3.we can return anonymous function from a function
// var b = function (a) {
//     return function () { };
// }
// console.log(b());//when we call the function the anonymous function returned from b .console log-print f(){}


//6 returning the value
//The directive return can be in any place of the function. When the execution reaches it, the function stops, and the value is returned to the calling code 
//A function can return a value. If it doesn’t, then its result is undefined.

// 1.function sum(a, b) {
//     return a + b;
//   }
//   let result = sum(1, 2);
//   alert( result ); // 3

// 2.function checkAge(age) {  //3
//     if (age >= 18) {
//       return true;
//     } else {
//       return confirm('Do you have permission from your parents?'); //ok-true
//     }
//   }
//   let age = prompt('How old are you?', 18); //1
//   if ( checkAge(age) ) {    //2
//     alert( 'Access granted' );
//   } else {
//     alert( 'Access denied' ); if bothy are false access denied.
//   }

//7, function showPrimes(n) { //1. 5
//     nextPrime: for (let i = 2; i < n; i++) { // 2. i=2<5 - true  //7.i=3 true //11 i=4;
//         for (let j = 2; j < i; j++) { //3. 2<2 false //4.again com to j for loop , j++ 3<2 true come into the loop //8.2<3 //12.2<4
//         if (i % j == 0) continue nextPrime;//5.true now j=3 3%2=1 false so again j=2 only .come out of the loop //9.2%3  false //13 4%2=0 true go to i loop 
//       }
//       console.log( i ); //6.print 2 , //10.print 3
//     }
//   }
//   showPrimes(5);


//8,arrow function
// function demo(a,b){
// console.log(a+b);
// }
// demo(6,4);

// let demo=(a,b)=>{
//   console.log(a+b);
// }
// demo(6,3)
// var demo=function(a,b){
// } 



 


