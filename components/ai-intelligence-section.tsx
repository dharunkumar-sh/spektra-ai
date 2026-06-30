"use client";

import React from "react";
import { 
  Sparkles, 
  BrainCircuit, 
  SearchCode, 
  Layers,
  Terminal
} from "lucide-react";

export function AiIntelligenceSection() {
  const CAPABILITIES = [
    {
      title: "Framework & Route Mapping",
      icon: Terminal,
      description: "Automatically detects your web framework (Express, FastAPI, Django, Spring Boot, etc.) and parses controllers, decorators, and routing files to index every HTTP endpoint."
    },
    {
      title: "Validation Schema Extraction",
      icon: SearchCode,
      description: "Deeply inspects middleware validations (Zod, Joi, Pydantic, Marshmallow) to extract required headers, query parameters, payload structures, and type definitions."
    },
    {
      title: "Natural Language Translation",
      icon: BrainCircuit,
      description: "Translates cryptic regular expressions, internal parameters, and structural validation bounds into clear, human-readable guidelines explaining required formats."
    },
    {
      title: "Automated Flow Diagrams",
      icon: Layers,
      description: "Analyzes controller interaction patterns and external database writes to construct native Mermaid sequence diagrams depicting exact API event cycles."
    }
  ];

  return (
    <section id="ai-intelligence" className="py-24 bg-[#060609] relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Deep Codebase Intelligence</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Engineered for Deep Codebase Analysis
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Spektra AI deep-dives into your repository structure, validation logic, and framework files to build standard reference documentation automatically.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {CAPABILITIES.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div 
                key={idx}
                className="relative bg-[#0c0d16] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-xl"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {cap.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {cap.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
