// Difference between var, let and const:

// let is block-scoped and its variable can be re-assigned a different value
let value = 33;
value = 47;

// const is block-scoped and its variable can never be re-assigned
const fare = 27;
fare = 32; // This will cause a runtime error

// var is function-scoped and its variable can be re-assigned
var ticket = 23;
ticket = 17;

// "Hoisting" is when a declaration evaluates to the top of the program:

// in case of let and const their variable will be hoisted but can't be accessed
console.log(random);
console.log(stat);
console.log(today);
let random = 77;
const stat = 54;
var today = 24;
// Outputs Error as variable inittialization wasn't hoisted
// in case of var their variable can be accessed but outputs undefined

// Type "coercion" means combining data types using arithmetic operators:

console.log("17" + 13); // Outputs 1713 as + operator favors strings
console.log("17" - 13); // Outputs 4 as other operators favor numbers
console.log("11" == 11); // Outputs True as it follows what we already stated
console.log("11" === 11); // Outputs False as strict equality doesn't support coercion

// There are 3 types of operators:

// Arithmetic +, -, *, /, %, **
let x = 6;
let y  8;
console.log(x + y); // Outputs 14
console.log(y - x); // Outputs 2
console.log(x * y); // Outputs 48
console.log(x / y); // Outputs 0.75
console.log(x % y); // Outputs 2
console.log(x ** y); // Outputs 262144

// Comparison >, >=, <, <=, ===, !==
console.log(x > y); // Outputs False
console.log(y >= x); // Outputs True
console.log(x < y); // Outputs True
console.log(y <= x); // Outputs False
console.log(x === y); // Outputs False
console.log(y !== x); // Outputs True

// Logical &&, ||, !
const a = true;
const b = false;
console.log(a && b); // Outputs false
console.log(a || b); // Outputs true
console.log(!a); // Outputs false

function oddity(integer) {
	if (integer % 2 == 0) {
		console.log("Even");
	}
	else {
		console.log("Odd");
	}
}

function string_equality(str1, str2) {
	if (str1 === str2) {
		console.log("Equal");
	}
	else {
		console.log("Not equal");
	}
}
