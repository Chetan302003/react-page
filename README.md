# User Management System

A premium, full-stack registration system built with **React**, **Express**, and **MongoDB**. This application features a modern dark-mode UI with glassmorphism effects and real-time user updates.

---

# Technology Stack

- **Frontend**: React (Vite), Framer Motion (Animations), Lucide React (Icons), Axios (API calls).
- **Backend**: Node.js, Express.js.
- **Database**: MongoDB (Local or Atlas).
- **Styling**: Vanilla CSS with a custom-built premium design system.

---

# Project Structure

```text
react-page/
├── client/              # React frontend
│   ├── src/
│   │   ├── components/  # RegistrationForm, UserList
│   │   ├── App.jsx      # Main application entry
│   │   └── index.css    # Premium design system
│   └── package.json
├── server/              # Express backend
│   ├── models/          # MongoDB User Schema
│   ├── index.js         # API routes and server logic
│   └── .env             # Environment variables (DB URI, Port)
└── README.md            # You are here!
```

---

## How to Run the Project

### 1. Prerequisites
- Ensure you have [Node.js](https://nodejs.org/) installed.
- Ensure you have a [MongoDB](https://www.mongodb.com/) database (Local or Atlas).

### 2. Setup the Server
```bash
cd server
npm install
npm run start
```
*The server will run on `http://localhost:5000`.*

### 3. Setup the Client
```bash
cd client
npm install
npm run dev
```
*The frontend will run on `http://localhost:5173`.*

---

## How to Access and Configure Database

### 1. Configuration
The application uses an `.env` file located in the `/server` directory to manage database connections.

Current config in `server/.env`:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

### 2. Accessing MongoDB Atlas (Cloud)
If you are using the provided Atlas URI:
1. Log in to your [MongoDB Atlas Dashboard](https://cloud.mongodb.com/).
2. Navigate to your **Cluster**.
3. Go to **Browse Collections** to see the `users` collection.
4. Data is stored in the `registration_db` database by default.

### 3. Schema Details
Users are stored with the following fields:
- `username`: String (Required)
- `email`: String (Required, Unique)
- `password`: String (Required)
- `createdAt`: Date (Auto-generated)

---

## eatures
- **Modern UI**: Glassy dark theme with smooth hover effects.
- **Form Validation**: Instant feedback during registration.
- **Real-time Refresh**: The user list updates automatically upon successful registration.
- **Responsive Design**: Works seamlessly on desktop and mobile.

---

*Built with ❤️ by Antigravity*
