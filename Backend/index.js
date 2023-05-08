const express = require("express");
const {connection} = require("./config/db")

const app = express()

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Home Page");
})

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