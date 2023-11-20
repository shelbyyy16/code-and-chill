const express = require('express');
const router = express.Router();
const groceryCtrl = require("../controllers/groceriesControllers")


router.get("/new", groceryCtrl.new);

module.exports = router;
