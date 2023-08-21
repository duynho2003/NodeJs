let crypto=require("crypto");
const{publicKey,privateKey}=crypto.generateKeyPairSync("rsa",{
    modulusLength:2048,
});
let thongdiep="hoc mai van mot lop";
let mahoa=crypto.publicEncrypt(
    {
        key: publicKey,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: "sha256",
    },
    Buffer.from(thongdiep),
);
console.log(mahoa.toString("base64"));

let giaima=crypto.privateDecrypt(
    {
        key: privateKey,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: "sha256",
    },
    mahoa,
);
console.log(giaima.toString());
