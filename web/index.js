const express=require("express"); // gọi thư viện express
const app=express();
const port=3000; // khai báo port chạy web

app.use(express.static("public"));  //khai báo thư mục public
app.set("view engine","ejs"); // khai báo dưới mở rộng ejs
app.set("views","./views") // khai báo thư mục chứa page
app.listen(port); // chạy web cổng 3000

app.get("/",(req,res)=>{
    res.render("home");
});
app.get("/gioithieu",function(req,res){
    res.render("test");
});
