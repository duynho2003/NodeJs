let express=require("express");
let router=express.Router();
const res=require("express/lib/request");
let Post=require("../model/post");


//hien thi tat ca bai viet
router.get("/post",async(req,res)=>{
    try {
        let data=await Post.find();
        res.json(data);
    } catch (error) {
        res.json({message:error});
    }
});
//tim get theo id
router.get("/post/:id",async(req,res)=>{
    try {
        let data=await Post.find({_id:req.params.id});
        res.json(data)
    } catch (error) {
        res.json({message:error});
    }
});
//tim put theo id
router.put("/post/:id",async(req,res)=>{
    try {
        let data=await Post.find({_id:req.params.id});
        res.json(data)
    } catch (error) {
        res.json({message:error});
    }
});
//delete
router.delete("/post/:id",async(req,res)=>{
    try {
        let data=await Post.deleteOne({_id:req.params.id});
        res.json(data)
    } catch (error) {
        res.json({message:error});
    }
});
//them bai viet
router.post("/post",async(req,res)=>{
    let data=new Post({
        title:req.body.title,
        des:req.body.des,
    });
    try {
        let savepost=await data.save();
        res.json(savepost); 
    } catch (error) {
        res.json({message:error});
    }
});

module.exports=router;