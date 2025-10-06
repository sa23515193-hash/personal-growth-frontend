import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ProgressChart = () => {
  // Store daily records
  const [entries, setEntries] = useState([
    { date: "2025-10-01", Study: 2, Fitness: 1, SelfCare: 1 },
    { date: "2025-10-02", Study: 3, Fitness: 2, SelfCare: 1 },
  ]);

  // Form states
  const [date, setDate] = useState("");
  const [study, setStudy] = useState("");
  const [fitness, setFitness] = useState("");
  const [selfCare, setSelfCare] = useState("");

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date || !study || !fitness || !selfCare)
      return alert("Please fill all fields!");

    const newEntry = {
      date,
      Study: Number(study),
      Fitness: Number(fitness),
      SelfCare: Number(selfCare),
    };

    setEntries((prev) => [...prev, newEntry]);
    setDate("");
    setStudy("");
    setFitness("");
    setSelfCare("");
  };

  // Sort entries by date
  const sortedData = [...entries].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg w-full">
      <h2 className="text-2xl font-bold text-yellow-600 mb-4 text-center">
        Your Daily Progress Tracker
      </h2>

      {/* Input Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap justify-center gap-4 mb-6 bg-gray-100 p-4 rounded-xl shadow-sm text-black"
      >
        {/* Date */}
        <div className="flex flex-col">
          <label className="font-semibold mb-1 text-gray-800">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border rounded-lg p-2 text-black bg-white focus:ring-2 focus:ring-yellow-400 outline-none"
          />
        </div>

        {/* Study */}
        <div className="flex flex-col">
          <label className="font-semibold mb-1 text-gray-800">Study Hours</label>
          <input
            type="number"
            value={study}
            onChange={(e) => setStudy(e.target.value)}
            className="border rounded-lg p-2 w-28 text-black bg-white focus:ring-2 focus:ring-yellow-400 outline-none"
            min="0"
          />
        </div>

        {/* Fitness */}
        <div className="flex flex-col">
          <label className="font-semibold mb-1 text-gray-800">Exercise Hours</label>
          <input
            type="number"
            value={fitness}
            onChange={(e) => setFitness(e.target.value)}
            className="border rounded-lg p-2 w-28 text-black bg-white focus:ring-2 focus:ring-yellow-400 outline-none"
            min="0"
          />
        </div>

        {/* Self Care */}
        <div className="flex flex-col">
          <label className="font-semibold mb-1 text-gray-800">Self-Care Hours</label>
          <input
            type="number"
            value={selfCare}
            onChange={(e) => setSelfCare(e.target.value)}
            className="border rounded-lg p-2 w-28 text-black bg-white focus:ring-2 focus:ring-yellow-400 outline-none"
            min="0"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-5 py-2 rounded-lg self-end transition-all duration-200"
        >
          Add Entry
        </button>
      </form>

      {/* Chart */}
      {entries.length > 0 ? (
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={sortedData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="Study"
              stroke="#2563eb"
              strokeWidth={3}
            />
            <Line
              type="monotone"
              dataKey="Fitness"
              stroke="#16a34a"
              strokeWidth={3}
            />
            <Line
              type="monotone"
              dataKey="SelfCare"
              stroke="#facc15"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <p className="text-center text-gray-500 italic mt-10">
          No data added yet. Start tracking your progress!
        </p>
      )}

      <p className="text-gray-600 text-center mt-3">
        Keep going! 🌱 Every small step counts.
      </p>
    </div>
  );
};

export default ProgressChart;

