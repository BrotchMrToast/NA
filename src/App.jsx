
// Neuroawareness Website (Phase 3 – Routing + Graph Overlay Integration)
// Technologies: React + Tailwind CSS + React Router DOM

import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-yellow-50 to-white p-6 font-sans">
      <header className="text-center mb-10">
        <h1 className="text-5xl font-bold text-blue-800 drop-shadow-sm">Neuroawareness</h1>
        <p className="text-lg text-blue-700 mt-2">Science-based mental well-being for the workplace</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link to="/dashboard" className="bg-white rounded-2xl shadow-xl p-6 border border-blue-100 hover:shadow-2xl transform transition hover:-translate-y-1 block">
          <h2 className="text-2xl font-semibold text-blue-900">Employee Dashboard</h2>
          <p className="text-gray-700 mt-2">Real-time well-being insights with mood, focus, and stress trends.</p>
          <button className="mt-4 bg-blue-400 text-white px-4 py-2 rounded shadow hover:bg-blue-500">View Demo</button>
        </Link>
        <Link to="/coachbot" className="bg-white rounded-2xl shadow-xl p-6 border border-blue-100 hover:shadow-2xl transform transition hover:-translate-y-1 block">
          <h2 className="text-2xl font-semibold text-blue-900">CoachBot</h2>
          <p className="text-gray-700 mt-2">Privacy-safe AI assistant to guide mental wellness.</p>
          <button className="mt-4 bg-yellow-400 text-white px-4 py-2 rounded shadow hover:bg-yellow-500">Try It Now</button>
        </Link>
        <Link to="/hr" className="bg-white rounded-2xl shadow-xl p-6 border border-blue-100 hover:shadow-2xl transform transition hover:-translate-y-1 block">
          <h2 className="text-2xl font-semibold text-blue-900">HR Dashboard</h2>
          <p className="text-gray-700 mt-2">Anonymized team-wide cognitive health and resilience tracking.</p>
          <button className="mt-4 bg-blue-400 text-white px-4 py-2 rounded shadow hover:bg-blue-500">Explore Insights</button>
        </Link>
      </section>

      <section className="mt-16 space-y-6 bg-white p-8 rounded-2xl shadow-md border border-yellow-100">
        <h3 className="text-3xl font-bold text-blue-900 text-center">How It Works</h3>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          <li>Log daily mood & stress via soft UI sliders</li>
          <li>Get immediate micro-interventions from CoachBot</li>
          <li>Review cognitive load and motivational dips</li>
          <li>Team leaders access anonymized well-being trends</li>
        </ul>
      </section>

      <section className="mt-16">
        <div className="bg-blue-50 p-8 rounded-xl shadow-inner border border-blue-200">
          <h3 className="text-2xl font-bold text-blue-800 mb-2">Technical Documentation</h3>
          <p className="text-gray-600">Placeholder for developer API, system architecture, and GDPR protocols.</p>
          <button className="mt-4 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800">View Developer Docs</button>
        </div>
      </section>

      <footer className="mt-20 text-center text-gray-500 text-sm">
        © 2025 Neuroawareness Inc. | Privacy-first by design. Built for workplace well-being.
      </footer>
    </div>
  );
}

function Dashboard() {
  const [mood, setMood] = useState(5);

  return (
    <div className="min-h-screen bg-white p-10 space-y-10">
      <h1 className="text-4xl font-bold text-blue-900">Employee Well-Being Dashboard</h1>

      <div className="relative bg-blue-100 h-64 rounded-xl flex items-center justify-center shadow-inner">
        <span className="text-2xl text-blue-700 font-medium">Graph Placeholder</span>
        <div className="absolute inset-0 bg-white/80 rounded-xl flex items-center justify-center">
          <span className="text-lg text-gray-600 font-semibold">Do the Tests!</span>
        </div>
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
    </div>
  );
}

function CoachBot() {
  return <div className="p-10">CoachBot UI Placeholder</div>;
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
