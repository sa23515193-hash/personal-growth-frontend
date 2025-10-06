import React, { useState, useEffect } from "react";

const defaultHabits = [
  "Skincare Routine",
  "Drink 8 Glasses of Water",
  "Meditation / Deep Breathing",
  "Healthy Meal",
  "Sleep 7+ Hours",
  "Gratitude Journal",
  "No Screen Before Bed",
];

const SelfCare = () => {
  const today = new Date();
  const todayKey = today.toLocaleDateString("en-CA");
  const todayDisplay = today.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const [habits, setHabits] = useState(defaultHabits.map(h => ({ name: h, done: false })));
  const [mood, setMood] = useState("");
  const [notes, setNotes] = useState("");
  const [history, setHistory] = useState({});

  // 🔄 Load saved data
  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem("selfCareHistory")) || {};
    setHistory(savedHistory);

    if (savedHistory[todayKey]) {
      const { habits, mood, notes } = savedHistory[todayKey];
      setHabits(habits);
      setMood(mood);
      setNotes(notes);
    }
  }, []);

  // ✅ Toggle habit completion
  const toggleHabit = (index) => {
    setHabits((prev) =>
      prev.map((h, i) => (i === index ? { ...h, done: !h.done } : h))
    );
  };

  // 💾 Save today's data
  const saveSelfCare = () => {
    const updatedHistory = {
      ...history,
      [todayKey]: { habits, mood, notes },
    };
    localStorage.setItem("selfCareHistory", JSON.stringify(updatedHistory));
    setHistory(updatedHistory);
    alert("✅ Self-care progress saved successfully!");
  };

  // 📖 Render History
  const getHistoryList = () => {
    return Object.entries(history)
      .sort((a, b) => new Date(b[0]) - new Date(a[0]))
      .map(([date, data], i) => (
        <div key={i} className="bg-white p-4 rounded-xl shadow mb-4 text-gray-900">
          <h3 className="text-lg font-semibold text-green-700 mb-2">
            📅 {new Date(date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </h3>
          <ul className="list-disc pl-5 text-gray-800">
            {data.habits.map((h, idx) => (
              <li key={idx}>
                {h.name} —{" "}
                <span className={h.done ? "text-green-600 font-semibold" : "text-red-600"}>
                  {h.done ? "Done" : "Skipped"}
                </span>
              </li>
            ))}
          </ul>
          {data.mood && (
            <p className="mt-2">
              <span className="font-semibold text-green-700">Mood:</span>{" "}
              {data.mood}
            </p>
          )}
          {data.notes && (
            <p className="mt-1 text-gray-700">
              <span className="font-semibold text-green-700">Notes:</span> {data.notes}
            </p>
          )}
        </div>
      ));
  };

  return (
    <div className="min-h-screen bg-green-50 px-4 pt-24 pb-16 flex flex-col items-center text-gray-900">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-6 text-gray-900">
        <h1 className="text-3xl font-bold text-green-700 text-center mb-2">
          💖 Self-Care Tracker
        </h1>
        <p className="text-center text-gray-700 mb-6">
          Date: <span className="font-semibold">{todayDisplay}</span>
        </p>

        {/* 🌸 Self-Care Checklist */}
        <h2 className="text-xl font-semibold text-green-700 mb-3">
          Daily Self-Care Habits
        </h2>
        <div className="space-y-2 mb-6">
          {habits.map((habit, idx) => (
            <label
              key={idx}
              className="flex items-center justify-between bg-green-50 border border-green-200 rounded-xl px-4 py-2 hover:bg-green-100 transition"
            >
              <span className="text-gray-800">{habit.name}</span>
              <input
                type="checkbox"
                checked={habit.done}
                onChange={() => toggleHabit(idx)}
                className="w-5 h-5 accent-green-600"
              />
            </label>
          ))}
        </div>

        {/* 😌 Mood Selector */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-green-700 mb-2">Today's Mood</h2>
          <select
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-900"
          >
            <option value="">Select your mood</option>
            <option>😊 Happy</option>
            <option>😌 Calm</option>
            <option>😴 Tired</option>
            <option>😔 Sad</option>
            <option>💪 Motivated</option>
          </select>
        </div>

        {/* 📝 Notes Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-green-700 mb-2">Notes / Reflections</h2>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Write about your day, how you felt, or any reflections..."
            className="w-full border border-gray-300 rounded-lg px-4 py-2 h-28 text-gray-900 placeholder-gray-500"
          />
        </div>

        {/* 💾 Save Button */}
        <div className="flex justify-end mb-10">
          <button
            onClick={saveSelfCare}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Save Self-Care
          </button>
        </div>

        {/* 📖 History Section */}
        <div>
          <h2 className="text-2xl font-bold text-green-700 mb-4">📅 Self-Care History</h2>
          {Object.keys(history).length > 0 ? (
            getHistoryList()
          ) : (
            <p className="text-gray-600">No self-care history saved yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelfCare;

