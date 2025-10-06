import React, { useState, useEffect } from "react";

const DailyRoutine = () => {
  const today = new Date();
  const todayKey = today.toLocaleDateString("en-CA");
  const todayDisplay = today.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const [routines, setRoutines] = useState([]);
  const [newRoutine, setNewRoutine] = useState({ start: "", end: "", task: "" });
  const [history, setHistory] = useState({});

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem("routineHistory")) || {};
    setHistory(savedHistory);
    if (savedHistory[todayKey]) {
      setRoutines(savedHistory[todayKey]);
    }
  }, []);

  const addRoutineRow = () => {
    const { start, end, task } = newRoutine;
    if (!start || !end || !task) {
      alert("⚠️ Please fill all fields before adding!");
      return;
    }
    setRoutines([...routines, newRoutine]);
    setNewRoutine({ start: "", end: "", task: "" });
  };

  const saveRoutine = () => {
    if (routines.length === 0) {
      alert("⚠️ Add at least one routine before saving!");
      return;
    }
    const updatedHistory = { ...history, [todayKey]: routines };
    localStorage.setItem("routineHistory", JSON.stringify(updatedHistory));
    setHistory(updatedHistory);
    alert("✅ Routine saved successfully!");
  };

  const getHistoryList = () => {
    return Object.entries(history)
      .sort((a, b) => new Date(b[0]) - new Date(a[0]))
      .map(([date, items], i) => (
        <div key={i} className="bg-white p-4 rounded-xl shadow-md mb-4 text-gray-900">
          <h3 className="text-lg font-semibold text-green-700 mb-2">
            📅 {new Date(date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </h3>
          <table className="w-full border border-gray-200 text-sm text-gray-800">
            <thead>
              <tr className="bg-green-100 text-green-800">
                <th className="border p-2">#</th>
                <th className="border p-2">Start Time</th>
                <th className="border p-2">End Time</th>
                <th className="border p-2">Work / Task</th>
              </tr>
            </thead>
            <tbody>
              {items.map((r, idx) => (
                <tr key={idx} className="hover:bg-green-50">
                  <td className="border p-2 text-center">{idx + 1}</td>
                  <td className="border p-2 text-center">{r.start}</td>
                  <td className="border p-2 text-center">{r.end}</td>
                  <td className="border p-2">{r.task}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ));
  };

  return (
    <div className="min-h-screen bg-green-50 px-4 pt-24 pb-16 flex flex-col items-center text-gray-900">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg p-6 text-gray-900">
        <h1 className="text-3xl font-bold text-green-700 text-center mb-2">
          🌸 Daily Routine Tracker
        </h1>
        <p className="text-center text-gray-700 mb-6">
          Date: <span className="font-semibold">{todayDisplay}</span>
        </p>

        <table className="w-full border border-gray-200 mb-6 text-sm text-gray-900">
          <thead>
            <tr className="bg-green-100 text-green-800">
              <th className="border p-2">Start Time</th>
              <th className="border p-2">End Time</th>
              <th className="border p-2">Work / Task</th>
              <th className="border p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {routines.map((r, idx) => (
              <tr key={idx} className="hover:bg-green-50">
                <td className="border p-2 text-center">{r.start}</td>
                <td className="border p-2 text-center">{r.end}</td>
                <td className="border p-2">{r.task}</td>
                <td className="border p-2 text-center">
                  <button
                    onClick={() =>
                      setRoutines(routines.filter((_, i) => i !== idx))
                    }
                    className="text-red-600 hover:text-red-800 font-medium"
                  >
                    ❌
                  </button>
                </td>
              </tr>
            ))}

            {/* Input Row */}
            <tr className="bg-gray-50">
              <td className="border p-2">
                <input
                  type="time"
                  value={newRoutine.start}
                  onChange={(e) =>
                    setNewRoutine({ ...newRoutine, start: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-2 py-1 text-gray-900"
                />
              </td>
              <td className="border p-2">
                <input
                  type="time"
                  value={newRoutine.end}
                  onChange={(e) =>
                    setNewRoutine({ ...newRoutine, end: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-2 py-1 text-gray-900"
                />
              </td>
              <td className="border p-2">
                <input
                  type="text"
                  placeholder="Enter work/task..."
                  value={newRoutine.task}
                  onChange={(e) =>
                    setNewRoutine({ ...newRoutine, task: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-2 py-1 text-gray-900 placeholder-gray-500"
                />
              </td>
              <td className="border p-2 text-center">
                <button
                  onClick={addRoutineRow}
                  className="bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700 transition"
                >
                  ➕ Add
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="flex justify-end mb-10">
          <button
            onClick={saveRoutine}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Save Routine
          </button>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-green-700 mb-4">📖 History</h2>
          {Object.keys(history).length > 0 ? (
            getHistoryList()
          ) : (
            <p className="text-gray-600">No routines saved yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DailyRoutine;


