const helpers = require('./helpers.js')

//I consider this the model because it is the source of truth (where were get the actual string for the csv report)

const model = {};

model.csvfy = (object) => {
  return helpers.turn2CSV(object).join('')
}

module.exports = model;