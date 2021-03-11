const Bike = require('../models/bike')
const Redis = require('ioredis');
const redis = new Redis()

class BikeController {
    static async find(req, res, next) {
        try {
            const cache = await redis.get("bike")
            if (cache) {
                res.send(JSON.parse(cache))
            } else {
                const bike = await Bike.find()
                if (bike.length === 0) {
                    res.status(200)
                    res.send({message: `Data is empty`})
                } else if (!bike) {
                    throw { status: 200, message: `Data not found`}                
                } else {
                    await redis.set("bike", JSON.stringify(bike.data))
                    res.status(200)
                    res.send(bike.data)
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
            const cache = await redis.get("bike")
            if (cache) {
                const data = JSON.parse(cache)
                const bike = data.find(el => { return el._id === id })
                res.status(200)
                res.send(bike)
            } else {
                const bike = await Bike.find(id)
                if (!bike) {
                    throw { status: 200, message: `Data not found`}                
                } else {
                    res.status(200)
                    res.send(bike.data)
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
            const cache = await redis.get("bike")
            if (cache) {
                const data = JSON.parse(cache)
                const bike = data.find(el => { return el._id === id })
                res.status(200)
                res.send(bike)
            } else {
                const bike = await Bike.find(id)
                if (!bike) {
                    throw { status: 200, message: `Data not found`}                
                } else {
                    res.status(200)
                    res.send(bike.data)
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
            const bike = await Bike.create(payload)
            await redis.del("bike")
            res.status(bike.status)
            res.send(JSON.parse(bike.config.data))
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
            const bike = await Bike.update(id, payload)
            await redis.del("bike")
            res.status(bike.statusCode)
            res.send(JSON.parse(bike.data))
        } catch (error) {
            res.status(500)
            res.send({message:error})
        }
    }

    static async delete(req, res, next) {
        const { id } = req.params

        try {
            const bike = await Bike.find(id)
            res.status(bike.statusCode)
            res.send(JSON.parse(bike.data))
        } catch (error) {
            res.status(500)
            res.send({message:error})
        }
    }
}

module.exports = BikeController