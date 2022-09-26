//classes are used to create objects
//instance peoperty -what they have--name,age,height , these property sholud be unique 
//instance methods  -what they do --talk,run jump

//1.class dedfination
// class Rectangle{

// }


//2.every class has constructor 
// constructor is basically a method , it executes when object is created
// constructor are used to setup our object
// class Rectangle{
//     constructor(){
//        console.log("rectangle created"); 
//     }
// }
// Rectangle(); -//error class constructor cannot be invoked with the new



// 3.class Rectangle{
//     constructor(){
//        console.log("rectangle created"); 
//     }
// }

// let final=new Rectangle(); //this is used to call constructor
// let final2=new Rectangle(); //this is used to call constructor //same output




// 4.instant properties is inserted inside the constructor
// this refers to current object
// class Rectangle{
//     constructor(){
//        console.log("rectangle created"); 
//        this.name="pooja";
//        this.age=90;
//        console.log(`${this.name} is ${this.age}`)
//     }
// }
// let final = new Rectangle();



//5.instant properties is inserted inside the constructor
// this refers to current object
// class Rectangle{
//     constructor(a,b){
//        console.log("rectangle created"); 
//        this.name=a;
//        this.age=b;
//        console.log(`${this.name} is ${this.age}`)
//     }
// }
// let final = new Rectangle("pooja",90); //add parameter
// let final1=new Rectangle("anil" , 89);




//6.add instance method

// class Rectangle{
//     constructor(a,b,c){//2
//        //console.log("rectangle created"); 
//        this.name=a;;//3
//        this.age=b;
//        this.caste=c;
//        console.log(`${this.name} is ${this.age}`)//4//8
       
//     }

//     getArea()//6//10
//     {
//         return (this.age * this.age) //call
        
//     }

//     recDescription(){
//         console.log(`${this.name} is ${this.caste}`)
//     }
 
// }
// let final = new Rectangle("pooja",90,"shetty");//1
// console.log(final.getArea());//5
// let final1=new Rectangle("anil" , 89,"shet");//7
// console.log(final1.getArea());//9

// final.recDescription();
// final1.recDescription();
//output
// pooja is 90
//  8100
//  anil is 89
//  7921
//  pooja is shetty
// anil is shet




