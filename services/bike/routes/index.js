const router = require('express').Router()
const BikeController = require('../controllers/bikeController')

router.get('/bike', BikeController.find)
router.post('/bike', BikeController.create)
router.get('/bike/:id', BikeController.findById)
router.get('/bike/:name', BikeController.findByName)
router.put('/bike/:id', BikeController.update)
router.delete('/bike/:id', BikeController.delete)

module.exports = router