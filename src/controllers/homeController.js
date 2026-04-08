
const getHomepage = (req, res) =>{
    return res.render("home")
}
const getTrangchu = (req , res) =>{
    res.render("sample");
}

const createNewUser =(req, res) =>{
    console.log(">>> req.body:", req.body);
    res.send("create a new user");
}
module.exports = { 
    getHomepage, getTrangchu, createNewUser
}