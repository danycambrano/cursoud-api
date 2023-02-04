const express=require("express");
const multiparty=require("connect-multiparty");
const CourseController=require("../controllers/course");
const md_auth=require("../middlewares/authentication");

const md_upload= multiparty({uploadDir:"./upload/course"});

const api=express.Router();

api.post("/course",[md_auth.asureAuth, md_upload],CourseController.createCourse);
api.get("/courses",CourseController.getCourses);
api.patch("/course/:id",[md_auth.asureAuth, md_upload],CourseController.updateCourses);
api.delete("/course/:id",[md_auth.asureAuth],CourseController.deleteCourses);


module.exports=api;
