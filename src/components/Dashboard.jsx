// File: src/components/MoodSlider.jsx
// Purpose: Standalone reusable component for mood level selection

import React from 'react';

export default function MoodSlider({ value, onChange }) {
  return (
    <div className="bg-yellow-50 p-6 rounded-xl shadow-md border border-yellow-200">
      <h2 className="text-xl font-semibold text-blue-800 mb-4">How are you feeling today?</h2>
      <input
        type="range"
        min="0"
        max="10"
        value={value}
        onChange={onChange}
        className="w-full accent-blue-500"
      />
      <p className="mt-2 text-blue-700">Mood Level: <strong>{value}</strong></p>
    </div>
  );
}
