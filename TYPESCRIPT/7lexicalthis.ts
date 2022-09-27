//1. var employee={
//     id:1,
//     greet:function(){
//         console.log(this.id);
//     }
// };
// employee.greet();




//2.display after one second
// var employee={
//     id:1,
//     greet:function(){
//         setTimeout(function(){
//             console.log(this.id);//undefined
//         },1000)
       
//     }
// };
// employee.greet();
//here this keyword only accessable to inside setimeout function
//wthin this function doesnt have any value,so undefined





//3.
//  var employee={
//         id:1,
//         greet:function(){
//             var self=this;//tjis is belongs to outer function
//             setTimeout(function(){
//                 console.log(self.id);//1
//             },1000)
           
//         }
//     };
//     employee.greet();




// 4.var employee={
//     id:1,
//     greet:function(){
       
//         setTimeout(()=>{
//             console.log(this.id);//1
//         },1000)
       
//     }
// };
// employee.greet();
//when we use arrow function it is not going to create own this
//this is going to refer parent this










