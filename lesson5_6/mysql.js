var mysql=require("mysql");
var conn=mysql.createConnection({
    database:'mydb',
    host:'localhost',
    user:'root',
    password:'',
});
conn.connect(function(err){
    if(err){
        throw err;
    }
    console.log("connected");
});
//xoa table book neu ton tai 
// var sql1="drop table if exists book";
// conn.query(sql1,function(err,result){
//     if(err) throw err;
//     console.log("drop table ok");
// });
//tao moi table book
// var sql2="create table book "+"(id INT PRIMARY KEY AUTO_INCREMENT,"+"title varchar(100),"+"price int)";
// conn.query(sql2,function(err,result){
//     if(err){ throw err};
//     console.log("create table ok");
// });
//insert 1 record moi
// var sql3="insert into book(title,price) values('lich su viet nam 2',20000)";
// conn.query(sql3,function(err,result){
//     if(err){
//         throw err;
//     }
//     console.log("insert ok");
// });
//hien thi danh sach
var sql4="select * from book";
conn.query(sql4,function(err,rows,field){
    if(err){ throw err; }
    console.log("hien thi danh sach: ");
    for(var i=0;i<rows.length;i++){
        console.log(rows[i]);
        console.log("-title:"+rows[i].title);
        console.log("-price:"+rows[i].price);
    }
});