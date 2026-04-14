const connection = require("../config/database");
const { getAllUsers } = require("../services/CRUDServives");
const getHomepage = async (req, res) => {
  const results = await getAllUsers();
  console.log("check results:", results);
  return res.render("home", { listUsers: results });
};
const getTrangchu = (req, res) => {
  res.render("sample");
};
const getCreatePage = (req, res) => {
  res.render("create");
};
const createNewUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;

  // connection.query(
  //   `INSERT INTO
  //   Users (email, name , city)
  //   VALUES (?, ?, ?)`,
  //   [email, name, city],
  //   function (err, results) {
  //     console.log(results);
  //     res.send(`create users succeed`);
  //   },
  // );
  let [results, fields] = await connection.query(
    `INSERT INTO Users (email, name , city) VALUES (?, ?, ?)`,
    [email, name, city],
  );
  return res.redirect("/");
};
const getUpdatePage = (req, res) => {
  res.render("edit");
};
module.exports = {
  getHomepage,
  getTrangchu,
  createNewUser,
  getCreatePage,
  getUpdatePage,
};
