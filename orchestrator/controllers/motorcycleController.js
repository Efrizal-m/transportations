const Motorcycle = require('../models/motorcycle')
const Redis = require('ioredis');
const redis = new Redis()

class motorcycleController {
    static async find(req, res, next) {
        try {
            const cache = await redis.get("motorcycle")
            if (cache) {
                res.send(JSON.parse(cache))
            } else {
                const motorcycle = await Motorcycle.find()
                if (motorcycle.length === 0) {
                    res.status(200)
                    res.send({message: `Data is empty`})
                } else if (!motorcycle) {
                    throw { status: 200, message: `Data not found`}                
                } else {
                    await redis.set("motorcycle", JSON.stringify(motorcycle.data))
                    res.status(200)
                    res.send(motorcycle.data)
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
            const cache = await redis.get("motorcycle")
            if (cache) {
                const data = JSON.parse(cache)
                const motorcycle = data.find(el => { return el._id === id })
                res.status(200)
                res.send(motorcycle)
            } else {
                const motorcycle = await Motorcycle.find(id)
                if (!motorcycle) {
                    throw { status: 200, message: `Data not found`}                
                } else {
                    res.status(200)
                    res.send(motorcycle.data)
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
            const cache = await redis.get("motorcycle")
            if (cache) {
                const data = JSON.parse(cache)
                const motorcycle = data.find(el => { return el._id === id })
                res.status(200)
                res.send(motorcycle)
            } else {
                const motorcycle = await Motorcycle.find(id)
                if (!motorcycle) {
                    throw { status: 200, message: `Data not found`}                
                } else {
                    res.status(200)
                    res.send(motorcycle.data)
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
            const motorcycle = await Motorcycle.create(payload)
            await redis.del("motorcycle")
            res.status(motorcycle.status)
            res.send(JSON.parse(motorcycle.config.data))
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
            const motorcycle = await Motorcycle.update(id, payload)
            await redis.del("motorcycle")
            res.status(motorcycle.statusCode)
            res.send(JSON.parse(motorcycle.data))
        } catch (error) {
            res.status(500)
            res.send({message:error})
        }
    }

    static async delete(req, res, next) {
        const { id } = req.params

        try {
            const motorcycle = await Motorcycle.find(id)
            res.status(motorcycle.statusCode)
            res.send(JSON.parse(motorcycle.data))
        } catch (error) {
            res.status(500)
            res.send({message:error})
        }
    }
}

module.exports = motorcycleController