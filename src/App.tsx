import React from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Steps } from './components/Steps';
import { CTA } from './components/CTA';
import { GradientBackground } from './components/ui/GradientBackground';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <GradientBackground>
        <Header />
        <Hero />
      </GradientBackground>
      <Features />
      <Steps />
      <CTA />
    </div>
  );
}

export default App;