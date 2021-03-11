if (process.env.NODE_ENV !== "production") { require("dotenv").config()}
const express = require('express')
const app = express()
const helmet = require('helmet')
const morgan = require('morgan')
const routes = require('./routes')
const PORT = process.env.PORT || 4000

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(helmet())
app.use(morgan("tiny"))
app.use(routes)


app.listen(PORT, () => {
    console.log('app listen on port', PORT);
})