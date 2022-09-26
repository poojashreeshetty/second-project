// Write a function which prints/shows stars (or any pattern) for the number of times and rows provided.

// E.g. if row provided is 5 then it should show below

// *

// **

// ***

// ****

// *****


let rows = +prompt("enter the num of rows");
function star(rows){
    let string = "";
    for(let i=1;i<=rows;i++)
    {
    for(let j=0;j<i;j++)
    {
    //string += "* "; 
    string=string+"*";
    }
    string=string+"\n";
    }
    alert(string);
}
star(rows);



//*\n,**\n,***\n,****\n...

