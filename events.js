const http = require('http');
const events = require('events');
const eventEmitter = new events.EventEmitter()

// const server = http.createServer((req, res) => {
// })

// creating an event handler
const chitKarDibo = () => {
    console.log('oi beta koi tui ? ');
}

// assign the handler into an event
eventEmitter.on('scream',chitKarDibo).chitKarDibo

// filtering an event
eventEmitter.emit('scream')


// const PORT = 5000;
// server.listen(PORT);
// console.log(`server is running at ${PORT}`);