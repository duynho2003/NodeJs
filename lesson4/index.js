const express=require("express");
const app=express();
const port=3000;

app.use(express.static("public"));
app.set("view engine","ejs");
app.set("views","./views");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// app.use(bodyParser.json());
app.listen(port,()=>{
    console.log("Web running port: "+port);
});
//router
app.use("",require("./router/post"));
//ket noi csdl
const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/api",{
    useNewUrlParser: true,
    useUnifiedTopology:true
});
const db=mongoose.connection;
db.on("error",()=>{
    console.log("Loi ket noi");
});
db.once("open",()=>{
    console.log("Ket noi thanh cong");
});








