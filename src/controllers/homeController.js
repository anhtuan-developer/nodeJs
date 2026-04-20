const connection = require("../config/database");
const { post } = require("../routes/web");
const {
  getAllUsers,
  getUserById,
  getCreateNewUser,
  getUpdateUser,
} = require("../services/CRUDServives");
const getHomepage = async (req, res) => {
  const results = await getAllUsers();
  return res.render("home", { listUsers: results });
};
const getTrangchu = (req, res) => {
  res.render("sample");
};
const getCreatePage = (req, res) => {
  res.render("create");
};
const postCreateNewUser = async (req, res) => {
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
  // Sử dụng async/await để thực hiện truy vấn cơ sở dữ liệu
  await getCreateNewUser(email, name, city);

  return res.redirect("/");
};
const getUpdatePage = async (req, res) => {
  const userId = req.params.id;
  const results = await getUserById(userId);
  let user = results && results.length > 0 ? results[0] : {};

  return res.render("edit", { userEdit: user });
};

const postUpdateUser = async (req, res) => {
  let id = req.body.id;
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;

  await getUpdateUser(id, email, name, city);

  return res.redirect("/");
};
module.exports = {
  getHomepage,
  getTrangchu,
  postCreateNewUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
};
