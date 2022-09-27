//1.forEach
//The arr.forEach method allows to run a function for every element of the array.

//1.The syntax:
//arr.forEach(function(item, index, array) {
  // ... do something with item
//});


//2.this shows each element of the array:
// for each element call alert
//["Bilbo", "Gandalf", "Nazgul"].forEach(alert);

// ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
//     alert(`${item} is at index ${index} in ${array}`);
//   });




//2.filter
//The find method looks for a single (first) element that makes the function return true.
// let results = arr.filter(function(item, index, array) {
//   // if true item is pushed to results and the iteration continues
//   // returns empty array if nothing found
// });


// let users = [
//   {id: 1, name: "John"},
//   {id: 2, name: "Pete"},
//   {id: 3, name: "Mary"}
// ];
// // returns array of the first two users
// let someUsers = users.filter(item => item.id < 3);
// alert(someUsers.length); // 2
// alert(someUsers);//returns whole object wr id is less than 3



//3.map
//It calls the function for each element of the array and returns the array of results.
// let result = arr.map(function(item, index, array) {
//   // returns the new value instead of item
// });


//1. transform each element into its length:
// let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
// alert(lengths); // 5,7,6










