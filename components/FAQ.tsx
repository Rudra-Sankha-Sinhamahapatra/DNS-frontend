"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div 
      className="p-6 rounded-xl bg-[#1A2234] border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 cursor-pointer"
      onClick={onClick}
    >
      <h3 className="text-lg font-semibold text-white mb-3 flex items-center justify-between">
        <span>{question}</span>
        <ChevronDown className={`w-5 h-5 text-blue-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </h3>
      <div className={`text-gray-400 overflow-hidden transition-all ${isOpen ? 'max-h-40' : 'max-h-0'}`}>
        {answer}
      </div>
    </div>
  );
}

export function FAQ() {
  const faqs = [
    {
      question: "What is DNS lookup?",
      answer: "DNS lookup is the process of finding the IP address associated with a domain name. It's like looking up a phone number in a directory.",
    },
    {
      question: "How accurate is the service?",
      answer: "Our service provides real-time, accurate DNS information directly from authoritative name servers.",
    },
    {
      question: "Is it free to use?",
      answer: "Yes, our basic DNS lookup service is completely free to use with no registration required.",
    },
    {
      question: "What record types are supported?",
      answer: "We support all common DNS record types including A, AAAA, MX, TXT, CNAME, and more.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-400 text-lg">
          Everything you need to know about our DNS service
        </p>
      </div>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-none"
            >
              <AccordionTrigger className="text-lg font-medium text-white hover:text-blue-400 transition-colors [&[data-state=open]]:text-blue-400">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
