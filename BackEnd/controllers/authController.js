const user = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const mailer = require("../config/mailer");
require("dotenv").config();


// User Registration
const registerUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        const existingUser = await user.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                error: "User Already Exists"
            });
        }

        const newUser = await user.create({
            name,
            email,
            password,
            role
        });

        let emailStatus = "skipped";
        let emailWarning;

        if (newUser.email) {
            try {
                await mailer.sendMail({
                    from: process.env.SMTP_USER,
                    to: newUser.email,
                    subject: "Welcome to Front Desk",
                    text: `Hello ${newUser.name}, your account has been created successfully with the role ${newUser.role}.`
                });

                emailStatus = "sent";
            } catch (mailError) {
                emailStatus = "failed";
                emailWarning =
                    "User registered, but welcome email could not be delivered.";

                console.log(
                    `Welcome email failed: ${mailError.message}`
                );
            }
        }

        res.status(201).json({
            message: "User Registered Successfully",
            userId: newUser._id,
            emailStatus,
            ...(emailWarning ? { emailWarning } : {})
        });

    } catch (error) {

        console.log(error);

        if (error.code === 11000) {
            const duplicateField =
                Object.keys(error.keyPattern || {})[0] || "field";

            return res.status(400).json({
                error: `${duplicateField} already exists`
            });
        }

        if (error.name === "ValidationError") {
            const firstMessage =
                Object.values(error.errors)[0]?.message ||
                "Validation failed";

            return res.status(400).json({
                error: firstMessage
            });
        }

        res.status(500).json({
            error: "Internal Server Error"
        });
    }
};


// User Login
const loginUser = async (req, res) => {
    try {

        const { email, password } = req.body;

        const User = await user.findOne({ email });

        if (!User) {
            return res.status(401).json({
                error: "Unauthorized User"
            });
        }

        const isMatch = await bcrypt.compare(
            password,
            User.password
        );

        if (!isMatch) {
            return res.status(401).json({
                error: "Invalid Credentials"
            });
        }

        const token = jwt.sign(
            {
                userId: User._id,
                email: User.email,
                role: User.role,
                name: User.name
            },
            process.env.JWT_SECRET,
            {
                expiresIn: process.env.JWT_EXPIRES_IN
            }
        );

        res.status(200).json({
            token
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            error: "Internal Server Error"
        });
    }
};


// Forgot Password
const forgotPassword = async (req, res) => {
    try {

        const { email } = req.body;

        const User = await user.findOne({ email });

        if (!User) {
            return res.status(404).json({
                error: "User not found"
            });
        }

        const resetToken =
            crypto.randomBytes(32).toString("hex");

        User.resetPasswordToken = resetToken;

        User.resetPasswordExpires =
            Date.now() + 60 * 60 * 1000; // 1 hour

        await User.save();

        const resetLink =
            `http://localhost:5173/reset-password/${resetToken}`;

        await mailer.sendMail({
            from: process.env.SMTP_USER,
            to: User.email,
            subject: "Password Reset Request",
            html: `
                <h2>Password Reset</h2>
                <p>You requested a password reset.</p>
                <p>Click the link below:</p>

                <a href="${resetLink}">
                    Reset Password
                </a>

                <p>This link expires in 1 hour.</p>
            `
        });

        res.status(200).json({
            message: "Password reset link sent successfully"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            error: "Internal Server Error"
        });
    }
};


// Verify Reset Token
const verifyResetToken = async (req, res) => {
    try {

        const { token } = req.params;

        const User = await user.findOne({
            resetPasswordToken: token,
            resetPasswordExpires: {
                $gt: Date.now()
            }
        });

        if (!User) {
            return res.status(400).json({
                error: "Invalid or Expired Token"
            });
        }

        res.status(200).json({
            message: "Token Valid"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            error: "Internal Server Error"
        });
    }
};


// Reset Password
const resetPassword = async (req, res) => {
    try {

        const { token } = req.params;
        const { password } = req.body;

        const User = await user.findOne({
            resetPasswordToken: token,
            resetPasswordExpires: {
                $gt: Date.now()
            }
        });

        if (!User) {
            return res.status(400).json({
                error: "Invalid or Expired Token"
            });
        }

        // Password hashing is handled automatically
        // by your userSchema pre("save") hook

        User.password = password;

        User.resetPasswordToken = null;
        User.resetPasswordExpires = null;

        await User.save();

        res.status(200).json({
            message: "Password Updated Successfully"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            error: "Internal Server Error"
        });
    }
};

module.exports = {
    registerUser,
    loginUser,
    forgotPassword,
    verifyResetToken,
    resetPassword
};