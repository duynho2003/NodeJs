let express=require("express");  //goi thu vien express
let layout=require("express-ejs-layouts");
let app=express(); 
let port=3000; //khai bao port 3000

app.use(express.static("public"))  //khai bao duong thu muc public
app.use(layout); // set layout
app.use(express.json());  //tra ve dang json
app.use(express.urlencoded({extended:true}));  // ma hoa url
app.set("views","./views"); //set views
app.set("view engine","ejs"); //set duoi mo rong ejs
app.listen(port);
//goi router
app.use("",require("./router/router"));


//ket noi database
let mongoose=require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/mahoa',{
    useNewUrlParser: true,
    useUnifiedTopology:true
});
let db=mongoose.connection;
db.on("error",()=>{
    console.log("not ok nhe");
});
db.once("open",()=>{
    console.log("ket noi thanh cong");
});



app.get("/dang-nhap",function(req,res){
    res.render("dangnhap");
});
app.post("/form-dang-nhap",function(req,res){
    if(req.body.email=="" && req.body.password=="" ){
        res.redirect("/dang-nhap");
    }else{
        db.collection('users').findOne({email:req.body.email},(err,data)=>{
            if(data==null){
                res.redirect("/");
            }
            if(data.password==req.body.password){
                console.log("dang nhap thanh cong");
                res.redirect("/");
            }else{
                res.redirect("/dang-nhap");
            }
        });
    }
});

app.get("/dang-ky",function(req,res){

    res.render("dangky",{
        title:'Đăng ký'
    });
});
app.post("/form-dang-ky",function(req,res){
    var data={
        'username': req.body.username,
        'email': req.body.email,
        'password':req.body.password
    }
    db.collection('users').insertOne(data,(err,collection)=>{
        if(err){
            // console.log("loi"); 
            throw err;
        }
        console.log("insert ok");
    });
    res.redirect("/dang-nhap");
});