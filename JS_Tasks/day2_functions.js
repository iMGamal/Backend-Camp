// Function Declaration is fully hoisted unlike the others
console.log(greetings("Sandro"));

// Function Declaration
function greetings(name) {
	return `Hello, ${name}`;
}

// Function Expression
let send = function greet(name) {
	return `Hello, ${name}`;
}

// Arrow Function
greeting = name => `Hello, ${name}`;

console.log(greetings("Alice"));
console.log(send("Bobby"));
console.log(greeting("Shohei"));

// Function that takes an array an returns its largest element
function max_element(array) {
	let temp = 0;
	if (array.length === 0) {
		return null;
	}
	else {
		for (let i = 0; i < array.length; i++) {
			if (array[i] > temp) {
				temp = array[i];
			}
		}
	}
	return temp;
}

console.log(max_element([7, 9, 8, 17, 10]));

// Function that returns sum of its input using Declaration
function total(a, b) {
	return a + b;
}

console.log(total(7, 12));

// Function that returns sum of its input using Arrow
totality = (a, b) => a + b;

console.log(totality(7, 12));
