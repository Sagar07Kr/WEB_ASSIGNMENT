
const mongoose=require("mongoose")

//connect to the data base 
const connectDB= async ()=>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/COURSEDATABASE");
        console.log("MongoDB Connected");
        
    }
    catch(err){
        console.log(err);
        
    }
}

module.exports = connectDB;
