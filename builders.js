const { builderItemCreator } = require('./utils');

const titleBuilder = builderItemCreator('Title Content', true, 'string');

const addBuilder = {
  title: titleBuilder,
  body: builderItemCreator('Body content', true, 'string'),
};

const removeBuilder = {
  title: titleBuilder,
};

const readNoteBuilder = {
  title: titleBuilder,
};

module.exports = {
  addBuilder,
  removeBuilder,
  readNoteBuilder
}