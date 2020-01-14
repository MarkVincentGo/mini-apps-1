const model = require('./model.js')

const controller = {}

controller.TBpost = (req, res) => {
  let text = req.body.text
  if (text[text.length - 1] === ';') {
    text = text.substring(0, text.length - 1)
  }
  let parsedObj = JSON.parse(text);
  res.send(model.csvfy(parsedObj));
}

controller.FPpost = (req, res) => {
  var text = req.body
  console.log(text)
  res.send(model.csvfy(text))
}

module.exports = controller;