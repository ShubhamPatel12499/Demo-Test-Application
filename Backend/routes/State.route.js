const express = require("express");
const {Statemodel} = require("../models/State.model")
const stateRouter = express.Router()

stateRouter.get("/",async(req,res)=>{
  try{
    const data = await state.find();
    res.send(data);
    res.status(200).send("All the states Data")
  }
  catch(err){
   console.log(err);
  }
})

stateRouter.get("/:id",async(req,res)=>{
    try{
      const data = await state.find();
      res.send(data);
      res.status(200).send("particular state Data")
    }
    catch(err){
     console.log(err);
    }
  })

  stateRouter.post("/",async(req,res)=>{
    const payload = req.body
    try{
      const new_state = new Statemodel(payload);
      await new_state.save()
      res.status(201).send("Added the state's detail")
    }
    catch(err){
     console.log(err);
     res.send({"msg":"Something went wrong"})
    }
  })

  module.exports={
    stateRouter
  }