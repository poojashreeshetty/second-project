//when ever we create anything in javascript ,
//they get access to some of the hidden properties and methods
//everything in a javascript is nothing but an object


//1.let arr=["pooja", "shetty"];
//when we put arr. this arr can access to all these methods and properties
//not only for array we can 




// 2.let obj={
//     name:"pooja",
//     age:89,
//     caste:"shetty",
//     get:function(){
//         console.log(`${this.name} from  ${ this.caste}`);
//     }
// }
//console.log(obj);
//obj.get();
//obj.age//89
//obj. //when click this also access to many methods,like tostring..etc




// 3.function fun(){
// }
// fun();
//fun.  we can access many methods in functions also




//4.let arr=["pooja","shetty","prapthi"];

// let object={
//     name:"pooja",
//     age:89,
//     caste:"shetty",
//     get:function(){
//         console.log(`${this.name} from  ${ this.caste}`);
//     }
// }

//arr.__proto__
//[constructor: ƒ, at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, …]
//Array.prototype
//[constructor: ƒ, at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, …]

//arr.__proto__ same as Array.prototype
//arr.__proto__.proto_ same as Object.prototype

//object.__proto__ same as Object.prototype
//object.__proto.__.__proto__ //null

//fun.__proto__ same as function.prototype
//fun.__.proto__.__proto__  same as object.prototype //returns object
    


// 5.let object={
//     name:"pooja",
//     age:89,
//     caste:"shetty",
//     get:function(){
//         console.log(`${this.name} from  ${ this.caste}`);
//     }
// }

// let object2 = {
//     name:"anil",
//     age:90
// }

// //prototype inheritance
// object2.__proto__=object;
//output
//object2.__proto__  enter
//{name: 'pooja', age: 89, caste: 'shetty', get: ƒ}[[Prototype]]: Object
//we get the properties of object in object2.__proto__
//object2.age --90 //first it checks the main object
//object2.caste -- shetty //becouse it is sitting inside proto
//we can acces for get also
//object2.get
     //ƒ (){
       //    console.log(`${this.name} from  ${ this.caste}`);
     //}
//object2.get() //finds at main object
     //anil from  shetty
//object.get()
     // pooja from  shetty