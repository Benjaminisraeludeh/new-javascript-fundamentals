alert("hello world");
console.log("temitope is my friend");
console.log(40 + 23 + 10);
console.log(5 ** 5);

// let firstName = "Adams";
// console.log(firstName);

let gravity = 9.81;
const boilingPoint = 100;
console.log(gravity, boilingPoint);

let age = 20; // declaring age
console.log(age);
age = 21; // re-assigning age
console.log(age);

let fruit = "banana";
console.log(fruit);
fruit = "mango";
console.log(fruit);

//const
const city = "Lagos";
console.log(city);

// const yearofBirth = 2000;
// const PI = 3.14;
// console.log(yearofBirth, PI);

// var
var country = "Nigeria";
console.log(country);
country = "Ghana";
console.log(country);

// data types

// const a = "A";
// const b = "javaScript is an amazing language";
// console.log(b);
// const c = `we can also use backticks to create string`;
// console.log(c);

//boolean
const no = false;
const yes = true;
console.log(yes, no);
console.log(2 > 3);

// const myObject = {
//   firstName: "Adams",
//   lastName: "Temitope",
//   age: 23,
//   gender: "female",
//   isMarried: false,
// };
// console.log(myObject);

// checking data types
console.log(typeof "Adams"); // string
console.log(typeof 23); // number
console.log(typeof true); // boolean
console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(typeof {}); // object
console.log(typeof []); // object
console.log(typeof 2 > 4);

//operators
//arithmetic operators
//addition
let a = 10;
let b = 5;
let c = a + b;
console.log(c);
//subtraction
const sellingPrice = 750;
const costPrice = 500;
const profitValue = sellingPrice - costPrice;
console.log(profitValue);

// calculating the area of a circle
const PI = 3.14;
let radius = 100;
let areaOfCircle = PI * radius * radius;
console.log(areaOfCircle);

// string concatenation
let word_1 = "Hello";
let word_2 = "World";
console.log(word_1 + " " + word_2);

let firstName = "Adams";
let lastName = "Temitope";
let fullName = firstName + " " + lastName;
console.log(fullName);

console.log("My" + " name is " + " " + fullName + " ");

// 2. assignment operators
let d = 2 + 5 + 8 - 2;
console.log("first", d);

d += 10;
console.log("second", d);
d -= 5;
console.log("third", d);
d *= 2;
console.log("fourth", d);
d /= 4;
console.log("fifth", d);
d %= 3;
console.log("sixth", d);

// 3. comparison operators
const ageAdult = 18;
let ageJohn = 25;
let ageDoe = 30;
let ageBoolean = ageJohn > ageDoe;
console.log(ageBoolean);
console.log(ageJohn >= ageAdult);
console.log(ageDoe <= ageAdult);

let q = 3;
let p = "3";
console.log(q == p); // loose equality
console.log(q === p); // strict equality

// not equal
// != loose not equal */
console.log(2 != 3); // true
// !== strict not equal */
console.log(2 !== 3); // true
