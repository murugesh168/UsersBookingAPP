const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const app = express();
const authRoutes = require("./routes/authRoutes");
require("dotenv").config();
const cors = require("cors");
const bookingRoutes = require("./routes/bookingRoutes");
const mailer = require("./config/mailer");


//Middlewares
app.use(cors());
app.use(bodyParser.json());

//connect to MongoDB
app.use("/api/auth", authRoutes);
app.use("/api/bookings", bookingRoutes);

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    try {
        await connectDB();
        try {
            await mailer.verify();
            console.log("SMTP Connected");
        } catch (mailError) {
            console.log(`SMTP verification failed: ${mailError.message}`);
        }
        app.listen(PORT, ()=>{
            console.log(`Server is running on Port ${PORT}`);
        });
    } catch (error) {
        console.log("Server startup aborted");
    }
};
startServer();