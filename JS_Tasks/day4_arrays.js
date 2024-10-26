let array = [0, 17, 1, 23, 2, 36, 3, 43, 4, 5, 6, 7, 8, 9, 10];
console.log("Original: ", array);

array.push(11);
console.log("New version: ", array);

array.pop(5);
console.log("Back to the original: ", array);

array.forEach((value, index) => {
	console.log(`At index ${index}: ${value}`);
});

even_only = (array) => {
	let new_array = [];
	for (let i = 0; i < array.length; i++) {
		if (array[i] % 2 === 0) {
			new_array.push(array[i]);
		}
	}
	return new_array;
}

console.log(even_only(array));

sort = array => {
	let temp = 0;
	for (let i = 0; i < array.length; i++) {
		for (let j = i + 1; j < array.length; j++) {
			if (array[i] > array[j]) {
				temp = array[j];
				array[j] = array[i];
				array[i] = temp;
		}
	}
	
	}
	return array;
}

console.log(sort(array));
