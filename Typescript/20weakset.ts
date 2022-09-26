//memory is handled proprly with weaksets




// let mySet=new Set();
// let key={};
// mySet.add(key);
// console.log(mySet.size);
// key=null;
// console.log(mySet.size);

//even though the key was set to null 
//reference to the key object still existed in a set



//weaksets is like set it has addmethod,it has delete,has method
//main differencese are it can store only object references
//and not primitive values 



//to create weekset 
// let set= new WeakSet();
// let key={};
// set.add(key);
// console.log(set.has(key));//true
// key=null;//value in key is no longer to accessibel
