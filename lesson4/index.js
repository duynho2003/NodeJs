let express=require("express");
let app=express();
let port=3000;

app.use(express.static("public"));
app.set("view engine","ejs");
app.set("views","./view");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.listen(port,()=>{
    console.log("web running: "+port);
});
//ket noi database
let mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/api",{
    useNewUrlParser: true,
    useUnifedTopology: true,
});
let db=mongoose.connection;
db.on("error",()=>{
    console.log("loi ket noi");
});
db.once("open",()=>{
    console.log("ket noi thanh cong");
});