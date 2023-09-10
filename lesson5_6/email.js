var nodemailer=require("nodemailer");
//thong so setup cua email
var transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
      user:'nonameok2010@gmail.com',
      pass:'ufcx mddv igkl dzws',   
    }
});
//thong tin ve email va noi dung muon gui
var mailOptions={
    from:'nonameok2010@gmail.com',
    to:'phamdanh90vn@gmail.com',
    subject:'demo gui email bang node js',
    text:'this is email from spammer',
};
//gui email
transporter.sendMail(mailOptions,function(err,info){
    if(err){
        console.log(err);
    }else{
        console.log("Email sent:"+info);
    }
});