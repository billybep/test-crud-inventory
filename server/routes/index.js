const InventoryController = require('../controllers/inventory')

const router = require('express').Router()

router.get('/', (req, res) => res.send('Hey There!!'))

router.get('/inventory', InventoryController.showInventory)
router.post('/inventory', InventoryController.addInventory)
router.put('/inventory/:id', InventoryController.updateInventory)
router.delete('/inventory/:id', InventoryController.deleteInventory)

module.exports = router