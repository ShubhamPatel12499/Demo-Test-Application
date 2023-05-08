const mongoose = require("mongoose");

const stateSchema = mongoose.Schema({
    Name: String,
    CountryID: Number,

})

const Statemodel = mongoose.model("state", stateSchema)

module.exports={
    Statemodel
}