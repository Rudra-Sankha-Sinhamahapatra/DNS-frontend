import { Search } from "lucide-react";

interface HeroProps {
  domain: string;
  loading: boolean;
  setDomain: (domain: string) => void;
  handleLookup: (e: React.FormEvent) => void;
}

export function Hero({ domain, loading, setDomain, handleLookup }: HeroProps) {
  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center relative z-10">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-blue-400/20 to-blue-300/20 blur-[100px] opacity-50" />
        </div>
        <span className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 mb-8">
          Secure & Private DNS Service
        </span>
        <h1 className="text-7xl font-bold mb-6 leading-tight tracking-tight">
          <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
            DNS Lookup
          </span>
          <br />
          <span className="text-5xl bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            with Precision
          </span>
        </h1>
        <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-12">
          Fast, reliable, and secure DNS lookup service. Get detailed DNS information for any domain instantly.
        </p>

        <div className="max-w-3xl mx-auto">
          <div className="p-[1px] rounded-xl bg-gradient-to-r from-blue-500/50 via-blue-400/50 to-blue-600/50">
            <form onSubmit={handleLookup} className="relative bg-[#1A2234] rounded-xl p-1">
              <div className="relative">
                <input
                  type="text"
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  placeholder="Enter domain name (e.g., rudrasankha.com)"
                  className="w-full px-6 py-4 bg-[#0B1120] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 pl-12"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
              <button
                type="submit"
                disabled={loading || !domain}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-500/25"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    Searching...
                  </span>
                ) : (
                  "Search"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
