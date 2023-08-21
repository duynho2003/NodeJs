let express=require("express")
let app=express();
let port=3000;

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("views", "./views");
app.set("view engine","ejs");

app.listen(port);

//routing
app.get("/",function(req, res){
    res.render("home")
});
app.get("/gioi-thieu",function(req, res){
    res.render("gioithieu")
});
app.get("/dang-nhap",function(req, res){
    res.render("dangnhap")
});
app.post("/form-dang-nhap",function(req, res){
    
    res.send();
});

app.get("/dang-ky",function(req, res){
    res.render("dangky")
});

