const express=require("express");
const router=express.Router();
const User=require("../model/users");

router.get("/",function(req,res){
    res.render("home",{
        title:'Trang chủ',
    });
});
//routing user
router.get("/user",function(req,res){
    User.find({}).then((data)=>{
        res.render("user/danhsach",{
            title:'Danh sách thành viên',  //truyen data ra view danhsach.ejs
            ds:data,
        });
    });
});






module.exports=router;