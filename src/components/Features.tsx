import React from "react";
import { Shield, Bot, Twitter, Globe, Cpu, Code } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  url?: string;
}

function FeatureCard({
  icon,
  title,
  description,
  delay,
  url,
}: FeatureCardProps) {
  return (
    <div
      onClick={() => url && window.open(url, "_blank")}
      className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 group animate-fade-in-up cursor-pointer"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mb-4 transform transition-transform duration-500 group-hover:scale-110 group-hover:animate-float">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-colors duration-500">
        {title}
      </h3>
      <p className="text-gray-400 transition-colors duration-500 group-hover:text-gray-300">
        {description}
      </p>
    </div>
  );
}

export function Features() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard
          icon={<Shield className="w-8 h-8 text-blue-400" />}
          title="Secure Key Management"
          description="Private keys are stored in Lit Protocol's trusted execution environment, never exposed to any party."
          delay={100}
          url="https://github.com/agent-miraya/Miraya-7f-action"
        />
        <FeatureCard
          icon={<Bot className="w-8 h-8 text-blue-400" />}
          title="Autonomous Agents"
          description="Build truly autonomous AI Agents that operate independently without developer intervention."
          delay={200}
          url="https://tome.app/meow-b1b/agent-cm51xtlui0h1x446vu3c2dfdy?page=p879pn1f2azbildr7wttrpu2"
        />
        <FeatureCard
          title="ai16z Support"
          description="Build on ai16z, the hottest AI agent framework, allowing AI inferencing on scale."
          delay={300}
          icon={<Cpu className="w-8 h-8 text-sky-400" />}
          url="https://github.com/agent-miraya/Miraya-7f"
        />
        <FeatureCard
          icon={<Globe className="w-8 h-8 text-sky-400" />}
          title="Solana Agent Kit"
          description="Supercharged by Solana Agent kit. Access all AI+crypto capibility inside Lit TEE."
          url="https://github.com/agent-miraya/Solana-agent-kit-action"
          delay={300}
        />
        <FeatureCard
          icon={<Code className="w-8 h-8 text-sky-400" />}
          title="SDK is Live"
          description="Build on our Lit wrapper SDK and leave complex Lit actions management to us."
          delay={300}
          url="https://github.com/agent-miraya/Miraya-SDK"
        />
        <FeatureCard
          icon={<Twitter className="w-8 h-8 text-sky-400" />}
          title="Miraya 7f twitter Agent"
          description="Miraya 7f is Agent build upon our SDK to automate marketing campaigns and reward users with tokens for promoting their favorite memecoins."
          delay={300}
          url="https://x.com/miraya7f"
        />
      </div>
    </div>
  );
}
