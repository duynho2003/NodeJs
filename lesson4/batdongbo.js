function dongbo(){
    console.log("1");  //chay mat 2 tieng
    console.log("2");  //cho 2 tieng chay mat 2 tieng
    console.log("3");  //cho 4 ieng sau moi làm
}
// dongbo();

function khongdongbo(){
    setTimeout(()=>console.log("1"),0);  //mat 2 tieng
    setTimeout(()=>console.log("2"),0);   //mat 2 tieng
    console.log("3"); //mat 2 tieng
}
khongdongbo();