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

async function getCourses(req,res){

    const {page=1,limit=10}=req.query;

    const options={
        page: parseInt(page),
        limit:parseInt(limit)
    }
    Course.paginate({}, options,(error, courses)=>{
        if(error){
            res.status(400).send({msg:"Error al obtener los cursos"});
        }else{
            res.status(200).send(courses);
        }
    })
}

async function updateCourses(req,res){
    const {id}=req.params;
    const courseData=req.body;

    if(req.files.miniature){
        const imagePath=image.getFilePath(req.files.miniature);
        courseData.miniature=imagePath;                
    }

    Course.findByIdAndUpdate({_id:id},courseData, (error)=>{
        if(error){
            res.status(400).send({msg:"Error al actulizar los datos"})
        }else{
            res.status(200).send({msg: "Los datos se han actualizado correctamente"})
        }
    })
}

function deleteCourses(req,res){
    const {id}=req.params;

    Course.findByIdAndDelete(id,(error)=>{
        if(error){
            res.status(400).send({msg:"No se ha podido eliminar el curso"})
        }else{
            res.status(200).send({msg: "El curso se ha eliminado con éxito"})
        }
    })
}

module.exports={
    createCourse,
    getCourses,
    updateCourses,
    deleteCourses
}