class Book {
	constructor(title, author, year) {
		this.title = title;
		this.author = author;
		this.year = year;
	}

	summary() {
		return `${this.title} wrote by ${this.author} and published at ${this.year}`
	}

	display() {
		let index = [];
		for (let key in this) {
			if (this.hasOwnProperty(key)) {
				index.push(`${key}: ${this[key]}`);
			}
		}
		return index;
	}
}

const book1 = new Book("The Great Gatsby", "Fitzgerald", 1925);

console.log(book1.summary());
console.log(book1.display());

let books = [new Book("Harry Potter", "J.K. Rowling", "2003"),
	new Book("One Piece", "Eichiro Oda", 1997),
	new Book("Naruto", "Masashi Kishimoto", 1999),
	new Book("Dragon Ball", "Akira Toriyama", 1985),
	new Book("Jujutsu Kaisen", "Gege Akutami", 2018)];

function find(object, name) {
	for (let key of object) {
		if (name.toLowerCase() === key.title.toLowerCase()) {
			return key;
		}
	}
	return "Not found";
}

console.log(find(books, "Dragon Ball"));
