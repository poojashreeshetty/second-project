// 1.Let’s try 5 array operations.

//Create an array styles with items “Jazz” and “Blues”.
//Append “Rock-n-Roll” to the end.
//Replace the value in the middle by “Classics”. Your code for finding the middle value should work for any arrays with odd length.
//Strip off the first value of the array and show it.
//Prepend Rap and Reggae to the array.
// The array in the process:
// Jazz, Blues
// Jazz, Blues, Rock-n-Roll
// Jazz, Classics, Rock-n-Roll
// Classics, Rock-n-Roll
// Rap, Reggae, Classics, Rock-n-Roll

//only for odd,but we can add property for both odd and even
// let arr=["jazz","blues"];
// arr.push("Rock-n-Roll");
// alert(arr);//jazz blues rock-n-roll
// arr[((arr.length+1)/2)-1]="classics"; 
// alert(arr);
// arr.shift("jazz");
// alert(arr);
// arr.unshift("rap","reggae");
// alert(arr);


//both od and even
// let arr=["jazz","blues"];
// arr.push("Rock-n-Roll");
// alert(arr);
// arr[Math.floor(arr.length-1)/2]="classics";
// alert(arr);




//2.What is the result? Why?
// let arr = ["a", "b"];
// arr.push(function() {
//   alert( this );
// });
// arr[2](); // ?

//The call arr[2]() is syntactically the good old obj[method](), in the role of obj we have arr, and in the role of method we have 2.
//So we have a call of the function arr[2] as an object method. Naturally, it receives this referencing the object arr and outputs the array:
// let arr = ["a", "b"];
// arr.push(function() {
//   alert( this );
// })
// arr[2](); // a,b,function(){...}
// The array has 3 values: initially it had two, plus the function.




//3.Write the function sumInput() that:
//Asks the user for values using prompt and stores the values in the array.
//Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
//Calculates and returns the sum of array items.
//P.S. A zero 0 is a valid number, please don’t stop the input on zero.
// function sumInput() {
// let numbers = [];
//   while (true) {
//   let value = prompt("A number please?", 0);
//   // should we cancel?
//   if (value === "" || value === null || !isFinite(value)) break;
//   numbers.push(+value);
// }
//   let sum = 0;
//   for (let number of numbers) {
//    sum += number;
//     }
//     return sum;
//   }
// alert( sumInput() );




    
