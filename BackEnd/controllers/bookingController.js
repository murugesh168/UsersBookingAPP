const Booking = require("../models/booking");
const mailer = require("../config/mailer");
require("dotenv").config();


//Create a new booking
const createBooking = async (req,res) => {
    try{
        const {customerName, customerEmail, service, date} = req.body;
        if (!customerName || !customerEmail || !service || !date) {
            return res.status(400).json({error: "customerName, customerEmail, service, and date are required"});
        }
        if(!req.user?.userId){
            return res.status(401).json({error : "Unauthorized User"});
        }

        const booking = await Booking.create({
            customerName,
            customerEmail,
            service,
            date,
            createdBy : req.user.userId,
        });

        const createdByName  = req.user.name || "Receptionist";
        let emailStatus = "skipped";

        if(customerEmail){
            try {
                await mailer.sendMail({
                    from : process.env.SMTP_USER,
                    to : customerEmail,
                    replyTo : req.user.email || process.env.SMTP_USER,
                    subject : "New Booking Confirmation",
                    text : `Hello ${customerName}, your booking for ${service} on ${date} has been created by ${createdByName}.`
                });
                emailStatus = "sent";
            }catch(mailError){
                emailStatus = "failed";
                console.log(`Booking created but email failed: ${mailError.message}`);
            }
        }
        res.status(201).json(
            {
                message : "Booking Created Successfully",
                bookingId : booking._id,
                emailStatus
            }
        );
    }catch(error){
        console.log(error.message);
        if(error.name === "ValidationError"){
            return res.status(400).json({error: error.message});
        }
        res.status(500).json({error : "Internal Server Error"});
    }
};

module.exports = { createBooking };