const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

//Uses gmail account
const gmailEmail = functions.config().gmail.login;
const gmailPassword = functions.config().gmail.pass;

admin.initializeApp();

//Function to send emails
let sendEmail = message => {

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
        to: gmailEmail, //List of receivers
        subject: 'New MotoBible Message', //Subject line
        text: 'Message: ' + message, //Plain Text body
        html: 'Message: ' + message //HTML body
    };

    //Callback function to return status to firebase console
    const getDeliveryStatus = (error, info) => {
        if (error) {
            return console.log(error);
        }
        return console.log('Message sent: %s', info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    };

    //Sends email and returns status
    transporter.sendMail(mailOptions, getDeliveryStatus);
};

//.onDataAdded watches for changes in database
exports.onMessageAdded = functions.firestore.document('/messages/{msgID}').onCreate((snap, context) => {

    //Get the message
    let msg = snap.get('name') + '\n' + snap.get('email') + '\n' + snap.get('message');

    //Send new data using function for sending emails
    sendEmail(msg);
});

