const connection = require("../config/database");
const getAllUsers = async () => {
  let [results, fields] = await connection.query("select * from Users;");
  return results;
};

const getCreateNewUser = async (email, name, city) => {
  let [results, fields] = await connection.query(
    `INSERT INTO Users (email, name , city) VALUES (?, ?, ?)`,
    [email, name, city],
  );
  return results;
}

const getUserById = async (userId) => {
  let [results, fields] = await connection.query("select * from Users where id = ?;", [userId]);
  return results;
};

const getUpdateUser = async (id, email, name, city) => {
  let [results, fields] = await connection.query(
    `UPDATE Users
     SET email = ?, name = ?, city = ?
     WHERE id = ?`,
    [email, name, city, id],
  );
  return results;
}
module.exports = {
    getAllUsers,
    getUserById,
    getCreateNewUser,
    getUpdateUser,
}