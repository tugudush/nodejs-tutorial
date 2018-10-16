console.log('starting app.js');

const notes = require('./notes.js');
const math = require('./math.js');
const _ = require('lodash');

notes.add_note();

var a = 5;
var b = 6;

var sum = math.add(a, b);
console.log(`${a} + ${b} = ${sum}`);

var string_test = "hey";
console.log(`is ${string_test} a string? ${_.isString(string_test)}`);

var array = ['hi', 'hello', 1, 2, 3, 'hi', 2];
console.log(`array: ${array}`);

var filtered_array = _.uniq(array);
console.log(`filtered_array: ${filtered_array}`);

console.log(process.argv);

var command = process.argv[2];

if (command === 'add') {
  console.log('Adding new note');
} // End of if (command === 'add')

else if (command === 'list') {
  console.log('Listing all notes');
} // End of else if (command === 'list')

else if (command === 'read') {
  console.log('Reading note')
} // End of else if (command === 'read')

else if (command === 'remove') {
  console.log('Removing note');
} // End of else if (command === 'remove')

else {
  console.log('Command is not recognized')
}