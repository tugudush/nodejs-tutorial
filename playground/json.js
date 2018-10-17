const fs = require('fs');

var original_note = {
  title: 'Some Title',
  body: 'Some body'
};

var original_note_string = JSON.stringify(original_note);

fs.writeFileSync('notes.json', original_note_string);

var note_string = fs.readFileSync('notes.json');
var note = JSON.parse(note_string);

console.log('typeof note:', typeof note);
console.log('note:', note);
console.log(`title: ${note.title}`);
console.log(`body: ${note.body}`);