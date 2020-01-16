const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const mysql = require('mysql')
const port = 3000;



// method to manipulate the incoming string
// controller =================================================
const dataTemplate = {
  name: 'Mark',
  email: 'markvfgo',
  password: 'Mark',
  address_line_1: 'Mark',
  address_line_2: 'Mark',
  city: 'Mark',
  state: 'CA',
  zip_code: '91243',
  phone_number: '92502352',
  credit_card_number: '2360924029476502',
  expiration_date: '5/23',
  CVV: '123',
  billing_zip_code: "23566'"
}

const controller = {
  format: (req, res) => {
    let data = req.body;
    let dbData = [];
    for (var key in dataTemplate) {
      if (data[key]) {
        dbData.push(data[key])
      } else {
        dbData.push(null)
      }
    }
    model.post(dbData);
    res.end()
  }
}

// MODEL ======================================================

var database = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'HR',
  database: 'challenge3data',
  port: 3306
})

database.connect((err) => {
  if (err) {
    console.log(err) 
  } else {
    console.log('You connected boi')
  }
});

const model = {
  post: (dbData) => {
    let text = `INSERT INTO challenge3data 
      ('name', 'email', 'password', 'address_line_1', 
      'address_line_2', 'city', 'state', 'zipcode', 'phone_number',
      'credit_card_number', 'expiration_date', 
      'CVV', 'billing_zip_code'`;
    console.log(text)
    //database.query()
  }
}



// SERVER: DO NOT TOUCH ======================================
const app = express();

app.use(express.static(path.join(__dirname, './public')));

app.use(morgan('dev'));
app.use(bodyParser.json());



app.post('/form', controller.format)
  // database.connect((err) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     database.query('show tables', (err, data) => {
  //       console.log(data)
  //     })
  //   }
  // })

app.listen(port, console.log(`AYE YO ITS LISTENING ON PORT ${port}`));
