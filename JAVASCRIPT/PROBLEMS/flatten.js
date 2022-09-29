// Write a function that turns a deep array (a deep array is one in which each element
//can either be an individual value or an array of values) into a plain array. Do not use
//array.flat();
//sample input: [1, 2, [3, 4, [5]]]
//Sample output: [1, 2, 3, 4, 5]

let arr = [1, 2, [3, 4, [5]]];
//console.log(typeof arr);//object


let plainArray = [];
function resultFlatten(arr) {
    for (let key of arr) {
        if (typeof key === 'object') {
            resultFlatten(key);
        }
        else {
            plainArray.push(key);
        }

    }




}
resultFlatten(arr);
console.log(plainArray);