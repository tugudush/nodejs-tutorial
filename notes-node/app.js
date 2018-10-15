console.log('starting app...');
const fs = require('fs');

// Option 1
/*
fs.appendFile('greetings.txt', 'Hello world!\r\n', function(err) {
  if(err) {
    console.log('Unable to write to file!');
  }
});
*/

// Option 2
fs.appendFileSync('greetings.txt', 'Hello world!\r\n');