const mongoose=require("mongoose");

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
module.exports=CourseDetail;