import React from "react";
import { ChevronRight, Github } from "lucide-react";
import { Button } from "./ui/Button";

export function Hero() {
  return (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pt-40 pb-8 relativ">
      <div className="text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 mb-6 animate-title">
          Miraya SDK
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8 animate-fade-in-up">
          Build completely autonomous AI Agents with truly decentralized key
          management powered by Lit Protocol's TEE.
        </p>
        <div className="flex justify-center gap-4">
          <Button
            onClick={() =>
              window.open(
                "https://tome.app/meow-b1b/agent-cm51xtlui0h1x446vu3c2dfdy?page=p879pn1f2azbildr7wttrpu2",
                "_blank"
              )
            }
            variant="primary"
            icon={ChevronRight}
          >
            Watch Demo
          </Button>
          <Button
            onClick={() =>
              window.open("https://github.com/agent-miraya/Miraya-7f", "_blank")
            }
            variant="secondary"
          >
            <Github />
            Star on GitHub
          </Button>
        </div>
      </div>
    </div>
  );
}
