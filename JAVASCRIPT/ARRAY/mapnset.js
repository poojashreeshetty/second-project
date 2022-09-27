// Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.
// Methods and properties are:
//     new Map() – creates the map.
//     map.set(key, value) – stores the value by the key.
//     map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
//     map.has(key) – returns true if the key exists, false otherwise.
//     map.delete(key) – removes the value by the key.
//     map.clear() – removes everything from the map.
//     map.size – returns the current element count.

// let map = new Map();
// map.set('1', 'str1');   // a string key
// map.set(1, 'num1');     // a numeric key
// map.set(true, 'bool1'); // a boolean key
// // remember the regular Object? it would convert keys to string
// // Map keeps the type, so these two are different:
// alert( map.get(1)   ); // 'num1'
// alert( map.get('1') ); // 'str1'
// alert( map.size ); // 3


//Map can also use objects as keys.
// let john = { name: "John" };
// // for every user, let's store their visits count
// let visitsCountMap = new Map();
// // john is the key for the map
// visitsCountMap.set(john, 123);
// alert( visitsCountMap.get(john) ); // 123


//set
//A Set is a special type collection – “set of values” (without keys), where each value may occur only once.
// let set = new Set();

// let john = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };

// // visits, some users come multiple times
// set.add(john);
// set.add(pete);
// set.add(mary);
// set.add(john);
// set.add(mary);

// // set keeps only unique values
// alert( set.size ); // 3

// for (let user of set) {
//   alert(user.name); // John (then Pete and Mary)
// }
