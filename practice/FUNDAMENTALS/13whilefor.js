//1,while loop
//condition is truthy, the code from the loop body is executed.
//when the number times is not known use while

// 1,let i = 0;
// while (i < 3) { // shows 0, then 1, then 2
//   alert( i );
//   i++;
// }

// 2,let i = 3;
// while (i) { // when i becomes 0, the condition becomes falsy, and the loop stops
//   alert( i );
//   i--;
// }


//2,do while
//The loop will first execute the body, then check the condition, and, while it’s truthy, execute it again and again.
//the statement inside the loop body will be executed at least once even if the condition is never true

// 1,let i=0;
// do{
//     console.log(i);
//     i++;
// }while(i<3); //0,1,2 


//3,for loop
//when the number of times is known 

//1, for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
//     alert(i);
//   }

//2,for (let i = 0; i < 3; i++) {
//   alert(i); // 0, 1, 2
// }
// alert(i); // error, no such variable

// 3,let i = 0;
// for (i = 0; i < 3; i++) { // use an existing variable
//   alert(i); // 0, 1, 2
// }
// alert(i); // 3, visible, because declared outside of the loop

//4,let i = 0; // we have i already declared and assigned
// for (; i < 3; i++) { // no need for "begin"
//     alert( i ); // 0, 1, 2
//   }


//4.break statemnet
//a loop exits when its condition becomes falsy.

// 1,for(let i=0;i<5;i++)
// {
//     if(i==3)
//     {
//         break;
//     }
//     console.log(i);//0,1,2
// }

// 2,let sum = 0;
// while (true) {
//   let value = +prompt("Enter a number", '');
//   if (!value) break; // (*)
//   sum += value;
//}
// alert( 'Sum: ' + sum );


//5.continue
//It doesn’t stop the whole loop. Instead, it stops the current iteration and forces the loop to start a new one.

//1,//3. for(let i=0;i<=5;i++)
// {
//     if(i==3)
//     {
//         continue;
//     }
//     console.log(i); //0,1,2,4,5
// }

// 2.for (let i = 0; i < 10; i++) {
//  // if true, skip the remaining part of the body
//     if (i % 2 == 0) continue; //0%2=0
//     alert(i); // 1, then 3, 5, 7, 9
// }



