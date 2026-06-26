const express=require("express");
const mongoose=require("mongoose");
const app=express();



app.set("view engine","ejs");//for ejs files
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const port=3000;



//connect to the data base 
mongoose.connect("mongodb://127.0.0.1:27017/STUDENTDATABASE").
then(()=>{
    console.log("LOCAL DATABASE IS CONNECTED");
    
}).catch((error)=>{
    console.log(error);
})




/* HOME PAGE 1.STUDENT PROFILE SECTION 
             2.THREE button (ADD STUDENT  and  SEARCH STUDENT and VIEW ALL STUDENT)
*/
app.get("/",(req,res)=>{ //home route
    res.render("homepage.ejs");
})




////////.  SCHEMA DESIGN. //////////////////////////////
const studentSchema=new mongoose.Schema({
    name:{
        type:"String",
        minlength:5,
        required:true
    },
    age:{
        type:Number,
        min:10,
        required:true

    },
    course:{
        type:"String",
        required:true

    },
    email:{
        type:"String",
        required:true,
        unique:true
    },
    city:{
        type:"String",
        required:true

    },
    ip:{
        type:"String",
        
    }
})

////MODEL CREATION//////
const student_deatils=mongoose.model("dataofstudents",studentSchema);

/////////////////////////////////////////////////////////////


/* ADD STUDENT DATA ROUTE */
app.get("/addstudent",(req,res)=>{
    res.render("form.ejs");
})



/* ADD STUDENT DATA INTO THE DATABASE. */
app.post("/createStudentData", async(req,res)=>{
    const stu_data=req.body;
    stu_data.ip=req.ip; //add ip key in stu_data
    const upd_data=await student_deatils.create(stu_data);//add student data in db;
    res.redirect("/getdata.student");//again redirect to the get data page;
})



/*. STUDENT KA DATA RENDER KARNA HAI TO ROUTE BANYAGAYA HAI*/
app.get("/getdata.student",async (req,res)=>{
        const alldata= await student_deatils.find();
        res.render("studentDispaly.ejs",{alldata});
})



app.listen(port,()=>{
    console.log(`server is runnging at port no ${port}`);
})