//Write a function which checks and     prints only the string type properties of an object.
let obj={
    name:"pooja",
    age:2,
    family:"Poojas",
    degree:8,
    mark:60,
    caste:"shetty",
}
function printSTring(obj){


for(let key in obj){
   if(typeof obj[key]=="string"){
   alert(obj[key]);
   }}
}
printSTring(obj);


   