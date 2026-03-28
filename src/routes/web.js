const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
  res.send("Hello World!welcome to my website");
});

router.get("/trangchu", (req, res) => {
  res.render("sample");
});

module.exports = router;// export deffault