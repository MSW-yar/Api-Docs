const EventEmitter = require('events');
const uuid = require('uuid');

// console.log(uuid.v4());
// console.log(uuid.v4());
// console.log(uuid.v4());
// console.log(uuid.v4());


class Logger extends EventEmitter {
    log(msg){
        this.emit('message', { id: uuid.v4(), msg})
    }
}
const logger =  new Logger();

logger.on('message', (data)=> console.log('called listener', data))

logger.log('hello ')
