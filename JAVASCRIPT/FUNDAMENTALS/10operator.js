//1,Remainder %
// alert( 5 % 2 ); // 1, a remainder of 5 divided by 2
// alert( 8 % 3 ); // 2, a remainder of 8 divided by 3


//2,Exponention
// alert( 2 ** 2 ); // 2² = 4
// alert( 2 ** 3 ); // 2³ = 8
// alert( 2 ** 4 ); // 2⁴ = 16


//3,String concatination with binary
//Usually, the plus operator + sums numbers.
//But, if the binary + is applied to strings, it merges (concatenates)

// 1,var name = "pooja";
// var lastname = "shetty";
// console.log(name + lastname);

// 2,let s = "my" + "string";
// alert(s); // mystring

//3,if any of the operands is a string, then the other one is converted to a string too.
//alert('1' + 2); // "12"
//alert(2 + '1'); // "21"

//4,alert( '1' + 2 ); // "12"
//alert(2 + '1'); // "21"
//See, it doesn’t matter whether the first operand is a string or the second one.

//alert(2 + 2 + '1'); // "41" and not "221"
//Here, operators work one after another.The first + sums two numbers, so it returns 4, then the next + adds the string 1 to it, so it’s like 4 + '1' = '41'.

//6,alert('1' + 2 + 2); // "122" and not "14"
//Here, the first operand is a string, the compiler treats the other two operands as strings too. The 2 gets concatenated to '1', so it’s like '1' + 2 = "12" and "12" + 2 = "122".

//7,alert( 6 - '2' ); // 4, converts '2' to a number
//alert( '6' / '2' ); // 3, converts both operands to numbers


//4,numeric conversions. unary +
//The plus + exists in two forms: the binary form that we used above and the unary form.
//doesn’t do anything to numbers. But if the operand is not a number, the unary plus converts it into a number.
// No effect on numbers
// 1,let x = 1;
// alert( +x ); // 1

//2, let y = -2;
// alert( +y ); // -2

//3, Converts non-numbers
// alert( +true ); // 1
// alert( +"" );   // 0

//4,let apples = "2";
//let oranges = "3";
//alert(apples + oranges); // "23", the binary plus concatenates strings

//5,If we want to treat them as numbers, we need to convert and then sum them:
//let apples = "2";
//let oranges = "3";
// both values converted to numbers before the binary plus
//alert( +apples + +oranges ); // 5
// the longer variant
// alert( Number(apples) + Number(oranges) ); // 5

//5,modify in a place,

//1,let n = 2;
//n = n + 5;
//n = n * 2;
//This notation can be shortened using the operators += and *=:

//2,let n = 2;
//n += 5; // now n = 7 (same as n = n + 5)
//n *= 2; // now n = 14 (same as n = n * 2)
//alert( n ); // 14

//3,let n = 2;
//n *= 3 + 5; // right part evaluated first, same as n *= 8
//alert( n ); // 16

//6,increment/decrement
//The operators ++/-- can be used inside expressions as well. Their precedence is higher than most other arithmetical operations.
//Increment/decrement can only be applied to variables. Trying to use it on a value like 5++ will give an error.

//1,let counter = 2;
//counter++;        // works the same as counter = counter + 1, but is shorter
//alert( counter ); // 3

//2,Decrement -- decreases a variable by 1:
// let counter = 2;
// counter--;        // works the same as counter = counter - 1, but is shorter
// alert( counter ); // 1

//3,let counter = 1;
// let a = ++counter; // (*)
// alert(a); // 2
//In the line (*), the prefix form ++counter increments counter and returns the new value, 2. So, the alert shows 2.

//4,let counter = 1;
// let a = counter++; // (*) changed ++counter to counter++
// alert(a); // 1
// In the line (*), the postfix form counter++ also increments counter but returns the old value (prior to increment). So, the alert shows 1.

//5,The operators ++/-- can be used inside expressions as well. Their precedence is higher than most other arithmetical operations.
//let counter = 1;
// alert( 2 * ++counter ); // 4
// let counter = 1;
// alert( 2 * counter++ ); // 2, because counter++ returns the "old"


//7,comma
//let a = (1 + 2, 3 + 4);
//alert( a ); // 7 (the result of 3 + 4)
//Here, the first expression 1 + 2 is evaluated and its result is thrown away.Then, 3 + 4 is evaluated and returned as the result.