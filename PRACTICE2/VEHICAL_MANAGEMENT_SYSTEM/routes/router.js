const express=require("express")

const router=express.Router();

const ViehcalController=require("../controllers/vihcontroller.js");



router.get("/" ,ViehcalController.home)


router.get("/addvih" ,ViehcalController.add)


router.post("/createdata" ,ViehcalController.create)

router.get("/allvih" ,ViehcalController.disall)

router.get("/searchvih" ,ViehcalController.search)

router.post("/searchITEM" ,ViehcalController.SearchedItem)

router.get("/edit/:id" ,ViehcalController.edit)
router.get("/delete/:id" ,ViehcalController.delete)

router.post("/update/:id" ,ViehcalController.update)


module.exports=router;