//1.getter-trear like a function
// class Rectangle{
//     constructor(a){
//        //console.log("rectangle created"); 
//        this.name=a;
//        this.age=a;
       
//     }
//     get mulyiply() 
//     {
//          return (`${this.name} is ${this.age}`)
//     }
// }
// let final = new Rectangle(90); //add parameter
// let final1=new Rectangle( 89);
// console.log(final.mulyiply); //90 is 90
// console.log(final1.mulyiply);//89 is 89


//setter-we can assign new values to instance properties
//name,age change the value.
//we can modify
class Rectangle{
    constructor(a){
       //console.log("rectangle created"); 
       this.name=a;
       this.age=a;
       
    }
    get mulyiply() 
    {
         return (`${this.name} is ${this.age}`)
    }
    set area(c)//2
    {
        this.age=Math.sqrt(c);//3
        this.name=this.age//4
    }
}
let final = new Rectangle(89); //add parameter
let final1=new Rectangle( 89);

final.area=25;//1
console.log(final.mulyiply); //5 is 5//change the value
console.log(final1.mulyiply);//89 is 89