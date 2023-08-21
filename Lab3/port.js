
let net=require("net");

async function scan(){
    let host="127.0.0.1"; //localhost
    let start=80;
    let stop=3000;
    for(let port=start; port<=stop;port++){
        try {
            await connect(host, port);
            console.log(port);
        } catch (e) {
            //ko lam gi het
        }
    }
    console.log("scan port complete");
}
async function connect(host, port){
    return new Promise((req,res)=>{
        net.connect({host:host, port:port},()=>{
            req(true);
        }).on("error", err=>{
            res(err);
        });        
    });
}

scan();