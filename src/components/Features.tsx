import React from 'react';
import { Shield, Bot, Twitter } from 'lucide-react';

function FeatureCard({ icon, title, description, delay }) {
  return (
    <div 
      className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 group animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mb-4 transform transition-transform duration-500 group-hover:scale-110 group-hover:animate-float">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-colors duration-500">
        {title}
      </h3>
      <p className="text-gray-400 transition-colors duration-500 group-hover:text-gray-300">{description}</p>
    </div>
  );
}

export function Features() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard
          icon={<Shield className="w-8 h-8 text-purple-400" />}
          title="Secure Key Management"
          description="Private keys are stored in Lit Protocol's trusted execution environment, never exposed to any party."
          delay={100}
        />
        <FeatureCard
          icon={<Bot className="w-8 h-8 text-blue-400" />}
          title="Autonomous Agents"
          description="Deploy truly autonomous Twitter bots that operate independently without developer intervention."
          delay={200}
        />
        <FeatureCard
          icon={<Twitter className="w-8 h-8 text-sky-400" />}
          title="Twitter Campaigns"
          description="Launch automated marketing campaigns for meme tokens with built-in reward distribution."
          delay={300}
        />
      </div>
    </div>
  );
}