"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

const FAQS: FaqItem[] = [
  {
    category: "Compatibility",
    question: "What frameworks does Spektra AI support?",
    answer: "Spektra AI natively supports popular backend web frameworks including Node.js (Express, Fastify, NestJS), Python (FastAPI, Django, Flask), Go, and Spring Boot. It auto-detects route files, controller files, and validation middleware."
  },
  {
    category: "Security & Privacy",
    question: "How does Spektra AI scan private GitHub repositories securely?",
    answer: "When connected via our secure GitHub integration, Spektra AI strictly parses route decorators, controllers, and validation schemas (Zod, Pydantic, etc.). We never store or retain your raw proprietary source code or business logic."
  },
  {
    category: "Export & Customization",
    question: "Can we export the generated documentation?",
    answer: "Yes. In addition to high-speed hosting on our CDN, you can export your fully compiled documentation as clean Markdown, MDX, or static HTML to sync with your existing Docusaurus, Mintlify, or GitBook setups."
  },
  {
    category: "Automation",
    question: "How does the API documentation stay up-to-date?",
    answer: "Spektra AI integrates directly into your CI/CD pipelines. Every time you push new code or merge a pull request to your main branch, Spektra automatically rescans your routes and updates your API reference portal in real time."
  }
];

export function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-[#060609] relative border-t border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-semibold text-violet-400 mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>F.A.Q.</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Everything you need to know about Spektra AI compatibility, security, and integration.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-[#0c0d16] border border-white/10 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 focus:outline-none hover:bg-white/5 transition-colors cursor-pointer"
                >
                  <span className="font-bold text-sm sm:text-base text-white">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-indigo-400 transition-transform duration-200 shrink-0 ${isOpen ? "rotate-180" : ""}`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5">
                    <div className="inline-block text-[10px] font-mono uppercase bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded mb-2 font-bold">
                      {faq.category}
                    </div>
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
