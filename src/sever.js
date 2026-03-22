const express = require("express");

const app = express(); // app express
const port = 3000; // port
const path = require("path");// khai báo path để sử dụng đường dẫn tuyệt đối


//config template engine
app.set("views", path.join(__dirname, "views"));// đường dẫn tuyệt đối đến thư mục views
app.set("view engine", "ejs");

// khai báo route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/trangchu", (req, res) => {
  res.render("sample");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
