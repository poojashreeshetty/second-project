//import from module b
// import { fname ,lname} from './moduleB.js'
// console.log(fname);//pooja
// console.log(`${fname}  ${lname}`);//pooja shetty



//while importing we can use alias
//when we use alias while importing we must use that alias 
//otherwise it shows error that fname is not defined
// import { fname as f,lname as l} from './moduleB.js'
//console.log(fname);//fname is not defined
//console.log(`${f}  ${l}`);//pooja shetty//must use alias


//module imports are hoisted
// console.log("mopdule A log 1");
// import { fname,lname} from './moduleB.js'
// console.log("module A log 2");
// console.log(`${fname} ${lname}`);

// module B loaded
// mopdule A log 1
// module A log 2
//  pooja shetty

//actually in module A , first statemnet console.log("mopdule A log 1"); sholud be execute
//then import statement // module B console.log("module B loaded"); sholud be executed
//but here module B is hoisted that is in module A firstly it will move at the top of the scope
//so module B is loded first//import will go above 



//cannot change anything which have been imported
// import { fname,lname} from './moduleB.js';
// fname="ashik";
// console.log(`${fname} ${lname}`);//shows error



//but we can change the properties of object
// import { fname,lname,onj} from './moduleB.js';
// onj.name="karthik";
// console.log(onj.name)//karthik
// console.log(`${fname} ${lname}`);


