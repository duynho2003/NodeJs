function dongbo(){
    console.log("1");
    console.log("2");
    console.log("3");
}
// dongbo();

function khongdongbo(){
    setTimeout(()=>console.log("1"),0); //ko quan tam
    setTimeout(()=>console.log("2"),0); //ko
    console.log("3");
}
khongdongbo();