// SERVER SETUP ==================================
var express = require('express');
var morgan = require('morgan');
var path = require('path');
var body = require('body-parser');

var app = express();
var PORT = 3000;

app.use(express.static(path.join(__dirname, 'client')));

app.use(morgan('dev'));
app.use(body.json());


app.get('/ponies', (req, res) => {
  console.log('whaddup beotch')
})





app.listen(PORT, console.log(`APP is listening on port ${PORT}`))


// REQUEST HANDLERS ===============================
//controller?
//handle post requests
const controller = {}
controller.post = (req, res) => {
  let text = req.body.text
  if (text[text.length - 1] === ';') {
    text = text.substring(0, text.length - 1)
  }
  let parsedObj = JSON.parse(text)
}

app.post('/ponies', controller.post)

  //view?


  //model?