// 1. Concatenate two or more strings, one with your first name and one with your last, to create a string with your full name as its value. For example, if your name is John Doe, think about how you can put 'John' and 'Doe' together to get 'John Doe'.

let firstName = 'April';
let lastName = 'Craig';
console.log(firstName + ' ' + lastName)

//#2 was skipped.  Didn't understand the question

//Identify the data type for each of the following values:
// 'true'
// false
// 1.5
// 2
// undefined
// { foo: 'bar' }

console.log(typeof 'true')  // "string"
console.log(typeof false)  // "boolean"
console.log(typeof 1.5)  // "number"
console.log(typeof 2)  // "number"
console.log(typeof undefined)  // "undefined"
console.log(typeof { foo: 'bar' })  // "object"


//4. Given the code below, identify which lines are statements and which are expressions:
var foo;    // statement
foo = 5;    // expression
foo;        // expression


//5. Explain why this code logs '510' instead of 15. 
console.log('5' + 10); // 510
//Due to implicit type coercion, since '5' is a string JS converts 10 to a string as well and concatenates.


//6. Refactor the code from the previous exercise to use explicit coercion, so it logs 15 instead.
console.log(Number('5') + 10) // 15


//7. Use the template literal syntax along with the expression Number('5') + 10 to log the following sentence to the console: The value of 5 + 10 is 15.
console.log(`The value of 5 + 10 is ${Number('5') + 10}.`)


//8. Will an error occur if you try to access an array element with an index that is greater than or equal to the length of the array? For example:

var foo = ['a', 'b', 'c'];
foo.length;  // returns 3
foo[3]; //returns undefined

//9. Create an array named names that contains a list of pet names.
let names = ['asta', 'butterscotch', 'pudding', 'neptune', 'darwin']


//10. Create an object named pets that contains a list of pet names and the type of animal.
let pets = {
  asta: 'dog',
  butterscotch: 'cat',
  pudding: 'cat',
  npetune: 'fish',
  darwin: 'lizard'
  }

//11. What value does the following expression evaluate to? 
'foo' === 'Foo'; // false


// 12. What value does the following expression evaluate to?
parseInt('3.1415') // 3


//13. What value does the following expression evaluate to?
'12' < '9';
// This question is a bit tricky: the expression evaluates as true since the operands are strings, not numbers. When you compare two strings, JavaScript performs a character-by-character comparison going from left to right, so on the first comparison, it determines that '1' < '9', so '12' must be less than '9'.'

// Had you used numbers instead, the expression would evaluate as false.