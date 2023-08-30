const express = require('express');
const app = express();
const port = 3000;

app.use(express.static("public"));
app.set("view engine","ejs");
app.set("views","./views");
app.listen(port);

//call module
const md=require("./lib_module/first_module");
console.log(md);

app.get("/",function(req,res){
    res.render("home");
});

app.get("/test",function(req,res){
    res.render("test");
});