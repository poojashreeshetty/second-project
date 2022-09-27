const str=prompt("enter the string");
function length(string)
{
    if(string=="")
    {
        return 0;
    }
    else{
        return 1+length(string.substring(1));
    }
}
alert(length(str));

//pooja
//return 1+length(ooja);=pooja=5
//2 nd line ooja not equal to null
//come to else return 1+length(oja)=ooja=4
//come to else part return 1+length(ja)=oja=3
//come to else part return 1+length(a)=ja=2
//come to else part return 1+''=a=1
//''  =0

//recursive
