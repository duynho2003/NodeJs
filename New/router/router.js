const express=require("express");
const router=express.Router();
const User=require("../model/users");
const crypto=require("crypto")

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
router.get("/user-sua/:id",function(req,res){
    const id=req.params.id;
    User.findById(id).then(datauser=>{
        res.render("user/sua",{
            title:"Sửa thành viên",
            tv: datauser,
        });
    });
});
router.post("/user-sua-form/:id",function(req,res){
    const id=req.params.id;
    User.findByIdAndUpdate(id,{
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
    }).then(()=>{
        res.redirect("/user")
    });
});
router.get("/user-xoa/:id",function(res,req){
    const id=req.params.id;
    User.findByIdAndDelete(id).then(()=>{
        res.redirect("/user");
    });
});


//thuat toan
router.get("/thuat-toan-des",function(req,res){
    
    res.render("thuattoan/form",{
        mahoa:"",
    });
});
router.post("/thuat-toan-des",function(req,res){
    let key=Buffer.from("hi54u89u593u590u940rtu5joigj3131","base64");
    var mahoa=crypto.createCipheriv("des-ede3",key,null);
    const mahoadulieu=mahoa.update(req.body.vanban,"utf-8","base64")+mahoa.final("base64");
    console.log("Chuỗi mã hóa: "+mahoadulieu);
    
    // var giaima=crypto.createDecipheriv("des-ede3", key, null);
    // var giaimadulieu=giaima.update(mahoadulieu,"base64","utf-8")+giaima.final("utf-8");
    // console.log("Chuỗi giải mã là: " +giaimadulieu);


    res.render("thuattoan/form",{
        mahoa:mahoadulieu,
    });
});


module.exports=router;