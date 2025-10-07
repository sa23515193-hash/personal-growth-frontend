import React, { useState } from "react";

// ✅ Import all section pages
import Profile from "../pages/Profile";
import MonthlyReport from "../components/ProgressChart";
import FitnessTracker from "../pages/Fitness";
import DailyRoutine from "../pages/Routine";
import SelfCareTracker from "../pages/SelfCare";
import StudyProgress from "../pages/Study";
import Motivation from "../pages/Motivation";
import FeedbackForm from "../components/FeedbackForm";
import FeedbackList from "../components/FeedbackList";


const Dashboard = () => {
  // 👇 Track which section is active
  const [activeSection, setActiveSection] = useState("Fitness Tracker");

  // 👇 List of all dashboard sections
  const sections = [
    "Profile",
    "Monthly Report",
    "Fitness Tracker",
    "Daily Routine",
    "Self-Care Tracker",
    "Study Progress",
    "Motivation",
  ];

  // 👇 Function to render selected section
  const renderSection = () => {
    switch (activeSection) {
      case "Profile":
        return <Profile />;
      case "Monthly Report":
        return <MonthlyReport />;
      case "Fitness Tracker":
        return <FitnessTracker />;
      case "Daily Routine":
        return <DailyRoutine />;
      case "Self-Care Tracker":
        return <SelfCareTracker />;
      case "Study Progress":
        return <StudyProgress />;
      case "Motivation":
        return <Motivation />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center px-4 sm:px-8 pt-24">
      {/* 🌿 Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-green-700">
          Welcome to Your Dashboard 🌸
        </h1>
        <p className="text-gray-600 mt-2">
          Track your personal growth, daily progress, and goals all in one place.
        </p>
      </div>

      {/* 🧭 Navigation Bar */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {sections.map((s) => (
          <button
            key={s}
            onClick={() => setActiveSection(s)}
            className={`px-5 py-2 rounded-full border font-medium transition-all duration-300 ease-in-out ${
              activeSection === s
                ? "bg-green-600 text-white shadow-lg scale-105"
                : "bg-white text-green-700 border-green-600 hover:bg-green-100"
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      {/* 📂 Section Content (Dynamic) */}
      <div
        className="w-full max-w-6xl mb-16 bg-white rounded-2xl shadow-md p-6 transition-all duration-500 ease-in-out"
        key={activeSection}
      >
        {renderSection()}
      </div>
<div className="mt-6">
  <h2 className="text-xl font-bold mb-2">Feedback & Reviews</h2>
  <FeedbackForm />
  <FeedbackList />
</div>
      {/* 🌸 Footer */}
      <footer className="text-center text-gray-500 mt-auto mb-6">
        © {new Date().getFullYear()} Personal Growth Tracker — Made with 💚 by Sawaira
      </footer>
    </div>

  );
};

export default Dashboard;
