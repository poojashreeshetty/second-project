//we need an ordered collection, 
//It is not convenient to use an object here, because it provides no methods to manage the order of elements.
//There exists a special data structure named Array, to store ordered collections.
//Some programming languages allow to use negative indexes for the same purpose, like fruits[-1].
//Although, in JavaScript it won’t work. The result will be undefined, because the index in square brackets is treated literally.




//1.ARRAY DECLARATION
// 1.let fruits=["fruits","apple","hhhh"];
// alert(fruits[0]);//fruits
// alert(fruits[1]);//apple
// alert(fruits[3]);//undefined


//2.We can replace an element:
// let fruits=["fruits","apple","ffff"];
// fruits[1]="pooja";
// fruits[3] = "llll";
// console.log(fruits);
// output : Array(4)0: "fruits"1: "pooja"2: "ffff"3: "llll"length: 4[[Prototype]]: Array(0)




//2.The total count of the elements in the array is its length:
// let fruits = ["Apple", "Orange", "Plum"];
// alert( fruits.length ); // 3



//3.An array can store elements of any type.
//const fruits=["pooja", "a",2,function(){alert("hello");},{name:"pooja",class:12}];
// alert(fruits[0]);
// alert(fruits[1]);
// alert(fruits[2]);
// fruits[3]();
// alert(fruits[4].name);
// alert(fruits[4].class);
//alert(fruits);



//4.We can explicitly calculate the last element index and then access it: fruits[fruits.length - 1].
//let fruits=["pooja","karthik","ashik","shrii","pajj"];
// alert(fruits[fruits.length-1]); 
//or we can use there’s a shorter syntax: fruits.at(-1):
//alert(fruits.at(-1)); // pajj
//In other words, arr.at(i):
//is exactly the same as arr[i], if i >= 0.
//for negative values of i, it steps back from the end of the array.


















