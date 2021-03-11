const db = require('../config/mongo')
const Motorcycle = db.collection('Motorcycle')
const { ObjectId } = require("mongodb")


class MotorcycleModel {
    static find(){
        return Motorcycle.find().toArray()
    }

    static findById(id){
        return Motorcycle.findOne({"_id" : ObjectId(`${id}`)})
    }

    static findByName(name){
        return Motorcycle.findOne({ name })
    }

    static create(payload){
        return Motorcycle.insertOne(payload)
    }

    static update(id, payload){
        return Motorcycle.findOneAndUpdate({"_id" : ObjectId(`${id}`)}, {$set: { payload }}, {returnOriginal:false} )
    }

    static delete(id){
        return Motorcycle.deleteOne({"_id" : ObjectId(`${id}`)})
    }
}

module.exports = MotorcycleModel