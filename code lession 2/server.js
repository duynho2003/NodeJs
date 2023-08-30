//tao server don gian voi framework express
const express=require("express");
const app=express();
const port=3000;

app.get("/",function(req,res){
    res.send("main page");
});
app.get("/hello/:type/:q",function(req,res){
    const bien1=req.params.type;
    const bien2=req.params.q;
    res.send("get hello "+bien1+"--"+bien2);
});
app.post("/hello",function(req,res){
    res.send("post hello");
});

app.listen(port,function(){
    console.log("server running");
});