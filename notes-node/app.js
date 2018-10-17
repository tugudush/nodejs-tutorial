console.log('starting app.js');

const notes = require('./notes.js');
const _ = require('lodash');
const yargs = require('yargs');

const argv = yargs.argv;

//console.log('Process: ', process.argv);
console.log('Yargs:', argv);

//var command = process.argv[2];
var command = argv._[0];
console.log('command:', command);

if (command === 'add') {
  console.log('Adding new note');
  notes.add_note(argv.title, argv.body);
} // End of if (command === 'add')

else if (command === 'list') {
  console.log('Listing all notes');
  notes.list_notes();
} // End of else if (command === 'list')

else if (command === 'read') {
  console.log('Reading note')
  notes.read_note(argv.title);
} // End of else if (command === 'read')

else if (command === 'remove') {
  console.log('Removing note');
  notes.remove_note(argv.title);
} // End of else if (command === 'remove')

else {
  console.log('Command is not recognized')
}