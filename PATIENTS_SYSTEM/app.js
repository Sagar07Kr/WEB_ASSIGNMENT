const express=require("express")
const mongoose=require("mongoose")

const app=express();
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.set("views engine","ejs")




mongoose.connect("mongodb://127.0.0.1:27017/COURSEDATABASE")
.then(()=>{
    console.log('DB CONNCTED');
    
})
.catch((err)=>{
    console.log(err);
    
})

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


app.get("/",(req,res)=>{
    res.render("home.ejs");
})

app.get("/addPatient",(req,res)=>{
    res.render("addForm.ejs");
})

app.post("/createdata",async (req,res)=>{
    const data= await PatientModel.create(req.body);
    console.log(`data added sucessfully ${data}`);
    res.redirect("/")
})

app.get("/viewAllPaients",async (req,res)=>{
    const data=await PatientModel.find();
    res.render("alldata.ejs",{data})
})


app.get("/searchPatients",(req,res)=>{
    res.render("searchform.ejs");
})

app.post("/search",async(req,res)=>{
    const data=await PatientModel.find({name:req.body.name});
    console.log(data);
    res.render("SearchedPAtients.ejs",{data});
})

app.get("/update/:id",async (req,res)=>{
    const data =await PatientModel.findById(req.params.id);
    console.log(data);
    res.render("editform.ejs",{data});
})

app.get("/delete/:id",async (req,res)=>{
    const data=await PatientModel.findByIdAndDelete(req.params.id);
    res.redirect("/viewAllPaients")
})

app.post("/change/:id",async (req,res)=>{
    const data=await PatientModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
    console.log(data);
    res.redirect("/");
})

app.listen(3000,()=>{
    console.log("server is connected to the port no 30000");
})