// 3. Write a function which checks given input/parameter:
// a. If input/param is below the speed limit of 70 then print ‘Good safe Driving’.
// b. If input/param is above the speed limit of 70, every 5 kms is penalty point, then print ‘Speed Limit Crossed by Penalty Point + Point’.
// c. If Driver gets more than 10 penalty points i.e. above the speed limit of 120 then print ‘Licence Suspended’.


let speed=prompt("enter the speed limit");
function point(speed)
{
if(speed <70)
{
alert("good safe driving");
}
else
{  
let penalty= Math.floor((speed-70)/5);
alert("speed Limit Crossed by Penalty Point" +' '+ penalty);
if(penalty>10){
    alert("Licence Suspended");
}
}
}
point(speed);



