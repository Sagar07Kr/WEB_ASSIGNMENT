const express=require("express")
const mongoose=require("mongoose")

const router=express.Router();

const PatientController=require("../controller/PatientsController.js");


router.get("/",PatientController.home)

router.get("/addPatient",PatientController.addPatients)

router.post("/createdata",PatientController.createPat)

router.get("/viewAllPaients",PatientController.viewallPat)

router.get("/searchPatients",PatientController.searchPat)

router.post("/search",PatientController.SearchedPAt)

router.get("/update/:id",PatientController.update)

router.get("/delete/:id",PatientController.delete)

router.post("/change/:id",PatientController.changefinal)

module.exports=router;