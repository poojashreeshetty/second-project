//map is an order list of key value pair
//and in maps both the key and the value can be of anytype
//but in objects where the type of the properties is always a string
// let myMap = new Map();
//to add a values use set method
//within paranthisis pacify key value pair
// myMap.set("first","pooja");
// myMap.set("age",30);//also have numeric value
// console.log(myMap.get("first"));//retrive use get method
//output - pooja
//we also cxrete obj using map
// let myMap = new Map();
// myMap.set("first","pooja");
// myMap.set("age",30);
// console.log(myMap.get("first"));
// let ob1={};
// let ob2={};
// myMap.set(ob1,10);
// myMap.set(ob2,20);
// console.log(myMap.get(ob1));
// console.log(myMap.size);
// console.log(myMap.has("first"));
//output
// pooja
// 10
// 4
// true
// myMap
// Map(4) {'first' => 'pooja', 'age' => 30, {…} => 10, {…} => 20}
// let myMap = new Map();
// myMap.set("first", "pooja");
// myMap.set("age", 30);
// console.log(myMap.get("first"));
// let ob1 = {};
// let ob2 = {};
// myMap.set(ob1, 10);
// myMap.set(ob2, 20);
// console.log(myMap.get(ob1));
// myMap.delete("first");
// console.log(myMap.size);
// console.log(myMap.has("first"));
// //output
// pooja
// 10
//  3
// false
//clear
// let myMap = new Map();
// myMap.set("first", "pooja");
// myMap.set("age", 30);
// console.log(myMap.get("first"));
// let ob1 = {};
// let ob2 = {};
// myMap.set(ob1, 10);
// myMap.set(ob2, 20);
// console.log(myMap.get(ob1));
// myMap.delete("first");
// myMap.clear();
// console.log(myMap.size);
// console.log(myMap.has("first"));
//output
// pooja
// 10
//  0
// false
//iterating over map
// let myMap = new Map([
//     ["fname", "chandler"],
//     ["lname", "bing"]
// ]);
// for (let key of myMap.keys()) {
//     console.log(key);
// }
//# sourceMappingURL=21map.js.map