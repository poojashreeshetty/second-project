//await keyword

//we can only use the await keyword inside of functions declared with async
//await will pause the execution of the function, waiting for a promise to be resolved.
//while it waits for a promise to be resolved 
//we can run code after an asynchronous operation without having to nest things with callbacks



// 1.console.log("thgs is tut 43");
// async function harry(){
//     console.log("inside harry");
//     return "harry";
// }
// console.log("before calling harry");
// let a=harry();
// console.log("after calling harry");
// console.log(a);
// console.log("last line of this js");

// // thgs is tut 43
// //  before calling harry
// //  inside harry
// //  after calling harry
// //  Promise[[Prototype]]: Promise
// //[[PromiseState]]: "fulfilled"
// //[[PromiseResult]]: "harry"
// // last line of this js




async function harry(){
    console.log("inside harry");//3
    //4 await it will wait untill other statement gets executed.
    //so stops here and come to before calling harry console
   const response=await fetch("https://api.github.com/users")//9after completion of all functionality
    console.log("before response");//10 it will execute it
    const users= await response.json();//11 json covert
    console.log("users resolved")//12.print
    return users;//13 users return ///then by using async , promise will be resolved now//then go to a.then
    //return "harry";
   
}
console.log("before calling harry");//1
let a=harry();//2 call
console.log("after calling harry");//5
console.log(a);//6 a=harry()//it is promise//it will be in pending//till now promise didnt resolve
a.then(data => console.log(data))//7//so this is also not executed bcoz promise dint resolve yet
//14 if promise is resolved, data-console.log//all data will be displayed
console.log("last line of this js");//8 print//then control goes to await , after done with all functionality
