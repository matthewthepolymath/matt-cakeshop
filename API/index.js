const express = require("express")
require('./DB/Conn')

const cake = require('./Models/Cakes')

const cors = require("cors")

const app = express()

const PORT = 8080

app.listen(() => {
    console.log("API is now running on port "+ PORT)
})