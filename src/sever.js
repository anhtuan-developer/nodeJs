require("dotenv").config(); // khai báo dotenv để sử dụng biến môi trường
const express = require("express");
const webRoutes = require("./routes/web"); // khai báo route
const app = express(); // app express
const port = process.env.PORT || 8080; // port
const hostname = process.env.HOST_NAME; // hostname
const configViewEngine = require("./config/viewEngine");
const mysql = require("mysql2"); // khai báo mysql2 để kết nối database

//config template engine
configViewEngine(app);

// khai báo route
app.use("/", webRoutes);

//test connection
// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  port: 3307, //default : 3306
  user: "root", //default: empty
  password: "123456", //default: empty
  database: "hoidanit", //default: empty
});

//simple query
connection.query("select * from Users u;", function (err, results, fields) {
  console.log(">>>>results:", results);
  console.log(">>>>fields:", fields);
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
