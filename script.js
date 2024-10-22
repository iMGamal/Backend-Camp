console.log("JavaScript is working!");

document.getElementById('about').innerHTML = '<p>This is my updated bio!</p>';

document.getElementById('contact').addEventListener('submit', function(event) {
	event.preventDefault();

	let name = document.getElementById('name').value;
	let email = document.getElementById('email').value;
	let message = document.getElementById('message').value;

	if (name && email) {
		message.textContent = "Form submitted successfully!";
		message.style.color = "red";
	}
});
