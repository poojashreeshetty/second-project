// 1.let firstname="pooja";
// let latsname="shetty";
// let person={
//     firstname:firstname,
//     latsname:latsname
// };
// console.log(person.firstname);
// console.log(person.latsname);
var _a;
//2.es6 provide shorthand property
//when the property name is  the same as the variable name
// let firstname="pooja";
// let latsname="shettty";
// let person={
//     firstname,
//     latsname
// };
// console.log(person.firstname);//pooja
// console.log(person.latsname);//shettty
// 3. let firstname="pooja";
// let latsname="shettty";
// let person={
//     firstname,
//     latsname
// };
// function createPerason(firstname,latsname){
//     let fullname=firstname + '' + latsname;
//     return {firstname,latsname,fullname}//without using firstname:firstname like that
// }
// let p=createPerason("karthi","shetty");
// console.log(p.firstname);
// console.log(p.latsname);
// console.log(p.fullname);
//4.
//  let firstname="pooja";
// let latsname="shettty";
// let person={//withsame name, we can return like this
//     firstname,
//     latsname
// };
// function createPerason(firstname,latsname,age){
//     let fullname=firstname + ' ' + latsname;
//     return {firstname,//when we returning from the function 
//         latsname,
//         fullname,
//         isSEnior(){
//             return age>60;
//         }
//     }
// }
// let p=createPerason("karthi","shetty",32);
// console.log(p.firstname);//karthi
// console.log(p.latsname);//shetty
// console.log(p.fullname);//karthi shetty
// console.log(p.isSEnior())//false
//in es2015 possiblw to have spaces in object properties
// let person={
//     "first name":"pooja"
// };
// console.log(person["first name"]);
//also we use variables as property names
var ln = "last name";
var person = (_a = {
        "first name": "pooja"
    },
    _a[ln] = "pink" //take from var
,
    _a);
console.log(person["first name"]);
console.log(person); //{first name: 'pooja', last name: 'pink'}
//# sourceMappingURL=11objectlit.js.map