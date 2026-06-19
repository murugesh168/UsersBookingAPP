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
- **React 19** - JavaScript library for building user interfaces
- **Vite** - Next generation frontend build tool
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API requests
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library

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

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB instance running
- npm or yarn package manager

### Backend Setup

1. Navigate to the backend directory:
```bash
cd BackEnd
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```
or for development with auto-reload:
```bash
nodemon server.js
```

The API will be available at `http://localhost:3000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd FrontEnd/Front-End
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🔒 Authentication

The application uses JWT (JSON Web Tokens) for authentication. Protected routes require a valid JWT token in the Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

## 📧 Email Configuration

The application uses Nodemailer for sending emails. Configure SMTP settings in your `.env` file:
- Use Gmail for email delivery (requires App Password)
- Or configure your own SMTP server

## 🛠️ Available Scripts

### Backend
```bash
npm start        # Start server
npm test         # Run tests
nodemon server.js # Development with auto-reload
```

### Frontend
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```
