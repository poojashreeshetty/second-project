// 1.*on click "click" it claas the function
// *this function is callback function
// *when javascript execute the line, it  will pick up this button click me,and it will add a eventlistner
// eventlistner - that event will click ,if that event is occurs it will call that function.
//  and automatically comes inside our callstack 
// * put debuggr - console.log (inside the click event )
// *when we click the button  it automatically come inside the callstack 


// document.getElementById("btn").addEventListener("click" , function xyz(){
//     console.log("pooja shetty")
//    })



//2.how many times button is clicked that many times we need to print


 //        let count=0;
//    document.getElementById("btn").addEventListener("click" , function xyz(){
//     console.log("button clicked",++count) -- using global variable not a good practice ,count can not be modified
//       by any other thing.
//    })


//3.use closure

function add(){
    let count=0;
   document.getElementById("btn").addEventListener("click" , function xyz(){
    console.log("button clicked",++count)})

}
add() ; //outpur button clicked 1, button clicked 2, button clicked 3..
//call back function forms a closure with its outer scope (count)(it basically remeber wr this count is present)
//put debugger inside console log line 
//Local
    // this: button#btn
// Closure (add)
   // count: 0
// Window
     // Global
    // add: ƒ add()
//xyz is on call stack
//call back function has acces to the closure (which is present in the scope)
//go to the element tag - in that eventlistners - click - inside click hndler
//inside handler function f xyz()
//hndler xyz has a scope inside scope -clouser
//if we go inside the scope it has global envirnment
//closure its parent environment that is global
//eveything inside the function scope
//whwnever callback function is executed scope is attach to it
