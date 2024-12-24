import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from './ui/Button';

export function Hero() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-32 relative">
      <div className="text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 mb-6 animate-title">
          Secure Crypto Agent Infrastructure
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8 animate-fade-in-up">
          Build autonomous Twitter bots with truly decentralized key management powered by Lit Protocol's trusted execution environment.
        </p>
        <div className="flex justify-center gap-4">
          <Button variant="primary" icon={ChevronRight}>
            Get Started
          </Button>
          <Button variant="secondary">
            Documentation
          </Button>
        </div>
      </div>
    </div>
  );
}