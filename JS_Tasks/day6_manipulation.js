class Student {
	constructor(firstname, id, location) {
		this.firstname = firstname;
		this.id = id;
		this.location = location;
	}

	getListStudents() {
		return `${this.firstname}, id: ${this.id}, ${this.location}`;
	}

	getListStudentIds() {
		return `${this.id}`
	}

	getStudentsByLocation() {
		return `${this.location}`
	}

	getStudentsIdsSum() {
		for (let sum in Student.id) {
			sum += `${this.id}`;
		}
		return sum;
	}


}

const students = [new Student("Ziad", 1, "San Francisco"), new Student("James", 2, "Columbia"), new Student("Serena", 5, "San Francisco")]

students.forEach(student => {
	console.log(student.getListStudents());
});

students.map(student => {
	console.log(student.getListStudentIds());
});

students.forEach(student => {
	console.log(student.getStudentsIdsSum());});
