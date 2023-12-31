const express = require('express')
const router = express.Router()
const groceryCtrl = require('../controllers/groceriesControllers')

router.get('/new', groceryCtrl.new)

router.post('/', groceryCtrl.create)

router.get('/', groceryCtrl.index)

router.get('/:id', groceryCtrl.show)

router.get('/:id/edit', groceryCtrl.edit)

router.delete('/:id', groceryCtrl.destroy)

module.exports = router
