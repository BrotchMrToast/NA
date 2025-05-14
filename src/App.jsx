// Neuroawareness Website (Phase 5 – EWI Graph, CoachBot Chat, and Daily Planner Mock)
// Technologies: React + Tailwind CSS + React Router DOM + Recharts

import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
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

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-yellow-50 to-white p-6 font-sans">
      <header className="text-center mb-10">
        <h1 className="text-5xl font-bold text-blue-800 drop-shadow-sm">Neuroawareness</h1>
        <p className="text-lg text-blue-700 mt-2">Science-based mental well-being for the workplace</p>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link to="/dashboard" className="bg-white rounded-2xl shadow-xl p-6 border border-blue-100 hover:shadow-2xl block">
          <h2 className="text-2xl font-semibold text-blue-900">Employee Dashboard</h2>
          <p className="text-gray-700 mt-2">Real-time well-being insights with mood, focus, and stress trends.</p>
          <button className="mt-4 bg-blue-400 text-white px-4 py-2 rounded shadow hover:bg-blue-500">View Demo</button>
        </Link>
        <Link to="/coachbot" className="bg-white rounded-2xl shadow-xl p-6 border border-blue-100 hover:shadow-2xl block">
          <h2 className="text-2xl font-semibold text-blue-900">CoachBot</h2>
          <p className="text-gray-700 mt-2">Privacy-safe AI assistant to guide mental wellness.</p>
          <button className="mt-4 bg-yellow-400 text-white px-4 py-2 rounded shadow hover:bg-yellow-500">Try It Now</button>
        </Link>
        <Link to="/hr" className="bg-white rounded-2xl shadow-xl p-6 border border-blue-100 hover:shadow-2xl block">
          <h2 className="text-2xl font-semibold text-blue-900">HR Dashboard</h2>
          <p className="text-gray-700 mt-2">Anonymized team-wide cognitive health and resilience tracking.</p>
          <button className="mt-4 bg-blue-400 text-white px-4 py-2 rounded shadow hover:bg-blue-500">Explore Insights</button>
        </Link>
      </section>
    </div>
  );
}

function Dashboard() {
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

function CoachBot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hello! How can I support your well-being today?" }
  ]);

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMessage = { role: "user", text: input };
    const botResponse = { role: "bot", text: "Thanks for sharing. Remember to take small breaks!" };
    setMessages([...messages, userMessage, botResponse]);
    setInput("");
  };

  return (
    <div className="min-h-screen p-10 bg-white space-y-6">
      <h1 className="text-4xl font-bold text-blue-900 mb-4">CoachBot</h1>
      <div className="bg-gray-100 p-4 rounded-xl h-64 overflow-y-auto space-y-2">
        {messages.map((msg, idx) => (
          <div key={idx} className={`text-sm p-2 rounded ${msg.role === 'bot' ? 'bg-blue-100 text-blue-900' : 'bg-yellow-100 text-yellow-800'}`}>{msg.text}</div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          className="flex-1 border border-gray-300 rounded px-3 py-2"
          placeholder="Type your message..."
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
}

function HRDashboard() {
  return <div className="p-10">HR Dashboard Placeholder</div>;
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/coachbot" element={<CoachBot />} />
        <Route path="/hr" element={<HRDashboard />} />
      </Routes>
    </Router>
  );
}

