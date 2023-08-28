const mongoose=require("mongoose");
const SanphamSchema=new mongoose.Schema({
    tensp:{
        type: String,
        require: true,
    },
    hinh:{
        type: String,
        require: true,
    },
    giasp:{
        type: String,
        require: true,
    },
});
module.exports=mongoose.model("sanpham",SanphamSchema);