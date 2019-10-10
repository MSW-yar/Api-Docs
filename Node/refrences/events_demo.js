const EvenEmitter = require('events');

class MyEvenEmitter extends EvenEmitter {}

const myEvenEmitter = new MyEvenEmitter();

myEvenEmitter.on('event', () => console.log('jdakddldkajl'));

myEvenEmitter.emit('event')