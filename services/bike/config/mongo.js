const { MongoClient } = require("mongodb")
const url = "mongodb://localhost:27017"
const dbName = "efrizal"
const client = new MongoClient(url, { useUnifiedTopology: true })
client.connect()

const db = client.db(dbName)

module.exports = db