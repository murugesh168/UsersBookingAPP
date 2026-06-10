const mongoose = require("mongoose");
const bookingSchema = new mongoose.Schema({
    customerName : {
        type : String,
        required : true,
    },
    customerEmail : {
        type : String,
        required : true,
        trim : true,
        lowercase : true,
    },
    service : {
        type : String,
        required : true,
    },
    date : {
        type : Date,
        required : true
    },
    createdBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true,
    }
});

const booking = mongoose.model("booking",bookingSchema);
module.exports = booking;