//0+1=1, 1+1=2
//0,1,1,2,3,5,8,13.
const a=5 //prompt("enter the number");
let num1=0;
let num2=1;
console.log(num1);
console.log(num2);
for(i=2;i<=a;i++){//print from 2nd value
let num3=num1+num2;
num1=num2;
num2=num3;
console.log(num3);
}


