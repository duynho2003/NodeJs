const express=require("express");
const router=express.Router();
const User=require("../model/users");

router.get("/",function(req,res){
    res.render("home");
});
//routing user
router.get("/user",function(req,res){
    res.render("user/danhsach");
});






module.exports=router;