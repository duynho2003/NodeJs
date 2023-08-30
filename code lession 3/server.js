//tao server don gian voi framework express
const express=require("express");
const app=express();
const port=3000;

app.use(express.static("public"));
app.set("views","./views");
app.set("view engine","pug");

app.get("/",function(req,res){
    res.send("main page");
});
//cach 1 dung middleware
// app.use("/admin",function(req,res,next){
//  if(dangnhap){
//     next();
//  }else
//     res.json("vui long dang nhap");
//  }
// });
//cach 2 dung middleware
// const check=(req,res,next)=>{
//     if(dangnhap){
//         next();
//     }else{
//         res.json("vui long dang nhap")
//     }
// }
// app.get("/admin",function(req,res){
//     res.send("admin");
// });



app.listen(port,function(){
    console.log("server running");
});