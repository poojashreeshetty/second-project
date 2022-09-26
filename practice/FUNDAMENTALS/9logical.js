//1,.. or operator
//If any of its arguments are true, it returns true, otherwise it returns false.
//Evaluates operands from left to right.
//For each operand, converts it to boolean. If the result is true, stops and returns the original value of that operand.
//If all operands have been evaluated (i.e. all were false), returns the last operand.
// alert( 1 || 0 ); // 1 (1 is truthy)
// alert( null || 1 ); // 1 (1 is the first truthy value)
// alert( null || 0 || 1 ); // 1 (the first truthy value)
// alert( undefined || null || 0 ); // 0 (all falsy, returns the last value)

//1,Most of the time, OR || is used in an if statement to test if any of the given conditions is true.
//let hour = 9;
// if (hour < 10 || hour > 18) {
//     alert( 'The office is closed.' );
//   }

//2,
// let hour = prompt("enter hour");
// let isWeekend = true;
// if (hour < 10 || hour > 18 || isWeekend) {
//     alert('The office is closed.'); // it is the weekend
// }


//2, and operator
//it returns if both the operator is truthy.
//Evaluates operands from left to right.
//For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
//If all operands have been evaluated (i.e. all were truthy), returns the last operand.
//AND returns the first falsy value or the last value if none were found.
//1,alert( true && true );   // true
// alert( false && true );  // false
// alert( true && false );  // false
// alert( false && false ); // false

//2,let hour = 12;
// let minute = 30;
// if (hour == 12 && minute == 30) {
//   alert( 'The time is 12:30' );//works
// }

//3,if (1 && 0) { // evaluated as true && false
//   alert( "won't work, because the result is falsy" );
// }

//4,// if the first operand is truthy,
// AND returns the second operand:
// alert( 1 && 0 ); // 0
// alert( 1 && 5 ); // 5
// if the first operand is falsy,
// AND returns it. The second operand is ignored
// alert( null && 5 ); // null
// alert( 0 && "no matter what" ); // 0


//3,NOT operator (!)
//Converts the operand to boolean type: true/false.
//Returns the inverse value.

//1,alert( !true ); // false
//alert( !0 ); // true