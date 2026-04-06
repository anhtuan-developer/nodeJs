const connection = require("../config/database");

const getHomepage = (req, res) =>{
    let users = [];
    connection.query('select * from Users u;', 
  function (err, results) {
    if(results){
        users = results;
      console.log("Results:", results);

      console.log(">>>check users:", users);
      res.send(JSON.stringify(users));
    }
  });
}
const getTrangchu = (req , res) =>{
    res.render("sample");
}
module.exports = { 
    getHomepage, getTrangchu
}