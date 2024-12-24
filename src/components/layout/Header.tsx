import React from 'react';
import { Bot } from 'lucide-react';

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Bot className="w-8 h-8 text-purple-400" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
              Miraya
            </span>
          </div>
          <div className="flex gap-6">
            <a href="#features" className="text-gray-300 hover:text-white transition">Features</a>
            <a href="#how-it-works" className="text-gray-300 hover:text-white transition">How it Works</a>
            <a href="https://x.com/miraya7f" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
              Twitter
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}