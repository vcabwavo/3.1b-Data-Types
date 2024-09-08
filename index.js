//! How to Use Variables
/* 
    - Helps us reference, change, and/or detail other variables within our data. 
    - Helps shape functions, expressions, operators, and statements.
*/

//! Booleans
/* 
    - True / False 
*/
let on = true;
console.log(on);
let off = false;
console.log(off);

//! Null
/* 
    - An empty value.
*/

let empty = null;
console.log(empty);

//! Undefined
/* 
    - no value
*/
let undef = undefined; //instead of assigning our undef variable a datatype of undefined, we can simply just declare the valkue.
console.log(undef);

console.log(empty);

let correct;
console.log(correct);

//! Null vs Undefined
/* 
    - Null is a container with nothing.
    - Undefined is a variable never set.
*/

//! Numbers
/* 
    - Literal numbers; however, there are some minor considerations when handling numbers.
    - Numbers will be rounded at 16 digits
    - Consider the MDN docs (resource link in ReadMe.md) for a deeper dive.
*/

let degree = 90;
console.log(degree);

let precise = 999999999999999; // 15 9's
console.log(precise);

let rounded = 9999999999999999 // 16 9's
console.log(rounded); // JS gives you space for 15 numbers before it rounds up.

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let numbersAreHard = (0.2 * 10 + 0.1*10) /10;
console.log(numbersAreHard);

let a = Number('123');
console.log(a);

//! String
/* 
    - Represents text.
    - Wrapped in single or double quotes
        Single-Quotes:  'text'
        Double-quotes:  "text"
        Back-tic:       `text`
*/

let stringOne = "double quotes";
let stringTwo = 'single quotes';
let stringThree = `tics`

console.log(stringOne, stringTwo, stringThree);

//* Numbers vs Strings
let first = 1234 +567;
let second = '1234' + '567'
console.log(first);
console.log(second);

console.log(typeof first);
console.log(typeof second);

//! Object
/* 
    - Denoted with curly-brackets { }
    - Stores many values by means of a key/value association
    - A container that can hold multiple datatypes.

    {
        key: value
    }
*/

let frodo = {
    race : 'hobit',
    rings: 1 ,
    cloak : true
};

console.log(frodo);

//! Array
/* 
    - A container that holds a list of items.

    ex:
    let list = [ 'item1', 'item2', 'item3' ];
        (1)   (2)         (3)
    
    1. name of the array.
    2. Denoted with square brackets.
    3. Each item, regardless of datatype, is separated by commas.

    - Is considered a type of object.
        - arrays are also containers that hold multiple datatypes.
*/

let burritos = ['large', 4, true]
console.log(burritos);
console.log(typeof burritos);
console.log(burritos instanceof Array);

//! Data Type Literals
/*  
    - Literal representation of a fixed value when created.
*/
//* String literal
let car = "ford";

//* Numeric Literal
let December = 12;

// * Boollean Literal
let tired = true;

// * object literal
let soups = {
    a: "chicken noodle",
    b: 'tomato',
    c: 'beef and barley'
};

// * Aray literal
let days = ['M', 'T', 'W', 'TH','F','S','S'];

//! Special Values
/* 
    - NaN: Not a Number
    - Infinity
*/


let inf = 5/0;
console.log(inf);

let notANumber = 'string' * 317;
console.log(notANumber);