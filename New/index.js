let express=require("express"); //goi thu vien express
let layout=require("express-ejs-layouts");
let app=express();
let port=3000; //khai bao port 3000

app.use(express.static("public")) //khai bao duong thu muc public
app.use(layout); //set layout
app.use(express.json()); //tra ve dang json
app.use(express.urlencoded({extended:true})); // ma hoa url
app.set("views","./views"); //set views
app.set("view engine", "ejs"); //set duoi mo rong ejs
app.listen(port);

//ket noi database
let mongoose=require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/mahoa',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
let db=mongoose.connection;
db.on("error",()=>{
    console.log("not ok nhe");
});
db.once("open",()=>{
    console.log("ket noi thanh cong");
});

//router
app.get("/",function(req,res){
    res.render("home");
});


app.get("/dang-nhap",function(req,res){
    res.render("dangnhap")
});
app.post("/form-dang-nhap",function(req,res){
    console.log(req.body.email);
    console.log(req.body.password);

    res.redirect("/")
});

app.get("/dang-ky",function(req,res){
    
    res.render("dangky")
});
app.post("/form-dang-ky",function(req,res){
    console.log(req.body.username);
    console.log(req.body.email);
    console.log(req.body.password);

    res.redirect("/dang-nhap");
});