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


//router
app.get("/",function(req,res){
    res.render("home");
});
app.get("/dang-nhap",function(req,res){
    res.render("dangnhap")
});