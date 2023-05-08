const mongoose = require("mongoose");

const customerSchema = mongoose.Schema({
    FullName: String,
    Email: String,
    Password: String,
    CountryID: Number,
    StateID: Number,
    LanguagesID: Number,
    CreatedDate: Date,
    ModifiedDate:Date
})

const Customermodel = mongoose.model("customer", customerSchema)

module.exports={
    Customermodel
}