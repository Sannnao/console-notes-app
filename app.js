const yargs = require('yargs');
const { addNote, removeNote, listNotes, readNote } = require('./notes.js');
const { commandCreator, builderItemCreator } = require('./utils');

const addBuilder = {
  title: builderItemCreator('Title Content', true, 'string'),
  body: builderItemCreator('Body content', true, 'string'),
};

const removeBuilder = {
  title: builderItemCreator('Title Content', true, 'string'),
};

const readNoteBuilder = {
  title: builderItemCreator('Title Content', true, 'string'),
};

commandCreator('add', 'Add a new note', addNote, addBuilder);
commandCreator('remove', 'Removes a new note', removeNote, removeBuilder);
commandCreator('list', 'Print the notes list', listNotes);
commandCreator('read', 'Print the note\'s title and body', readNote, readNoteBuilder);

yargs.parse();
