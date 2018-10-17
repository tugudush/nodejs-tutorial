console.log('starting notes.js');

const fs = require('fs');
const os = require('os');
const moment = require('moment');

var now = moment();

var add_note = function(title, body) {  
  console.log(`Title: ${title}`);
  console.log(`Body: ${body}`);
}; // End of module.exports.add_note = function()

var list_notes = function() {
  
}; // End of var list_notes = function()

var read_note = function(title) {
  console.log(`Title: ${title}`);
}; // End of var read_note = function(title)

var remove_note = function(title) {
  console.log(`Title: ${title}`);
}; // End of var remove_note = function(title)

module.exports = {
  add_note,
  list_notes,
  read_note,
  remove_note
};