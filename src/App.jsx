import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import "./index.css";

// 🌿 Protected Route (for logged-in users)
const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/" replace />; // ✅ "/" means homepage (since login removed)
};

// 🌸 Main App Component
const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-green-50 flex flex-col">
        {/* 🌿 Navbar always visible */}
        <Navbar />

        {/* 📄 Page Content */}
        <main className="flex-grow pt-16 px-4 sm:px-8 lg:px-16 xl:px-24 max-w-7xl mx-auto w-full">
          <Routes>
            {/* 🌸 Public Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<Register />} />

            {/* 🌿 Protected Routes */}
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />

            

            

            {/* 🚦 Redirect unknown routes */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
