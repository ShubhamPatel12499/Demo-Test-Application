const express = require("express");
const {Languagemodel} = require("../models/Languages.model")
const languageRouter = express.Router()

languageRouter.get("/",async(req,res)=>{
  try{
    const data = await language.find();
    res.send(data);
    res.status(200).send("All the languages Data")
  }
  catch(err){
   console.log(err);
  }
})

languageRouter.get("/:id",async(req,res)=>{
    try{
      const data = await language.find();
      res.send(data);
      res.status(200).send("particular language Data")
    }
    catch(err){
     console.log(err);
    }
  })

  languageRouter.post("/",async(req,res)=>{
    const payload = req.body
    try{
      const new_language = new Languagemodel(payload);
      await new_language.save()
      res.status(201).send("Added the language's detail")
    }
    catch(err){
     console.log(err);
     res.send({"msg":"Something went wrong"})
    }
  })

  module.exports={
    languageRouter
  }