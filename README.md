# Users Booking APP

A full-stack web application that enables users to book services or appointments. The application features user authentication, booking management, and email notifications.

## 🌟 Features

- **User Authentication**
  - User registration and login with JWT authentication
  - Password encryption with bcryptjs
  - Email verification support

- **Booking Management**
  - Create and manage bookings
  - View booking history
  - Real-time booking status updates

- **Email Notifications**
  - Automated email confirmations using Nodemailer
  - SMTP integration for reliable email delivery

- **Responsive Design**
  - Modern, responsive UI built with React
  - Tailwind CSS for styling
  - React Router for navigation

## 📋 Tech Stack

### Backend
- **Node.js** with Express.js
- **MongoDB** with Mongoose for database management
- **JWT** for authentication
- **bcryptjs** for password encryption
- **Nodemailer** for email services
- **Multer** for file uploads
- **CORS** for cross-origin requests

### Frontend
- **React** - JavaScript library for building user interfaces
- **Vite** - Next generation frontend build tool
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API requests
- **Tailwind CSS** - Utility-first CSS framework

## 📁 Project Structure

```
UsersBookingAPP/
├── BackEnd/
│   ├── config/           # Database and service configurations
│   ├── controllers/      # Route controllers
│   ├── middlewares/      # Custom middlewares
│   ├── models/          # MongoDB schemas
│   ├── routes/          # API routes
│   ├── server.js        # Server entry point
│   └── package.json
│
└── FrontEnd/
    └── Front-End/
        ├── src/         # React components and pages
        ├── package.json
        └── vite.config.js
```
