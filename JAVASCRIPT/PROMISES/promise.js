//A callback used to initialize the promise. 
//This callback is passed two arguments: 
//a resolve callback used to resolve the promise with a value or the result of another promise, 
//and a reject callback used to reject the promise with a provided reason or error.




//The constructor syntax for a promise object is:
//The promise object returned by the new Promise constructor has these internal properties:
//state — initially “pending”, then changes to either “fulfilled” when resolve is called or “rejected” when reject is called.
//result — initially undefined, then changes to value when resolve(value) is called or error when reject(error) is called.

//let promise = new Promise(function(resolve, reject) {
// executor (the producing code, “singer”)
//  });




//pattern for writing async code
//it is javascript object representing the eventual completion or
//failure of an asynchronous operation
//promise is a returned object to which you attach callbacks, instead of passing callbacks into a function
//when we create a promise we pass in a function
//always reject,resolve parameters usually call
//if we call resolve the promise will be resolved
//if we call reject – rejected




//every promise has a then method so we could call dog dot then
//and this method will run if our promise is resolved
//if it is rejected this code did not run

//to make promise we call new promise
//and that function has two parameters resolve, or reject
//within this function we can resolve as a function to resolve the promise
//we call reject  as a function to reject the promise
//then moethod-when wver we pass into then will automatically run
//when a given promise is resolved
//catch -reject




//1,const dog = new Promise((resolve, reject) => {

// })

//dog enter
//dog
//Promise {<pending>}
//[[Prototype]]: Promise
//[[PromiseState]]: “pending”
//[[PromiseResult]]: undefined

////here //[[PromiseState]]: “pending” , it is is a promise but it is
//has not been resolved or rejected.




//2 const dog = new Promise((resolve, reject) => {
//     reject();

// })

//error-Uncaught (in promise) undefined
//dog – enter
//Promise {<rejected>: undefined}
//[[Prototype]]: Promise
//[[PromiseState]]: “rejected”
//[[PromiseResult]]: undefined




// 3,const dog = new Promise((resolve, reject) => {
//     resolve();

// })

//dog-enter
//Promise {<fulfilled>: undefined}
//[[Prototype]]: Promise
//[[PromiseState]]: “fulfilled”
//[[PromiseResult]]: undefined




// 4,const dog = new Promise((resolve, reject) => {
//     const rand = Math.random();
//     console.log(rand);//any random number
//     if (rand < 0.5) {
//         resolve();
//     }
//     else {
//         reject();
//     }

// });
// dog.then(() => {
//     console.log(“yeah we got a dog”) // if rand less than 0.5 – show this op
// })
// dog.catch(() => {
//     console.log(“rejected”)//rejected also it shows error -uncought
// })




//5,introduce some delay so it takes longer
//just use the settimeout to take time for rejection

// const dog = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const rand = Math.random();
//         console.log(rand);//any random number
//         if (rand < 0.5) {
//             resolve();
//         }
//         else {
//             reject();
//         }
//     }, 5000)


// });
// dog.then(() => {
//     console.log(“yeah we got a dog”) // if rand less than 0.5 – show this op
// })
// dog.catch(() => {
//     console.log(“rejected”)//rejected also it shows error -uncought
// })
// //takes 5s to resolve or reject




//6,using function
// const dog = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const rand = Math.random();
//             console.log(rand);//any random number
//             if (rand < 0.5) {
//                 resolve();
//             }
//             else {
//                 reject();
//             }
//         }, 5000)


//     });
// };

// dog().then(() => {
//     console.log(“yeah we got a dog”);
// })
// dog().catch(() => {
//     console.log(“rejected”);
// })


//or we can write like this
// dog()
//     .then(() => {
//         console.log(“yeah we got a dog”);
//     })
//     .catch(() => {
//         console.log(“rejected”);
//     })




//7,make fake equest function
// const request = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const rand = Math.random();

//             if (rand < 0.3) {
//                 reject();
//             }
//             else {
//                 resolve();
//             }
//         }, 4000)
//     })
// };

// dog()
//     .then(() => {
//         console.log(“resolve”);
//     }).catch(() => {
//         console.log(“rejected”);
//     });




//8we can pass information into the resolve and reject

// const request = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const rand = Math.random();

//             if (rand < 0.3) {
//                 reject({ status: 404 });
//             }
//             else {
//                 resolve({ status: 202 });
//             }
//         }, 4000)
//     })
// };



// request().then((rev) => {
//     console.log(rev.status);
//     console.log(“resolved”);
// }).catch((res) => {
//     console.log(res.status);
//     console.log(“request failed”);
// });

//output 202 resolved
//we have seen 202 or 404 not found
//pass object in a reject function,in catch pass parameter res
//we can pass more object





//for url
//when we call fake request we will pass in a URL -fakeReques(‘/users’)
//then we will use that URL to decide what to respond with
//start with variable,with array of object in resolve
//so whatever url is passed inside the function,we will
//use that parameter (url) to access information out of pages
//

//9,add second page -- /about

// const request = (url) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const rand = Math.random();

//             if (rand < 0.3) {
//                 reject({ status: 404 });
//             }
//             else {
//                 const pages = {
//                     ‘/users’: [
//                         { id: 1, username: ‘pooja’ },
//                         { id: 2, username: ‘shetty’ }],
//                     ‘/about’: ‘this is the about page’
//                 }
//                 const data = pages[url];//array
//                 resolve({ status: 202, data });
//             }
//         }, 4000)
//     })
// };

// request(‘/about’)

// request().then((res) => {
//     console.log(‘status code’, res.status);
//     console.log(‘data’, res.data);
//     console.log(“request worked”);
// }).catch((res) => {
//     console.log(res.status);
//     console.log(“request failed”);
// });





// 10.let p = new Promise((resolve,reject)=>{
//    let a=1+1;
//    if(a==2)
//    {
//  resolve("pass")
//    }else{
//       reject("failed")
//    }
//    console.log(a)
// })




//11. let promise = new Promise(function(resolve, reject) {
//     // the function is executed automatically when the promise is constructed

//     // after 1 second signal that the job is done with the result “done”
//     setTimeout(() => resolve(“done”), 1000);
//   });
// We can see two things by running the code above:

// The executor is called automatically and immediately (by new Promise).

// The executor receives two arguments: resolve and reject. These functions are pre-defined by the JavaScript engine, so we don’t need to create them. We should only call one of them when ready.

// After one second of “processing”, the executor calls resolve(“done”) to produce the result. This changes the state of the promise object:


// let promise = new Promise(function (resolve, reject) {
//     // after 1 second signal that the job is finished with an error
//     setTimeout(() => reject(new Error(“Whoops!”)), 1000);
// });







































