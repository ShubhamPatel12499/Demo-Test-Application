const express = require("express");
const {Customermodel} = require("../models/Customers.model")
const customerRouter = express.Router()

customerRouter.get("/",async(req,res)=>{
  try{
    const data = await customer.find();
    res.send(data);
    res.status(200).send("All the Customers Data")
  }
  catch(err){
   console.log(err);
  }
})

customerRouter.get("/:id",async(req,res)=>{
    try{
      const data = await customer.find();
      res.send(data);
      res.status(200).send("particular Customer Data")
    }
    catch(err){
     console.log(err);
    }
  })

  customerRouter.post("/",async(req,res)=>{
    const payload = req.body
    try{
      const new_customer = new Customermodel(payload);
      await new_customer.save()
      res.status(201).send("Added the customer's detail")
    }
    catch(err){
     console.log(err);
     res.send({"msg":"Something went wrong"})
    }
  })

  customerRouter.patch("/:id",async(req,res)=>{
    const payload = req.body
    const id= req.params.id
    const customer = await Customermodel.findOne({"_id":id})
    const customerID_of_Customers= customer.customerID_of_Customers
    const customerID_making_req = req.body.customerID
    try{
       if(customerID_making_req!==customerID_of_Customers)
       {
        res.send({"msg":"You are not authorized"})
       }
       else
       {
        await Customermodel.findByIdAndUpdate({"id":id},payload)
        res.status(204).send("Updated the customer's detail")
       }
    }
    catch(err){
     console.log(err);
     res.send({"msg":"Something went wrong"})
    }
  })

  customerRouter.delete("/:id",async(req,res)=>{
    const id= req.params.id
    const customer = await Customermodel.findOne({"_id":id})
    const customerID_of_Customers= customer.customerID_of_Customers
    const customerID_making_req = req.body.customerID
    try{
       if(customerID_making_req!==customerID_of_Customers)
       {
        res.send({"msg":"You are not authorized"})
       }
       else
       {
        await Customermodel.findByIdAndDelete({"id":id})
        res.status(202).send("Deleted the customer's detail")
       }
    }
    catch(err){
     console.log(err);
     res.send({"msg":"Something went wrong"})
    }
  })

  module.exports={
    customerRouter
  }