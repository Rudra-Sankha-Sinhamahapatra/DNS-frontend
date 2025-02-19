"use client";
export const dynamic = 'force-dynamic'; 

import { useState } from "react";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Results } from "../components/Results";
import { Features } from "../components/Features";
import { FAQ } from "../components/FAQ";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export default function Home() {
  const [domain, setDomain] = useState("");
  const [result, setResult] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleLookup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!domain) return;
    
    setLoading(true);
    try {
      const response = await fetch("/api/dns", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ domain }),
      });
      const data = await response.json();
      setResult(data.result);
    } catch (error) {
      console.error("Error:", error);
      setResult("Error performing DNS lookup");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0B1120] text-white relative overflow-hidden">
      <Header />
      <Hero domain={domain} loading={loading} setDomain={setDomain} handleLookup={handleLookup} />
      <Results domain={domain} result={result} />
      <Features />
      <FAQ />
      <Contact />
      <Footer />
      
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-400/5 rounded-full blur-[150px] animate-pulse" />
      </div>
    </main>
  );
}