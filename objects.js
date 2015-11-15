var person = {
	firstname : 'Ray',
	lastname: 'Borkowski',
	greet: function(){
		console.log('Hello, ' + this.firstname + ' ' + this.lastname);
	}
};

person.greet();

console.log(person['lastname']);