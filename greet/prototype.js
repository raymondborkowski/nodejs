var person = {
	firstname: '',
	lastname:'temp',
	greet: function(){
		return this.firstname + ' '+this.lastname;
	}
};

var john = Object.create(person);
john.firstname = 'John';
john['lastname'] = 'Doe';

var jane = Object.create(person);
jane.firstname = 'jane';
console.log(john.greet());
console.log(jane.greet());