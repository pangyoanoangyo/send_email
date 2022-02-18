var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

var transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
        user: 'sangfeelkim0915@gmail.com',
        pass: 'kimsangfeel!'
    }
}));

var mailOptions = {
    from: 'sangfeelkim0915@gmail.com',
    to: 'sangfeel@idis.co.kr',
    subject: 'Sending Email using Node.js[nodemailer]',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});


https://script.google.com/macros/s/AKfycbxw5A6UdXdkZ191SXdaJjUDKwzN1kxCDy6EfMHc_w/exec