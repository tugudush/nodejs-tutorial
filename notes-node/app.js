console.log('starting app.js');

const notes = require('./notes.js');
const math = require('./math.js');

notes.add_note();

var a = 5;
var b = 6;

var sum = math.add(a, b);
console.log(`${a} + ${b} = ${sum}`);
