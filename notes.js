console.log('starting notes.js');

const fs = require('fs');
const moment = require('moment');

var now = moment();

var allow_duplicates = false;

var add_note = function(title, body) {  

  var notes = [];

  var note = {
    title,
    body
  };
  
  var notes_string = fetch_notes();   

  //console.log('notes_string:', notes_string);

  notes = parse_notes(notes_string);

  var duplicate_notes = notes.filter(function(note) {
    return note.title === title;
  });

  //var duplicate_notes = notes.filter((note) => note.title === title);

  console.log('duplicate_notes:', duplicate_notes.length);
  console.log(`allow_duplicates: ${allow_duplicates}`)

  if (allow_duplicates) {
    notes.push(note);
    save_notes(notes);
  } // End of if (allow_duplicate)

  else {
    if (duplicate_notes.length == 0) {
      notes.push(note);
      save_notes(notes);
    } else {
      console.log(`note with title "${title}" already exists`);
    } // End of if (duplicate_notes.length == 0)
  } // End of else if (!allow_duplicate)  
  
}; // End of var add_note = function(title, body)

var list_notes = function() {
  
}; // End of var list_notes = function()

var read_note = function(title) {
  console.log(`Title: ${title}`);
}; // End of var read_note = function(title)

var remove_note = function(title) {
  console.log(`Title: ${title}`);
}; // End of var remove_note = function(title)

var fetch_notes = function() {
  var notes_string = '';
  
  try {
    notes_string = fs.readFileSync('notes.json', 'utf8');
  } catch(e) {
    console.log(e.stack);
    fs.writeFileSync('notes.json', '[]');
    notes_string = fs.readFileSync('notes.json', 'utf8');
  }

  return notes_string;
} // End of var fetch_notes = function()

var parse_notes = function(notes_string) {
  var notes = [];

  if (notes_string) {
    notes = JSON.parse(notes_string);
    console.log('notes_string is not empty');
  } else {
    fs.writeFileSync('notes.json', '[]');
    console.log('notes_string is empty, adding square brackets!');
  } // End of if (notes_string)

  return notes;
} // End of var parse_notes = function(note_string)

var save_notes = function(notes) {
  fs.writeFileSync('notes.json', JSON.stringify(notes, null, 2));
} // End of var save_note = function()

module.exports = {
  add_note,
  list_notes,
  read_note,
  remove_note
};