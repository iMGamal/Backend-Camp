class Book {
	constructor(title, author, year, genre) {
		this.title = title;
		this.author = author;
		this.year = year;
		this.genre = genre;
	} 
}

class BookList {
	constructor() {
		this.list = [];
	}

	add(title, author, year, genre) {
		let addbook = new Book(title, author, year, genre)
		this.list.push(addbook);
		return addbook;
	}

	display() {
		return this.list;
	}

	update(title, changes) {
		const updatebook = this.list.find(book => book.title === title);
		if (updatebook) {
			Object.assign(book, changes);
			return book;
		}
	}

	del(title) {
		const index = this.list.findIndex(book => (title) => book.title === title);
		if (index !== -1) {
			return this.list.splice(index, 1)[0];
		}
		return null;
	}
}

let list = new BookList;
list.add("bepo", "345", "1234", "fire");
console.log(list);
