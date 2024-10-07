const mongoose = require("mongoose")

const CakeSchema = mongoose.Schema({
    cakeName:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    flavor:{
        type: String,
        required: true,
    },
})

const Cake = mongoose.model("cakes", CakeSchema)

module.exports = Cake