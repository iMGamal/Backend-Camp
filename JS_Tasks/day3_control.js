voter = (age) => {
	if (age >= 18) {
		return "Eligible";
	}
	else {
		return "Ineligible";
	}
}

console.log(voter(17));
console.log(voter(19));

day = (number) => {
	switch (number) {
		default:
			return "Invalid input";
			break;
		case 1:
			return "Saturday";
			break;
		case 2:
			return "Sunday";
			break;
		case 3:
			return "Monday";
			break;
		case 4:
			return "Tuesday";
			break;
		case 5:
			return "Wednesday";
			break;
		case 6:
			return "Thursday";
			break;
		case 7:
			return "Friday";
			break;
	}
	}

console.log(day(1));

let array = ["Ichraf", "Youssef", "Ziad", "Ahmed", "Ziad"];
for (let i = 0; i < array.length; i++) {
	console.log(array[i]);
}

let count = 1;

while (count < 11) {
	console.log(count);
	count++;
}

even = array => {
	for (let i = 0; i < array.length; i++) {
		if (array[i] % 2 === 0) {
			console.log(`${array[i]} is even`);
		}
		else {
			console.log(`${array[i]} is odd`);
		}
	}
	return "Done";
}

console.log(even([0, 1, 2, 3, 4, 5, 6]));
