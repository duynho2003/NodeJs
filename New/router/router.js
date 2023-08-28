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
router.get("/user-them",function(req,res){
        res.render("user/them");
});
router.post("/user-them-form",function(req,res){
    const datathem=new User({
        username: req.body.username,//req.body.username du lieu the input username tu form them.ejs
        email:req.body.email,//req.body.email du lieu the input email tu form them.ejs
        password:req.body.password, //req.body.password du lieu the input email tu form them.ejs
    });
    datathem.save().then(()=>{
        console.log("them ok");
    });
    res.redirect("/user");
});



module.exports=router;