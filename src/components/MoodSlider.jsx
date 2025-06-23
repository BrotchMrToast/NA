import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

export default function MoodSlider({ value, onChange }) {
  const [status, setStatus] = useState(null); // ✅ NEW: feedback state

  const handleMoodChange = async (e) => {
    const newMood = Number(e.target.value);
    onChange(e); // Call parent to update state

    const { error } = await supabase
      .from('mood_logs')
      .insert([{ mood_value: newMood, created_at: new Date() }]);

    if (error) {
      console.error("❌ Mood not saved:", error.message);
      setStatus('❌ Error saving mood');
    } else {
      console.log("✅ Mood saved to Supabase:", newMood);
      setStatus('✅ Mood saved');
    }

    // Optional: Clear message after 3 seconds
    setTimeout(() => setStatus(null), 3000);
  };

  return (
    <div className="bg-yellow-50 p-6 rounded-xl shadow-md border border-yellow-200">
      <h2 className="text-xl font-semibold text-blue-800 mb-4">How are you feeling today?</h2>
      
      <input
        type="range"
        min="0"
        max="10"
        value={value}
        onChange={handleMoodChange}
        className="w-full accent-blue-500"
      />

      <p className="mt-2 text-blue-700">Mood Level: <strong>{value}</strong></p>

      {/* ✅ NEW: status message */}
      {status && (
        <p className="mt-2 text-sm font-medium text-gray-600">
          {status}
        </p>
      )}
    </div>
  );
}
