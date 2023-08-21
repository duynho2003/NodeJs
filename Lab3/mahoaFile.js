let crypto=require("crypto"); //thu vien dung de ma hoa
let fs=require("fs"); //mo file

let thuattoan="aes-256-ctr"; // thuat toan
let key="MySecret"; // chuoi bat ky
key=crypto.createHash("sha256").update(String(key)).digest("base64").substring(0,32); // tao key dung de ma hoa
// console.log("Key: "+key);

// ham ma hoa file
let encrypt=(buffer)=>{
    let iv=crypto.randomBytes(16); //chuoi random
    let cipher=crypto.createCipheriv(thuattoan,key,iv); //tao object
    let result=Buffer.concat([iv, cipher.update(buffer),cipher.final()]);
    return result;
}
// ham giai ma file
let decrypt=(encrypted)=>{
    let iv=encrypted.slice(0,16);
    encrypted=encrypted.slice(16);
    let decipher=crypto.createDecipheriv(thuattoan,key,iv); //tao object
    let result=Buffer.concat([decipher.update(encrypted),decipher.final()]);
    return result;
}

//ham ma hoa van ban
// fs.readFile("./vanban.txt",(err,file)=>{
//     if(err){
//         return console.error(err.message);
//     }
//     let filedamahoa=encrypt(file); //goi ham ma hoa file
//     fs.writeFile("./mahoavanban.txt",filedamahoa,(err,file)=>{
//         if(err){
//             return console.error(err.message);
//         }
//         if(file){
//             console.log("ma hoa file thanh cong");
//         }
//     });
// });

//ham giai ma
fs.readFile("./mahoavanban.txt",(err,file)=>{
    if(err){
        return console.log(err.message);
    }
    if(file){
        let giaimavanban=decrypt(file);
        console.log(giaimavanban.toString());
    }
});