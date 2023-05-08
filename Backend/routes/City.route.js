const express = require("express");
const {Citymodel} = require("../models/City.model")
const cityRouter = express.Router()

cityRouter.get("/",async(req,res)=>{
  try{
    const data = await city.find();
    res.send(data);
    res.status(200).send("All the cities Data")
  }
  catch(err){
   console.log(err);
  }
})

cityRouter.get("/:id",async(req,res)=>{
    try{
      const data = await city.find();
      res.send(data);
      res.status(200).send("particular city Data")
    }
    catch(err){
     console.log(err);
    }
  })

  cityRouter.post("/",async(req,res)=>{
    const payload = req.body
    try{
      const new_city = new Citymodel(payload);
      await new_city.save()
      res.status(201).send("Added city detail")
    }
    catch(err){
     console.log(err);
     res.send({"msg":"Something went wrong"})
    }
  })

  module.exports={
    cityRouter
  }