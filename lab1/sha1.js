var crypto=require("crypto");

let sha1=crypto.createHash("sha1").update("xin chao cac ban").digest("hex");
console.log(sha1);