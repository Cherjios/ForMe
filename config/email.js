let nodemailer =  require('nodemailer');
let myEmail = "cherjios@hotmail.com";
let transport = nodemailer.createTransport({
    service:"hotmail.com",
    auth:{
        user: myEmail,
        pass: process.env.EMAILPASS
    }
});



let message1 = {
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

let message2 = {
    from: myEmail,
    to: "slopez0286@gmail.com",
    subject:"Patient has updated personal information",
    text:"A Patient has Updated personal information form",
    attachments:[
        {
            path:"./log.json"
        }
    ]
};



function PatientRegisterSendEmail(){
    transport.sendMail(message1, function(err){
        if(err){
            console.log(err);
            console.log("Failed to send email.\n");
            return;
        }
        console.log("Email sent. \n");
    });
}

function PatientUpdateSendEmail(){
    transport.sendMail(message2, function(err){
        if(err){
            console.log(err);
            console.log("Failed to send email.\n");
            return;
        }
        console.log("Email sent. \n");
    });
}




module.exports = {
    PatientRegisterSendEmail:PatientRegisterSendEmail,
    PatientUpdateSendEmail: PatientUpdateSendEmail
}


