const fs = require('fs');
const yargs = require('yargs');

const commandCreator = (command, describe, handler, builder) => {
  yargs.command({
    command,
    describe,
    handler,
    builder,
  })
};

const builderItemCreator = (describe, demandOption, type) => {
  return {
      describe,
      demandOption,
      type
  }
};

const loadNotes = () => {
  try {
    const notesJSON = fs.readFileSync("notes.json", "utf-8");
    const notes = JSON.parse(notesJSON);

    return notes;
  } catch (e) {
    return [];
  }
};

const saveNotes = (notes) => {
  fs.writeFileSync("notes.json", JSON.stringify(notes));
}

const isNoteExist = (notes, title) => {
  return notes.some(note => note.title === title);
}

function centerSign(width, sign, gutter) {
  const containerArr = new Array(width);
  containerArr.fill(" ");

  const margin = gutter ? gutter : Math.floor((width - sign.length) / 2);

  containerArr.splice(margin, sign.length, ...sign.split(''));

  return containerArr.join('');
}

module.exports = {
  loadNotes,
  saveNotes,
  isNoteExist,
  commandCreator,
  builderItemCreator,
  centerSign,
}