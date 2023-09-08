var mysql=require("mysql");
var con=mysql.createConnection({
    database:'mydb',
    host:'localhost',
    user:'root',
    password:'',
});
con.connect(function (err) {
    if (err) {
        throw err;
    }
    console.log("Connected!");
});