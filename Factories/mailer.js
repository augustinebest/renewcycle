var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    tls: {
        rejectUnauthorized: false
    },
    auth: {
        user: 'renewcyklegroup01@gmail.com',
        pass: 'augustinechibunna'
    }
});

exports.sendInfo = (data, callback) => {
    let mailOptions = {
        from: 'RENEWCYKLE',
        to: data.email, 
        subject: ' Renewcykle Energy Limited',
        html: `<div style='background-color: #eee'>Email: <h3>Hello ${data.name}</h3> <br /> <h3>Thank you for subscribing to our Newsletter</h3>
        </div>`
 };
 transporter.sendMail(mailOptions, callback);
}