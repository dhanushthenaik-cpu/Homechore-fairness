import mongoose from "mongoose";
const schema = new mongoose.Schema({name:{type:String,required:true,trim:true,minlength:2,maxlength:40},color:{type:String,default:"#6d5ce8"}},{timestamps:true});
export default mongoose.model("Housemate",schema);