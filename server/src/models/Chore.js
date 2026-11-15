import mongoose from "mongoose";
const schema = new mongoose.Schema({
 title:{type:String,required:true,trim:true,minlength:2,maxlength:90},
 description:{type:String,trim:true,maxlength:300,default:""},
 assignedTo:{type:mongoose.Schema.Types.ObjectId,ref:"Housemate",required:true},
 dueDate:{type:Date,required:true},
 priority:{type:String,enum:["Low","Medium","High"],default:"Medium"},
 recurrence:{type:String,enum:["None","Daily","Weekly","Monthly"],default:"None"},
 status:{type:String,enum:["Pending","Completed"],default:"Pending"},
 weight:{type:Number,min:0.5,max:10,default:1},
 completions:[{completedAt:{type:Date,default:Date.now},completedBy:{type:mongoose.Schema.Types.ObjectId,ref:"Housemate"}}]
},{timestamps:true});
export default mongoose.model("Chore",schema);