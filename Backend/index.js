const express = require("express");
const {connection} = require("./config/db");
const { customerRouter } = require("./routes/Customers.route");
const { countryRouter } = require("./routes/Country.route");
const { cityRouter } = require("./routes/City.route");
const { languageRouter } = require("./routes/Languages.route");

const app = express()

app.use(express.json())


app.get("/",(req,res)=>{
    res.send("Home Page");
})

app.use("/customers",customerRouter)
app.use("/country",countryRouter)
app.use("/city",cityRouter)
app.use("/language",languageRouter)
app.use("/state",stateRouter)


app.listen(8080, async()=>{
    try{
        await connection
        console.log("connected to the DB");
    }
    catch(err){
        console.log("Something went wrong")
        console.log(err);
    }
    console.log("Server is running on port 8080");
})