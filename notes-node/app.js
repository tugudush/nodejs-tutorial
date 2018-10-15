console.log('starting app.js');
const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var user = os.userInfo();
console.log(user);
var username = user.username;


// Option 1
/*
fs.appendFile('greetings.txt', 'Hello world!\r\n', function(err) {
  if(err) {
    console.log('Unable to write to file!');
  }
});
*/

// Option 2
fs.appendFileSync('greetings.txt', `Hello ${username}!\r\n`);
fs.appendFileSync('greetings.txt', `You are ${notes.age} years old.\r\n`);