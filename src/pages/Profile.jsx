import React, { useState, useEffect } from "react";

const Profile = () => {
  const [profilePic, setProfilePic] = useState("");
  const [habits, setHabits] = useState(["", "", "", "", ""]);
  const [goal, setGoal] = useState("");
  const [duration, setDuration] = useState({ start: "", end: "" });

  // 🔄 Load data from localStorage on mount
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("profileData"));
    if (savedData) {
      setProfilePic(savedData.profilePic || "");
      setHabits(savedData.habits || ["", "", "", "", ""]);
      setGoal(savedData.goal || "");
      setDuration(savedData.duration || { start: "", end: "" });
    }
  }, []);

  // 💾 Save data to localStorage
  const saveProfile = () => {
    const data = { profilePic, habits, goal, duration };
    localStorage.setItem("profileData", JSON.stringify(data));
    alert("✅ Profile saved successfully!");
  };

  // 🖼 Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfilePic(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-[90vh] flex justify-center items-center bg-green-50 px-4 py-8">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-2xl border border-green-100">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
          🌿 My Profile
        </h2>

        {/* 🖼 Profile Picture Upload */}
        <div className="flex flex-col items-center mb-6">
          <label className="cursor-pointer">
            <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
            {profilePic ? (
              <img
                src={profilePic}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-green-400 shadow"
              />
            ) : (
              <div className="w-32 h-32 rounded-full bg-green-100 flex items-center justify-center text-green-700 text-sm font-medium">
                Upload Photo
              </div>
            )}
          </label>
        </div>

        {/* 🪴 Habits Section */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-700 mb-3">My 5 Habits</h3>
          {habits.map((habit, index) => (
            <input
              key={index}
              type="text"
              value={habit}
              onChange={(e) => {
                const newHabits = [...habits];
                newHabits[index] = e.target.value;
                setHabits(newHabits);
              }}
              placeholder={`Habit ${index + 1}`}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 bg-white"
            />
          ))}
        </div>

        {/* 🎯 Goal Section */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-700 mb-2">My Main Goal</h3>
          <textarea
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            placeholder="Write your goal..."
            className="w-full border border-gray-300 rounded-lg px-4 py-2 h-24 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 bg-white"
          />
        </div>

        {/* ⏳ Duration Section */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-700 mb-3">Goal Duration</h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-gray-700 mb-1 font-medium">Start Date</label>
              <input
                type="date"
                value={duration.start}
                onChange={(e) => setDuration({ ...duration, start: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400 bg-white"
              />
            </div>
            <div className="flex-1">
              <label className="block text-gray-700 mb-1 font-medium">End Date</label>
              <input
                type="date"
                value={duration.end}
                onChange={(e) => setDuration({ ...duration, end: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400 bg-white"
              />
            </div>
          </div>
        </div>

        {/* 💾 Save Button */}
        <button
          onClick={saveProfile}
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition font-medium"
        >
          Save Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;

