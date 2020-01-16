use challenge3data;

create table orders (
  id int primary key auto_increment,
  name text,
  email text,
  password text,
  address_line_1 text,
  address_line_2 text,
  city text,
  state text,
  zipcode text,
  credit_card_number text,
  expiration_date text,
  CVV text,
  billing_zip_code text
);