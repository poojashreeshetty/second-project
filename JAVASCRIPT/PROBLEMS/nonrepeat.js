const string = "pooja";
let final=[];
let result="";
for(let char of string)
{
    if(string.indexOf(char)===string.lastIndexOf(char))
    {
        console.log(char);
        final.push(char);
        result=result+char;

        
    }            
}
console.log(final);
console.log(result);






