console.log('starting notes.js');

const fs = require('fs');
const os = require('os');
const moment = require('moment');

var now = moment();

var allow_duplicates = true;

var add_note = function(title, body) {
  console.log(`Title: ${title}`);
  console.log(`Body: ${body}`);

  var notes = [];

  var note = {
    title,
    body
  };
  
  var notes_string = '';
  
  try {
    notes_string = fs.readFileSync('notes.json', 'utf8');
  } catch(e) {
    //console.log(e.stack);
    fs.writeFileSync('notes.json', '[]');
    notes_string = fs.readFileSync('notes.json', 'utf8');
  } 

  console.log('notes_string:', notes_string);

  if (notes_string) {
    var notes = JSON.parse(notes_string);
  } else {
    fs.writeFileSync('notes.json', '[]');
  } // End of if (notes_string)

  var duplicate_notes = notes.filter(function(note) {
    return note.title === title;
  });

  //var duplicate_notes = notes.filter((note) => note.title === title);

  console.log('duplicate_notes:', duplicate_notes.length);
  console.log(`allow_duplicates: ${allow_duplicates}`)

  if (allow_duplicates) {
    notes.push(note);
    console.log('new notes:');
    console.log(notes);  
    fs.writeFileSync('notes.json', JSON.stringify(notes, null, 2));
  } // End of if (allow_duplicate)

  else {
    if (duplicate_notes.length == 0) {
      notes.push(note);
      console.log('new notes:');
      console.log(notes);
      fs.writeFileSync('notes.json', JSON.stringify(notes, null, 2));
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

var save_note = function() {

} // End of var save_note = function()

module.exports = {
  add_note,
  list_notes,
  read_note,
  remove_note
};