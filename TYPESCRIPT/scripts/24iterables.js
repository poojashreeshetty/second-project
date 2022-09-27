//iterables-which is new way to traverse data
//iteration revolves around two key concepts namely iterables an iterators
//iterables which nothing but an object   that impliments the method whose key is symbol.iterator
// Iterable{
//     [symbol.iterator]():Iterator//this method is going to return an iterator
// }
// Iterator{//Iterator is an object that is going to impliment next method
//     next():IResultObj//this next method knows how to access elemnt in an collection
//     //it returns an object
// }
//an object which contain two properties value ,this
//value can be of any data type
//second property is booliean flag called done
//array,sets ,maps,strings all are iterable
// IResultObj{
//     value:any
//     done:bool
// }
//lets create new array and call iterable
//create iterator
var iterable = [1, 2, 3];
function createIterator(array) {
    var count = 0; //used to keep track in each array
    return {
        next: function () {
            return count < array.length ? //return resultobj
                { value: array[count++], done: false } :
                { value: undefined, done: true };
        }
    };
}
var myCreator = createIterator(iterable);
console.log(myCreator.next());
// {value: 1, done: false}///done:false means we are not done with iteration
// done: false
// value: 1
console.log(myCreator.next());
console.log(myCreator.next());
// {value: 1, done: false}
// {value: 2, done: false}
// {value: 3, done: false}
console.log(myCreator.next());
// {value: 1, done: false}
// {value: 2, done: false}
// {value: 3, done: false}
// {value: undefined, done: true}
//it internally calls the next method ,until the done is true
//iterating over object
//for of loop doesnot work by default
// let person={
//     fname:"pooja",
//     lname:"shetty"
// };
// for(let p of person)
// {
//     console.log(p);
// }
//# sourceMappingURL=24iterables.js.map