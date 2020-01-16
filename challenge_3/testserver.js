const axios = require('axios');

axios.post('http://localhost:3000/form', {
  name: "Mark",
  email: "markvfgo@gmail.com",
  password: "Marky",
  address_line_1: "23423 Mark Circle",


  state: "CA",
  zip_code: "91243",
  phone_number: "92502352",
  credit_card_number: "2360924029476502",
  expiration_date: "5/23",
  CVV: "123",
  billing_zip_code: "23566'"
});