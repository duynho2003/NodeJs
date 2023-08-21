const crypto=require("crypto")
let key=crypto.randomBytes(32); // tạo key ngẫu nhiên 32 byte
let ayz=crypto.randomBytes(16);
let mahoa=crypto.createCipheriv("aes-256-cbc",key,ayz);
let mahoadulieu=mahoa.update("admin@1234567","utf-8","hex")+mahoa.final("hex");

console.log(mahoadulieu);

let giaima=crypto.createDecipheriv("aes-256-cbc",key,ayz);
let giaimadulieu=giaima.update(mahoadulieu,"hex","utf-8")+giaima.final("utf-8");
console.log(giaimadulieu);