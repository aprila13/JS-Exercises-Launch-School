//1. What values do the following expressions evaluate to?

//Expression	Value
false || (true && false)	false
true || (1 + 2)	true
(1 + 2) || true	3
true && (1 + 2)	3
false && (1 + 2)	false
(1 + 2) && true	true
(32 * 4) >= 129	false
false !== !true	false
true === 4	false
false === (847 === '847')	true
false === (847 == '847')	false
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false	true
// Remember that expressions involving the logical operators of || and && use short-circuit evaluation; they also return truthiness values.

// The last expression needs some explanation:

// !true is false
// !(100 / 5) === 20) is also false because !(100 / 5) is a boolean value, and === always returns false when the operands have different types.
// ((328 / 4) === 82) is true
// Put together, items 1-3 combine with || as (false || false || true), which is true.
// Using the value from item 4 results in true || false, which is true.



//2. Write a function, evenOrOdd, that determines whether its argument is an even number. If it is, the function should log 'even' to the console; otherwise, it should log 'odd'. For now, assume that the argument is always an integer.
function evenOrOdd(num){
  if(num % 2 === 0){
    console.log(`${num} is an even number`);
  } else {
    console.log(`${num} is an odd number`);
  }
}

evenOrOdd(4)


//3. Let's improve our previous implementation of evenOrOdd. Add a validation check to ensure that the argument is an integer. If it isn't, the function should issue an error message and return.
function evenOrOdd(number) {
  if (!Number.isInteger(number)) {
    console.log('Sorry, the value you passed is not an integer');
    return;
  }

  if (number % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

//4. What does the following code log to the console, and why?

function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113'); //Logs everything since there aren't any break statements


// 5. Refactor this statement to use an if statement instead.
return foo() ? 'bar' : qux();

if (foo()) {
  return 'bar';
} else {
  return qux();
}

//6. What does this code output to the console?
function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
   console.log('Empty');
  }
}

isArrayEmpty([]);   // [] is an empty Array

// The output is Not Empty since, while the array is empty—it has no elements and the .length property is 0—it isn't falsy. Thus, JavaScript executes the if (arr) branch of the if statement.


// 7. Write a function that takes a string as an argument and returns an all-caps version of the string when the string is longer than 10 characters. Otherwise, it should return the original string. Example: change 'hello world' to 'HELLO WORLD', but don't change 'goodbye'.
function stringUpperCase(str){
  if(str.length > 10){
     return str.toUpperCase();
  } else {
    return str;
  }
}
stringUpperCase('girl');

//With ternary operator
function stringUpperCase(str){
  return ((str.length > 10) ? str.toUpperCase() : str);
}
stringUpperCase('girl');


//8. Write a function that logs whether a number is between 0 and 50 (inclusive), between 51 and 100 (inclusive), greater than 100, or less than 0.
function numberRange(number) {
  if (number < 0) {
    console.log(`${number} is less than 0`);
  } else if (number <= 50) {
    console.log(`${number} is between 0 and 50`);
  } else if (number <= 100) {
    console.log(`${number} is between 50 and 100`);
  } else {
    console.log(`${number} is greater than 100`);
  }
}