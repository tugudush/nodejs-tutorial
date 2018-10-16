console.log('starting notes.js');

const fs = require('fs');
const os = require('os');
const moment = require('moment');

var user = os.userInfo();
var username = user.username;
var now = moment();

module.exports.add_note = function() {
  console.log('adding note to greetings.txt');
  fs.appendFileSync('greetings.txt', `Hi ${username}! Today is ${now}.\r\n`);
}; // End of module.exports.add_note = function()