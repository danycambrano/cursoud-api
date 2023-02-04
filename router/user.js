const express=require("express");
const multiparty=require("connect-multiparty");
const UserController=require("../controllers/user");
const authentication=require("../middlewares/authentication");

const md_upload=multiparty({uploadDir: "./upload/avatar"});
const api=express.Router();

api.get("/user/me",[authentication.asureAuth],UserController.getMe);
api.get("/users",[authentication.asureAuth],UserController.getUsers);
api.post("/createuser",[authentication.asureAuth, md_upload],UserController.createUsers);
api.patch("/updateuser/:id",[authentication.asureAuth, md_upload],UserController.updateUser);
api.delete("/deleteuser/:id",[authentication.asureAuth],UserController.deleteUser);

module.exports=api;