const express=require("express");
const mongoose=require("mongoose");
const app=express();


app.set("view engine","ejs");//for ejs files
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const port=3000;


// connect to the data base 
mongoose.connect("mongodb://127.0.0.1:27017/COURSEDATABASE").
then(()=>{
    console.log("LOCAL DATABASE IS CONNECTED");
    
}).catch((error)=>{
    console.log(error);
})



//home page:-->
app.get("/",(req,res)=>{ //home route
    res.render("homepage.ejs");
})


app.get("/addCourse",(req,res)=>{
    res.render("addForm.ejs");
})

//schema
const courseSchema=new mongoose.Schema({
      CourseName:{
        type:String,
        unique:true,
        required:true
      },
      CourseDuration:{
        type:Number,
        required:true
      },
      TrainerName:{
        type:String,
        required:true
      },
      FessOfCourse:{
        type:Number,
        required:true
      },
      ModeofCourse:{
        type:String,
        required:true
      }
})


//create course model and add to the data base:-->
const CourseDetail=mongoose.model("coursemangement",courseSchema);

app.post("/createCourse", async (req,res)=>{
        const formCousreData=req.body
        const data= await CourseDetail.create(formCousreData);
        res.redirect("/")
})

app.get("/ViewAllCourse", async(req,res)=>{
    const allCoursedetails=await CourseDetail.find();
    res.render("getCourseDetails",{allCoursedetails});
})

app.get("/searchCourse",(req,res)=>{
    res.render("formSearch.ejs");
})


app.post("/displayCourse", async (req,res)=>{
    const displayData=req.body.CourseName;
    const dataOfSearchedStudent= await CourseDetail.findOne({CourseName:displayData});
    console.log(displayData);
    res.render("DispalySearchStudent",{dataOfSearchedStudent});
})

app.get("/updateCourse/:id",async (req,res)=>{
    const updatedata=await CourseDetail.findById(req.params.id);
    res.render("updateform.ejs",{updatedata});
})

app.get("/DeleteCourse/:id", async (req,res)=>{
    const id=req.params.id;
    const data=await CourseDetail.findByIdAndDelete(id);
    console.log(id);
    res.redirect("/ViewAllCourse");
})

app.post("/changeDetails/:id",async (req,res)=>{
    const data=req.body;
    const changedata= await CourseDetail.findByIdAndUpdate(req.params.id,data,{new:true});
    res.redirect("/")
})

app.listen(port,()=>{
    console.log(`server is runnging at port no ${port}`);
})

