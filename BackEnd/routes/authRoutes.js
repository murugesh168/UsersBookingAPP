const express = require("express");
const {
    registerUser,
    loginUser,
    forgotPassword,
    verifyResetToken,
    resetPassword
} = require("../controllers/authController");
const router = express.Router();

//Register a new user
router.post("/register",registerUser);

//Login User
router.post("/login",loginUser);

//Forgot password
router.post("/forgot-password", forgotPassword);

//Verify reset token
router.get("/verify-reset-token/:token",verifyResetToken);

//Reset password
router.post("/reset-password/:token",resetPassword);

module.exports = router;