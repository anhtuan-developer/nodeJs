const express = require("express");
const {
  getHomepage,
  getTrangchu,
  postCreateNewUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
  getDeletePage,
  postDeleteUser,
} = require("../controllers/homeController");
const router = express.Router();

// router.method("/route", handle)

router.get("/", getHomepage);
router.get("/trangchu", getTrangchu);
router.get("/create", getCreatePage);
router.get("/update/:id", getUpdatePage);
router.get("/delete/:id", getDeletePage);

router.post("/create-user", postCreateNewUser);
router.post("/update-user", postUpdateUser);
router.post("/delete-user", postDeleteUser);

module.exports = router; // export deffault
