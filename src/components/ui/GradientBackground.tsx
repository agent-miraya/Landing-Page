import React from 'react';

export function GradientBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20 animate-gradient" />
      <div className="absolute inset-0">
        <div className="h-full w-full bg-[radial-gradient(#332b4a_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-50" />
      </div>
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse-slow"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: '150px',
              height: '150px',
              background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
              transform: `scale(${1 + Math.random()})`,
              animationDelay: `${i * 1.5}s`
            }}
          />
        ))}
      </div>
      {children}
    </div>
  );
}