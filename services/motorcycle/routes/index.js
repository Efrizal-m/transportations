const router = require('express').Router()
const MotorcycleController = require('../controllers/motorcycleController')

router.get('/motorcycle', MotorcycleController.find)
router.post('/motorcycle', MotorcycleController.create)
router.get('/motorcycle/:id', MotorcycleController.findById)
router.get('/motorcycle/:name', MotorcycleController.findByName)
router.put('/motorcycle/:id', MotorcycleController.update)
router.delete('/motorcycle/:id', MotorcycleController.delete)

module.exports = router