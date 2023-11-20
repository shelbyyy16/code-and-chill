const Grocery = require("../models/groceriesModel")

module.exports = {
    new: newGrocery,
    create,
}

function newGrocery(req, res) {
    res.render("groceries/new", {title: "Add Groceries", errorMsg: ""});
}

async function create(req, res) {
    const groceryData = {...req.res};
  
    for (let key in groceryData) {
        if(groceryData[key] === "") delete groceryData[key];
    }

    try{
        const createdGrocery = await Grocery.create(groceryData);
        res.redirect("/groceries/" + createdGrocery._id, { title: 'Add Groceries' });
    } catch (err) {
        console.log(err);
        res.render("groceries/new", {errorMsg: err.message});
    }
}
