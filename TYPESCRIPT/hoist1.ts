// function greetPerson(name){
//     if(name==="pooja"){
//         var greet= "hello pooja"
//     }
//     else{
//         var greet="hello there"
//     }
//     console.log(greet);
// }
// greetPerson("pooja");//hello pooja
//declaration which moves at the top of the function



function greePerson(name){
    var greet;
    if(name==="pooja"){
         greet= "hello pooja"
    }
    else{
         greet="hello there"
    }
    console.log(greet);
}
greePerson("pooja");//hello pooja

//var is a function scope, it is accessable within the function