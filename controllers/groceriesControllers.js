const Grocery = require("../models/groceriesModel")

module.exports = {
    new: newGrocery,
    create,
    index,
    show,
}

async function index(req, res) {
    try {
        const groceries = await Grocery.find()
        res.render('./groceries/index', {groceries, title: 'All Groceries'})
    } catch (err) {
        console.log(err)
    }
}

function newGrocery(req, res) {
    res.render("groceries/new", {title: "Add Groceries", errorMsg: ""});
}

async function create(req, res) {
    //const groceryData = {...req.res};
    //const groceryData = req.body
  
    // for (let key in groceryData) {
    //     if(groceryData[key] === "") delete groceryData[key];
    // }

    try{
        const createdGrocery = await Grocery.create(req.body);
        console.log(createdGrocery)
        res.redirect("/groceries");
    } catch (err) {
        console.log(err);
        res.render("groceries/new", {errorMsg: err.message});
    }
}

async function show(req, res) {
    try {
        const grocery = await Grocery.findById(req.params.id)
        res.render('./groceries/show', { grocery, title: 'Grocery Details' })
    } catch (err) {
        console.log(err)
        res.redirect('/groceries')  
    }
}


