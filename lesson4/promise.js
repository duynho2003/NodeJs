const hientai=new Promise((resolve,reject)=>{
    httpGetAsync('https://www.at-languagesolutions.com/en/wp-content/uploads/2016/06/http-1.jpg',resolve);
});
// const hientai1=new Promise((resolve,reject)=>{
//     httpGetAsync('https://www.at-languagesolutions.com/en/wp-content/uploads/2016/06/http-1.jpg',resolve);
// });
// const hientai2=new Promise((resolve,reject)=>{
//     httpGetAsync('https://www.at-languagesolutions.com/en/wp-content/uploads/2016/06/http-1.jpg',resolve);
// });
const excute=async()=>{
    const repone=await hientai;
    console.log(reponse);
}