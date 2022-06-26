const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'trybe',
  password: 'trybe123',
  host: 'localhost',
  database: 'user_crud'
});

module.exports = connection;