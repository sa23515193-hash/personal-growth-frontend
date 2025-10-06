import React, { useState, useEffect } from "react";

const StudyProgress = () => {
  const today = new Date();
  const todayKey = today.toLocaleDateString("en-CA");
  const todayDisplay = today.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const [sessions, setSessions] = useState([]);
  const [newSession, setNewSession] = useState({
    subject: "",
    start: "",
    end: "",
    notes: "",
  });
  const [history, setHistory] = useState({});

  // Load from localStorage
  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem("studyHistory")) || {};
    setHistory(savedHistory);
    if (savedHistory[todayKey]) {
      setSessions(savedHistory[todayKey]);
    }
  }, []);

  // Add new study session
  const addSession = () => {
    const { subject, start, end } = newSession;
    if (!subject || !start || !end) {
      alert("⚠️ Please fill all fields before adding a session!");
      return;
    }
    setSessions([...sessions, newSession]);
    setNewSession({ subject: "", start: "", end: "", notes: "" });
  };

  // Save today's study
  const saveStudy = () => {
    if (sessions.length === 0) {
      alert("⚠️ Add at least one study session before saving!");
      return;
    }
    const updatedHistory = { ...history, [todayKey]: sessions };
    localStorage.setItem("studyHistory", JSON.stringify(updatedHistory));
    setHistory(updatedHistory);
    alert("✅ Study Progress Saved!");
  };

  // History list
  const getHistoryList = () => {
    return Object.entries(history)
      .sort((a, b) => new Date(b[0]) - new Date(a[0]))
      .map(([date, sessions], i) => (
        <div
          key={i}
          className="bg-white p-4 rounded-xl shadow mb-4 text-gray-900"
        >
          <h3 className="text-lg font-semibold text-green-700 mb-2">
            📚 {new Date(date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </h3>
          <table className="w-full border border-gray-200 text-sm text-gray-800">
            <thead>
              <tr className="bg-green-100 text-green-800">
                <th className="border p-2">#</th>
                <th className="border p-2">Subject / Topic</th>
                <th className="border p-2">Start</th>
                <th className="border p-2">End</th>
                <th className="border p-2">Notes</th>
              </tr>
            </thead>
            <tbody>
              {sessions.map((s, idx) => (
                <tr key={idx} className="hover:bg-green-50">
                  <td className="border p-2 text-center">{idx + 1}</td>
                  <td className="border p-2">{s.subject}</td>
                  <td className="border p-2 text-center">{s.start}</td>
                  <td className="border p-2 text-center">{s.end}</td>
                  <td className="border p-2">{s.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ));
  };

  return (
    <div className="min-h-screen bg-green-50 px-4 pt-24 pb-16 flex flex-col items-center text-gray-900">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-3xl font-bold text-green-700 text-center mb-2">
          📖 Study Progress Tracker
        </h1>
        <p className="text-center text-gray-700 mb-6">
          Date: <span className="font-semibold">{todayDisplay}</span>
        </p>

        {/* Study Sessions Table */}
        <table className="w-full border border-gray-200 mb-6 text-sm text-gray-900">
          <thead>
            <tr className="bg-green-100 text-green-800">
              <th className="border p-2">Subject / Topic</th>
              <th className="border p-2">Start Time</th>
              <th className="border p-2">End Time</th>
              <th className="border p-2">Notes</th>
              <th className="border p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {sessions.map((s, idx) => (
              <tr key={idx} className="hover:bg-green-50">
                <td className="border p-2">{s.subject}</td>
                <td className="border p-2 text-center">{s.start}</td>
                <td className="border p-2 text-center">{s.end}</td>
                <td className="border p-2">{s.notes}</td>
                <td className="border p-2 text-center">
                  <button
                    onClick={() =>
                      setSessions(sessions.filter((_, i) => i !== idx))
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
                  type="text"
                  placeholder="e.g. Math - Algebra"
                  value={newSession.subject}
                  onChange={(e) =>
                    setNewSession({ ...newSession, subject: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-2 py-1 text-gray-900 placeholder-gray-500"
                />
              </td>
              <td className="border p-2">
                <input
                  type="time"
                  value={newSession.start}
                  onChange={(e) =>
                    setNewSession({ ...newSession, start: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-2 py-1 text-gray-900"
                />
              </td>
              <td className="border p-2">
                <input
                  type="time"
                  value={newSession.end}
                  onChange={(e) =>
                    setNewSession({ ...newSession, end: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-2 py-1 text-gray-900"
                />
              </td>
              <td className="border p-2">
                <input
                  type="text"
                  placeholder="Add notes..."
                  value={newSession.notes}
                  onChange={(e) =>
                    setNewSession({ ...newSession, notes: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-2 py-1 text-gray-900 placeholder-gray-500"
                />
              </td>
              <td className="border p-2 text-center">
                <button
                  onClick={addSession}
                  className="bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700 transition"
                >
                  ➕ Add
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Save Button */}
        <div className="flex justify-end mb-10">
          <button
            onClick={saveStudy}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Save Progress
          </button>
        </div>

        {/* 💡 Study Tips Section */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            💡 Study Tips for Better Focus
          </h2>
          <ul className="list-disc pl-6 text-gray-800 space-y-2">
            <li>🕒 Study in focused 45–60 minute blocks with 5–10 minute breaks.</li>
            <li>📱 Keep your phone in another room or use “Do Not Disturb”.</li>
            <li>☀️ Study in a well-lit, clean, and quiet environment.</li>
            <li>📑 Make a to-do list before starting each session.</li>
            <li>💧 Stay hydrated and take small walks to refresh your mind.</li>
            <li>🎧 Listen to calm background music or white noise if it helps focus.</li>
          </ul>
        </div>

        {/* 📚 Recommended Books */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            📚 Recommended Books to Stay Motivated
          </h2>
          <ul className="list-disc pl-6 text-gray-800 space-y-2">
            <li>
              <span className="font-semibold">“Deep Work”</span> by Cal Newport – learn how to focus without distractions.
            </li>
            <li>
              <span className="font-semibold">“Atomic Habits”</span> by James Clear – build strong study habits step by step.
            </li>
            <li>
              <span className="font-semibold">“The Power of Now”</span> by Eckhart Tolle – improve mindfulness and presence.
            </li>
            <li>
              <span className="font-semibold">“The 5 AM Club”</span> by Robin Sharma – learn discipline and morning routines.
            </li>
          </ul>
        </div>

        {/* 🕓 History */}
        <div>
          <h2 className="text-2xl font-bold text-green-700 mb-4">📖 Study History</h2>
          {Object.keys(history).length > 0 ? (
            getHistoryList()
          ) : (
            <p className="text-gray-600">No study sessions saved yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudyProgress;


