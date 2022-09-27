//1. string conversion
// let value = true;
// alert(typeof value);
// let value2 = String(value);
// alert(typeof value2);


//2,Numeric conversion
//numeric conversions happens in mathematical functions and expressions automatically.
//1.alert("6" / "2"); // 3, strings are converted to numbers

// 2.let str = "123";
// alert(typeof str); // string
// let num = Number(str); // becomes a number 123
// alert(typeof num); // number

// 3.if the string is not a valid number, the result of such a conversion is NaN. For instance:
// let age = Number("an arbitrary string instead of a number");
// alert(age); // NaN, conversion failed

//alert( Number("   123   ") ); // 123
// alert( Number("123z") );      // NaN (error reading a number at "z")
// alert( Number(true) );        // 1
// alert( Number(false) );       // 0


//3,booliean conversion
// var a = Boolean(1);
// alert(a);
// alert( Boolean(1) ); // true
// alert( Boolean(0) ); // false

// alert( Boolean("hello") ); // true
// alert( Boolean("") ); // false
//the string with zero "0" is true string with space is true
//alert( Boolean("0") ); // true
//alert( Boolean(" ") ); // spaces, also true (any non-empty string is true)