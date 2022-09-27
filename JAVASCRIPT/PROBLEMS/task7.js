//filter the array with year==2019 and ranking >4
//and sort with name in ascending order and shows on the names 
//output [amit,dinant]

//filter the array of students with hihest ranking
//sort on ranking and finally show only the names



const studentArray = [
    { name: 'suraj', year: 2019, ranking: 4 },
    { name: 'amit', year: 2019, ranking: 5 },
    { name: 'akash', year: 2018, ranking: 4 },
    { name: 'dinant', year: 2019, ranking: 7 },
    { name: 'sagar', year: 2017, ranking: 3 },
]


let student = studentArray.filter((item, i, Array) => {
    //console.log(item);
    //console.log(i);
    //console.log(Array);
    if (item.year == 2019 && item.ranking > 4)
     {
        return true;//if condition is true, it will push to student 
    }
})
//console.log(student);
//map-we can modify,we can create new array
let finalArray = student.map((data) =>
    data.name)
Console.log(finalArray)


//fst each iteration
//filter -based on condition
//filter returns an array of all matching elements:

//map
//It calls the function for each element of the array and returns the array of results.
