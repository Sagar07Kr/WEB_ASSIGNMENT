const express=require("express")
const mongoose=require("mongoose");


const viehcalModel=require("../models/vihmodel.js");


const ViehcalController={
      home:(req,res)=>{
    res.render("home.ejs")
},
      add:(req,res)=>{
    res.render("addform.ejs");
},
      create:async (req,res)=>{
    const data=await viehcalModel.create(req.body)
    res.redirect("/");
},
      disall:async (req,res)=>{
    const data=await viehcalModel.find();
    res.render("alldis.ejs",{data});
},
      search:(req,res)=>{
    res.render("searchform.ejs");
},
      SearchedItem:async (req,res)=>{
    const data=await viehcalModel.find({name:req.body.name})
    res.render("searchdatavih.ejs",{data})
},
      edit:async (req,res)=>{
    const data=await viehcalModel.findById(req.params.id);
    res.render("editform.ejs",{data});

},
      delete:async(req,res)=>{
    const data=await viehcalModel.findByIdAndDelete(req.params.id);
    res.redirect("/allvih")
},
      update:async (req,res)=>{
    const data=await viehcalModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.redirect("/")
},
}

module.exports=ViehcalController;