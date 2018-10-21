const fs = require('fs');
const moment = require('moment');

var now = moment().format('YYYY-MM-DD HH:mm A Z');
var allow_duplicates = false;

var add_note = function(title, body) {  

  var notes = [];

  var note = {
    title,
    body,
    date_added: now
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
    return note;
  } // End of if (allow_duplicate)

  else {
    if (duplicate_notes.length == 0) {
      notes.push(note);
      save_notes(notes);
      return note;
    } else {
      console.log(`note with title "${title}" already exists`);
    } // End of if (duplicate_notes.length == 0)
  } // End of else if (!allow_duplicate)  
  
}; // End of var add_note = function(title, body)

var list_notes = function() {  
  var notes_string = fetch_notes();
  var notes = parse_notes(notes_string);
  return notes;
}; // End of var list_notes = function()

var read_note = function(title) {
  console.log(`Input Title: ${title}`);
  var notes_string = fetch_notes();
  var notes = parse_notes(notes_string);
  var filtered_notes = notes.filter((note) => note.title == title);
  
  if (filtered_notes.length >= 1) {
    return filtered_notes[0];
  } // End of if (filtered_notes.length >= 1)

}; // End of var read_note = function(title)

var remove_note = function(title) {  
  var notes_string = fetch_notes();
  //console.log(`notes_string:\r\n ${notes_string}`);  

  var notes = parse_notes(notes_string);
  //console.log('notes:\r\n', notes);
  //console.log(`notes length: ${notes.length}`);

  var filtered_notes = notes.filter((note) => note.title !== title);
  //console.log('filtered_notes:\r\n', filtered_notes);
  //console.log(`filtered_notes length: ${filtered_notes.length}`);

  save_notes(filtered_notes);

  if (notes.length !== 0) {
    if (notes.length !== filtered_notes.length) {
      return true;
    } // End of if (notes.length !== filtered_notes.length)
  } // End of if (notes.length !== 0)  

}; // End of var remove_note = function(title)

var fetch_notes = function() {
  var notes_string = '';
  
  try {
    notes_string = fs.readFileSync('notes.json', 'utf8');
  } catch(e) {
    //console.log(e.stack);
    console.log('notes.json not found. creating file...');
    fs.writeFileSync('notes.json', '[]');
    notes_string = fs.readFileSync('notes.json', 'utf8');
  }

  return notes_string;
} // End of var fetch_notes = function()

var parse_notes = function(notes_string) {
  var notes = [];

  if (notes_string) {
    notes = JSON.parse(notes_string);
    //console.log('notes_string is not empty');
  } else {
    fs.writeFileSync('notes.json', '[]');
    //console.log('notes_string is empty, adding square brackets!');
  } // End of if (notes_string)

  return notes;
} // End of var parse_notes = function(note_string)

var save_notes = function(notes) {
  fs.writeFileSync('notes.json', JSON.stringify(notes, null, 2));
} // End of var save_note = function()

var log_note = function(note) {
  debugger;
  console.log('--');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
  console.log(`Dated Added: ${note.date_added}`);
} // End of var log_note = function(note)

module.exports = {
  add_note,
  list_notes,
  read_note,
  remove_note,
  log_note
};