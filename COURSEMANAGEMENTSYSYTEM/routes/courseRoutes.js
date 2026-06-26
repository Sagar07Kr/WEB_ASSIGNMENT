
const express=require("express");
const router=express.Router();


const CourseController=require("../controllers/CourseControllers.js");


router.get("/",CourseController.homepage);
router.get("/addCourse",CourseController.addCourse);
router.get("/ViewAllCourse" ,CourseController.viewCourse);
router.post("/createCourse", CourseController.createCourse)
router.get("/searchCourse",CourseController.searchCourse)
router.post("/displayCourse" , CourseController.searchedCourse)
router.get("/updateCourse/:id" , CourseController.editCourse)
router.get("/DeleteCourse/:id" , CourseController.deleteCourse)
router.post("/changeDetails/:id" , CourseController.changeDetails)

module.exports = router;