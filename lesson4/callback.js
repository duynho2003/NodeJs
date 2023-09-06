var fs=require("fs");
function readFile1(err, data){
    if(err){
        console.log(err);
    }
    console.log("data of file");
    console.log(data.toString());
}
function readFile2(err, data){
    if(err){
        console.log(err);
    }
    console.log("data of file 2");
    console.log(data.toString());
}
console.log("\n");
console.log("Read file 1");
fs.readFile("C:\\test\\file1.txt",readFile1);


console.log("\n");
console.log("Read file 2");
fs.readFile("C:\\test\\file2.txt",readFile2);
console.log("The end");