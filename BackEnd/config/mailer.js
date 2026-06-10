require('dotenv').config();
const nodemailer = require('nodemailer');

const smtpPort = Number(process.env.SMTP_PORT?.trim() || 587);

const mailer = nodemailer.createTransport({
    host : process.env.SMTP_HOST?.trim(),
    port : smtpPort,
    secure : smtpPort === 465,
    auth : {
        user : process.env.SMTP_USER?.trim(), 
        pass : process.env.SMTP_PASS?.trim()
    }
});

module.exports = mailer;