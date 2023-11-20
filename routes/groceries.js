const express = require('express');
const router = express.Router();
const groceryCtrl = require("../controllers/groceriesControllers")


router.get("/new", groceryCtrl.new);
router.post("/", groceryCtrl.create)


module.exports = router;
