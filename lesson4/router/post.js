let express=require("express");
let router=express.Router();
const res=require("express/lib/request");
let Post=require("../model/post");


//hien thi tat ca bai viet
// router.get("/post",async(req,res)={

// });
//them bai viet
router.post("/post",async(req,res)=>{
    let data=new Post({
        title:req.body.title,
        des:req.body.des,
    });
    try {
        var savepost=await data.save();
        res.json(savepost);
    } catch (error) {
        res.json({message:error});
    }
});

module.exports=router;