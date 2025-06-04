// File: src/components/EWIGraph.jsx
// Purpose: Modular component to display the EWI trend using Recharts

import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

export default function EWIGraph({ data }) {
  return (
    <div className="bg-white border border-blue-200 p-4 rounded-xl shadow">
      <h2 className="text-xl text-blue-800 font-semibold mb-4">EWI Trend</h2>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis domain={[0, 10]} />
          <Tooltip />
          <Line type="monotone" dataKey="ewi" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
