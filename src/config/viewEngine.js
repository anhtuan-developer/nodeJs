const path = require("path");
const express = require("express");
const configViewEngine = (app) => {
  app.set("views", path.join("./src", "views")); // đường dẫn tuyệt đối đến thư mục views
  app.set("view engine", "ejs");

  // Comfig static file
  app.use(express.static(path.join("./src", "public")));
};

module.exports = configViewEngine;
