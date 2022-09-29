const a=2;
const b=9;

let result=0;
function fact(a,b)
{
if(result>b){
return 0;
}
else{
    result=a+1;
    console.log(result);
    fact(result,b);
}
}
fact(a,b)