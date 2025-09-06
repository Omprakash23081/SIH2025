import React, { useState } from 'react';
import { Paperclip, HelpCircle, Github } from 'lucide-react';

const HeroSection = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-6 py-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          What should we build today?
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed">
          Create stunning apps & websites by chatting with AI.
        </p>

        {/* Input Section */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your idea and we'll build it together."
              className="w-full bg-gray-800/50 border border-gray-600/50 rounded-2xl px-6 py-4 pr-20 text-white placeholder-gray-400 resize-none h-32 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 backdrop-blur-sm transition-all duration-200"
              rows={4}
            />
            
            {/* Input Icons */}
            <div className="absolute bottom-4 left-6 flex items-center space-x-3">
              <button className="text-gray-400 hover:text-white transition-colors duration-200">
                <Paperclip className="w-5 h-5" />
              </button>
              <button className="text-gray-400 hover:text-white transition-colors duration-200">
                <HelpCircle className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Import Options */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
          <span className="text-gray-500 text-sm">or import from</span>
          
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 bg-gray-800/50 border border-gray-600/50 rounded-lg px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-200 backdrop-blur-sm">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.354-3.019-3.019-3.019h-3.117V7.51zm-.882 1.471H7.265c-2.476 0-4.49-2.014-4.49-4.49S4.789 0 7.265 0h4.588v8.981zm-4.588-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019h3.117V1.471H7.265zm4.588 15.019H7.265c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zm-4.588-7.509c-1.665 0-3.019 1.354-3.019 3.019s1.354 3.019 3.019 3.019h3.117V9.981H7.265zm11.098 0h-4.588v8.98h4.588c2.476 0 4.49-2.014 4.49-4.49s-2.014-4.49-4.49-4.49zm-1.471 7.509h-3.117v-6.038h3.117c1.665 0 3.019 1.354 3.019 3.019s-1.354 3.019-3.019 3.019z"/>
              </svg>
              <span>Figma</span>
            </button>
            
            <button className="flex items-center space-x-2 bg-gray-800/50 border border-gray-600/50 rounded-lg px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-200 backdrop-blur-sm">
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;