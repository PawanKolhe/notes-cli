const fs = require("fs");
const chalk = require("chalk");

const loadNotes = () => {
  let dataBuffer;
  try {
    dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const saveNotes = (notes) => {
  fs.writeFileSync("notes.json", JSON.stringify(notes));
};

// ADD
const addNote = (title, body) => {
  console.log("Title:", title);
  console.log("Body:", body);

  debugger;

  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);
  
  debugger;

  if (!duplicateNote || notes.length === 0) {
    notes.push({
      title,
      body,
    });
    saveNotes(notes);
    console.log(chalk.green("Note added!"));
  } else {
    console.log(chalk.red("Note title already exists!"));
  }
};

// REMOVE
const removeNote = (title) => {
  console.log("Title:", title);

  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title === title);

  if (notes.length !== notesToKeep.length) {
    saveNotes(notesToKeep);
    console.log(chalk.yellow("Note removed."));
  } else {
    console.log(chalk.red("Note does not exist."));
  }
};

// LIST
const listNotes = () => {
  console.log(chalk.bold("YOUR NOTES:"));

  const notes = loadNotes();
  notes.forEach((note) => {
    console.log(chalk.blue(note.title));
  });
};

// VIEW
const viewNote = (title) => {
  console.log("Title:", title);

  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);

  if (note !== undefined) {
    console.log(chalk.bold.magentaBright(note.title));
    console.log(chalk.cyanBright(note.body));
  } else {
    console.log(chalk.red("Note not found."));
  }
};

module.exports = {
  addNote,
  removeNote,
  listNotes,
  viewNote,
};
