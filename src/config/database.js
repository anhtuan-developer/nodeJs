require("dotenv").config(); // khai báo dotenv để sử dụng biến môi trường
const mysql = require("mysql2"); // khai báo mysql2 để kết nối database

// create the connection to database
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT, //default : 3306
  user: process.env.DB_USER, //default: empty
  password: process.env.DB_PASSWORD, //default: empty
  database: process.env.DB_NAME, //default: empty
});

// open the MySQL connection
module.exports = connection;
