var mongoose=require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/mongo');

var db=mongoose.connection;
db.on('error',()=>{
    console.log("error");
});
db.once('open',()=>{
    console.log("ket noi ok");
})

//define schema
var BooksChema=mongoose.Schema({
    name:String,
    price:Number,
    quantity:Number
});
var Book=mongoose.model("books",BooksChema);

//insert 1 record
// var book1=new Book({
//     name:'nguoi lai do song da 1',
//     price:2000000,
//     quantity:1
// });
// book1.save();
//liet ke list book
Book.find().then((data)=>{
    console.log("hien thi danh sach: "+data);
});
//tim 1 record theo id
// Book.find({_id:'64fae536b273800736f87a7b'}).then((data)=>{
//     console.log("Tim record theo id: "+data);
// });
//xoa 1 record theo id
Book.deleteOne({_id:'64fae536b273800736f87a7b'}).then((data)=>{
    console.log(data);
});