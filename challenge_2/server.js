// SERVER SETUP ==================================
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const body = require('body-parser');
const fs = require('fs');
const controller = require('./server/controller.js')

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'client')));

app.use(morgan('dev'));
app.use(body.json());

app.post('/textBox', controller.TBpost);
app.post('/filePicker', controller.FPpost);

app.listen(PORT, console.log(`APP is listening on port ${PORT}`));

