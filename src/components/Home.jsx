// File: src/pages/Home.jsx
// Purpose: Modular Bubble-style home screen layout

import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
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
    </div>
  );
}
