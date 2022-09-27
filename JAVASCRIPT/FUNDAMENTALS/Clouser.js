// function x(){
//     var a=7;
//     function y(){
//         console.log(a)//7
//     }
//     y();
// }
// x();
//it has lecical scope
//first it finds in local memory
//then ith goes to its lexical parent
//this what clouser

// Local
    // this: Window
// Closure (x)
    // a: 7



//clouser basically a function bind together with its lexical environment
//function y is bind to with its varaible of x ,var a=7




//we can assign function to variable
// function x(){
//     var a=function y(){
//         console.log(a)//7
//     }
//     y();
// }
// x();



//we can pass function as parameter
// function x(){
//     var a=7;
   
//     y();
// }
// x( function y(){
//     console.log(a)//7
// });



//we can return the function
// function x(){
//     var a=7;
//     function y(){
//         console.log(a)//7
//     }
//     return y;
// }
// x();

//once we invoke the function x(),ther is return y
//that return y is returned to x();

//let assign to theat function call to variable z
// function x(){
//     var a=7;
//     function y(){
//         console.log(a)
//     }
//     return y;
// }
// var z=x();
// console.log(z);
// //op-
// ƒ y(){
//     console.log(a)
// }

//once function returned outside,inside x will deleted
//once it come out of the block we can access anywhere
//function along with that lexical scope is returned




//instead of writing return y //write return function
// function x(){
//     var a=7;
//     return  function y(){
//         console.log(a)
//     }
    
// }
// var z=x();
// console.log(z);





//replace
// function x(){
//     var a=7;
//     function y(){
//         console.log(a)
//     }
//     a=100;
//     return y;
// }
// var z=x();
// console.log(z);//100
// z();

//output- ƒ y(){
//     console.log(a)
// }

// 100
//exwecution of z will be 100
//when function y returns , a=100
//reference to a is executed
//when z invoke it point ro refernce
//100 will be still in the memory when a=7 will be gone
//a==7 will be gone becouse after the executuon whole execution context deleted
//a==7 replaces the a=100


// function z(){
//     var b=900;
//     function x(){
//         var a=7;
//         function y(){
//             console.log(a,b)
//             //here trying to access parent scope also 
//             //and its paren parent scope also
//         }
//         y();
//     }
//     x();
// }
// z();

// Local
//  this: Window
// Closure (x)
//  a: 7
// Closure (z)
//  b: 900

//clouser function along with its scope-a,b
//when we return the function y , a,b willbe excebble outside
//that would not have been garbage collected


//main point - clouser which pointing to reference






//clouser with settimeout

// function x(){
//     var i=1;
//     setTimeout(function(){ //this function forms a clousers
//         //it takes reference to i
//         console.log(i);
//     },3000);
//     console.log("namsthe")
// }
// x();
//first it will print namsthe
//then after 3s it will print 1
//javascript waits for none


//what settime out do is it takes the callback function and
//and it attaches 3000ms and stores into some place
//it not wait
//then will print namasthe
//when 3s done it will print settimeout ...





// function x()
// {

//     for(var i=1;i<=5;i++)//i=6//it will iterate here only
//     {
//         setTimeout(function(){
//             console.log(i);//i=6
//         },i*1000)
//     }
//     console.log("namasthe javascript");
// }
// x();

//we guessed that output will be print as after 1s 1,
//after 2s 2,after 3s 3,after 4s 4, after 5s 5 like that
//but actual output is it will call 6 5 times
//it is working this way becouse of the clouser
//clouser is like function along with its lexical environment
//it can access those variable of its lexical scope

//what will happen is when the settimeout takes that function
//and stores it somewhere and attaches the timer
//so that  function remebers the reference to i not the value of i
//these function (settimeout), which points to sames reference to i
//that is all the copies of this function(settimeout), it references to same memory space


//when namasthe javascript printed , control coming into for loop
//for loop will be continously executed 1, 2,3 4,5 ,6 .
//finally 6 will be allocate to the memory
//then control come intp the loop, calls the function
//by that time var i =6, that is why it prints 6 every time
//6 will run evrytime-refering to same memory space





//use let
// function x()
// {

//     for(let i=1;i<=5;i++)//when we debug we can get
//     //when i=1, it will come into the loop it will execute
//     //then i increment
//     //when i=2, ..so on
//     {
//         setTimeout(function(){
//             console.log(i);
//         },i*2000)
//     }
//     console.log("namasthe javascript");
// }
// x();
//when we use let , let will allocate memory to different memory space
//output will be
//namasthe javascript
//1
//2
//3
//4
//5
//let -is used to give new copy of i





//if we want to fix it with var,we can form a clouser

// function x()//debugg and see
// {

//     for(var i=1;i<=5;i++)
//     {
//         function close(i){
//             setTimeout(function(){
//                 console.log(i);
//             },i*1000)
//         }
//         close(i);
//         }
        
//     console.log("namasthe javascript");
// }
// x();

//create one function close
//write settime out function inside in it
//we want new copy of i each and evry time 
//call the close function with i
//pass i as an parameeter
//it works, after 1s 1 print , 2,3,4..
//namasthe javascript
//1
//2
//3
//4
//5
//new copy of i 
//problrm was that it is refering to same memory space
//use clousr ,use close function -create new copy of i
//every time close function is called, it reference to new copy of i




























