// SERVER SETUP ==================================
var express = require('express');
var morgan = require('morgan');
var path = require('path');
var body = require('body-parser');

var app = express();
var PORT = 3000;

app.use(morgan('dev'));
app.use(body.json());

app.use(express.static(path.join(__dirname, 'client')));

app.get('/ponies', (req, res) => {
  console.log('whaddup beotch')
})

app.post('/ponies', (req, res) => {
  console.log('whaddupost beotchhh')
})




app.listen(PORT, console.log(`APP is listening on port ${PORT}`))


// REQUEST HANDLERS ===============================
  //controller?


  //view?


  //model?