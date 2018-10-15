console.log('starting app.js');

const notes = require('./notes.js');
const math = require('./math.js');
const _ = require('lodash');

//notes.add_note();

var a = 5;
var b = 6;

var sum = math.add(a, b);
//console.log(`${a} + ${b} = ${sum}`);

var string_test = true;
console.log(`is ${string_test} a string? ${_.isString(string_test)}`);
