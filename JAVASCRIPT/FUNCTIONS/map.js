

//when we want to transform it 
//or get a new array
//for ex double- [10,8,9,9,12];
//triple-[15,12,9,]


//map
//get new array
//we have to pass function inside it 
//this is basically tells me that what transformation do we nedd
//run the function over each and every elemnts in an array
//and create a new array out of it


//double the element in an array
// const arr=[5,4,3,3,6];
// function double(x)
// {
//     return x*2;
// }

// //for tripple
// function tripple(x)
// {
//     return x*3;
// }

// //binary
// function binary(x)
// {
//     return x.toString(2);
// }
// //pass the that function in the arr.map
// const output=arr.map(double);
// const result=arr.map(tripple);
// const final=arr.map(binary);
// console.log(output);//5) [10, 8, 6, 6, 12]
// console.log(result);//[15, 12, 9, 9, 18]
// console.log(final);//['101', '100', '11', '11', '110']



//or we can write like this
// const arr=[5,4,3,3,6];
// const output=arr.map(function double(x)
// {
//     return x*2;
// })
// console.log(output);


//we can use arrow function[we can pass anonymous function]
// const arr=[5,4,3,3,6];
// const output=arr.map((x)=>x*2);
// console.log(output);//[10, 8, 6, 6, 12]





//filter
//used to filter the elemnt in the array
// const arr=[5,1,3,2,6];
// const output=arr.filter((x)=>{
//     if(x<3)
//     {
//         return x;
//     }
// })
// console.log(output);//1,2


//to print odd numbers
// const arr=[1,2,3,4,5,6,7,8,9,11]
// const output=arr.filter((x)=>{
//     return x%2//2%2-false,3%2-true-so it will execute
// })
// console.log(output);//[1, 3, 5, 7, 9, 11]



//to print even
// const arr=[1,2,3,4,5,6,7,8,9,11]
// const output=arr.filter((x)=>{
//     return x%2===0;
// })
// console.log(output);//[2, 4, 6, 8]





//reduce
//used to the place where we have to take all the elemnts of an array
//come up with the single value out of them

// const arr=[1,2,3,4,5];
// //sum or max

// function findSUm(arr){
//     let sum=0;
//     for(let i=0;i<arr.length;i++)
//     {
//         sum=sum+arr[i];
//     }
//     return sum;
// }
// console.log(findSUm(arr));

//output-15




//use reduce - to findout a particular value
//this reduce takes a function
//this function takes two parameters
//first one is accumalter and next one is current
//this function is iterate over each and every lement of the array
//this curr represents each and value
//accumalator used to accumulate the results

//initialize the sum and accumulate inside the sum 
//sum=sum+arr[i], arr[i]-curr,sum-accumulator
//so here acc should be initialize it 
//pass initial value to accumulator-0,as a second argument


// const arr=[1,2,3,4,5];
// //sum or max

// const output=arr.reduce(function(acc,curr){
// acc=acc+curr;

// return acc;


// },0);
// console.log(output);//15




//maximum inside an array
//if the current value greater than maximum 
const arr = [4, 2, 3, 10, 9];

// function findSUm(arr){
//     let max=0;
//     for(let i=0;i<arr.length;i++)
//     {
//         if(arr[i]>max){
//             max=arr[i];
//         }
//     }
//     return max;
// }
// console.log(findSUm(arr));//10



//use reduce
// const output=arr.reduce(function (max,curr){
// if(curr>max)
// {
//     max=curr;
// }
// return max;
// },0);
// console.log(output);//10



const users = [
    { firstname: "pooja", lastname: "shetty", age: 26 },
    { firstname: "ashik", lastname: "kumar", age: 75 },
    { firstname: "karthik", lastname: "music", age: 50 },
    { firstname: "megha", lastname: "acharya", age: 26 }

];


//retrive list of full name
//["pooja","ashik","karthik","megha"];

// const output=users.map(function(x){
//     return (x.firstname+x.lastname);
// })
// console.log(output);


// const output=users.map(x=>x.firstname+x.lastname);
// console.log(output);
//['poojashetty', 'ashikkumar', 'karthikmusic', 'meghaacharya']


//howmany people is having same age
//unique value
//reduce, here use reduce,then need to find one values in it
//initiually empty object,now slowly append on it

//function represents each object in array
//cuurent will be first object

//acc={26:2,75:1,50:1}
// const output = users.reduce(function (acc, curr) {
//     if (acc[curr.age]) {
//         //acc of 26 is present it or not
//         //if it is there try for it
//         //if it is not there in empty object else
//         //in else part asisgn it to 26:1
//         //again it will iterate nto next object 75:1
//         //50:1
//         //26-it is present we should write the logic in if part
//         //then return
//         acc[curr.age] = ++acc[curr.age];
//     }
//     else {
//         //initially assign it to 1
//         acc[curr.age] = 1;
//     }
//     return acc;
// }, {})
// console.log(output);
// //{26: 2, 50: 1, 75: 1}




//use filter
//first name of all the people whose age is 30
// const output=users.filter((x)=>x.age<30);
// console.log(output);

// 0: {firstname: 'pooja', lastname: 'shetty', age: 26}
// 1: {firstname: 'megha', lastname: 'acharya', age: 26}

//find first name of those people
//["pooja","megha"]-then we have to take unique value
//perform chaining operation


// const output=users.filter((x)=>x.age<30).map((x)=>x.firstname);
// console.log(output);
//['pooja', 'megha']




//instead of using filter and map
//use reduce method
const output=users.reduce(function(acc,curr){
    if(curr.age<30){
        acc.push(curr.firstname);
    }
    return acc;
},[]);
console.log(output);
['pooja', 'megha']












