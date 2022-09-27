// 1.differences of objects versus primitives is that 
//whereas primitive values: strings, numbers, booleans, etc – are always copied “as a whole value”.
// 1.let msg="hello";
// let phrase=msg;  //have two independent variables, each one storing the string "Hello!".

//objects are stored and copied “by reference”, 
//we have two variables, each storing a reference to the same object:
//2. let user={name:jhon};
// let admin=user; //there’s still one object, but now with two variables that reference it.

// 3.let user={ name:"pooja", "last name":"shetty"};
// let admin = user;
// admin["first name"] = "pooja shetty";


//2.comparision by reference.
//Two objects are equal only if they are the same object.
//For instance, here a and b reference the same object, thus they are equal:
//1. let a = {};
// let b = a; // copy the reference
// alert( a == b ); // true, both variables reference the same object
// alert( a === b ); // true

// And here two independent objects are not equal, even though they look alike (both are empty):
// let a = {};
// let b = {}; // two independent objects
// alert( a == b ); // false


//3.cloning,merging,and Object.assign
//1.create one object,next creat an empty object so it has 2 different reference,if key is equal,we cant change old object.
// let user = {
//     name: "John",
//     age: 30
//   };
//   let clone = {}; // the new empty object
//   // let's copy all user properties into it
//   for (let key in user) {
//     clone[key] = user[key];
//   }
//   // now clone is a fully independent object with the same content
//   clone.name = "Pete"; // changed the data in clone only
  //   alert( user.name ); // still John in the original object


//2.We can also use the method Object.assign.
//Object.assign(dest, src1[, src2, src3...])
//The first argument dest is a target object.
//Further arguments src1, ..., srcN (can be as many as needed) are source objects.
//It copies the properties of all source objects src1, ..., srcN into the target dest. In other words, properties of all arguments starting from the second are copied into the first object.
//The call returns dest.


//3.For instance, we can use it to merge several objects into one:
// let user = { name: "John" };
// let permissions1 = { canView: true };
// let permissions2 = { canEdit: true };
// copies all properties from permissions1 and permissions2 into user
// Object.assign(user, permissions1, permissions2);
// now user = { name: "John", canView: true, canEdit: true }

// let user = {
//     name: "John",
//     sizes: {
//       height: 182,
//       width: 50
//     }
//   };
// alert( user.sizes.height ); // 182
  


