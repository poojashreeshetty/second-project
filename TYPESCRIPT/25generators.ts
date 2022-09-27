//so the generator is the function capable of pausing and resuming
//execution with the help of yield keyword


//in this generator, fst we are going to yield the value 1
//then the execution is going to paused
//and the generator is gooing to resume its execution when we again tell it to continue
//its  execution
//then its going to execute console and yield 2
//yield is the point where function is going to pause



// function *createGenerator(){
//     yield 1;
//     console.log("after 1st yield");
//     yield 2;
// }

//create reference
//let myGen=createGenerator();
//need to call next method on the generator
//console.log(myGen.next());
//{value: 1, done: false}
//console.log(myGen.next());
//console.log(myGen.next());
// {value: 1, done: false}//yield1
//  after 1st yield//2nd next method console,yiled2 line will be executed
//  {value: 2, done: false}
//  {value: undefined, done: true}3rd next method ,no yiled so true
