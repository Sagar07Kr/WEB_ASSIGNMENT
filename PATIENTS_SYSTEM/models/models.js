const mongoose=require("mongoose");

const PatientSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    doctorName:{
        type:String,
        required:true,
    },
    diseaseName:{
        type:String,
        required:true,
    }
})
const PatientModel=mongoose.model("patienetdata",PatientSchema);

module.exports=PatientModel;