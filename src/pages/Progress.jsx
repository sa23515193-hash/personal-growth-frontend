import React, { useState } from "react";

const Progress = () => {
  const [habits, setHabits] = useState([
    { id: 1, name: "Morning Exercise", done: false },
    { id: 2, name: "30-min Reading", done: false },
    { id: 3, name: "Meditation", done: false },
    { id: 4, name: "Study Session", done: false },
    { id: 5, name: "Gratitude Journal", done: false },
  ]);

  const [newHabit, setNewHabit] = useState("");

  const toggleHabit = (id) => {
    setHabits(habits.map((h) => (h.id === id ? { ...h, done: !h.done } : h)));
  };

  const addHabit = () => {
    if (newHabit.trim()) {
      setHabits([...habits, { id: Date.now(), name: newHabit, done: false }]);
      setNewHabit("");
    }
  };

  return (
    <div className="min-h-screen bg-green-50 pt-24 px-4 sm:px-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-green-700 mb-6">🌿 Daily Progress Tracker</h1>

      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-2xl">
        <ul className="mb-4">
          {habits.map((habit) => (
            <li
              key={habit.id}
              className={`flex items-center justify-between mb-3 p-3 rounded-lg border ${
                habit.done ? "bg-green-100 line-through" : "bg-gray-50"
              }`}
            >
              <span>{habit.name}</span>
              <button
                onClick={() => toggleHabit(habit.id)}
                className={`px-3 py-1 rounded-lg ${
                  habit.done ? "bg-gray-400" : "bg-green-600"
                } text-white`}
              >
                {habit.done ? "Undo" : "Done"}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex gap-2">
          <input
            type="text"
            value={newHabit}
            onChange={(e) => setNewHabit(e.target.value)}
            placeholder="Add new habit..."
            className="flex-grow border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button onClick={addHabit} className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Progress;


