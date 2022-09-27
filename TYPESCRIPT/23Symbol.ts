//purpose of sysmbol is to generate unique id
//we never get access to that id


//create new sysmbol
// let s=Symbol();
// console.log(typeof s);//symbol




//we can also pass optional symbol discription while creating a symbol
// let s=Symbol("first symbol");
// console.log(typeof s);//symbol
// console.log(s.toString());//Symbol(first symbol)
//when we call the tostring method on the symbol we get the discription





//create more symbol
// let s2=Symbol();//this symbol has a different id
// let s3=Symbol();//this symbol has a different id
// console.log(s2===s3);//false
//symbol alwyas cretes an unique id






//add discription
// let s2=Symbol("test");
// let s3=Symbol("test");
// console.log(s2===s3);//false
//it doesnt matter what the description 
//symbol is always going to create a unique id





//new type of iteraring object is forof loop
//but forof loop cant be for all type of objects
//symbol.iterator--used to know if the object has an iterator method
// let str="hello";
// let arr=[1,2,3];
// let num=5;
// let obj={name:"pooja"};
// console.log("for string- " + typeof str[Symbol.iterator]);
//if type of string of symbol.iterator returns a method or a function 
//then this object can be used for forof loop
// console.log("for array -" + typeof arr[Symbol.iterator]);
// console.log("for number -" + typeof num[Symbol.iterator]);
// console.log("for object -" + typeof obj[Symbol.iterator]);
// for string- function-we can use string in a forofloop
//  for array -function//bcoz type of method is function-we can use
//  for number -undefined//we cant
//  for object -undefined//wecant





