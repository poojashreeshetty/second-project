//opposit to rest
//spread operator takes an array and slpit into individual elements
//rest specify in the function declaration
//spread operator spacvify using function call



let displcolors = function(msg,...colors){//2.that individual elemnt combine into the single array
        console.log(msg);
        console.log(colors);
        for(let i in colors)//one by one 
        {
            console.log(colors[i]);
        }
    }
    
let msg="list of colors";
let colorArray=['orange','yellow','indigo'];
displcolors(msg,...colorArray);//1.msg  , orange,yellow,indigo //split into individual elemebnt
