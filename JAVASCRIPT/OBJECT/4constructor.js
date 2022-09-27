//They are named with capital letter first.
//They should be executed only with "new" operator.

//1.function User(name) {
//     this.name = name;
//     this.isAdmin = false;
//   }
//   let user = new User("Jack");
//   alert(user.name); // Jack
//   alert(user.isAdmin); // false



// 2.const book1 = {
//     title: 'Book One',
//     author: 'anil',
//     years: '2010',
//     getSummary: function () {
//         return `${this.title} is written by ${this.author}`
//     }
// }

// const book2 = {
//     title: 'Book Two',
//     author: 'pooja',
//     years: '2015',
//     getSummary: function () {
//         return `${this.title} is written by ${this.author}`
//     }
// }

// console.log(book1.getSummary())//book one is written by anil
// console.log(book2.getSummary())//book 2 is written by pooja



//3. function Book(title,author,years)
// {
//     this.title=title;
//     this.author=author;
//     this.years=years;
//     this.getSummary=function()
// {
//     return `${this.title} is written by ${this.author}`
// }
  
// }
  
// // instatiate an object 
// const book1 = new Book('Book one', 'anil', '2010');
// console.log(book1.getSummary())
// const book2 = new Book('Book Two', 'pooja', '2015');
// console.log(book2.getSummary())
// //Book one is written by anil
// // Book Two is written by pooja




// 4.function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.title = title;
//     this.year = year;

// }

// Book.prototype.name = 'shetty';

// Book.prototype.getSummary = function () {
//     return `${this.title} is written by ${this.author} ${this.name}`
// }

// Book.prototype.getAge = function () {
//     const years = new Date().getFullYear() - this.year;
//     return years
// }

// const book1 = new Book('book one', 'anil', '2010');
// const book2 = new Book('book Two', 'pooja', '2020');

// console.log(book1.getSummary())
// console.log(book1.getAge())
// console.log(book2.getSummary());
// console.log(book2.getAge())



//5. function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.title = title;
//     this.year = year;
// }
// Book.prototype.getSummary = function () {
//     Return `${this.title} is written by ${this.author}`
// }
// // instatiate object
// const book1 = new Book('book one', 'anil', '2010');
// console.log(book1);



