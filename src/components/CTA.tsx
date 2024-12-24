import React from 'react';
import { Twitter } from 'lucide-react';

export function CTA() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-2xl p-12 text-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
        <h2 className="text-3xl font-bold mb-4">Ready to Build?</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Join the next generation of crypto marketing automation with secure, autonomous agents.
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-8 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition hover:scale-105 transform duration-200">
            Start Building
          </button>
          <a
            href="https://x.com/miraya7f"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition hover:scale-105 transform duration-200 flex items-center gap-2"
          >
            <Twitter size={20} /> Follow Us
          </a>
        </div>
      </div>
    </div>
  );
}