require("dotenv").config(); // khai báo dotenv để sử dụng biến môi trường
const express = require("express");
const webRoutes = require("./routes/web"); // khai báo route
const app = express(); // app express
const port = process.env.PORT || 8080; // port
const hostname = process.env.HOST_NAME; // hostname
const configViewEngine = require("./config/viewEngine");
const connection = require("./config/database"); // khai báo database
//config template engine
configViewEngine(app);


//config req.body
app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true })); // for form data

// khai báo route
app.use("/", webRoutes);

//test connection

//simple query
connection.query("select * from Users u;", function (err, results) {
  if (results) {
    console.log("Results:", results);
  } else {
    console.log("Error:", err);
  }
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
