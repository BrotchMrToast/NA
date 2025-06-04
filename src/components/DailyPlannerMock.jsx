// File: src/components/DailyPlannerMock.jsx
// Purpose: Modular static layout for daily planner mockup

import React from 'react';

export default function DailyPlannerMock() {
  return (
    <div className="bg-gray-50 p-6 rounded-xl shadow border border-gray-200">
      <h2 className="text-xl font-semibold text-blue-800 mb-2">Smart Daily Planner (Mock)</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        <li>🧘 09:00 – Morning Mindfulness</li>
        <li>💻 10:00 – Focused Work Session</li>
        <li>☕ 12:00 – Regenerative Break</li>
        <li>📝 14:00 – Coaching Reflection Prompt</li>
      </ul>
    </div>
  );
}
