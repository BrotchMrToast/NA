// File: src/components/Footer.jsx
// Purpose: Bottom footer styled for soft, professional Bubble look

import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-blue-50 border-t border-blue-100 py-6 text-center text-sm text-gray-500">
      <p>© 2025 NeuroAwareness Inc. All rights reserved.</p>
      <div className="mt-2 space-x-4">
        <a href="#" className="hover:text-blue-700">Privacy Policy</a>
        <a href="#" className="hover:text-blue-700">Terms of Service</a>
        <a href="#" className="hover:text-blue-700">Contact</a>
      </div>
    </footer>
  );
}
