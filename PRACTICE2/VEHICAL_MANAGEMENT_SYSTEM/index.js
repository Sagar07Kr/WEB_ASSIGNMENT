const express=require("express");
const app=express();

const connctedb=require("./config/db.js")
connctedb();

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set("view engines","ejs")

const router=require("./routes/router.js")


app.use("/",router)

const port=3000;

app.listen(port,()=>{
     console.log(`server is live on port no ${port}`); 
})