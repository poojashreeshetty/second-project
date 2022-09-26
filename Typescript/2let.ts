//let declaration not hoisted and block scope
//let cannot be redeclared let within the same scope,
//we can declare it in different scope




// 1.function greetPerson(name){
//     if(name==="pooja"){
//         let greet= "hello pooja"
//     }
//     else{
//         let  greet="hello there"
//     }
//     console.log(greet);
// }
// greetPerson("pooja"); //gives error , bcoz it is block scope




// 2.function greetPerson(name){
//     let greet;
//     if(name==="pooja"){
//          greet= "hello pooja"
//     }
//     else{
//           greet="hello there"
//     }
//     console.log(greet);//hello pooja
// }
// greetPerson("pooja");




// var a=1;
// var b=2;
// if(a===1)
// {
//     var a=10;
//     let b=20;
//     console.log(a);//10
//     console.log(b);//20
// }
// console.log(a);//10
// console.log(b);//2




//var c=1;
//var c=2;//posible




//let d=1; //not possible
//let d=2;


