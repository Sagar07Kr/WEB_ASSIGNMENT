const express=require("express")
const mongoose=require("mongoose")
const app=express();


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set("view engine","ejs")


mongoose.connect("mongodb://127.0.0.1:27017/COURSEDATABASE")
.then(()=>{
    console.log("Data base is conncted");
    
}).catch(err=>{
    console.log(err);
    
})

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


app.get("/",(req,res)=>{
    res.render("home.ejs")
})


app.get("/addvih",(req,res)=>{
    res.render("addform.ejs");
})


app.post("/createdata",async (req,res)=>{
    const data=await viehcalModel.create(req.body)
    res.redirect("/");
})

app.get("/allvih",async (req,res)=>{
    const data=await viehcalModel.find();
    res.render("alldis.ejs",{data});
})

app.get("/searchvih",(req,res)=>{
    res.render("searchform.ejs");
})

app.post("/searchITEM",async (req,res)=>{
    const data=await viehcalModel.find({name:req.body.name})
    res.render("searchdatavih",{data})
})

app.get("/edit/:id",async (req,res)=>{
    const data=await viehcalModel.findById(req.params.id);
    res.render("editform.ejs",{data});

})
app.get("/delete/:id",async(req,res)=>{
    const data=await viehcalModel.findByIdAndDelete(req.params.id);
    res.redirect("/allvih")
})

app.post("/update/:id",async (req,res)=>{
    const data=await viehcalModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.redirect("/")
})
const port=3000;
app.listen(port,()=>{
    console.log(`server is live on port no ${port}`);
    
})