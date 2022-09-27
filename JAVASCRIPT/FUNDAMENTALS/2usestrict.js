 // should be at the top of the scripts. otherwise strictmode may not be enabled.





//  1. Undeclared variable is not allowed.
// myVariable=9;
// console.log(myVariable); 
/// output- 9 

// 'use strict'
// myVariable=9;
// console.log(myVariable);
// // output - variable not defined





//  2. Undeclared objects are not allowed.
// 'use strict';
// person = {name: 'Carla', age: 25};  output : person is not defined

// myVariable = 9;
// console.log(myVariable); // 9





// 3.Duplicating a parameter name is not allowed.
// "use strict";
// function hello(p1, p1) { console.log('hello')}; // throws an error Duplicate parameter name not allowed in this context
// hello();


//4. function hello() {
//     // applicable only for this function
//     'use strict';
//     string = 'hello'; // throws an error
// }
// hello();





