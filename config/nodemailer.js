const nodemailer = require('nodemailer');
const ejs = require('ejs');
const path = require('path');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: true,
    auth: {
        user: 'socialplatform123',
        pass: 'Social@123'
    }
});

let renderTemplate = (data, relativePath) => {
    let mailHtml;
    ejs.renderFile(
        path.join(__dirname, '../views/mailers', relativePath),
        data,
        function(err, template) {
            if (err) {
                console.log('Error in rendering template', err);
                return;
            }
            mailHtml = template;
        }
    )

    return mailHtml;
}

module.exports = {
    transporter: transporter,
    renderTemplate: renderTemplate
}