

const getHomepage = (req, res) =>{
    res.send("Hello World!welcome to my website");
}
const getTrangchu = (req , res) =>{
    res.render("sample");
}
module.exports = { 
    getHomepage, getTrangchu
}