const Course=require("../models/course");
const image=require("../utils/image");

async function createCourse(req,res){
    const course=new Course(req.body);

    const imagePath=image.getFilePath(req.files.miniature);

    course.miniature=imagePath;

    course.save((error, courseStored)=>{
        if(error){
            res.status(400).send({msg: "Error al crear el curso"})
        }else{
            res.status(201).send(courseStored)
        }
    })

}

module.exports={
    createCourse
}