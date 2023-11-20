const Grocery = require("../models/groceriesModel")

module.exports = {
    new: newGrocery
}

function newGrocery(req, res) {
    res.render("groceries/new", {title: "Add Groceries", errorMsg: ""});
}