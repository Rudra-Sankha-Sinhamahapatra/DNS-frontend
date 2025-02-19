"use client";

import { Globe, AlertCircle } from "lucide-react";

interface ResultsProps {
  domain: string;
  result: string;
}

export function Results({ domain, result }: ResultsProps) {
  if (!result) return null;

  const isError = result.includes('not found') || result.includes('failed');

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="rounded-xl p-6 shadow-xl border border-white/10">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          {isError ? (
            <>
              <AlertCircle className="w-5 h-5 text-red-400" />
              <span className="text-red-400">DNS Lookup Failed</span>
            </>
          ) : (
            <>
              <Globe className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400">DNS Records for {domain}</span>
            </>
          )}
        </h2>
        <pre className={`font-mono text-sm ${isError ? 'text-red-300' : 'text-gray-300'} bg-[#0B1120]/50 p-4 rounded-lg overflow-x-auto whitespace-pre-wrap border border-white/5`}>
          {result}
        </pre>
      </div>
    </div>
  );
}
