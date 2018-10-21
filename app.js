const notes = require('./notes.js');
const _ = require('lodash');
const yargs = require('yargs');

var title_options = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};

var body_options = {
  describe: 'Description of note',
  demand: false,
  alias: 'b'
};

const argv = yargs
  .command('add', 'Add a new note', {
    title: title_options,
    body: body_options
  })
  .command('list', 'List all notes')
  .command('read', 'Read a note', {
    title: title_options
  })
  .command('remove', 'Remove a note', {
    title: title_options
  })
  .help()
  .argv;
console.log('argv:', argv);

var command = argv._[0];
console.log('command:', command);

if (command === 'add') {
  console.log('Adding new note');
  var note = notes.add_note(argv.title, argv.body);
  if (note) {
    console.log('note successfully created');
    notes.log_note(note);
  } else {
    console.log('there was an error creating the note. check previous errors.');
  }
} // End of if (command === 'add')

else if (command === 'list') {
  console.log('Listing all notes');
  var all_notes = notes.list_notes();
  debugger;  
  console.log(`Printing ${all_notes.length} note(s)`);
  all_notes.forEach(note => notes.log_note(note));
} // End of else if (command === 'list')

else if (command === 'read') {
  console.log('Reading note')
  var note = notes.read_note(argv.title);

  if (note) {
    console.log('note found');
    notes.log_note(note);
  } else {
    console.log('note not found!');
  } // End of if (note)

} // End of else if (command === 'read')

else if (command === 'remove') {
  console.log('Removing note');
  var removed = notes.remove_note(argv.title);

  if (removed) {
    console.log('Note successfully removed.')  
  } else {
    console.log('Note not found or notes was initially empty.');
  }  
} // End of else if (command === 'remove')

else {
  console.log('Command is not recognized')
}