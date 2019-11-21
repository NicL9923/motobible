const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

//Uses gmail account
const gmailEmail = functions.config().gmail.login;
const gmailPassword = functions.config().gmail.pass;

admin.initializeApp();

//Function to send emails
let goMail = message => {

//Transporter is a way to send emails
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: gmailEmail,
            pass: gmailPassword
        }
    });

    //Setup email data with unicode symbols
    //(How the email will look)
    const mailOptions = {
        from: gmailEmail, //Sender address
        to: 'nicl9923@gmail.com', //List of receivers
        subject: 'New MotoBible Message', //Subject line
        text: '!' + message, //Plain Text body
        html: '!' + message //HTML body
    };

    //Callback function to return status to firebase console
    const getDeliveryStatus = (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    };

    //Sends email and returns status
    transporter.sendMail(mailOptions, getDeliveryStatus);
};

//.onDataAdded watches for changes in database
exports.onDataAdded = functions.database.ref('/emails/{sessionId}').onCreate(function (snap, context) {

    //Here we catch new data, add it to firebase database/store it in a snap variable
    const createdData = snap.val();
    let text = createdData.mail;

    //Send new data using function for sending emails
    goMail(text);
});

