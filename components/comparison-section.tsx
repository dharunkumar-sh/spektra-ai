"use client";

import React from "react";
import { Check, X, Sparkles, AlertCircle, HelpCircle, Layers, ArrowRight } from "lucide-react";

export function ComparisonSection() {
  const COMPARISON_DATA = [
    {
      feature: "Deep Semantic API Understanding",
      spektra: true,
      swagger: false,
      redoc: false,
      postman: false,
      mintlify: false,
      manual: true,
      note: "Interprets business logic rather than just rendering schema paths."
    },
    {
      feature: "Auto-Groups Endpoints by Business Domain",
      spektra: true,
      swagger: false,
      redoc: false,
      postman: false,
      mintlify: false,
      manual: true,
      note: "Replaces flat alphabetical lists with intuitive user workflows."
    },
    {
      feature: "Autonomous Multi-Language SDK Generation",
      spektra: true,
      swagger: false,
      redoc: false,
      postman: true,
      mintlify: false,
      manual: false,
      note: "Generates type-safe TS, Python, Go, Rust snippets automatically."
    },
    {
      feature: "Automated Mermaid Sequence Diagrams",
      spektra: true,
      swagger: false,
      redoc: false,
      postman: false,
      mintlify: false,
      manual: false,
      note: "Illustrates complex multi-step webhooks and auth challenges."
    },
    {
      feature: "Shadow & Undocumented API Detection",
      spektra: true,
      swagger: false,
      redoc: false,
      postman: false,
      mintlify: false,
      manual: false,
      note: "Discovers forgotten production endpoints via traffic inspection."
    },
    {
      feature: "Audience Persona Adaptation (Junior vs Senior)",
      spektra: true,
      swagger: false,
      redoc: false,
      postman: false,
      mintlify: false,
      manual: false,
      note: "Tailors explanations dynamically based on engineer seniority."
    },
    {
      feature: "Instant 0-Maintenance Setup (< 10s)",
      spektra: true,
      swagger: true,
      redoc: true,
      postman: true,
      mintlify: false,
      manual: false,
      note: "Zero configuration, instant live synthesis from YAML/JSON."
    }
  ];

  const COMPETITORS = [
    { name: "Swagger UI", role: "Passive Spec Renderer", limit: "Zero prose synthesis; rigid alphabetical layout." },
    { name: "Redoc", role: "Static Three-Panel Layout", limit: "Requires tedious manual description writing in YAML." },
    { name: "Postman Docs", role: "Collection Viewer", limit: "Focused on QA testing rather than public developer portals." },
    { name: "GitBook / Mintlify", role: "MDX Static Generators", limit: "High maintenance burden; AI is bolted on rather than core." },
    { name: "Manual Writing", role: "Handcrafted Engineering", limit: "Extreme time sink (80+ hrs/mo); perpetually out of sync." }
  ];

  return (
    <section id="comparison" className="py-24 bg-[#07080e] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400 mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Beyond Passive Spec Renderers</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Why Traditional Tools Fall Short
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Traditional tools primarily render static API specifications. Spektra AI understands your API, interprets business logic, organizes resources intuitively, and produces documentation that feels handcrafted by an elite technical writer.
          </p>
        </div>

        {/* Competitor Breakdown Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          {COMPETITORS.map((comp, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-[#0c0d15] border border-white/10 flex flex-col justify-between">
              <div>
                <div className="font-bold text-sm text-white">{comp.name}</div>
                <div className="text-[10px] font-mono text-indigo-400 mt-0.5">{comp.role}</div>
                <p className="text-xs text-slate-400 mt-2.5 leading-relaxed">{comp.limit}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Matrix Table */}
        <div className="bg-[#0c0d16] border border-white/15 rounded-3xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="border-b border-white/10 bg-[#121424]">
                  <th className="py-5 px-6 text-xs font-bold uppercase tracking-wider text-slate-300 w-1/3">
                    Capability Matrix
                  </th>
                  <th className="py-5 px-4 text-center bg-indigo-600/20 border-x border-indigo-500/30 text-xs font-bold uppercase tracking-wider text-indigo-300">
                    <div className="flex items-center justify-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-indigo-400" />
                      <span>Spektra AI</span>
                    </div>
                  </th>
                  <th className="py-5 px-4 text-center text-xs font-semibold uppercase tracking-wider text-slate-400">Swagger UI</th>
                  <th className="py-5 px-4 text-center text-xs font-semibold uppercase tracking-wider text-slate-400">Redoc</th>
                  <th className="py-5 px-4 text-center text-xs font-semibold uppercase tracking-wider text-slate-400">Mintlify</th>
                  <th className="py-5 px-4 text-center text-xs font-semibold uppercase tracking-wider text-slate-400">Manual Docs</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-xs sm:text-sm">
                {COMPARISON_DATA.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-6 font-medium text-slate-200">
                      <div>{row.feature}</div>
                      <div className="text-[11px] text-slate-500 font-normal mt-0.5">{row.note}</div>
                    </td>

                    {/* Spektra AI column */}
                    <td className="py-4 px-4 text-center bg-indigo-500/10 border-x border-indigo-500/20 font-semibold text-emerald-400">
                      <div className="flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                          <Check className="w-4 h-4" />
                        </div>
                      </div>
                    </td>

                    {/* Swagger */}
                    <td className="py-4 px-4 text-center text-slate-500">
                      {row.swagger ? <Check className="w-4 h-4 text-slate-400 mx-auto" /> : <X className="w-4 h-4 text-red-500/60 mx-auto" />}
                    </td>

                    {/* Redoc */}
                    <td className="py-4 px-4 text-center text-slate-500">
                      {row.redoc ? <Check className="w-4 h-4 text-slate-400 mx-auto" /> : <X className="w-4 h-4 text-red-500/60 mx-auto" />}
                    </td>

                    {/* Mintlify */}
                    <td className="py-4 px-4 text-center text-slate-500">
                      {row.mintlify ? <Check className="w-4 h-4 text-slate-400 mx-auto" /> : <X className="w-4 h-4 text-red-500/60 mx-auto" />}
                    </td>

                    {/* Manual */}
                    <td className="py-4 px-4 text-center text-slate-500">
                      {row.manual ? <Check className="w-4 h-4 text-emerald-500/60 mx-auto" /> : <X className="w-4 h-4 text-red-500/60 mx-auto" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
