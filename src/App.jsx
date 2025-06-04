// File: src/App.jsx
// Purpose: Root layout and router for Bubble-style NeuroAwareness App

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import HRDashboard from './pages/HRDashboard';
import CoachBot from './pages/CoachBot';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans bg-blue-50 text-gray-800">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/coachbot" element={<CoachBot />} />
            <Route path="/hr" element={<HRDashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
