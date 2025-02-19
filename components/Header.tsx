"use client";

import { Globe } from "lucide-react";

export function Header() {
  return (
    <nav className="border-b border-white/10 bg-[#0B1120]/80 backdrop-blur-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Globe className="w-6 h-6 text-blue-400" />
          <span className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            DNS Explorer
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-lg hover:bg-blue-500/20 transition-colors">
            Documentation
          </button>
          <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
