const Car = require('../models/car')
const Redis = require('ioredis');
const redis = new Redis()

class CarController {
    static async find(req, res, next) {
        try {
            const cache = await redis.get("car")
            if (cache) {
                res.send(JSON.parse(cache))
            } else {
                const car = await Car.find()
                if (car.length === 0) {
                    res.status(200)
                    res.send({message: `Data is empty`})
                } else if (!car) {
                    throw { status: 200, message: `Data not found`}                
                } else {
                    await redis.set("car", JSON.stringify(car.data))
                    res.status(200)
                    res.send(car.data)
                }                
            }
        } catch (error) {
            res.status(500)
            res.send({message:error})
        }
    }
    
    static async findById(req, res, next) {
        const { id } = req.params
        try {
            const cache = await redis.get("car")
            if (cache) {
                const data = JSON.parse(cache)
                const car = data.find(el => { return el._id === id })
                res.status(200)
                res.send(car)
            } else {
                const car = await Car.find(id)
                if (!car) {
                    throw { status: 200, message: `Data not found`}                
                } else {
                    res.status(200)
                    res.send(car.data)
                }                
            }
        } catch (error) {
            res.status(500)
            res.send({message:error})
        }
    }

    static async findByName(req, res, next) {
        const { name } = req.params
        try {
            const cache = await redis.get("car")
            if (cache) {
                const data = JSON.parse(cache)
                const car = data.find(el => { return el._id === id })
                res.status(200)
                res.send(car)
            } else {
                const car = await Car.find(id)
                if (!car) {
                    throw { status: 200, message: `Data not found`}                
                } else {
                    res.status(200)
                    res.send(car.data)
                }                
            }
        } catch (error) {
            res.status(500)
            res.send({message:error})
        }
    }

    static async create(req, res, next) {
        const { name, year, color, price } = req.body
        const payload = { name, year, color, price }

        try {
            const car = await Car.create(payload)
            await redis.del("car")
            res.status(car.status)
            res.send(JSON.parse(car.config.data))
        } catch (error) {
            res.status(500)
            res.send({message:error})
        }
    }

    static async update(req, res, next) {
        const { id } = req.params
        const { name, year, color, price } = req.body
        const payload = { name, year, color, price }

        try {
            const car = await Car.update(id, payload)
            await redis.del("car")
            res.status(car.statusCode)
            res.send(JSON.parse(car.data))
        } catch (error) {
            res.status(500)
            res.send({message:error})
        }
    }

    static async delete(req, res, next) {
        const { id } = req.params

        try {
            const car = await Car.find(id)
            res.status(car.statusCode)
            res.send(JSON.parse(car.data))
        } catch (error) {
            res.status(500)
            res.send({message:error})
        }
    }
}

module.exports = CarController