//1. Write a program name greeter.js that greets 'Victor' three times. Your program should use a variable and not hard code the string value 'Victor' in each greeting. 
function greeter(name){
console.log("Good Morning, " + name);
console.log("Good Afternoon, " + name);
console.log("Good Evening, " + name);
}

greeter("Victor");


// 2. Write a program named age.js that includes someone's age and then calculates and reports the future age in 10, 20, 30 and 40 years. Below is the output for someone 20 years old.
function age(){
let currentAge = 20;
console.log("You are " + currentAge + " years old.");
console.log(`In 10 years, you will be ${currentAge + 10} years old.`);
console.log(`In 20 years, you will be ${currentAge + 20} years old.`);
console.log(`In 30 years, you will be ${currentAge + 30} years old.`);
console.log(`In 40 years, you will be ${currentAge + 40} years old.`);
}

age()

//3. What happens when you run the following program? Why do we get that result?

{
  let foo = 'bar';
}

console.log(foo); //error since foo is block scoped


//4. What happens when you run the following code? Why?

const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);
//The first 3 lines run then their is an error since constants cannot be reassigned.

//5. Take a look at this code snippet:

let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo); //'bar'
//The first foo variable is global scoped and the second foo variable is block scoped.  Since foo is logged outside of the object, only the first variable with global scope is accessible.

//6. Will this program produce an error when run? Why or why not?

const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO); //No error, for the same reason as above.