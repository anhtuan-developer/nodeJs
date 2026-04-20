const express = require("express");
const { getHomepage, getTrangchu , postCreateNewUser ,
     getCreatePage , getUpdatePage , postUpdateUser} 
     = require("../controllers/homeController");
const router = express.Router();

// router.method("/route", handle)

router.get("/", getHomepage);
router.get("/trangchu", getTrangchu);
router.get("/create", getCreatePage);
router.get('/update/:id', getUpdatePage);


router.post("/create-user", postCreateNewUser);

router.post("/update-user", postUpdateUser);

module.exports = router;// export deffault