const yargs = require('yargs');
const { addNote, removeNote, listNotes, readNote } = require('./notes.js');
const { commandCreator } = require('./utils');
const { addBuilder, removeBuilder, readNoteBuilder } = require('./builders');

commandCreator('add', 'Add a new note', addNote, addBuilder);
commandCreator('remove', 'Removes a new note', removeNote, removeBuilder);
commandCreator('list', 'Print the notes list', listNotes);
commandCreator('read', 'Print the note\'s title and body', readNote, readNoteBuilder);

yargs.parse();
