const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const port = 3000;

const app = express();

app.use(express.static(path.join(__dirname, './public')));

app.use(morgan('dev'));
app.use(bodyParser.json());

app.get('/poop', (req, res) => {
  res.send('ITS ALIVEEEEEE!')
})

app.listen(port, console.log(`AYE YO ITS LISTENING ON PORT ${port}`));