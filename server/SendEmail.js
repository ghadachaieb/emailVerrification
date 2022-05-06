/*const AWS =require("aws-sdk");

const config= new AWS.Config({
    region : "us-east-l",
    secretAccessKey: process.env.SECRET,
    accessKeyId: process.env.KEY_ID
});

const ses =new AWS.SES(config);


function sendResetLink (email,id){
    const params = {
        Destination:{
            ToAddresses :[
                email,
            ]
        },
        Message:{
            Body:{
                Text:{
                    Charset:"UTF-8",
                    Data: `To reset your password , please click on this links : http://localhost:3000/reset/{id}`
                }
            },
            Subject :{
                Charset:"UTF-8",
                Data: `reset password instruction `
    
            }
        },
        Source: "ghadachaieb463@gmail.com",
    };


    ses.sendEmail(params,(err) =>{
        if(err){
            console.log(err);
        }
    })
}
module.exports = sendResetLink ;*/

const AWS = require("aws-sdk");

const config = new AWS.Config({
    region: "us-east-1",
    secretAccessKey: process.env.SECRET,
    accessKeyId: process.env.KEY_ID
});
const ses = new AWS.SES(config);

function sendResetLink(email, id) {
    const params = {
        Destination: {
            ToAddresses: [
                email,
            ]
        },
        Message: {
            Body: {
                Text: {
                    Charset: "UTF-8",
                    Data: `To reset your password, please click on this link: http://localhost:3000/reset/${id}`
                }
            },
            Subject: {
                Charset: "UTF-8",
                Data: "Reset password instructions"
            }
        },
        Source: "codingwithchaim@gmail.com",
    };

    ses.sendEmail(params, (err) => {
        if (err) {
            console.log(err);
        }
    });
}


module.exports = sendResetLink;