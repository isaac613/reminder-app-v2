const command = process.argv[2];
const yargs = require("yargs");
const { addNote, listNotes, removeNotes } = require("../utils/notes");

console.log(process.argv);
console.log(yargs.argv);

/* if (process.argv[2] == "Isaac") {
  console.log("hey that's my name");
} else {
  console.log("That's not my name");
}
*/

if (command == "add") {
  console.log(" adding a note");
  addNote(yargs.argv.note);
} else if (command == "list") {
  console.log("fetching notes...");
  listNotes();
} else if (command == "remove") {
  console.log("removing note...");
  removeNotes(yargs.argv.note);
} else {
  console.log("command not recognized");
}
