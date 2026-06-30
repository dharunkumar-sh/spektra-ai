"use client";

import React, { useState } from "react";
import { 
  Upload, 
  Cpu, 
  Briefcase, 
  LayoutTemplate, 
  FileCheck2, 
  Share2, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ShieldAlert, 
  Layers, 
  Code, 
  GitBranch,
  Terminal,
  Server
} from "lucide-react";

interface PipelineStage {
  id: number;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  aiAnalysisPoints: string[];
  mockup: {
    badge: string;
    headline: string;
    visualContent: React.ReactNode;
  };
}

export function WorkflowSection() {
  const [activeStage, setActiveStage] = useState<number>(0);

  const STAGES: PipelineStage[] = [
    {
      id: 0,
      title: "1. Upload API Specification",
      subtitle: "Ingest any API spec format",
      icon: Upload,
      aiAnalysisPoints: [
        "Normalizes OpenAPI 3.0/3.1, Swagger 2.0, Postman collections, and raw cURL snippets.",
        "Resolves complex `$ref` schemas across remote URLs and multi-file repositories.",
        "Validates parameter constraints, data types, and required payload bodies."
      ],
      mockup: {
        badge: "Multi-Format Universal Ingestion",
        headline: "Instant Schema Normalization & Validation",
        visualContent: (
          <div className="space-y-3 font-mono text-xs">
            <div className="p-3 rounded-xl bg-black/50 border border-white/10 flex items-center justify-between text-slate-300">
              <div className="flex items-center gap-2">
                <Server className="w-4 h-4 text-indigo-400" />
                <span>github.com/org/payments-api/openapi.yaml</span>
              </div>
              <span className="text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded text-[10px]">Synced via GitHub CI</span>
            </div>
            <div className="p-3 rounded-xl bg-indigo-950/30 border border-indigo-500/20 text-indigo-200">
              <div className="font-semibold mb-1 flex items-center gap-1.5 text-indigo-300">
                <Sparkles className="w-3.5 h-3.5" />
                <span>AI Pre-Flight Analysis:</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-slate-300 text-[11px]">
                <li>Detected 84 endpoints across 14 resource entities.</li>
                <li>Identified 12 polymorphic schemas (`oneOf`, `anyOf`).</li>
                <li>Zero syntax anomalies found. Ready for neural comprehension.</li>
              </ul>
            </div>
          </div>
        )
      }
    },
    {
      id: 1,
      title: "2. AI Understands API Architecture",
      subtitle: "Deep structural reasoning",
      icon: Cpu,
      aiAnalysisPoints: [
        "Identifies authentication boundaries (OAuth2 scopes, JWT claims, mTLS, HMAC signatures).",
        "Maps dependencies between parent resources and nested child endpoints.",
        "Detects rate-limiting headers (`X-RateLimit-Limit`) and pagination patterns (cursor vs offset)."
      ],
      mockup: {
        badge: "Neural Semantic Parsing",
        headline: "Extracting Architectural Topology & Security Rules",
        visualContent: (
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
              <div className="text-slate-400 text-[10px] uppercase font-mono">Security Topology</div>
              <div className="font-semibold text-white flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 text-amber-400" />
                <span>Dual Auth: PKCE + API Key</span>
              </div>
              <div className="text-slate-400 text-[11px]">Enforces scope `payments:write` on mutation endpoints.</div>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
              <div className="text-slate-400 text-[10px] uppercase font-mono">Data Flow Pattern</div>
              <div className="font-semibold text-white flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>Asynchronous Webhook Events</span>
              </div>
              <div className="text-slate-400 text-[11px]">Identified `event.created` callbacks with HMAC-SHA256 signature headers.</div>
            </div>
          </div>
        )
      }
    },
    {
      id: 2,
      title: "3. Detects Business Context",
      subtitle: "Organizes by developer intuition",
      icon: Briefcase,
      aiAnalysisPoints: [
        "Replaces flat alphabetical lists with intuitive business domain groupings (e.g. 'Checkout Flows', 'Identity Verification').",
        "Synthesizes natural language domain descriptions explaining *why* an endpoint exists.",
        "Generates realistic, domain-accurate request payloads rather than generic `string` placeholders."
      ],
      mockup: {
        badge: "Domain-Driven Organization",
        headline: "From Flat CRUD Paths to Intuitive Business Workflows",
        visualContent: (
          <div className="space-y-2 text-xs">
            <div className="p-2.5 rounded-lg bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-between text-indigo-200">
              <span className="font-semibold">Domain Cluster 1: Customer Lifecycle & Onboarding</span>
              <span className="text-[10px] bg-indigo-500/30 px-2 py-0.5 rounded">12 Endpoints</span>
            </div>
            <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between text-slate-300">
              <span>Domain Cluster 2: Usage-Based Metering & Invoicing</span>
              <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded">18 Endpoints</span>
            </div>
            <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between text-slate-300">
              <span>Domain Cluster 3: Dispute Resolution & Chargebacks</span>
              <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded">8 Endpoints</span>
            </div>
          </div>
        )
      }
    },
    {
      id: 3,
      title: "4. Selects Smart Template",
      subtitle: "Adapts to domain archetype",
      icon: LayoutTemplate,
      aiAnalysisPoints: [
        "Dynamically selects layout structure based on API archetype (REST vs GraphQL vs AI LLM Streaming vs Fintech).",
        "Prioritizes interactive playground for REST, schema visualizer for GraphQL, and token calculators for AI APIs.",
        "Configures custom color palettes and typography aligned with your developer brand."
      ],
      mockup: {
        badge: "Adaptive Layout Engine",
        headline: "Selected Archetype: High-Throughput Fintech & Payment Engine",
        visualContent: (
          <div className="p-3 rounded-xl bg-gradient-to-r from-violet-950/40 to-indigo-950/40 border border-violet-500/30 text-xs text-slate-200 space-y-2">
            <div className="flex items-center justify-between font-semibold">
              <span className="text-violet-300">Template Features Activated:</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-violet-500/20 text-violet-300">Fintech Suite v3</span>
            </div>
            <ul className="grid grid-cols-2 gap-2 text-[11px] text-slate-300">
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Idempotency Sandbox</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Currency Precision Tables</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Webhook Simulator</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Multi-Language SDKs</li>
            </ul>
          </div>
        )
      }
    },
    {
      id: 4,
      title: "5. Generates Developer Docs",
      subtitle: "Synthesizes prose, code & diagrams",
      icon: FileCheck2,
      aiAnalysisPoints: [
        "Writes clear step-by-step onboarding tutorials and complete quickstart guides.",
        "Produces Mermaid sequence diagrams illustrating multi-step transactional flows.",
        "Compiles idiomatic code snippets in TypeScript, Python, Go, Rust, Ruby, and Java."
      ],
      mockup: {
        badge: "Technical Writer in a Box",
        headline: "Real-Time Prose Synthesis & Sequence Diagramming",
        visualContent: (
          <div className="p-3 rounded-xl bg-black/60 border border-white/10 font-mono text-[11px] text-indigo-300 space-y-2">
            <div className="text-slate-400 text-[10px] border-b border-white/10 pb-1">Synthesized Mermaid Workflow Diagram:</div>
            <pre className="text-emerald-300 leading-relaxed overflow-x-auto">
{`sequenceDiagram
  Client->>SpektraGateway: POST /v1/intents (Idempotency-Key)
  SpektraGateway->>RiskEngine: Validate Fraud Score
  RiskEngine-->>SpektraGateway: Score Approved (0.02)
  SpektraGateway-->>Client: 201 Created (client_secret)`}
            </pre>
          </div>
        )
      }
    },
    {
      id: 5,
      title: "6. Export & Publish Anywhere",
      subtitle: "Zero vendor lock-in",
      icon: Share2,
      aiAnalysisPoints: [
        "Host directly on Spektra Edge CDN with custom domain (`docs.yourcompany.com`) and SLA.",
        "Export clean, production-ready MDX, Markdown, or static HTML directly to your GitHub repo.",
        "Seamlessly integrate with existing Docusaurus, Mintlify, GitBook, or Nextra setups."
      ],
      mockup: {
        badge: "Omni-Channel Distribution",
        headline: "One-Click Deploy or Git CI/CD Pull Request",
        visualContent: (
          <div className="grid grid-cols-3 gap-2 text-center text-xs">
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
              <div className="font-bold text-white">Spektra CDN</div>
              <div className="text-[10px] text-emerald-400 mt-1">Global 50ms Edge</div>
            </div>
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
              <div className="font-bold text-white">GitHub PR</div>
              <div className="text-[10px] text-indigo-400 mt-1">Auto MDX Export</div>
            </div>
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
              <div className="font-bold text-white">Docusaurus / Mintlify</div>
              <div className="text-[10px] text-cyan-400 mt-1">Direct Sync</div>
            </div>
          </div>
        )
      }
    }
  ];

  return (
    <section id="workflow" className="py-24 bg-[#07080e] relative border-t border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-semibold text-violet-400 mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Intelligent Documentation Pipeline</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Watch an Intelligent Technical Writer at Work
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Every stage of the Spektra AI pipeline visually demonstrates deep semantic analysis, turning raw schema files into structured, developer-delighting web portals.
          </p>
        </div>

        {/* 6-Step Workflow Selector Tabs & Interactive Inspection */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Stage List */}
          <div className="lg:col-span-5 space-y-3">
            {STAGES.map((stage) => {
              const Icon = stage.icon;
              const isActive = activeStage === stage.id;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStage(stage.id)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-200 flex items-start gap-4 border ${
                    isActive
                      ? "bg-[#131424] border-indigo-500/50 shadow-xl shadow-indigo-500/10 scale-[1.01]"
                      : "bg-white/[0.02] hover:bg-white/[0.05] border-white/5 text-slate-400"
                  }`}
                >
                  <div
                    className={`p-3 rounded-xl transition-colors ${
                      isActive
                        ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30"
                        : "bg-white/5 text-slate-400"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className={`font-bold text-sm sm:text-base ${isActive ? "text-white" : "text-slate-300"}`}>
                      {stage.title}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">{stage.subtitle}</div>
                  </div>
                  {isActive && <ArrowRight className="w-4 h-4 text-indigo-400 self-center" />}
                </button>
              );
            })}
          </div>

          {/* Right Column: Stage Visual Inspection Card */}
          <div className="lg:col-span-7 bg-[#0d0e16] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                {STAGES[activeStage].mockup.badge}
              </span>
              <span className="text-xs font-mono text-slate-500">Stage 0{activeStage + 1} / 06</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-6">
              {STAGES[activeStage].mockup.headline}
            </h3>

            {/* What AI is Analyzing Box */}
            <div className="bg-[#141524] rounded-2xl p-5 border border-white/10 mb-6">
              <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-400" />
                <span>What Spektra AI is Actively Analyzing:</span>
              </div>
              <ul className="space-y-2.5">
                {STAGES[activeStage].aiAnalysisPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual Output Mockup */}
            <div className="bg-[#080910] rounded-2xl p-4 border border-white/10 shadow-inner">
              <div className="text-[10px] font-mono text-slate-400 uppercase mb-3">Live Stage Artifact Output</div>
              {STAGES[activeStage].mockup.visualContent}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
