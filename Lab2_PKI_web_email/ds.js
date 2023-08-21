let crypto=require("crypto"); // goi thu vien

//create key
let {publicKey, privateKey }=crypto.generateKeyPairSync('rsa',{ // tao 2 khoa public, private dua vao thuat toan rsa
    modulusLength:2048,
    publicKeyEncoding:{
        type:"spki",
        format: "der",
    },
    privateKeyEncoding:{
        type:"pkcs8",
        format: "der",
    },
});
console.log("Key public: "+publicKey.toString("base64"));
console.log("Key private: "+privateKey.toString("base64"));
console.log("==============================================");

//thang ban tao chu ky so kem thong tin dua vao chuoi privateKey ngau nhien tao o tren
let prikey=crypto.createPrivateKey({ // tao key cho chu ky so
    key: Buffer.from(privateKey, "base64"), // dung privateKey o tren de tao key chu ky so
    type:"pkcs8",
    format:"der",
});
let sign=crypto.createSign("SHA256"); //thuat toan tao chu ky so
sign.update("xin chao ban toi la thanh vien moi"); // thong tin
sign.end();

let chuky=sign.sign(prikey).toString("base64"); // tao chu ky so dua vao priKey va thong tin
console.log("Chu ky so la: "+chuky);

//thang mua xac nhan
let pubkey=crypto.createPublicKey({
    key: Buffer.from(publicKey, "base64"), // dung publicKey o tren de tao key chu ky so
    type:"spki",
    format:"der",
});
let verify=crypto.createVerify("SHA256"); //thuat toan tao chu ky so
verify.update("xin chao ban toi la thanh vien moi"); // thong tin
verify.end();

let xacnhan=verify.verify(pubkey,Buffer.from(chuky,"base64"));
console.log(xacnhan);