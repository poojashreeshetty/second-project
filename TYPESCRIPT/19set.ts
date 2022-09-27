//set it wont take duplicate element




// let mySet=new Set();
// mySet.add("hello");
// mySet.add(2);
// mySet.add(2);
// console.log(mySet.size);//2
//bcoz set can hold only unique value
//duplicate value it is going to ignore




// let mySet=new Set();
// let ob1={};
// let ob2={};
// mySet.add("hello");
// mySet.add(1);
// mySet.add(ob1);
// mySet.add(ob2);
// console.log(mySet.size);//4
//bcoz objects are not converted into strings two objects will be unique




// let newSEt=new Set([1,2,3,4,5,6,6,6]);
// console.log(newSEt.size)//6 so the first 4 values are unique
// //and saved into new set but the last 2 are duplocate values and ignored


// //we can chain it
// let chainSet =new Set().add("hello").add("world");
// console.log(chainSet.size);//2
// //chech whether values are present or not use has method
// console.log(newSEt.has(1));//true
// console.log(newSEt.delete(1));//returns true
