"use client";

import React, { useState } from "react";
import { 
  Sparkles, 
  BrainCircuit, 
  ShieldAlert, 
  UserCheck, 
  Workflow, 
  Wrench, 
  SearchCode, 
  FileCheck2, 
  GraduationCap, 
  Layers,
  Terminal,
  AlertTriangle,
  Lightbulb
} from "lucide-react";

interface IntelligenceFeature {
  id: string;
  title: string;
  badge: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  preview: React.ReactNode;
}

export function AiIntelligenceSection() {
  const [selectedPersona, setSelectedPersona] = useState<"beginner" | "intermediate" | "senior">("senior");
  const [activeFeature, setActiveFeature] = useState<number>(0);

  const PERSONA_CONTENT = {
    beginner: {
      headline: "Beginner-Friendly Concept Walkthroughs",
      explanation: "Spektra AI breaks down complex technical terms into plain English analogies, explains HTTP status codes step-by-step, and provides copy-paste ready cURL scripts that require zero prior environment configuration.",
      snippet: `// What is a Webhook? Think of it like a push notification for your server.
// When an invoice is paid, Stripe sends a message directly to this URL:
app.post('/webhook', (req, res) => {
  console.log('Payment received!', req.body.data.object.id);
  res.status(200).send('OK');
});`
    },
    intermediate: {
      headline: "Pragmatic Integration & Error Handling",
      explanation: "Focuses on clean SDK implementation patterns, type definitions, parameter constraints, pagination cursors, and standard HTTP 4xx/5xx exception recovery workflows.",
      snippet: `// Handling rate limits with automatic exponential backoff
const client = new SpektraClient({
  maxRetries: 3,
  retryDelay: (attempt) => Math.pow(2, attempt) * 1000 + Math.random() * 200,
});
const response = await client.intents.list({ limit: 50, cursor: 'ending_before_992' });`
    },
    senior: {
      headline: "Architectural Deep Dives & Concurrency Guarantees",
      explanation: "Surfaces critical system design invariants: distributed lock semantics, exactly-once delivery guarantees, idempotency key TTLs, cryptographic webhook signature verification, and connection pooling.",
      snippet: `// Cryptographic webhook signature verification with replay protection (5-minute tolerance)
const sigHeader = headers['x-spektra-signature'];
const event = SpektraWebhooks.constructEvent(rawBody, sigHeader, WEBHOOK_SECRET, {
  toleranceSeconds: 300,
  enforceIdempotencyStore: redisClient,
});`
    }
  };

  const FEATURES: IntelligenceFeature[] = [
    {
      id: "shadow-detection",
      title: "Shadow & Undocumented Endpoint Detection",
      badge: "Security & Auditing",
      icon: SearchCode,
      description: "Spektra AI inspects repository traffic logs and route definitions to uncover hidden internal API endpoints that exist in production code but were forgotten in your OpenAPI YAML specification.",
      preview: (
        <div className="space-y-2 font-mono text-xs">
          <div className="p-2.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-300 flex items-center justify-between">
            <span className="flex items-center gap-1.5 font-bold">
              <AlertTriangle className="w-4 h-4 text-red-400" />
              DETECTED: PATCH /v1/admin/feature-flags/override
            </span>
            <span className="bg-red-500/20 px-2 py-0.5 rounded text-[10px]">Undocumented Shadow Path</span>
          </div>
          <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-slate-300">
            <span className="text-emerald-400 font-semibold">AI Recommendation:</span> Automatically generated schema proposal with required RBAC `superadmin:write` scope. Ready to merge to `openapi.yaml`.
          </div>
        </div>
      )
    },
    {
      id: "validation-regex",
      title: "Complex Validation Rule & Regex Translation",
      badge: "Deep Understanding",
      icon: BrainCircuit,
      description: "Instead of displaying obscure regex strings like `^[A-Z]{2}[0-9]{2}[A-Z0-9]{1,30}$`, Spektra AI translates schema validation constraints into clear human guidelines with valid/invalid data examples.",
      preview: (
        <div className="p-3 rounded-xl bg-black/60 border border-white/10 text-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-mono text-indigo-300 font-bold">Parameter: iban_account_number</span>
            <span className="font-mono text-[10px] bg-indigo-500/20 px-2 py-0.5 rounded text-indigo-300">Regex Analyzed</span>
          </div>
          <p className="text-slate-300">
            <strong>Human Explanation:</strong> Must be a valid International Bank Account Number (IBAN) starting with a 2-letter country code (e.g., DE or FR), followed by two check digits, and up to 30 alphanumeric characters.
          </p>
        </div>
      )
    },
    {
      id: "troubleshooting",
      title: "Automated Troubleshooting & Pitfall Synthesis",
      badge: "Developer Resilience",
      icon: Wrench,
      description: "Analyzes historical GitHub issues and API design patterns to automatically generate 'Common Pitfalls' and troubleshooting steps for complex operations like multipart file uploads or OAuth token refreshes.",
      preview: (
        <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs space-y-2">
          <div className="font-bold text-amber-300 flex items-center gap-1.5">
            <Lightbulb className="w-4 h-4" />
            <span>AI Pitfall Warning: Token Expiration Race Condition</span>
          </div>
          <p className="text-slate-300 text-[11px]">
            When executing high-concurrency batch uploads, access tokens may expire mid-stream. Ensure your HTTP interceptor catches `401 Unauthorized` responses and refreshes tokens without dropping active TCP connections.
          </p>
        </div>
      )
    },
    {
      id: "architecture-mermaid",
      title: "Dynamic Architecture & Flow Diagrams",
      badge: "Visual Engineering",
      icon: Workflow,
      description: "Synthesizes complete system topology maps and multi-actor sequence diagrams using native Mermaid syntax, ensuring diagrams stay in sync with schema updates automatically.",
      preview: (
        <div className="p-3 rounded-xl bg-[#121320] border border-white/10 font-mono text-[11px] text-emerald-300 overflow-x-auto">
          <div>graph TD</div>
          <div className="pl-4">Client[&quot;Developer Client&quot;] --&gt;|Bearer Token| API[&quot;Spektra Gateway&quot;]</div>
          <div className="pl-4">API --&gt;|Validate PKCE| Auth[&quot;Identity Provider&quot;]</div>
          <div className="pl-4">API --&gt;|Execute Transaction| Ledger[&quot;Core Ledger Engine&quot;]</div>
        </div>
      )
    }
  ];

  return (
    <section id="ai-intelligence" className="py-24 bg-[#060609] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-semibold text-violet-400 mb-4">
            <BrainCircuit className="w-3.5 h-3.5" />
            <span>Cognitive API Reasoning</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Advanced AI Intelligence Built In
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Spektra AI goes far beyond syntax parsing. It acts as a principal developer advocate, identifying edge cases, automating diagrams, and tailoring prose to every engineering tier.
          </p>
        </div>

        {/* INTERACTIVE AUDIENCE PERSONA SWITCHER */}
        <div className="bg-[#0c0d16] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl mb-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold">Audience Adaptation Engine</span>
              <h3 className="text-xl font-bold text-white mt-1">Adapting Documentation Style to Intended Audience</h3>
            </div>

            {/* Persona Toggle */}
            <div className="flex items-center gap-1 bg-black/40 p-1 rounded-2xl border border-white/10">
              <button
                onClick={() => setSelectedPersona("beginner")}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedPersona === "beginner" ? "bg-indigo-600 text-white shadow-md" : "text-slate-400 hover:text-white"
                }`}
              >
                Beginner
              </button>
              <button
                onClick={() => setSelectedPersona("intermediate")}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedPersona === "intermediate" ? "bg-indigo-600 text-white shadow-md" : "text-slate-400 hover:text-white"
                }`}
              >
                Intermediate Developer
              </button>
              <button
                onClick={() => setSelectedPersona("senior")}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedPersona === "senior" ? "bg-indigo-600 text-white shadow-md" : "text-slate-400 hover:text-white"
                }`}
              >
                Senior Engineer / Architect
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6 items-center">
            <div className="lg:col-span-6 space-y-3">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-indigo-500/20 text-indigo-300 text-xs font-mono">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Persona: {selectedPersona.toUpperCase()}</span>
              </div>
              <h4 className="text-xl font-bold text-white">{PERSONA_CONTENT[selectedPersona].headline}</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {PERSONA_CONTENT[selectedPersona].explanation}
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="text-[10px] font-mono text-slate-400 uppercase mb-1.5 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                <span>Auto-Adapted Code & Explanation Output</span>
              </div>
              <pre className="p-4 rounded-2xl bg-black/80 font-mono text-xs text-indigo-200 border border-white/10 overflow-x-auto leading-relaxed">
                {PERSONA_CONTENT[selectedPersona].snippet}
              </pre>
            </div>
          </div>
        </div>

        {/* Deep Intelligence Features Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-3">
            {FEATURES.map((feat, idx) => {
              const Icon = feat.icon;
              const isActive = activeFeature === idx;
              return (
                <button
                  key={feat.id}
                  onClick={() => setActiveFeature(idx)}
                  className={`w-full text-left p-4 rounded-2xl transition-all border flex items-start gap-3.5 ${
                    isActive
                      ? "bg-[#131424] border-indigo-500/50 shadow-xl shadow-indigo-500/10 scale-[1.01]"
                      : "bg-white/[0.02] hover:bg-white/[0.05] border-white/5 text-slate-400"
                  }`}
                >
                  <div className={`p-2.5 rounded-xl ${isActive ? "bg-indigo-600 text-white" : "bg-white/5 text-slate-400"}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className={`font-bold text-sm ${isActive ? "text-white" : "text-slate-300"}`}>{feat.title}</span>
                    </div>
                    <span className="inline-block text-[10px] font-mono text-indigo-400 mt-0.5">{feat.badge}</span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-7 bg-[#0d0e16] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase font-bold text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                {FEATURES[activeFeature].badge}
              </span>
              <span className="text-xs font-mono text-slate-500">Live AI Module</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
              {FEATURES[activeFeature].title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              {FEATURES[activeFeature].description}
            </p>

            <div className="bg-[#080910] p-4 rounded-2xl border border-white/10 shadow-inner">
              <div className="text-[10px] font-mono text-slate-400 uppercase mb-2">Live Analysis Simulation</div>
              {FEATURES[activeFeature].preview}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
