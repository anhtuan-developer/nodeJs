const express = require("express");
const { getHomepage, getTrangchu} = require("../controllers/homeController");
const router = express.Router();

// router.method("/route", handle)

router.get("/", getHomepage);

router.get("/trangchu", getTrangchu);

module.exports = router;// export deffault