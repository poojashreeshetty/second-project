// Everithing in javascript happens inside an execution context
// execution context has two components 
// 1.Memory allocation context - this is the place where variables and functions stored as a key value pair. 
// 2. code execution component - this is the place where code is exexuted one line at a Time . 
// javascript is a synchronous single threded language . threaded - one command at a time , synchrous- step by step.

var n = 2;
function square (num){
    var ans=num*num;
    return ans;
}
var square2=square(n);
var square4=square(4);
console.log(square2);
console.log(square4);//...........................4,16

// 1.global execution is created.
//2.javascript allocate memory to all the memories and functions.
//3.allocate memory n -initially undefined.
//4.functions - same  function square (num){
//     var ans=num*num;
//     return ans;
// }
//5.square2 -underfined
//6.square4-undefined
//7.2 phase is code execution context
//8.2 is allocated in n 
//9.goest to line 8 nothing to execute
//10.it will go to the line 12 - invoking the function takes place
//11.when function is invoke ..new execution context is created.in code exection context
//12.this new execution context has again two component memory and code
//13.in memory it will allocate memory for num and ans , initially both are undefined. in phaase 1
//14.phase 2 code execution phase ..execute each line from 8 , 2 is pass to num , num is parameter, n is argument.
//15,now num=2, come to next line 9.ans=4. it gets the value from ,local memory -- undefined will be replaced.
//16.then control goes to line 10.return keyword  tells this function that done with the work now, just return the whole control back to the exection context where the function is invoked
//17.now control goes to line 12.  in square 2 undefined will be replaced by 4  square 2=4,conce finshed,whole execution completly deleted.
//18.now go to line 7.again invoking function, new brand execution context is created.again memory and code
//19.goes back to 8 num = undefined, ans = undefined.
//20in second phase . num get argument from the invocation. num=4 replaced by 4
//21.in 9 line ans=16 return ans
//square 4 = 16 whole execution context will be deleted.  
