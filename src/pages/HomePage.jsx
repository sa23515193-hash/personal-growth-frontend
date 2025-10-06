import React from "react";
import { Link } from "react-router-dom";
import { FaDumbbell, FaBookOpen, FaLeaf, FaMoon, FaSmile } from "react-icons/fa";

const HomePage = () => {
  return (
    
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-green-50 to-green-100 text-gray-800 mt-0 pt-0">
     <div className="h-16"></div>  
      {/* 🌸 Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-10 mt-16 sm:mt-20">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-green-700 mb-4">
          🌿 Personal Growth Tracker
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl mb-8">
          Build better habits, track your progress, and become the best version of yourself — one day at a time.
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          <Link
            to="/register"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition"
          >
            Get Started
          </Link>
          
        </div>
      </section>

      {/* 🌼 Features Section */}
      <section className="bg-white py-14 px-6">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-10">
          Track Your Daily Growth 🌱
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: <FaDumbbell className="text-4xl text-green-600 mb-3" />,
              title: "Exercise",
              desc: "Stay consistent with your daily workouts and watch your strength grow over time.",
            },
            {
              icon: <FaBookOpen className="text-4xl text-green-600 mb-3" />,
              title: "Study",
              desc: "Log your study hours, maintain focus, and track your learning journey.",
            },
            {
              icon: <FaLeaf className="text-4xl text-green-600 mb-3" />,
              title: "Diet",
              desc: "Keep track of your meals and develop a healthy relationship with food.",
            },
            {
              icon: <FaMoon className="text-4xl text-green-600 mb-3" />,
              title: "Sleep",
              desc: "Improve your sleep quality by tracking your sleep hours daily.",
            },
            {
              icon: <FaSmile className="text-4xl text-green-600 mb-3" />,
              title: "Self-care",
              desc: "Take care of your skin, hair, and inner peace with consistency and love.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-green-50 border border-green-200 rounded-2xl p-6 shadow hover:shadow-lg transition"
            >
              {item.icon}
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🌸 Footer */}
      <footer className="text-center py-6 bg-green-700 text-white mt-auto">
        <p>© 2025 Personal Growth Tracker 🌿 | Made with 💚 by Sawaira</p>
      </footer>
    </div>
  );
};

export default HomePage;