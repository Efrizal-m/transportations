const router = require('express').Router()
const userRouter = require('./user')
const BikeController = require('../controllers/bikeController')
const CarController = require('../controllers/carController')
const MotorcycleController = require('../controllers/motorcycleController')

router.use('/', userRouter)
router.get('/bike', BikeController.find)
router.post('/bike', BikeController.create)
router.get('/bike/:id', BikeController.findById)
router.get('/bike/:name', BikeController.findByName)
router.put('/bike/:id', BikeController.update)
router.delete('/bike/:id', BikeController.delete)

router.get('/car', CarController.find)
router.post('/car', CarController.create)
router.get('/car/:id', CarController.findById)
router.get('/car/:name', CarController.findByName)
router.put('/car/:id', CarController.update)
router.delete('/car/:id', CarController.delete)

router.get('/motorcycle', MotorcycleController.find)
router.post('/motorcycle', MotorcycleController.create)
router.get('/motorcycle/:id', MotorcycleController.findById)
router.get('/motorcycle/:name', MotorcycleController.findByName)
router.put('/motorcycle/:id', MotorcycleController.update)
router.delete('/motorcycle/:id', MotorcycleController.delete)

module.exports = router