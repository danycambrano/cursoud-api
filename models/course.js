const mongoose=require("mongoose");
const mongoosePaginate=require("mongoose-paginate");

const coursesSchema=mongoose.Schema({
    title: String,
    miniature: String,
    description:String,
    url:String,
    price:Number,
    score:Number
});

coursesSchema.plugin(mongoosePaginate);

module.exports =mongoose.model("Course", coursesSchema);