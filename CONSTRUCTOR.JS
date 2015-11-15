function Person(firstname,lastname){
	this.firstname = firstname;
	this.lastname = lastname;
};
Person.prototype.greet = function(){
	console.log('hello '+this.firstname + ' ' + this.lastname);
};
var ray = new Person('RaY','BORKOWSKI');
ray.greet();
console.log(ray.__proto__);