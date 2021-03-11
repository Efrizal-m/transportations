const db = require('../config/mongo')
const Car = db.collection('Car')
const { ObjectId } = require("mongodb")


class CarModel {
    static find(){
        return Car.find().toArray()
    }

    static findById(id){
        return Car.findOne({"_id" : ObjectId(`${id}`)})
    }

    static findByName(name){
        return Car.findOne({ name })
    }

    static create(payload){
        return Car.insertOne(payload)
    }

    static update(id, payload){
        return Car.findOneAndUpdate({"_id" : ObjectId(`${id}`)}, {$set: { payload }}, {returnOriginal:false} )
    }

    static delete(id){
        return Car.deleteOne({"_id" : ObjectId(`${id}`)})
    }
}

module.exports = CarModel