const db = require('../config/mongo')
const Bike = db.collection('Bike')
const { ObjectId } = require("mongodb")


class BikeModel {
    static find(){
        return Bike.find().toArray()
    }

    static findById(id){
        return Bike.findOne({"_id" : ObjectId(`${id}`)})
    }

    static findByName(name){
        return Bike.findOne({ name })
    }

    static create(payload){
        return Bike.insertOne(payload)
    }

    static update(id, payload){
        return Bike.findOneAndUpdate({"_id" : ObjectId(`${id}`)}, {$set: { payload }}, {returnOriginal:false} )
    }

    static delete(id){
        return Bike.deleteOne({"_id" : ObjectId(`${id}`)})
    }
}

module.exports = BikeModel