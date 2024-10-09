const express = require("express")
require('./DB/Conn')

const Cake = require('./Models/Cakes')

const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())

const PORT = 8080

app.post("/cakes", async (req, res)=>{
const addCake = new Cake(req.body)
addCake.save()
res.status(200).send(addCake)
})

app.get("/cakes", async (req, res)=>{
    const getCake = await Cake.find()
    res.status(200).send(getCake)
})

app.listen(PORT, () => {
    console.log("API is now running on port "+ PORT)
})