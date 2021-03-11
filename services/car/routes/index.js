const router = require('express').Router()
const CarController = require('../controllers/carController')

router.get('/car', CarController.find)
router.post('/car', CarController.create)
router.get('/car/:id', CarController.findById)
router.get('/car/:name', CarController.findByName)
router.put('/car/:id', CarController.update)
router.delete('/car/:id', CarController.delete)

module.exports = router