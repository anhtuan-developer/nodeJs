
const getHomepage = (req, res) =>{
    return res.render("home")
}
const getTrangchu = (req , res) =>{
    res.render("sample");
}
module.exports = { 
    getHomepage, getTrangchu
}