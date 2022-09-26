//Generators can return (“yield”) multiple values, one after another, on-demand. They work great with iterables, allowing to create data streams with ease.

//generator functions use the yield keyword
//yield gives single value of 8 
//first gives values 8 then it is suspended
//then go to the yield 9 and executing the function once again it gives value of 9
//then yield 10



// function* numberGen(){
//     console.log("decode");
//     yield 8;
//     yield 9;
//     yield 10;

// }

//const gen= numberGen();
//create generator object for this function
//next method - in generator
//console.log(gen.next());
//we can do anything here
//console.log(gen.next());
//console.log(gen.next());
//console.log(gen.next());//so undefined
//value: 8, done: false}
//  {value: 9, done: false}
//  {value: 10, done: false}
//  {value: undefined, done: true}
//once we do 3times,there is no more code is left




// function* numberGen(){
//     console.log("decode");
//     yield 8;
//     yield 9;
//     yield 10;
//     return 11;//done:true

// }

// const gen= numberGen();
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

// decode
// {value: 8, done: false}
// {value: 9, done: false}
// {value: 10, done: false}
// {value: 11, done: true}