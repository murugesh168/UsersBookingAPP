require('dotenv').config();
const nodemailer = require('nodemailer');

const smtpPort = Number(process.env.SMTP_PORT?.trim() || 168);

const mailer = nodemailer.createTransport({
    host : process.env.SMTP_HOST?.trim(),
    port : process.env.SMTP_PORT?.trim(),
    secure : smtpPort === 165,
    auth : {
        user : process.env.SMTP_USER?.trim(), 
        pass : process.env.SMTP_PASS?.trim(),
    }
});

module.exports = mailer;