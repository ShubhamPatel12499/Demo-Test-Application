const mongoose = require("mongoose");

const citySchema = mongoose.Schema({
    Name: String,
    StateID: Number,

})

const Citymodel = mongoose.model("city", citySchema)

module.exports={
    Citymodel
}