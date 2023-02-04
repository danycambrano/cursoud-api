const express=require("express");
const multiparty=require("connect-multiparty");
const CourseController=require("../controllers/course");
const md_auth=require("../middlewares/authentication");

const md_upload= multiparty({uploadDir:"/upload/course"});

const api=express.Router();

api.post("/course",[md_auth.asureAuth],CourseController.createCourse);


module.exports=api;
