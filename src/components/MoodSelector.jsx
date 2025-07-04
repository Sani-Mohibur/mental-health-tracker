import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const moods = [
  { emoji: "😄", label: "Happy" },
  { emoji: "🙂", label: "Okay" },
  { emoji: "😐", label: "Neutral" },
  { emoji: "😞", label: "Sad" },
  { emoji: "😭", label: "Depressed" },
];

const moodValues = {
  Happy: 5,
  Okay: 4,
  Neutral: 3,
  Sad: 2,
  Depressed: 1,
};

const MoodSelector = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [moodHistory, setMoodHistory] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("mood-history");
    if (stored) {
      setMoodHistory(JSON.parse(stored));
    }
  }, []);

  const handleMoodClick = (mood) => {
    setSelectedMood(mood);

    const today = new Date().toISOString().split("T")[0];
    const newEntry = { date: today, mood: mood.label, emoji: mood.emoji };

    const updateHistory = [
      ...moodHistory.filter((entry) => entry.date !== today),
      newEntry,
    ];
    setMoodHistory(updateHistory);
    localStorage.setItem("mood-history", JSON.stringify(updateHistory));
  };

  const chartData = moodHistory
    .map((entry) => ({
      date: entry.date,
      moodValue: moodValues[entry.mood],
    }))
    .sort((a, b) => (a.date > b.date ? 1 : -1));

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">How are you feeling today?</h2>
      <div className="flex gap-4 text-3xl flex-wrap">
        {moods.map((mood) => (
          <button
            key={mood.label}
            onClick={() => handleMoodClick(mood)}
            title={mood.label} // tooltip on hover
            className={`p-3 rounded-full border-2 
              transition-transform duration-200 ease-in-out 
              ${
                selectedMood?.label === mood.label
                  ? "border-blue-500 bg-blue-100 scale-110"
                  : "border-gray-300 hover:border-blue-400 hover:bg-blue-500 hover:scale-105"
              }`}
          >
            {mood.emoji}
          </button>
        ))}
      </div>
      {selectedMood && (
        <p className="mt-4 text-lg">
          You selected: <strong>{selectedMood.label}</strong>
        </p>
      )}

      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-2">Your Mood History</h3>
        <ul className="space-y-1">
          {moodHistory
            .sort((a, b) => (a.date < b.date ? 1 : -1))
            .map((entry) => (
              <li key={entry.date} className="text-sm">
                <span className="font-medium">{entry.date}:</span> {entry.emoji}{" "}
                {entry.mood}
              </li>
            ))}
        </ul>
      </div>
      <div className="mt-8" style={{ width: "100%", height: 300 }}>
        <h3 className="text-lg font-semibold mb-2">Mood Trend</h3>
        {chartData.length > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chartData}
              margin={{ left: 25, right: 20, top: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis
                domain={[1, 5]}
                ticks={[1, 2, 3, 4, 5]}
                tickFormatter={(value) => {
                  const mood = Object.entries(moodValues).find(
                    ([, v]) => v === value
                  );
                  return mood ? mood[0] : value;
                }}
              />
              <Tooltip
                labelFormatter={(label) => `Date: ${label}`}
                formatter={(value) => {
                  const mood = Object.entries(moodValues).find(
                    ([, v]) => v === value
                  );
                  return mood ? mood[0] : value;
                }}
              />
              <Line
                type="monotone"
                dataKey="moodValue"
                stroke="#3b82f6"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <p>No mood data to display yet.</p>
        )}
      </div>
    </div>
  );
};

export default MoodSelector;
