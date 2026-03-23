const express = require("express");
const path = require("path");// khai báo path để sử dụng đường dẫn tuyệt đối
require("dotenv").config(); // khai báo dotenv để sử dụng biến môi trường

const app = express(); // app express
const port = process.env.PORT || 8080; // port
const hostname =process.env.HOST_NAME; // hostname

//config template engine
app.set("views", path.join(__dirname, "views"));// đường dẫn tuyệt đối đến thư mục views
app.set("view engine", "ejs");

// khai báo route
app.get("/", (req, res) => {
  res.send("Hello World!welcome to my website");
});

app.get("/trangchu", (req, res) => {
  res.render("sample");
});
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
