//destructuring array
//unpack values from arrays or properties from objects into distinct variables
//taking indivdual property values and assigning them to variables


// 1. let employee=["poojsa",'shetty','karthi'];
//  let[fname,lname,gender]=employee;//fname:"poojsa",lname:"shetty",gender:"karthi"
// console.log(fname);//pooja
// console.log(lname);//shetty
// console.log(gender);//karthi





//2. let employee=["poojsa",'shetty','karthi'];
// let[,,gender]=employee;//fname:"poojsa",lname:"shetty",gender:"karthi"
// //console.log(fname);//pooja
// //console.log(lname);//shetty
// console.log(gender);//karthi




//3.also destructered using single variable
// let employee=["pooja","karthi","ashik"];
// let [fname,...elemnts]=employee;
// console.log(fname);//pooja
// console.log(elemnts)//['karthi', 'ashik']




//4also use destructuring with default parameter
// let employee=["pooja","karthi"];
// let [fname,lname,gender="male"]=employee;

// console.log(fname);//pooja
// console.log(lname);//karthi
// console.log(gender)//male




//destructuring objects
// let employee={
//     fname:"pooja",
//     lname:"shetty",
//     gender:"male"
// };
// //use curly instead of square

// let{fname,lname,gender}=employee;
// console.log(fname);//pooja
// console.log(lname);//shetty
// console.log(gender)//male





//if property name is huge
//create alias
// let employee={
//     fname:"pooja",
//     lname:"shetty",
//     gender:"male"
// };


// let{fname:f,lname:l,gender:g}=employee;
// console.log(f);//pooja
// console.log(l);//shetty
// console.log(g)//male






