const fs = require('fs');

var content;

fs.readFile('test.txt', 'utf8', function(err, data) {
  if (err) {
    throw err;
  } else {
    content = data;
    console.log(content);
  }
}); // End of var notes_string = fs.readFilec('notes.json', function(err, data) {
//console.log('notes_string', notes_string);