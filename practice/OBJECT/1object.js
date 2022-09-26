//Primitive data types: The predefined data types provided by JavaScript language are known as primitive data types. Primitive data types are also known as in-built data types.
//objects are used to store keyed collections of various data and more complex entities.



//1. get property values of the object:
// let user={
//     name:"jhon",
//     age:12
// };
// alert( user.name ); // John
// alert( user.age ); // 30




//2.add a boolean ,value can be any type:
// let user={
//     name:"pooja",
//     age:22
// }
// user.family="shetty";
// user.booliean=true;
// console.log(user);




//3.To remove a property, we can use the delete operator:
// let user={
//     name:"pooja",
//     age:22
// }
// delete user.name; // name deleted




//4.use multiword property names, but then they must be quoted:
// let user={
//     "first name":"pooja",
//     "last name":"shetty"
// }
// console.log(user);




//5.For multiword properties, use square brackets
// let bird={
// "first name":"pooja",
// "last name":"shetty"
// }
// bird["first name"] = "poo"; //set
// bird["last name"]; //get
// delete bird["first name"]; //delete
// console.log(bird);



//6
// let user = {
//     name: “pooja”,
//     ‘last name’: “shetty”,
//     ‘nick name’: “poo”,
//     age: 12,
//     caste: “shetty”
// }
// user.property = “lll”;//set
// user[“nic name”] = “kkk”; //set
// user[“caste”]; //get



//7variable key is used to access the property.only square bracket
//The dot notation cannot be used in a similar way

// 1.let user = {
//     name: "John",
//     age: 30
// };
// let keyy = prompt("What do you want to know about the user?");
// // access by variable
// alert(user[keyy]); // John (if enter “name”)


//8.for in loop
//let’s output all properties of user:
//Also, we could use another variable name here instead of key. For instance, “for (let prop in obj)” is also widely used.

//1. Let user = {
//     name: “pooja”,
//     ‘last name’: “shetty”,
//     ‘nick name’: “poo”,
//     age: 12,
//     caste: “shetty”
// }
// for (let key in user) {
//     alert(key); // name,lastname,nickname,age,caste
//     
// }

// 2.let user = {
//     name: "pooja",
//     "last name": "shetty",
//     // ‘nick name’: “poo”,
//     // age: 12,
//     // caste: “shetty”
// }
// for (let key in user) {
//     alert(key + ':' + user[key] ); // name:pooja , lastname:shetty
// }


// 3.let user = {
//     name: "pooja",
//     "last name": "shetty",
//     // ‘nick name’: “poo”,
//     // age: 12,
//     // caste: “shetty”
// }
// for (let key in user) {
//     alert(user[key])
// }



//9.ordered like an object
// 1.let codes = {
//     “49”: “Germany”,
//     “41”: “Switzerland”,
//     “44”: “Great Britain”,
//     // ..,
//     “1”: “USA”
//   };
//   for (let code in codes) {
//     alert(code); // 1, 41, 44, 49
//   }

//So, to fix the issue with the phone codes, we can “cheat” by making the codes non-integer. Adding a plus “+” sign before each code is enough.
// 2.let codes = {
//     “+49”: “Germany”,
//     “+41”: “Switzerland”,
//     “+44”: “Great Britain”,
//     // ..,
//     “+1”: “USA”
//   };
//   for (let code in codes) {
//     alert( +code ); // 49, 41, 44, 1
//   }


//10.check emptiness
//Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
//  let obj={
// "last name":"pooja"
//  };
 
// function isEmpty(objj){
// for(let key in obj){
//     return false;
// }
// return true;
// }
// //isEmpty();
// console.log(isEmpty(obj));


//11.Write the code to sum all salaries and store in the variable sum. Should be 390
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   };
//  let sum=0;

//   for(let key in salaries)
//   {
//     sum += salaries[key];
//     } 
 
//   console.log(sum);


//Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.
//   function multiplyNumeric(obj) {
//     for (let key in obj) {
//       if (typeof obj[key] == 'number') {
//         obj[key] *= 2;
//       }
//     }
//   }







