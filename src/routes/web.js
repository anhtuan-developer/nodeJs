const express = require("express");
const { getHomepage, getTrangchu , createNewUser , getCreatePage , getUpdatePage} = require("../controllers/homeController");
const router = express.Router();

// router.method("/route", handle)

router.get("/", getHomepage);
router.get("/trangchu", getTrangchu);
router.get("/create", getCreatePage);
router.get("/update", getUpdatePage);

router.post("/create-user", createNewUser);

module.exports = router;// export deffault