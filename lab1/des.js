const crypto=require("crypto");
let key=Buffer.from("hi54u89u593u590u940rtu5joigj3131","base64");
var mahoa=crypto.createCipheriv("des-ede3",key,null);
const mahoadulieu=mahoa.update("admin@21433242","utf-8","base64")+mahoa.final("base64");
console.log("Chuỗi mã hóa: "+mahoadulieu);

var giaima=crypto.createDecipheriv("des-ede3", key, null);
var giaimadulieu=giaima.update(mahoadulieu,"base64","utf-8")+giaima.final("utf-8");
console.log("Chuỗi giải mã là: " +giaimadulieu);