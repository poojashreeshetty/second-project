//LOOPS
//So, the simplest way to clear the array is: arr.length = 0;.

//One of the oldest ways to cycle array items is the for loop over indexes:
// let fruits=["a","b","c","d","e","f","g","h"];
// for(let i=0;i<fruits.length;i++)
// {
//     alert(fruits[i]);
// }




//1.But for arrays there is another form of loop, for..of:
// let fruits=["a","b","c","d","e","f","g","h"];
// // iterates over array elements
// for (let fruit of fruits) {
//   alert( fruit );
// }



//2.word about length
//The length property automatically updates when we modify the array. To be precise, it is actually not the count of values in the array,
//but the greatest numeric index plus one.

// 1.let fruits = [];
// fruits[123] = "Apple";
// alert(fruits[0]);//undefined
// alert( fruits.length ); // 124



//2.If we increase it manually, nothing interesting happens. 
//But if we decrease it, the array is truncated. The process is irreversible, here’s the example:
//So, the simplest way to clear the array is: arr.length = 0;.
// let arr = [1, 2, 3, 4, 5];
// arr.length = 2; // truncate to 2 elements
// alert( arr ); // [1, 2]
// arr.length = 5; // return length back //we cant increase
// alert( arr[3] ); // undefined: the values do not return



//3.NEW ARRAY()
//initially we can create a length.
// let arr = new Array(2); // will it create an array of [2] ?
// alert( arr[0] ); // undefined! no elements.
// alert( arr.length ); // length 2
// arr[0]="pooja";
// alert(arr[0]);//pooja
// alert(arr);//pooja
// To avoid such surprises, we usually use square brackets, unless we really know what we’re doing.




//4.MULTIDIMENSIONAL ARRAY
//Arrays can have items that are also arrays. We can use it for multidimensional arrays,
// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ];
// alert( matrix[1][1] ); // 5, the central element



