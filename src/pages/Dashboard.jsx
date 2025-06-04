// File: src/pages/Dashboard.jsx
// Purpose: Dashboard page using modular components for clarity and reuse

import React, { useState } from 'react';
import MoodSlider from '../components/MoodSlider';
import EWIGraph from '../components/EWIGraph';
import DailyPlannerMock from '../components/DailyPlannerMock';

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

      <EWIGraph data={sampleEWIData} />

      <MoodSlider value={mood} onChange={(e) => setMood(e.target.value)} />

      <DailyPlannerMock />
    </div>
  );
}
