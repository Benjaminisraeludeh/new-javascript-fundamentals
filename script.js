// alert("hello world");
// console.log("temitope is my friend");
// console.log(40 + 23 + 10);
// console.log(5 ** 5);

// // let firstName = "Adams";
// // console.log(firstName);

// let gravity = 9.81;
// const boilingPoint = 100;
// console.log(gravity, boilingPoint);

// let age = 20; // declaring age
// console.log(age);
// age = 21; // re-assigning age
// console.log(age);

// let fruit = "banana";
// console.log(fruit);
// fruit = "mango";
// console.log(fruit);

// //const
// const city = "Lagos";
// console.log(city);

// // const yearofBirth = 2000;
// // const PI = 3.14;
// // console.log(yearofBirth, PI);

// // var
// var country = "Nigeria";
// console.log(country);
// country = "Ghana";
// console.log(country);

// // data types

// // const a = "A";
// // const b = "javaScript is an amazing language";
// // console.log(b);
// // const c = `we can also use backticks to create string`;
// // console.log(c);

// //boolean
// const no = false;
// const yes = true;
// console.log(yes, no);
// console.log(2 > 3);

// // const myObject = {
// //   firstName: "Adams",
// //   lastName: "Temitope",
// //   age: 23,
// //   gender: "female",
// //   isMarried: false,
// // };
// // console.log(myObject);

// // checking data types
// console.log(typeof "Adams"); // string
// console.log(typeof 23); // number
// console.log(typeof true); // boolean
// console.log(typeof null); // object
// console.log(typeof undefined); // undefined
// console.log(typeof {}); // object
// console.log(typeof []); // object
// console.log(typeof 2 > 4);

// //operators
// //arithmetic operators
// //addition
// let a = 10;
// let b = 5;
// let c = a + b;
// console.log(c);
// //subtraction
// const sellingPrice = 750;
// const costPrice = 500;
// const profitValue = sellingPrice - costPrice;
// console.log(profitValue);

// // calculating the area of a circle
// const PI = 3.14;
// let radius = 100;
// let areaOfCircle = PI * radius * radius;
// console.log(areaOfCircle);

// // string concatenation
// let word_1 = "Hello";
// let word_2 = "World";
// console.log(word_1 + " " + word_2);

// let firstName = "Adams";
// let lastName = "Temitope";
// let fullName = firstName + " " + lastName;
// console.log(fullName);

// console.log("My" + " name is " + " " + fullName + " ");

// // 2. assignment operators
// let d = 2 + 5 + 8 - 2;
// console.log("first", d);

// d += 10;
// console.log("second", d);
// d -= 5;
// console.log("third", d);
// d *= 2;
// console.log("fourth", d);
// d /= 4;
// console.log("fifth", d);
// d %= 3;
// console.log("sixth", d);

// // 3. comparison operators
// const ageAdult = 18;
// let ageJohn = 25;
// let ageDoe = 30;
// let ageBoolean = ageJohn > ageDoe;
// console.log(ageBoolean);
// console.log(ageJohn >= ageAdult);
// console.log(ageDoe <= ageAdult);

// let q = 3;
// let p = "3";
// console.log(q == p); // loose equality
// console.log(q === p); // strict equality

// // not equal
// // != loose not equal */
// console.log(2 != 3); // true
// // !== strict not equal */
// console.log(2 !== 3); // true

// 4. logical operators
// && ampersand (AND)
// || pipe (OR)
// !exclamation(NOT)
// comparison operator && comparison operator
//< && >
let personsAge_1 = 20;
if (personsAge_1 > 18 && personsAge_1 < 30) {
  console.log("old");

  //true and true = true
  //true and false = false
  //false and true = false
  //false and false = false
}

// || pipe (OR)
let personsAge_2 = 30;
if (personsAge_2 > 18 || personsAge_2 > 20) {
  console.log("young");

  //true or true = true
  //true or false = true
  //false or true = true
  //false or false = false
}

// !exclamation(NOT)
let personsAge_3 = 30;
if (!(personsAge_3 > 40)) {
  console.log("not young");

  // !(true) = false
  // !(false) = true
}

// unary operators
//++; increment
// let x = 5;
// x++;
// console.log(x);

// // post increment
// let y = 10;
// y++;
// console.log(y);
// //pre increment
// let z = 15;
// ++z;
// console.log(z);

// //--;  decrement
// x--;
// console.log(x);

// // post decrement
// let w = 10;
// w--;
// console.log(w);

// // pre decrement
// let v = 15;
// --v;
// console.log(v);

// // typeof
// let firstName = "Adams";
// console.log(typeof firstName);
// // delete
// delete firstName;
// console.log(typeof firstName);
// const person = { 10: "Adams", 20: "Temitope", 30: "John" };
// console.log(person);
// delete person[20];
// console.log(person);
// // ternary operator
// let age = 18;
// let canVote = age >= 18 ? "yes" : "no";
// console.log(canVote);

// let gender = "female";
// canDrive = gender === "female" ? console.log("female") : console.log("no");

// //strings and template literals
// const firstName1 = "Adams";
// const lastName1 = "Temitope";
// const country = "Nigeria";
// const city = "Lagos";
// const birthYear = 2000;
// const currentYear = 2025;
// const isMarried = true;
// const job = "developer";
// const age1 = currentYear - birthYear;
// // traditional way of string concatenation
// console.log(
//   "I am " + firstName1 + " " + lastName1 + ". I am " + age1 + " years old."
// );
// console.log("I live in " + city + ", " + country + ". I am a " + job + ".");
// // using template literals
// console.log(`I am ${firstName1} ${lastName1}. I am ${age1} years old.`);
// console.log(`I live in ${city}, ${country}. I am a ${job}.`);

// // creating a multiline string using template literals
// console.log(`I am ${firstName1} ${lastName1}.
// I am ${age1} years old.
// I live in ${city}, ${country}.
// I am a ${job}.`);

// control structures
// 1. conditional statements
// a. if...else statement
// let age2 = 17;
// if (age2 >= 18) {
//   console.log("You are an adult.");
// } else {
//   console.log("You are a minor.");
// }
const age = 17;
const isOldEnough = age >= 18;
if (isOldEnough) {
  console.log("You are old enough to drive.");
} else {
  console.log(
    "You are not old enough to drive.you need to wait for " +
      (18 - age) +
      " years."
  );
}

const birthYear = 2004;
if (birthYear >= 2007) {
  console.log("you are a Gen Z baby");
} else {
  console.log("you are a millenial");
}

// b. else if statement
let score = 00;
// possible conditions
// 1. 0-39 = f
// 2. 40-49 = d
// 3. 50-59 = c
// 4. 60-69 = b
// 5. 70-100 = a
if (score >= 0 && score <= 39) {
  console.log(" grade F");
} else if (score >= 40 && score <= 49) {
  console.log(" grade D");
} else if (score >= 50 && score <= 59) {
  console.log(" grade C");
} else if (score >= 60 && score <= 69) {
  console.log(" grade B");
} else if (score >= 70 && score <= 100) {
  console.log(" grade A");
} else {
  console.log("invalid score");
}
