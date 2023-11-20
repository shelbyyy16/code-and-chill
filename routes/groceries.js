const express = require('express')
const router = express.Router()
const groceryCtrl = require('../controllers/groceriesControllers')

router.get('/new', groceryCtrl.new)

router.post('/', groceryCtrl.create)

router.get('/', groceryCtrl.index)

module.exports = router
