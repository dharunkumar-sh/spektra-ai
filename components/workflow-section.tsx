"use client";

import React, { useState, useEffect } from "react";
import { 
  GitBranch,
  Cpu,
  FileText,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Terminal,
  Server,
  Globe,
  Play,
  RotateCcw
} from "lucide-react";

export function WorkflowSection() {
  const [githubUrl, setGithubUrl] = useState("https://github.com/spektra-ai/express-billing-api");
  const [demoState, setDemoState] = useState<"input" | "scanning" | "done">("input");
  const [scanLogs, setScanLogs] = useState<string[]>([]);

  const runSimulation = () => {
    setDemoState("scanning");
    setScanLogs([]);
    const logs = [
      "Cloning repo: spektra-ai/express-billing-api...",
      "Analyzing Abstract Syntax Tree (AST) of src/index.ts...",
      "Found framework: Express.js (v4.18)",
      "Discovered routes in controllers/billing.controller.ts:",
      "  ➔ GET  /v1/billing/subscriptions",
      "  ➔ POST /v1/billing/checkout",
      "  ➔ POST /v1/billing/webhooks (HMAC Verified)",
      "Analyzing Zod/Joi validation schemas...",
      "Generating standard schema definitions...",
      "Documentation compiled successfully! ✨"
    ];

    logs.forEach((log, index) => {
      setTimeout(() => {
        setScanLogs((prev) => [...prev, log]);
        if (index === logs.length - 1) {
          setTimeout(() => {
            setDemoState("done");
          }, 800);
        }
      }, index * 350);
    });
  };

  const resetDemo = () => {
    setDemoState("input");
    setScanLogs([]);
  };

  return (
    <section id="workflow" className="py-24 bg-[#07080e] relative border-t border-b border-white/10 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Automated AI Pipeline</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            From Code to Docs in Seconds
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            No writing schemas or manual markdown documentation. Just connect your GitHub repo and let our AI handle the rest.
          </p>
        </div>

        {/* Workflow Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: 3 Steps Description */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Step 1 */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold text-sm">
                1
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <GitBranch className="w-4 h-4 text-indigo-400" />
                  Paste GitHub Link
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Provide any public or private repository URL. No config files or modifications are needed in your codebase.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold text-sm">
                2
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-indigo-400" />
                  AI Codebase Scan
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Spektra scans your files, detects routing frameworks (Express, Django, Spring Boot, etc.), maps dependencies, and parses validation logic.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold text-sm">
                3
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-indigo-400" />
                  Ready-to-Use API Portal
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Instantly outputs beautiful, interactive documentation featuring complete request parameters, response structures, and type-safe code snippets.
                </p>
              </div>
            </div>

          </div>

          {/* Right Side: Interactive Simulation Widget */}
          <div className="lg:col-span-7 bg-[#0b0c15] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            </div>

            {/* Widget Header */}
            <div className="border-b border-white/5 pb-4 mb-6 flex justify-between items-center">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500">Live AI Pipeline Demo</span>
              {demoState !== "input" && (
                <button 
                  onClick={resetDemo}
                  className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1.5 transition-colors font-semibold"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Reset
                </button>
              )}
            </div>

            {/* Interactive Panel Content */}
            <div className="min-h-[280px] flex flex-col justify-center">
              
              {/* STATE 1: Input URL */}
              {demoState === "input" && (
                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <h4 className="text-lg font-bold text-white">Experience the Pipeline</h4>
                    <p className="text-xs text-slate-400 max-w-md mx-auto">
                      Click the button below to watch Spektra AI scan the repository and build an API portal.
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
                    <div className="flex-1 bg-black/40 border border-white/10 rounded-xl px-4 py-3 flex items-center gap-2">
                      <GitBranch className="w-4 h-4 text-slate-500" />
                      <input 
                        type="text" 
                        value={githubUrl}
                        onChange={(e) => setGithubUrl(e.target.value)}
                        className="bg-transparent border-none text-xs text-white focus:outline-none w-full font-mono"
                        placeholder="https://github.com/your-username/your-repo"
                      />
                    </div>
                    <button 
                      onClick={runSimulation}
                      className="bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl px-5 py-3 text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      Analyze Repo
                    </button>
                  </div>
                </div>
              )}

              {/* STATE 2: AI Code Scan Terminal */}
              {demoState === "scanning" && (
                <div className="bg-black/50 border border-white/5 rounded-2xl p-4 font-mono text-[11px] leading-relaxed text-indigo-300 min-h-[240px] flex flex-col justify-end">
                  <div className="flex items-center gap-2 text-slate-500 mb-auto pb-2 border-b border-white/5">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>spektra-engine ~ router-discovery-pipeline</span>
                  </div>
                  <div className="space-y-1.5 mt-4">
                    {scanLogs.map((log, index) => (
                      <div key={index} className="flex gap-2">
                        <span className="text-slate-500 select-none">$</span>
                        <span className={log.includes("successfully") ? "text-emerald-400 font-bold" : "text-slate-300"}>
                          {log}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* STATE 3: Ready-to-Use Docs Generated */}
              {demoState === "done" && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex items-center gap-2 text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-2 rounded-xl text-xs max-w-fit mx-auto mb-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="font-bold">API Documentation Ready!</span>
                  </div>

                  {/* Generated Docs Interface Mockup */}
                  <div className="bg-[#07080e] border border-white/10 rounded-2xl overflow-hidden shadow-inner">
                    {/* Fake Browser Bar */}
                    <div className="bg-[#0b0c15] px-4 py-2 border-b border-white/5 flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500/50" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
                      <span className="text-[10px] text-slate-500 font-mono ml-4">docs.spektra.ai/v1/billing</span>
                    </div>

                    <div className="p-4 space-y-3.5">
                      {/* Route Header */}
                      <div className="flex items-center gap-3">
                        <span className="px-2 py-0.5 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 rounded text-[10px] font-bold font-mono">POST</span>
                        <span className="text-xs font-mono text-white font-semibold">/v1/billing/checkout</span>
                      </div>

                      <p className="text-[11px] text-slate-400">
                        Initiate a subscription checkout flow. Supports cards, apple-pay, and custom payment processors.
                      </p>

                      {/* Request Schema Table */}
                      <div className="border border-white/5 rounded-lg overflow-hidden bg-black/20 text-[10px]">
                        <div className="bg-white/5 px-3 py-1.5 font-bold text-slate-300 border-b border-white/5">Request Parameters</div>
                        <div className="p-2.5 space-y-2">
                          <div className="flex justify-between border-b border-white/5 pb-1.5">
                            <span className="font-mono text-indigo-300 font-semibold">customer_id <span className="text-rose-400">*</span></span>
                            <span className="text-slate-500">string (UUID)</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-mono text-indigo-300 font-semibold">plan_id <span className="text-rose-400">*</span></span>
                            <span className="text-slate-500">string (prod_xxxx)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
