//rest - it will convert list of  argument into array 
// 1.let displcolors = function(){
//     for(let i in arguments)
//     {
//         console.log(arguments[i]);
//     }
// }
// displcolors('red');//red 
// displcolors('red','blue');//red blue
// displcolors('red','blue','green');//red blue green
// 2.let displcolors = function(){
//     for(let i in arguments)
//     {
//         console.log(arguments[i]);
//     }
// }
// let msg="list of colors";
// displcolors(msg,'red');//red 
// displcolors(msg,'red','blue');//red blue
// displcolors(msg,'red','blue','green');//red blue green
// list of colors
// red
//  list of colors
//  red
//  blue
// list of colors
//  red
//  blue
//  green
//3. 
// let displcolors = function(){
//     console.log(msg);
//     for(let i in arguments)//arguments msg and red
//     {
//         console.log(arguments[i]);
//     }
// }
// let msg="list of colors";
// displcolors(msg,'red');//red 
// displcolors(msg,'red','blue');//red blue
// displcolors(msg,'red','blue','green');//red blue green
// list of colors
//  list of colors
//  red
//  list of colors
//  list of colors
// red
//  blue
//  list of colors
//  list of colors
//  red
// blue
//  green
//4.rest parameters
// let displcolors = function(msg,...colors){//list of colors using
//     console.log(msg);
//     for(let i in arguments)
//     {
//         console.log(arguments[i]);
//     }
// }
// let msg="list of colors";
// displcolors(msg,'red');
// displcolors(msg,'red','blue');
// displcolors(msg,'red','blue','green');
// list of colors
//  list of colors
//  red
//  list of colors
//  list of colors
// red
//  blue
//  list of colors
//  list of colors
//  red
// blue
//  green
// 5.let displcolors = function(msg,...colors){//list of colors using
//     console.log(msg);
//     console.log(colors);
//     for(let i in colors)
//     {
//         console.log(colors[i]);//it will take from the colors array
//     }
// }
// let msg="list of colors";
// displcolors(msg,'red');
// displcolors(msg,'red','blue');
// displcolors(msg,'red','blue','green');
// list of colors
// ['red']
// red
//  list of colors
//  (2) ['red', 'blue']
// red
// blue
//  list of colors
//  (3) ['red', 'blue', 'green']
// red
//  blue
//  green
//# sourceMappingURL=9rest.js.map