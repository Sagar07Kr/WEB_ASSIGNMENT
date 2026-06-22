const CourseDetail=require("../models/coursemodel.js");

//create object of routes
// key is name of mostly ejs and value is function that we execute on those key

const CourseController={

    homepage:(req,res)=>{
        res.render("homepage.ejs");
    },
    
    viewCourse: async (req,res)=>{
        const allCoursedetails=await CourseDetail.find();
        res.render("getCourseDetails",{allCoursedetails});
    },
    
    addCourse:(req,res)=>{
        res.render("addForm.ejs");
    },

    createCourse: async (req,res)=>{
        const formCousreData=req.body
        const data= await CourseDetail.create(formCousreData);
        res.redirect("/")
    },

    searchCourse: (req,res)=>{
        res.render("formSearch.ejs");
    },

    searchedCourse: async (req,res)=>{
        const displayData=req.body.CourseName;
        const dataOfSearchedStudent= await CourseDetail.findOne({CourseName:displayData});
        console.log(displayData);
        res.render("DispalySearchStudent",{dataOfSearchedStudent});
    },
    
    editCourse:async (req,res)=>{
       const updatedata=await CourseDetail.findById(req.params.id);
       res.render("updateform.ejs",{updatedata});
    },
    
    deleteCourse:async (req,res)=>{
        const id=req.params.id;
        const data=await CourseDetail.findByIdAndDelete(id);
        console.log(id);
        res.redirect("/ViewAllCourse");
    },

    changeDetails:async (req,res)=>{
        const data=req.body;
        const changedata= await CourseDetail.findByIdAndUpdate(req.params.id,data,{new:true});
        res.redirect("/")
    }
}

module.exports=CourseController;