const mongoose = require("mongoose");

const countrySchema = mongoose.Schema({
    Name: String,
    ID: Number,

})

const Countrymodel = mongoose.model("country", countrySchema)

module.exports={
    Countrymodel
}