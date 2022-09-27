//switch statement
//The switch has one or more case blocks and an optional default.

// 1.let a=2+2;
// switch(a){
//     case 3 : 
//                alert("too small");
//                break;
//     case 4: 
//                alert("small");
//                break;
//     case 5: 
//                alert("large");
//                break;
//     default :  alert("hii");
// }

//2.Both switch and case allow arbitrary expressions.
// let a = "1";
// let b = 0;
// switch (+a) { // "1" converts to 1
//   case b + 1: //result is 1
//     alert("this runs, because +a is 1, exactly equals b+1");
//     break;

//   default:
//     alert("this doesn't run");
// }


//3.grouping of case
//if we want the same code to run for case 3 and case 5:
// let a = 3;
// switch (a) {
//   case 4:
//     alert('Right!');
//     break;
//   case 3: // (*) grouped two cases
//   case 5:
//     alert('Wrong!');
//     alert("Why don't you take a math class?");
//     break;
//   default:
//     alert('The result is strange. Really.');
// }


//4.type matches
// let arg = prompt("Enter a value?");
// switch (arg) {
//   case '0':
//   case '1':
//     alert( 'One or zero' );
//     break;

//   case '2':
//     alert( 'Two' );
//     break;

//   case 3:
//     alert( 'Never executes!' );
//     break;
//   default:
//     alert( 'An unknown value' );
// }

//     For 0, 1, the first alert runs.
//     For 2 the second alert runs.
//     But for 3, the result of the prompt is a string "3", which is not strictly equal === to the number 3. So we’ve got a dead code in case 3! The default variant will execute.

