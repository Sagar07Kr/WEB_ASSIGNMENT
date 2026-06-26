const express=require("express")
const app=express();

const connectdb=require("./config/db.js");
connectdb();

app.use(express.json());
app.use(express.urlencoded({extented:true}));
app.set("views engines","ejs")


const router=require("./routes/router.js");


app.use("/",router);



const port=3000;
app.listen(port,()=>{
    console.log(`server is live on port no ${port}`); 
})