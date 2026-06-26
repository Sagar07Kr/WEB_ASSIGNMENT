const express=require("express");
const app=express();


const dotenv=require("dotenv");
dotenv.config();

// const PORT=process.env;
// console.log(PORT);

const PORT=process.env.PORT;
// console.log(PORT);








app.listen(PORT,()=>{
    console.log(`server is runnging at port no ${PORT}`);
    
})