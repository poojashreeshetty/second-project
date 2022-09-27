//arrow function have no this.




//in normal function
//1. getName();
// console.log(x);
// console.log(getName);
// var x=7;
// function getName()
// {
//     console.log("Namasthe javascript");
// }
//output
// Namasthe javascript
// undefined
// ƒ getName()
// {
//     console.log("Namasthe javascript");
// }



//but in arrow function it gives error
// getName();
// console.log(x);
// console.log(getName);
// var x=7;
// var getName=()=>
// {
//     console.log("Namasthe javascript");
// }
//gives error that getName is not function
//bcoz here in arrow function getName treated as variable
//just like x, getname is also allocated as undefined