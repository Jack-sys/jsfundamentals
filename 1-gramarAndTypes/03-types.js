//* Types

//* Booleans

let i = true;

let j = false;

let on = true;
let off = false;

console.log(on, off);

// * Null
// * Null = empty value; -- not 0, not undefined

let empty = null;
console.log(empty);

// * Undefined
// Undefined = no value assigned (not even an empty container / jar)

let undef = undefined;
console.log(undef);

// * Numbers

let degrees = 90;
console.log(degrees);

let precise = 99999999999999999999999999;
console.log(precise);

let rounded = 99999999999999999999999999;
console.log(rounded);

let nonQuite = 0.2 + 0.1;
console.log(nonQuite);

let numbersArehard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersArehard);

let a = Number('123');



// * Strings
let stringOne = "double quotes";
let stringTwo = 'single quotes';
console.log(stringOne, stringTwo);

let first = 1050 + 100;
let second = '1050' + '100';
console.log(first, second);

console.log(typeof first);
console.log(typeof second);







// * Objects

let car = {
    color: 'red',
    tires: 4,
    extraas:'A/C & Radio',
    cool: true
};

console.log(car);
console.log(typeof car);

// * Array

let list = ['item', 'item2', 'item3'];

//1 - Name of the array;
//2 - Array is inside of these square brackets
//3 - each item, dataType, is separatedmby commas

let food = ['large', 4, true];
// console.log(food);

console.log(typeof food);

//* Addition vs. Concatenation ]

let third = 1050 + '100';
console.log(third);
console.log(typeof third);





let firstNmae = Jack;
let lastName = Sumner;
let aptNumber = 7;
let street = pennSt;
let city = Westfield;
let state = IN;
let zip = 46074;

console.log('Hi, my name is' + firstNmae, lastName + ', ' + aptNumber, street + ', ' + city + ', ' + state, zip);















/*
Strings - Properties
*********************

Prop are qualities associated with a datatype.
*/

let myName = 'Jack';
console.log(myName. length);

let myNameIs = 'Jack';
console.log(myNameIs.toUpperCase());


let home = 'My home in Indiana';
console.log(home.includes('Indiana'));

let sent = 'This sentence will be split into individual parts ';

console.log(sent.split(' '));




