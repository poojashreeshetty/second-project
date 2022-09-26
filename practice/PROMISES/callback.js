
//everything will be executed through callstack
//what is callback function in javascript
//Many functions are provided by JavaScript host environments that allow you to schedule asynchronous actions. 
//In other words, actions that we initiate now, but they finish later.
//For instance, one such function is the setTimeout function.

//*functions are first class citizens in the javascript
//*that is we can take a function and pass into another function.known as callback functions
//*this call back function gives access to the whole asynchronous world  in a synchrounous single threaded langauage
//*bcoz it will only do one thing at a time in a specific order
//*but due to call back we can do asynch inside javascript

//settimeout basically takes a callback and execute thet sometimeelse.and it just getsout of the callstack



//1.when we call the func1 pass another function in it.
//func2 is the callback function that it gives responsibility to another function.
// function fun1(){
// }
// fun1(function func2(){
// });


//2.let us used in asynchronous task
//settimeout takes a callback functions
//that means it passed on to settimeout and it is called sometimes else in our program
//after certain amount of time which we passed as a second argument which is the no.of miliseconds
//javascript function  synchronous , it will start at the beginning
//first is registering a settimeout, settimeout will take the callback function and
// it will store it in separate space and it will attach a timer to it
//as we know javascript function wont wait for settimeout to finish 
//but callback functions gives the  power asynchrnity.
//it doesnot wait over here 5000ms to expire
//and whatever needs to be done after 5000s , we are passing that feature as a callback function  to the settimeout
//it will be later executed
//next line is function defination func1
//and it will try to call the function. func1
//it will pass the func2 call back function into b argument
//it executes x
//it will do console.log of func1,print func1,func2
//and till this point of time 5000ms wont have expired
//afret some time 5000ms expired 
//once it expired this callback function is executed
//so the output will be x,y, timer  will executed after 5000ms.


// setTimeout(function (){
//     console.log("timer")
// },5000);

// function func1(func2){
// console.log("x")
// func2();
// }


// func1(function func2(){
//     console.log("y")
// });


//output - x y  after 5000ms timer display
//so settimeout is a synchronous operations , without call back it is not possible ,  that
//we gave the callback to settimeout so that it execute sometime else.

//inside source

//function func1 will be executed ----// func1(function func2(){
                                       //     console.log("func2")
                                        // });

//so that func1 output,func2 output and wait 
//put debugger on console timer n func2 console
//if we run the program func1 and func2 will be in callstack at the begining 
//callstack inbetween is empty, 
//if we stop and run againmn ,in the call stack shows settimeout(sync) 
//after 5000ms it came into call stack automatically and executes timer

//after 5000ms second callback function popup inside the callstack


//3.whatever is executed inside the page is executed through the callstack only
//if any operation blocks the callstack called blocking the main thread
//we should always use async operation which takes time





//callback function
//due to callback we can do async things inside the callback

// function x(y){

// }
// x(function y(){})//y is called back sometimes later in our code




//create a button
//attach clickhandler to this button
//pass callback function
//when javascript will execute this line 
//it will pickup this button clickme 
//and it will add a eventlistner 
//that event is click 
//if that event occurs , it will call that callback  function 
//that callbackfunction which will be stored somewhere else
//and that will be automatically come into the call stack

// document.getElementById("clickme").addEventListener("click",function xyz(){
//     console.log("button clicked")

// });

//if we put debugger inside the console.log , in exicution time
//it will come into the callstack
//later vanished





//clouser with callback
// let count=0;
// document.getElementById("clickme").addEventListener("click",function xyz(){
//     console.log("button clicked",++count);

// });

// button clicked 1
// button clicked 2
// button clicked 3
// button clicked 4
// button clicked 5
// button clicked 6
// button clicked 7
// button clicked 8
//so on




//but using a global variable is not a good solution
//we shoud secure let 
//so we have to use clouser-used for data hiding

//put all inside the function
//this callback function over here is forming a clouser with its outer scope
//if we call this function , attachevent 
//this callback function forms a clouser with count 
//


// function attachEvent(){
//     let count=0;
//     document.getElementById("clickme").addEventListener("click",function xyz(){
//         console.log("button clicked",++count);
    
//     });
    
// }
// attachEvent();


//output
// Local
     // Return value: undefined
    // this: button#clickme
// Closure (attachEvent)
    // count: 5//here it increases the count
// Global





