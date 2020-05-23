const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

yargs.version('1.2.0');

// ADD note
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => {
    notes.addNote(argv.title, argv.body);
  }
});

// REMOVE note
yargs.command({
  command: 'remove',
  describe: 'Remove note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => {
    notes.removeNote(argv.title, argv.body);
  }
});

// LIST note
yargs.command({
  command: 'list',
  describe: 'List note',
  handler: () => {
    notes.listNotes();
  }
});

// READ note
yargs.command({
  command: 'read',
  describe: 'Read note',
  handler: (argv) => {
    notes.readNote(argv.title);
  }
});

yargs.parse();
// console.log(yargs.argv);