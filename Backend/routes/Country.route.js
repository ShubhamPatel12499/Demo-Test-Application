const express = require("express");
const {Countrymodel} = require("../models/Country.model")
const countryRouter = express.Router()

countryRouter.get("/",async(req,res)=>{
  try{
    const data = await country.find();
    res.send(data);
    res.status(200).send("All the CCountries Data")
  }
  catch(err){
   console.log(err);
  }
})

countryRouter.get("/:id",async(req,res)=>{
    try{
      const data = await country.find();
      res.send(data);
      res.status(200).send("Particular Country Data")
    }
    catch(err){
     console.log(err);
    }
  })

  countryRouter.post("/",async(req,res)=>{
    const payload = req.body
    try{
      const new_country = new Countrymodel(payload);
      await new_country.save()
      res.status(201).send("Added the country detail")
    }
    catch(err){
     console.log(err);
     res.send({"msg":"Something went wrong"})
    }
  })

  module.exports={
    countryRouter
  }