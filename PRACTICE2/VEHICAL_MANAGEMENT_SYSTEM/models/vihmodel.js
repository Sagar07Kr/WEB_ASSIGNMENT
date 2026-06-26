const mongoose=require("mongoose");


const ViehcalSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    type:{
        type:Number,
        required:true
    },
    model:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true
    }
})

const viehcalModel=mongoose.model("vicheldetails",ViehcalSchema);

module.exports=viehcalModel;