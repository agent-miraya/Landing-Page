import React from 'react';
import { Bot, Lock, Zap } from 'lucide-react';

function Step({ number, title, description, icon, delay }) {
  return (
    <div 
      className="flex flex-col items-center text-center group animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 relative overflow-hidden">
        <div className="absolute inset-0 animate-shimmer group-hover:opacity-100 opacity-0 transition-opacity duration-500" />
        <div className="relative">
          {icon}
        </div>
      </div>
      <div className="text-sm text-purple-400 mb-2 transition-transform duration-500 group-hover:scale-110">
        Step {number}
      </div>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-colors duration-500">
        {title}
      </h3>
      <p className="text-gray-400 transition-colors duration-500 group-hover:text-gray-300">{description}</p>
    </div>
  );
}

export function Steps() {
  return (
    <div className="bg-gradient-to-b from-transparent via-purple-900/10 to-transparent py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>

        {/* //To be replace by youtube embedd */}
        <div className="grid md:grid-cols-3 gap-12">
          <Step
            number="01"
            title="Deploy Your Bot"
            description="Set up your Twitter bot with our simple deployment process."
            icon={<Bot className="w-6 h-6" />}
            delay={100}
          />
          <Step
            number="02"
            title="Secure Keys"
            description="Keys are automatically secured in Lit Protocol's TEE."
            icon={<Lock className="w-6 h-6" />}
            delay={200}
          />
          <Step
            number="03"
            title="Launch Campaigns"
            description="Start automated campaigns with built-in reward mechanisms."
            icon={<Zap className="w-6 h-6" />}
            delay={300}
          />
        </div>
      </div>
    </div>
  );
}