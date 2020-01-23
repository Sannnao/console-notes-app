const chalk = require("chalk");
const { loadNotes, saveNotes, isNoteExist, centerSign } = require("./utils.js");

const addNote = ({ title, body }) => {
  const notes = loadNotes();

  if (isNoteExist(notes, title)) {
    console.log(chalk.bgYellow.magenta("This title already exists!"));
  } else {
    notes.push({ title, body });

    debugger;

    saveNotes(notes);
    console.log(chalk.bgGreen.yellowBright("This note was successfull added!"));
  }
};

const removeNote = ({ title }) => {
  const notes = loadNotes();

  if (!isNoteExist(notes, title)) {
    console.log(chalk.bgRed.white("This title doesn't exist!"));
  } else {
    const newNotes = notes.filter(note => note.title !== title);

    saveNotes(newNotes);
    console.log(chalk.bgGreen.yellow("This note was successfull deleted!"));
  }
};

const listNotes = () => {
  const notes = loadNotes();

  const lengthesArr = notes.map(({ title }) => title.length);
  const maxTitleLength = Math.max(...lengthesArr);

  const header = "Your notes list:";
  const longestTitle = header.length > maxTitleLength ? header.length : maxTitleLength;
  const gutter = 3;

  const width = longestTitle + gutter;

  console.log(chalk.bgWhite.green.bold(centerSign(width, header)));

  notes.forEach(({ title }) => {
    console.log(chalk.bgWhite.magenta.bold(centerSign(width, title)));
  });
};

const readNote = ({ title }) => {
  const notes = loadNotes();

  if (!isNoteExist(notes, title)) {
    console.log(chalk.bgRed.white("This title doesn't exist!"));
  } else {
    notes.forEach(note => {
      if (note.title === title) {
        const gutter = 4;
        const width = (note.title.length > note.body.length ? note.title.length : note.body.length) + gutter;

        console.log(chalk.bgWhite.green.bold(centerSign(width, note.title)));
        console.log(chalk.bgWhite.magenta.bold(centerSign(width, note.body)));
      }
    });
  }
};

module.exports = { addNote, removeNote, listNotes, readNote };
