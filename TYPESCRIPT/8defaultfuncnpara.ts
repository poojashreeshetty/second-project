//default function parameter


//1 we can set default parameter 
// let get=function(value=10){//set default value to parameter
//     //if we call this function with the value,print that value
//     console.log(value);
// }
// get();//10;
// get(38);//38



//2.2 parametr
// let get=function(value=10,bonus=80){
    
//     console.log(value,bonus);
 
// };
// get();//10,80
// get(20);//20,80
// get(20,30);//20,30
// get(undefined,30);//10,30 , undefine=10;




// 3. let get=function(value=10,bonus=value*1){
    
//     console.log(value,bonus);
 
// };
// get();//10 10
// get(20);//20 20
// get(20,30);//20 30




// 4. let bonustot=2;
// let get=function(value=10,bonus=bonustot*1){
    
//     console.log(value,bonus);
 
// };
// get();//10 2
// get(20);//20 2
// get(20,30);//20 30



//5.also assign a function or variables while assigning default parameter
//  let bonustot=()=>0.1;
// let get=function(value=10,bonus=bonustot()*1){
    
//     console.log(value,bonus);
 
// };
// get();//10 2
// get(20);//20 2
// get(20,30);//20 30





//6arguments object
// let bonustot=()=>1;
// let get=function(value=10,bonus=bonustot()*1){
    
//     console.log(value,bonus);
//     console.log(arguments.length)
 
// };
// get();//10,1 //length 0
// get(20);//20 1 //length 1
// get(20,30);//20 30 //length 2




















