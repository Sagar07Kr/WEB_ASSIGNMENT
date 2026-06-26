const monoose=require("mongoose");

const connectDB=async ()=>{
    try{
        await monoose.connect("mongodb://127.0.0.1:27017/COURSEDATABASE")
        console.log(`data base is conncted`);
        
    }
    catch(err){
        console.log(err);
        
    }
}

module.exports=connectDB;