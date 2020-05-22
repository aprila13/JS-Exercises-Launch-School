//1. Write a dynamic greeter program named greeter.js. The program should ask for your name, then output Hello, {name}! where {name} is the name you entered:

// $ node greeter.js
// What is your name? Sue
// Hello, Sue!

//Run in terminal using readline sync
let rlSync = require('readline-sync');
let name = rlSync.question('What is your name?\n');
console.log(`Hello, ${name}`);

//Run in browser
let name = prompt('What is your name?\n');
console.log(`Hello, ${name}`);


//2. Modify the greeter.js program to ask for the user's first and last names separately, then greet the user with their full name.

// $ node greeter.js
// What is your first name? Sue
// What is your last name? Roberts
// Hello, Sue Roberts!

//Run in terminal using readline sync
let rlSync = require('readline-sync');
let firstName = rlSync.question('What is your first name?\n');
let lastName = rlSync.question("What is your last name? \n");
console.log(`Hello, ${firstName} ${lastName}!`);

//Run in browser
let firstName = prompt("What is your first name?");
let lastName = prompt("What is your last name?");
console.log(`Hello, ${firstName} ${lastName}!`);
alert(`Hello, ${firstName} ${lastName}!`);


//3. Modify the age.js program you wrote in the exercises for the Variables chapter. The updated code should ask the user to enter their age instead of hard-coding the age in the program. Here's an example run:

// How old are you? 22
// You are 22 years old.
// In 10 years, you will be 32 years old.
// In 20 years, you will be 42 years old.
// In 30 years, you will be 52 years old.
// In 40 years, you will be 62 years old.


let rlSync = require('readline-sync');
let age = Number(rlSync.question("How old are you?\n"));
console.log(`You are ${age} years old.`);
console.log(`In 10 years you will be ${age + 10}.`);
console.log(`In 20 years you will be ${age + 20}.`);
console.log(`In 30 years you will be ${age + 30}.`);
console.log(`In 40 years you will be ${age + 40}.`);