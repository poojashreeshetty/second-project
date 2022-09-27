//1.ARRAY METHODS
//Methods that work with the end of the array:pop,push.
//Methods that work with the ebeggining of the array:shift,unshift.
//Methods push/pop run fast, while shift/unshift are slow.




//1.POP
//pop takes an element from the end.
//Extracts the last element of the array and returns it:
// let fruits=["a","b","c","d","e","f","g","h"];
// alert(fruits.pop());//h
// alert(fruits);//abcdefg
//Both fruits.pop() and fruits.at(-1) return the last element of the array,
// but fruits.pop() also modifies the array by removing it.
//fruits.at(-1) - doesnot modify 
//The pop method does not need to move anything, 
//because other elements keep their indexes. That’s why it’s blazingly fast.




//2.PUSH
//push adds an element to the end.
//Methods push and unshift can add multiple elements at once:
//The call fruits.push(...) is equal to fruits[fruits.length] = ....
// let fruits=["a","b","c","d","e","f","g","h"];
// alert(fruits.push("hh"));//return length
//fruits.push({name:"pooja"})//push objects
// alert(fruits.length);//9
// alert(fruits);//a,b,c,d,e,f,g,h,hh
//The similar thing with the push method.




//3.SHIFT
//Extracts the first element of the array and returns it:
// let fruits = ["Apple", "Orange", "Pear"];
// alert( fruits.shift() ); // remove Apple and alert it //apple
// alert( fruits ); // Orange, Pear
//t’s not enough to take and remove the element with the index 0. Other elements need to be renumbered as well.
//The shift operation must do 3 things:
// Remove the element with the index 0.
// Move all elements to the left, renumber them from the index 1 to 0, from 2 to 1 and so on.
// Update the length property.
//The more elements in the array, the more time to move them, more in-memory operations.





//4.UNSHIFT
//Add the element to the beginning of the array:
//Methods push and unshift can add multiple elements at once:
//let fruits = ["Orange", "Pear"];
// alert(fruits.unshift('Apple')); //3 rerturn lenth
// alert( fruits ); // Apple, Orange, Pear
//The similar thing happens with unshift: to add an element to the beginning of the array, we need first to move existing elements to the right, increasing their indexes.




//5.copied by reference
// let fruits = ["Banana"]
// let arr = fruits; // copy by reference (two variables reference the same array)
// alert( arr === fruits ); // true
// arr.push("Pear"); // modify the array by reference
// alert( fruits ); // Banana, Pear - 2 items now



//6.SPLICE
//The syntax is: arr.splice(start[, deleteCount, elem1, ..., elemN])
// 1.let arr = ["I", "study", "JavaScript"];
// arr.splice(1, 1); // from index 1 remove 1 element
// alert( arr ); // ["I", "JavaScript"]



//2.let arr = ["I", "study", "JavaScript", "right", "now"];
// remove 3 first elements and replace them with another
//arr.splice(0, 3, "Let's", "dance");
//alert( arr ) // now ["Let's", "dance", "right", "now"]



//3. splice returns the array of removed elements:
//let arr = ["I", "study", "JavaScript", "right", "now"];
// remove 2 first elements
//let removed = arr.splice(0, 2);
//alert( removed ); // "I", "study" <-- array of removed elements



//4.The splice method is also able to insert the elements without any removals.
// For that we need to set deleteCount to 0:
//let arr = ["I", "study", "JavaScript"];
// from index 2
// delete 0
// then insert "complex" and "language"
//arr.splice(2, 0, "complex", "language");
//alert( arr ); // "I", "study", "complex", "language", "JavaScript"




//5.negative index
//let arr = [1, 2, 5];
// from index -1 (one step from the end)
// delete 0 elements,
// then insert 3 and 4
//arr.splice(-1, 0, 3, 4);
//alert( arr ); // 1,2,3,4,5




//7.SLICE
//arr.slice([start], [end]);
//It returns a new array copying to it all items from index start to end (not including end).
// Both start and end can be negative, in that case position from array end is assumed.

// let arr = ["t", "e", "s", "t","pp","cc","ccc","ggg"];
// alert(arr.slice(2,7)); //s,t,pp,cc,ccc
// alert(arr.slice(-4,-2));//pp,cc 




//8.CONCAT
//The method arr.concat creates a new array 
//that includes values from other arrays and additional items.
// The syntax is:
// arr.concat(arg1, arg2...)
// let arr = [1, 2];
// // create an array from: arr and [3,4]
// alert( arr.concat([3, 4]) ); // 1,2,3,4
// alert(arr);
// // create an array from: arr and [3,4] and [5,6]
// alert( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6
// alert(arr);
// // create an array from: arr and [3,4], then add values 5 and 6
// alert( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6
// alert(arr);



//9.Normally, it only copies elements from arrays. 
//Other objects, even if they look like arrays, are added as a whole:
// let arr = [1, 2];
// let arrayLike = {
//   0: "something",
//   length: 1
// };
// alert( arr.concat(arrayLike) ); // 1,2,[object Object]


//But if an array-like object has a special Symbol.isConcatSpreadable property, 
//then it’s treated as an array by concat: its elements are added instead:
// let arr = [1, 2];
// let arrayLike = {
//   0: "something",
//   1: "else",
//   [Symbol.isConcatSpreadable]: true, //it will print before elemnts
//   length: 2
// };
// alert( arr.concat(arrayLike) ); // 1,2,something,else 



//10.searching in an array
//If we want to check if item exists in the array, 
//and don’t need the exact index, then arr.includes is preferred.
//1.indexOf , includesOf,lastindexOf
//let arr = [1, 0, false,1];
// alert( arr.indexOf(0) ); // 1
//alert(arr.lastIndexOf(1));//3
// alert( arr.indexOf(false) ); // 2
// alert( arr.indexOf(null) ); // -1

// alert( arr.includes(1) ); // true
// alert(arr.includes(8));//false



//2.find 
//Imagine we have an array of objects. How do we find an object with the specific condition?
//Here the arr.find(fn) method comes in handy.
//The syntax is:
//let result = arr.find(function(item, index, array) {
    // if true is returned, item is returned and iteration is stopped
    // for falsy scenario returns undefined
//});
// item is the element.
// index is its index.
// array is the array itself.



// 1.let arr=[ {id :1,name:"pooja" },
//           {id:2,name:"shetty"},
//           {id:3,name:"shettyy"},
//           {id:4,name:"shettyyy"},
//           {id:5,name:"shettyyyy"}
//         ]
// let user= arr.find(item => item.id==5);
// alert(user.name);//pooja




//2.findIndex
// let arr=[ {id :1,name:"pooja" },
//           {id:2,name:"shetty"},
//           {id:3,name:"shettyy"},
//           {id:4,name:"shettyyy"},
//           {id:5,name:"shettyyyy"}
//         ]
// let user= arr.findIndex(item => item.id==5);//we can use id for reference
// let hi=arr.findIndex(index=>index.name=="shetty")//also name
// alert(user);//4
// alert(hi);//1


//3.findLastIndex
//The arr.findLastIndex method is like findIndex, 
//but searches from right to left, similar to lastIndexOf.
// let users = [
//     {id: 1, name: "John"},
//     {id: 2, name: "Pete"},
//     {id: 3, name: "Mary"},
//     {id: 4, name: "John"}
//   ];
//   // Find the index of the first John
//   alert(users.findIndex(user => user.name == 'John')); // 0
//   // Find the index of the last John
//   alert(users.findLastIndex(user => user.name == 'John')); // 3




//4.sort 
//The call to arr.sort() sorts the array in place, changing its element order.
//It also returns the sorted array, but the returned value is usually ignored, as arr itself is modified.
// let arr = [ 1, 2, 15 ];
// // the method reorders the content of arr
// arr.sort();
// alert( arr );  // 1, 15, 2
//Literally, all elements are converted to strings for comparisons. 
//For strings, lexicographic ordering is applied and indeed "2" > "15".



//5.reverse
// let arr = [1, 2, 3, 4, 5];
// arr.reverse();
// alert( arr ); // 5,4,3,2,1


//6.split
// let names = 'Bilbo, Gandalf, Nazgul';
// let arr = names.split(', ');
// for (let name of arr) {
//   alert( `A message to ${name}.` ); // A message to Bilbo  (and other names)
// } //a message to be gandalf //a message to be nazgul

//The split method has an optional second numeric argument – a limit on the array length. If it is provided, 
//then the extra elements are ignored. In practice it is rarely used though:
// let arr = 'Bilbo, Gandalf, Nazgul, Saruman'.split(', ', 2);
// alert(arr); // Bilbo, Gandalf


//split into letters
// let str = "test";
// alert( str.split('') ); // t,e,s,t


//join
//let arr = ['Bilbo', 'Gandalf', 'Nazgul'];
//let str = arr.join(';'); // glue the array into a string using ;
//alert( str ); // Bilbo;Gandalf;Nazgul


//7.reduce/reduceright
// let value = arr.reduce(function(accumulator, item, index, array) {
//   }, [initial]);
// accumulator – is the result of the previous function call, equals initial the first time (if initial is provided).
// item – is the current array item.
// index – is its position.
// array – is the array.

// let arr = [1, 2, 3, 4, 5];
// let result = arr.reduce((sum, current) => sum + current, 0);
// alert(result); // 15 //here initial value is 0
//On the first run, sum is the initial value (the last argument of reduce), equals 0, and current is the first array element, equals 1. So the function result is 1.
//On the second run, sum = 1, we add the second array element (2) to it and return.
//On the 3rd run, sum = 3 and we add one more element to it, and so on…

//1+2+3+4+5 = 15


//8.Array.isArray
//Arrays do not form a separate language type. They are based on objects.
//So typeof does not help to distinguish a plain object from an array:
//alert(typeof {}); // object
//alert(typeof []); // object (same)


//alert(Array.isArray({})); // false
//alert(Array.isArray([])); // true


































