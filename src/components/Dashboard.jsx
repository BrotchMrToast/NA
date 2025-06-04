// File: src/pages/Dashboard.jsx
// Purpose: Dashboard page with mood slider, EWI graph, and planner mock

import React, { useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const sampleEWIData = [
  { day: 'Mon', ewi: 4.5 },
  { day: 'Tue', ewi: 5.2 },
  { day: 'Wed', ewi: 5.8 },
  { day: 'Thu', ewi: 6.1 },
  { day: 'Fri', ewi: 5.6 }
];

export default function Dashboard() {
  const [mood, setMood] = useState(5);

  return (
    <div className="min-h-screen bg-white p-10 space-y-10">
      <h1 className="text-4xl font-bold text-blue-900">Employee Well-Being Dashboard</h1>

      <div className="bg-white border border-blue-200 p-4 rounded-xl shadow">
        <h2 className="text-xl text-blue-800 font-semibold mb-4">EWI Trend</h2>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={sampleEWIData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis domain={[0, 10]} />
            <Tooltip />
            <Line type="monotone" dataKey="ewi" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-yellow-50 p-6 rounded-xl shadow-md border border-yellow-200">
        <h2 className="text-xl font-semibold text-blue-800 mb-4">How are you feeling today?</h2>
        <input
          type="range"
          min="0"
          max="10"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          className="w-full accent-blue-500"
        />
        <p className="mt-2 text-blue-700">Mood Level: <strong>{mood}</strong></p>
      </div>

      <div className="bg-gray-50 p-6 rounded-xl shadow border border-gray-200">
        <h2 className="text-xl font-semibold text-blue-800 mb-2">Smart Daily Planner (Mock)</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>🧘 09:00 – Morning Mindfulness</li>
          <li>💻 10:00 – Focused Work Session</li>
          <li>☕ 12:00 – Regenerative Break</li>
          <li>📝 14:00 – Coaching Reflection Prompt</li>
        </ul>
      </div>
    </div>
  );
}
