# 💰 Expense Tracker

A full-stack web application for tracking personal expenses, built with React and Node.js/Express.

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Local Setup](#-local-setup)
- [API Endpoints](#-api-endpoints)
- [Deployment](#-deployment)
- [Contributing](#-contributing)

## ✨ Features

- **Add Expenses**: Create new expense entries with description and amount
- **View Expenses**: Display all expenses in a clean, organized list
- **Delete Expenses**: Remove unwanted expense entries
- **Real-time Updates**: UI updates automatically without page refresh
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **RESTful API**: Clean and well-structured backend API

## 🛠 Tech Stack

### Frontend
- **React**: User interface library
- **TailwindCSS**: Styling and responsive design

### Backend
- **Node.js**: JavaScript runtime
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling

## 🛠 Local Setup

### Prerequisites

Make sure you have the following installed on your system:

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)
- **MongoDB** account (MongoDB Atlas recommended)
- **Git**

### 1. Clone the Repository

```bash
git clone https://github.com/lakshaypunia/expense-tracker-app
cd expense-tracker
```

### 2. Backend Setup

#### Install Dependencies
```bash
cd backend
npm install
```

#### Environment Configuration
1. Create a `.env` file in the `backend` directory
2. Add your MongoDB connection string:

```env
MONGODB_URL=mongodb+srv://username:password@cluster.mongodb.net/expense-tracker?retryWrites=true&w=majority
```


#### Start the Backend Server
```bash
node server.js
```
The backend server will start on `http://localhost:5000`

### 3. Frontend Setup

#### Install Dependencies
```bash
cd ../frontend
npm install
```

#### Environment Configuration
1. Create a `.env` file in the `frontend` directory
2. Add the API base URL:

**For Local Development:**
```env
VITE_API_URL = "http://localhost:5000/api/expenses"
```

**For Production Deployment:**
```env
REACT_APP_API_BASE_URL=https://your-deployed-backend-url.com
```

#### Start the Frontend Application
Open a new terminal window:
```bash
npm run dev
```
The frontend application will start on `http://localhost:5173`

### 4. Access the Application

Once both servers are running:
- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:5000`

## 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/expenses` | Retrieve all expenses |
| POST | `/api/expenses` | Create a new expense |
| DELETE | `/api/expenses/:id` | Delete an expense by ID |

### Example API Usage


## 🚀 Deployment

### Backend Deployment

1. Deploy your backend to a service like Heroku, Railway, or Vercel
2. Update your MongoDB connection string if needed
3. Note down your deployed backend URL

### Frontend Deployment

1. Update the `.env` file in the frontend folder:
   ```env
   REACT_APP_API_BASE_URL=https://your-deployed-backend-url.com
   ```
2. Build the frontend:
   ```bash
   cd frontend
   npm run build
   ```
3. Deploy the `build` folder to Netlify, Vercel, or your preferred hosting service

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Notes

- Make sure MongoDB is running and accessible before starting the backend
- The frontend will automatically proxy API requests to the backend during development
- For production, ensure CORS is properly configured if frontend and backend are on different domains
- Keep your `.env` files secure and never commit them to version control

**Happy Expense Tracking! 💸**

For any questions or issues, please open an issue in the GitHub repository.