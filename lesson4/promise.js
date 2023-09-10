let done=true;
const itisdone=new Promise((resolve, reject)=>{
    if(done){
        const workdone="ok";
        resolve(workdone);
    }else{
        const why="not ok";
        reject(why);
    }
});
const checkdone=()=>{
    itisdone.then(ok=>{
        console.log("ok");
    }).catch(err=>{
        console.error(err);
    });
}
checkdone();