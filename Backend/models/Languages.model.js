const mongoose = require("mongoose");

const languageSchema = mongoose.Schema({
    Name: String,
    ID: Number,

})

const Languagemodel = mongoose.model("language", languageSchema)

module.exports={
    Languagemodel
}