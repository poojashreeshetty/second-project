//opposit to rest
//spread operator takes an array and slpit into individual elements
//rest specify in the function declaration
//spread operator spacvify using function call
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var displcolors = function (msg) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    console.log(msg);
    console.log(colors);
    for (var i in colors) //one by one 
     {
        console.log(colors[i]);
    }
};
var msg = "list of colors";
var colorArray = ['orange', 'yellow', 'indigo'];
displcolors.apply(void 0, __spreadArrays([msg], colorArray)); //1.msg  , orange,yellow,indigo //split into individual elemebnt
//# sourceMappingURL=10spread.js.map