require("dotenv").config();
const connection = require("./src/config/database");

connection.query('select * from Users u;',
  function (err, results) {
    if (err) {
      console.log("Error:", err);
    } else {
      console.log("Results:", results);
    }
    connection.end();
  });