const express = require('express');
const app = express();
const port = 3000;

app.use(express.static("public"));
app.set("view engine","ejs");
app.set("views","./views");
app.listen(port);

app.get("/",function(res,req){
    res.render("home");
});

app.get("/test",function(res,req){
    res.render("test");
});