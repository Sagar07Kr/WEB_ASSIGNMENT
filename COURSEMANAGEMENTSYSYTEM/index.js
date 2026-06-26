const port=3000;


const express=require("express");
const connectDB=require("./config/db.js")
const courseRoutes=require("./routes/courseRoutes.js")


const app=express();
connectDB();


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");


app.use("/",courseRoutes);


app.listen(port,()=>{
    console.log(`server is live on port no ${port}`);
})
