//1.async keyword
//async function always return a promise
//if the function returns a value, the promise will be resolved
//if the function throws an exception , thje promise will b e rejected

//when we put async keyword inside the function, t
//this function behaves defferently
//it is going to return a promise
//no need to return promise explicitly

//async function on one level is just a shortcut syntax
//to make a function that returns a promise





//1.syntax

// function greet(){
//     return "hello";
// }
// greet(); //here we get string back


// async function hello(){
//     return 'hey guy!';
// }
// hello();//return promise and resolved with the value of hello

//promise {<fulfilled>}:"hey guys!"}
//whatever the value that i am returning is, the promise 
//that will be returned from hello will be  resolved


//2. async function hello()
// {
//         return 'hey guy!';
// }
// hello().then((val)=> {
// console.log("promise resolved",val);
// })
//output - promise resolved hey guy!




// 3.async function add(x,y){
//     return x+y;
// }
// add(1,2).then((val)=>{
//     console.log("promise resolved with the value",val)//promise resolved with the value 3
// })

// Promise {<fulfilled>: 3}
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: 3




//4.return a promise that is not resolved
//if the function throws an exception , the promise will be rejected

//for normal function
//  function add(x,y){
//     if(typeof x !== 'number' || typeof y !== 'number')
//     {
//         throw 'x and y must be numbers!';
//     }
//         return x+y;
//     }
//     add(1,2)//3
//     add('poo','lll')//"x and y must be numbers!"



//  async function add(x,y){
//         if(typeof x !== 'number' || typeof y !== 'number')
//         {
//             throw 'x and y must be numbers!';
//         }
//             return x+y;
//         }

//add('rr',4);//return promise

//output - Promise {<rejected>: 'x and y must be numbers!'}
//[[Prototype]]: Promise
//[[PromiseState]]: "rejected"
//[[PromiseResult]]: "x and y must be numbers!"
// Uncaught (in promise) x and y must be numbers!   


   

//add then catch
//add is async function which returns promise

// async function add(x,y){
//     if(typeof x !== 'number' || typeof y !== 'number')
//     {
//         throw 'x and y must be numbers!';
//     }
//         return x+y;
//     }
// add('e','r').then((val)=>{
// console.log("promise resolved",val);
// }).catch((err)=>
// {
// console.log("prmise rejected with", err);
// })
//output - prmise rejected with x and y must be numbers!





//5.add manual promise creation
//  function add(x,y){
//     return new Promise((resolve,reject)=>{
//         if(typeof x !== 'number' || typeof y !== 'number')
//         {
//             reject('x and y must be numbers!');
//         }
           
        
//         resolve(x+y);
//     })
// }
   
// add(1,2).then((val)=>{ //op-promise resolved 3
// console.log("promise resolved",val);
// }).catch((err)=>
// {
// console.log("prmise rejected with", err);
// })






