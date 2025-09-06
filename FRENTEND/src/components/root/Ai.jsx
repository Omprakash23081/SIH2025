import React from "react";
import Header from "../AIComponents/Header";
import HeroSection from "../AIComponents/HeroSection";

const Ai = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-blue-900/60 to-gray-900/90 z-10" />

        {/* Earth horizon effect at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-400/20 via-blue-500/10 to-transparent z-20" />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/10 to-transparent rounded-full blur-sm z-20" />

        {/* Subtle particle effects */}
        <div className="absolute inset-0 opacity-30 z-5">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 2 + 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-30 flex flex-col min-h-screen">
        <Header />
        <HeroSection />
      </div>
    </div>
  );
};

export default Ai;
