// File: src/components/Header.jsx
// Purpose: Top navigation bar styled like Bubble UI

import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white shadow-md border-b border-blue-100 px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold text-blue-800">
        NeuroAwareness
      </div>
      <nav className="space-x-6 text-blue-700 text-sm font-medium">
        <Link to="/" className="hover:text-blue-900 transition">Home</Link>
        <Link to="/dashboard" className="hover:text-blue-900 transition">Dashboard</Link>
        <Link to="/coachbot" className="hover:text-blue-900 transition">CoachBot</Link>
      </nav>
    </header>
  );
}
