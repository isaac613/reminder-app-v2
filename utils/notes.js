const fs = require("fs");

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("src/notes.json");
    console.log(dataBuffer);
    const notesJson = dataBuffer.toString();
    console.log(notesJson);
    return JSON.parse(notesJson);
  } catch (error) {
    return [];
  }
};

const saveNotes = (allNotes) => {
  console.log(allNotes);
  const notesJson = JSON.stringify(allNotes);
  console.log(notesJson);
  fs.writeFileSync("src/notes.json", notesJson);
};

const addNote = (myNote) => {
  const allNotes = loadNotes();
  console.log(allNotes);
  allNotes.push({ reminder: myNote });

  saveNotes(allNotes);
  console.log(saveNotes);
};

const listNotes = () => {
  const allNotes = loadNotes();

  allNotes.map((note) => {
    console.log(note);
  });
};

const removeNotes = (noteToDelete) => {
  const allNotes = loadNotes();

  const notesToKeep = allNotes.filter((note) => {
    return note.reminder != noteToDelete;
  });
  saveNotes(notesToKeep);
};
module.exports = {
  addNote,
  listNotes,
  removeNotes,
};
