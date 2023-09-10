let mongoose=require("mongoose");
let PostSchema=mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    des:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        default:Date.now,
    }
});
module.exports=mongoose.model("posts",PostSchema);