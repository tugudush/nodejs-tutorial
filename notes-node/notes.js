console.log('starting notes.js');

const fs = require('fs');
const os = require('os');

var user = os.userInfo();
var username = user.username;

module.exports.add_note = function() {
  console.log('adding note to greetings.txt');
  fs.appendFileSync('greetings.txt', `Hello ${username}!\r\n`);
}; // End of module.exports.add_note = function()