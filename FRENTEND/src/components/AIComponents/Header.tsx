import React, { useState } from 'react';
import { ChevronDown, Github, MessageCircle, Linkedin, Twitter } from 'lucide-react';

const Header = () => {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  return (
    <header className="relative z-50 w-full">
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <div className="text-white font-bold text-xl">
            <span className="text-white">bolt</span>
            <span className="text-gray-400 text-sm">.new</span>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
            Community
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
            Enterprise
          </a>
          <div className="relative">
            <button
              className="flex items-center text-gray-300 hover:text-white transition-colors duration-200"
              onClick={() => setIsResourcesOpen(!isResourcesOpen)}
            >
              Resources
              <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            {isResourcesOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-xl">
                <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-200">
                  Documentation
                </a>
                <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-200">
                  Templates
                </a>
                <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-200">
                  Blog
                </a>
              </div>
            )}
          </div>
          <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
            Careers
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
            Pricing
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
            <MessageCircle className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
            <Github className="w-5 h-5" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;