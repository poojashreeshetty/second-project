//parent and chiled class
//Class inheritance is a way for one class to extend another class.

// 1.class Book {
//     constructor(title,author,year)
//     {
//         this.title = title;
//         this.author=author;
//         this.year = year;
//     }
//         getSummary()
//         {
//             return `${this.title} is written by ${this.author} on ${this.month}`
//         }  
//     }
 
// const book1 = new Book('book one','anil','2000')
// //console.log(book1.getSummary())

// class Magzine extends Book{
//     constructor(title,author,year,month){
//         super(title,author,year)
//         this.month = month
//     }
// }
// const mag1 = new Magzine('book one','pooja','2000','jan')
// console.log(mag1.getSummary())



// 2.class Animal {
//     constructor(name) {
//       this.speed = 0;
//       this.name = name;
//     }
//     run(speed) {
//       this.speed = speed;
//       alert(`${this.name} runs with speed ${this.speed}.`);
//     }
//     stop() {
//       this.speed = 0;
//       alert(`${this.name} stands still.`);
//     }
//   }
  
//   let animal = new Animal("My animal");

//   class Rabbit extends Animal {
//     hide() {
//       alert(`${this.name} hides!`);
//     }
//   }
  
//   let rabbit = new Rabbit("White Rabbit");
  
//   rabbit.run(5); // White Rabbit runs with speed 5.
//   rabbit.hide(); // White Rabbit hides!




// 3.class Animal{
//     constructor(name,age){
//         this.name=name;
//         this.speed=age;
//     }
//     run(){
//         alert(`${this.name} runs with speed ${this.speed}`);
//     }
//     stop()
//     {
//         alert(`${this.name} runs with speed ${this.speed}`);
//     }
// }
// let result1=new Animal("rabit",90);
// let result2=new Animal("tiger" , 80);
// result1.run();//rabit runs with the speed 90
// result2.stop();//tiger runs with the speed 80


// class Bird extends Animal{
 
   
//     hide(){
//         alert(`${this.name} runs with speed ${this.speed}`);
//     }
// }
// let bird1=new Bird("parrot",90);
// bird1.run();
// bird1.stop();
// bird1.hide();



// With constructors it gets a little bit tricky.
// Until now, Rabbit did not have its own constructor.
// According to the specification, if a class extends another class and has no constructor, then the following “empty” constructor is generated:
// class Rabbit extends Animal {
//   // generated for extending classes without own constructors
//   constructor(...args) {
//     super(...args);
//   }
// }




//overiding constructor
//When a regular function is executed with new, it creates an empty object and assigns it to this.
//But when a derived constructor runs, it doesn’t do this. It expects the parent constructor to do this job.
//So a derived constructor must call super in order to execute its parent (base) constructor, 
//otherwise the object for this won’t be created.
//For the Rabbit constructor to work, it needs to call super() before using this, like here:




