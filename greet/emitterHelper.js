var Emitter = require('events');
var Config = require('./nodeEventEmitter').events;

var emtr = new Emitter();

emtr.on(Config.GREET,function(){
	console.log('Somewhere, someone said hello.');
});

emtr.on(Config.GREET,function(){
	console.log('A greeting occured!');
});

console.log('Hello!');
emtr.emit(Config.GREET);