let nodemailer =  require('nodemailer');
let myEmail = "cherjios@hotmail.com";
let transport = nodemailer.createTransport({
    service:"hotmail.com",
    auth:{
        user: myEmail,
        pass: process.env.EMAILPASS
    }
});



let message = {
    from: myEmail,
    to: "slopez0286@gmail.com",
    subject:"Patient registered",
    text:"A new patient has filled a form",
    attachments:[
        {
            path:"./log.json"
        }
    ]
};



function sendEmail(){
    transport.sendMail(message, function(err){
        if(err){
            console.log(err);
            console.log("Failed to send email.\n");
            return;
        }
        console.log("Email sent. \n");
    });

}

module.exports = sendEmail;


