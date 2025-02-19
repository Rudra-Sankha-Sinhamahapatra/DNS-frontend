"use client";

import { Zap, Shield, Database } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-blue-400" />,
      title: "Lightning Fast",
      description: "Get instant DNS records with our optimized lookup system",
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-400" />,
      title: "Secure & Private",
      description: "Your queries are protected with enterprise-grade security",
    },
    {
      icon: <Database className="w-6 h-6 text-blue-400" />,
      title: "Comprehensive Data",
      description: "Access complete DNS information including A, MX, and TXT records",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
          Powerful Features
        </h2>
        <p className="text-gray-400 text-lg">
          Everything you need for professional DNS management
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-8 rounded-lg border border-white/10 backdrop-blur-sm bg-white/5 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="p-3 bg-blue-500/10 rounded-lg w-fit mb-4 group-hover:bg-blue-500/20 transition-colors">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-3 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              {feature.title}
            </h3>
            <p className="text-gray-400 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
