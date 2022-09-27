//Equals: a == b, please note the double equality sign == means the equality test,
//while a single one a = b means an assignment.

//1,A regular equality check == has a problem. It cannot differentiate 0 from false
//== operator will compare for equality after doing any necessary type conversion.
//it checks value
//1,alert( 0 == false ); // true
//2,alert(1 == "1");//true
//3,alert( null == undefined ); // true
//these are falsy by default,alert(!(null == undefined));=false


//2,A strict equality operator === checks the equality without type conversion.
//it is called strict equality, both the type and values compared must be same
//1,alert( 0 === false );//false
//2,alert(1==="1");//false
//3,alert( null === undefined ); // false//


//1,boolean
//alert( 2 > 1 );  // true (correct)
//alert( 2 == 1 ); // false (wrong)
//alert( 2 != 1 ); // true (correct)


//2,string comparision
// alert( 'Z' > 'A' ); // true
// alert( 'Glow' > 'Glee' ); // true
// alert( 'Bee' > 'Be' ); // true
//"2" > "12" → true--Again, dictionary comparison, first char "2" is greater than the first char "1".


