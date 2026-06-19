const express = require("express");
const { createBooking } = require("../controllers/bookingController");
const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");
const router = express.Router();

//create a new booking (only for admin & receptionist)
router.post("/", authMiddleware, roleMiddleware(["Admin", "Receptionist"]), createBooking);

module.exports = router;
