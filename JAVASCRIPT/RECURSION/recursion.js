let user = {
    name: "pooja",
    adress: {
        personal: {
            city: "mumbai",
            area: "santhekatte"
        },
        office: {
            city: "ajri",
            area: {
                landmark: "ramgopal"
            }
        }
    }
}


// let final = {
//     user_name: "pooja",
//     user_adress_personal_city: "mumbai",
//     user_adress_personal_area: "santhekatte",
//     user_office_city: "ajri",
//     user_office_area_landmark: "ramgopal"
// }

//instead of going nested, just do that,just flatten the array
//pass whole object
//traverse each and evry key value pair inside the object
//use for in loop
//if we itarating through key value pair, 
//two scenario,key and value might be object or not

//first step
// let finalObj={};
// let magic=(obj)=>{
//     //use type of to use whether it is object or not
//    for(let key in obj){
//     if(typeof obj[key]==='object')
//     {

//     }
//     else
//     {

//     }
//    }

// }


//second step
let final_Obj = {};
    let magic = (obj, parent) => {
        for (let key in obj) {
            if (typeof obj[key] === 'object') {
                //calling same function again
                //this time wouldnot be the user,
                //that obj[key] what is passed in if, again we need to call to check
                //if there object is present or not
                magic(obj[key], parent + "_" + key);
                //if it find its object, it will again call
            }
            else {
                final_Obj[parent + "_" + key] = obj[key];
            }
        }

    }
magic(user,"user");
console.log(final_Obj);


//first step
//memory allocation
// Script
// final_Obj: undefined
// magic: undefined
// user: {name: 'pooja', adress: {…}}



//second step
//magic call 
//magic(user,"user");
// let magic = (obj, parent)=obj={name:"pooja",adress:{{....}}},parent="user";



//third step
//let key :name , obj: {name: 'pooja', adress: {…}}
//in obj take key :name
//final_Obj[parent + "_" + key] = obj[key];
//final_Obj: {user_name: 'pooja'}


//fourt step
// let magic = (obj, parent) obj=name:'pooja',address:{{..}},parent="user"
//now key will be adresss,key: "adress"
//typeof obj[adress]===object
//come into the if block
//again call magic(obj[address],user_adress);




//fifth step
//let magic = (obj, parent) =>
//obj={personal:{},office:{}},parent:"user_adress"
//now key:personal
//Block
//key: "personal"
//typeof obj[personal]===object
//comeinto if loop
//magic(obj[key], parent + "_" + key);
//magic(obj[personal],user_adress_personal);


//sixt step
//let magic = (obj, parent) => {
//obj={city:"mumbai",area:"santhekatte"},parent="user_adress_personal";
//now key:city
//typeof key not a object else part
//it will add to finalObj
//final_Obj: {user_name: 'pooja', user_adress_personal_city: 'mumbai';


//sevent 
//now key will be area
//final_Obj: {user_name: 'pooja', user_adress_personal_city: 'mumbai',user_adress_personal_area: "santhekatte"




//eight step 
//if else block completed
// let magic = (obj, parent) 
//obj={personal{}},office:{{}},parent="user_adress"
//now key will be office



//ningth step
//typeof key is object
//comeinto the loop
//magic(obj[key], parent + "_" + key);--call
//magic(obj[office],user_adress_personal)



//10th step
// let magic = (obj, parent) =>
//{obj:city:ajri,area:{{}},parent:user_adress_personal}
//now key will be city
//city not a object
//else
// final_Obj:
// user_adress_office_city: "ajri"
// user_adress_personal_area: "santhekatte"
// user_adress_personal_city: "mumbai"
// user_name: "pooja"



//11th step key : area
//area=object
//call magic
//magic(obj[area],user_adress_office_area)


//12th step
// let magic = (obj, parent) =
//{obj:{landmark:"ramgopal"},parent:"user_adress_office_area"}
//now key is landmark
//push into final obj
// final_Obj:
// user_adress_office_area_landmark: "ramgopal"
// user_adress_office_city: "ajri"
// user_adress_personal_area: "santhekatte"
// user_adress_personal_city: "mumbai"
// user_name: "pooja"




//13th step




