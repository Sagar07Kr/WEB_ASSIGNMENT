const mongoose=require("mongoose")
const express=require("express")

const PatientModel=require("../models/models.js");

const PatientController={
      home:(req,res)=>{
    res.render("home.ejs");
},
      addPatients:(req,res)=>{
    res.render("addForm.ejs");
},
    createPat:async (req,res)=>{
    const data= await PatientModel.create(req.body);
    console.log(`data added sucessfully ${data}`);
    res.redirect("/")
},
    viewallPat:async (req,res)=>{
    const data=await PatientModel.find();
    res.render("alldata.ejs",{data})
},
    searchPat:(req,res)=>{
    res.render("searchform.ejs");
},
    SearchedPAt:async(req,res)=>{
    const data=await PatientModel.find({name:req.body.name});
    console.log(data);
    res.render("SearchedPAtients.ejs",{data});
},
    update:async (req,res)=>{
    const data =await PatientModel.findById(req.params.id);
    console.log(data);
    res.render("editform.ejs",{data});
},
    delete:async (req,res)=>{
    const data=await PatientModel.findByIdAndDelete(req.params.id);
    res.redirect("/viewAllPaients")
},
    changefinal:async (req,res)=>{
    const data=await PatientModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
    console.log(data);
    res.redirect("/");
},
}

module.exports=PatientController;