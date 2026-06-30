"use client";

import React, { useState, useEffect } from "react";
import { 
  Sparkles,  
  CheckCircle2, 
  Code2, 
  Terminal, 
  Cpu, 
  FileText, 
  BookOpen, 
  RefreshCw, 
  Eye, 
  Copy, 
  Check,  
  Zap,
  ChevronRight,
  Lock,
} from "lucide-react";
import confetti from "canvas-confetti";

interface SampleSpec {
  id: string;
  name: string;
  format: string;
  endpointsCount: number;
  authType: string;
  yamlPreview: string;
  docPreview: {
    title: string;
    description: string;
    version: string;
    category: string;
    activeEndpoint: {
      method: string;
      path: string;
      summary: string;
      aiReasoning: string[];
      params: { name: string; type: string; required: boolean; desc: string }[];
      responseCode: string;
      responseJson: string;
      sdkSnippet: string;
    };
  };
}

const SAMPLE_SPECS: SampleSpec[] = [
  {
    id: "stripe",
    name: "Stripe Billing & Subscriptions API",
    format: "OpenAPI 3.1.0",
    endpointsCount: 48,
    authType: "OAuth 2.0 + Bearer Key",
    yamlPreview: `openapi: 3.1.0
info:
  title: Stripe Billing Engine
  version: 2026-06-15
paths:
  /v1/subscriptions:
    post:
      summary: Create a customer subscription
      security:
        - bearerAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/SubscriptionCreate'`,
    docPreview: {
      title: "Stripe Billing Developer Portal",
      description: "Automate recurring billing, usage-based metering, and SaaS subscription cycles with intelligent payment retry workflows.",
      version: "v2026-06.1",
      category: "Payments & SaaS Billing",
      activeEndpoint: {
        method: "POST",
        path: "/v1/subscriptions",
        summary: "Initialize Smart Recurring Subscription",
        aiReasoning: [
          "Identified financial transaction endpoint; automatically injected idempotency key requirement documentation.",
          "Generated webhook signature verification guide for subscription lifecycle events.",
          "Synthesized edge case error table for SCA (Strong Customer Authentication) challenges."
        ],
        params: [
          { name: "customer_id", type: "string (cus_*)", required: true, desc: "Unique identifier of the Stripe Customer object." },
          { name: "items", type: "array<PriceItem>", required: true, desc: "List of tariff prices and billing frequencies." },
          { name: "payment_behavior", type: "enum", required: false, desc: "Controls action if payment fails: allow_incomplete or default_incomplete." }
        ],
        responseCode: "201 Created",
        responseJson: `{
  "id": "sub_1Qk9m2Lkd93j",
  "object": "subscription",
  "status": "active",
  "current_period_end": 1785938201,
  "customer": "cus_Nj82kLm99a",
  "latest_invoice": "in_1Qk9m5Lkd"
}`,
        sdkSnippet: `import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const subscription = await stripe.subscriptions.create({
  customer: 'cus_Nj82kLm99a',
  items: [{ price: 'price_H5ggYwtDq4' }],
  payment_behavior: 'default_incomplete',
});`
      }
    }
  },
  {
    id: "openai",
    name: "OpenAI Chat & Vision API",
    format: "OpenAPI 3.1 (AI Spec)",
    endpointsCount: 34,
    authType: "API Key (Header)",
    yamlPreview: `openapi: 3.1.0
info:
  title: OpenAI Frontier Intelligence API
  version: v4.2
paths:
  /v1/chat/completions:
    post:
      summary: Generate multi-modal streaming AI completion
      security:
        - ApiKeyAuth: []
      parameters:
        - name: stream
          in: query
          schema:
            type: boolean`,
    docPreview: {
      title: "OpenAI Frontier AI Reference",
      description: "Integrate ultra-low latency reasoning models, vision analysis, structured JSON outputs, and tool calling into production applications.",
      version: "v4.2.0-preview",
      category: "AI & Neural Processing",
      activeEndpoint: {
        method: "POST",
        path: "/v1/chat/completions",
        summary: "Create Streaming Chat Completion",
        aiReasoning: [
          "Detected SSE (Server-Sent Events) streaming flag; automatically generated async chunk consumption code snippets.",
          "Extracted JSON Schema structured output parameters and built interactive validation sandbox.",
          "Added rate limit backoff strategies (429 Too Many Requests) with exponential jitter."
        ],
        params: [
          { name: "model", type: "string", required: true, desc: "Model ID to query: gpt-4o, o3-mini, or claude-3.7-sonnet." },
          { name: "messages", type: "array<Message>", required: true, desc: "Conversation history with role ('system' | 'user' | 'assistant')." },
          { name: "temperature", type: "float", required: false, desc: "Sampling creativity between 0.0 (deterministic) and 2.0." }
        ],
        responseCode: "200 OK (SSE Stream)",
        responseJson: `{
  "id": "chatcmpl-98sKj2x",
  "object": "chat.completion",
  "created": 1785938200,
  "model": "gpt-4o-2026-05",
  "choices": [{
    "index": 0,
    "message": { "role": "assistant", "content": "Spektra AI documentation generated successfully!" },
    "finish_reason": "stop"
  }]
}`,
        sdkSnippet: `import OpenAI from 'openai';
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const stream = await openai.chat.completions.create({
  model: 'gpt-4o',
  messages: [{ role: 'user', content: 'Explain API authentication.' }],
  stream: true,
});
for await (const chunk of stream) {
  process.stdout.write(chunk.choices[0]?.delta?.content || '');
}`
      }
    }
  },
  {
    id: "github",
    name: "GitHub Enterprise REST API",
    format: "OpenAPI 3.0",
    endpointsCount: 120,
    authType: "Fine-Grained Personal Access Token",
    yamlPreview: `openapi: 3.0.3
info:
  title: GitHub Repositories & CI/CD API
  version: 2026-01
paths:
  /repos/{owner}/{repo}/actions/workflows:
    get:
      summary: List repository GitHub Actions workflows
      parameters:
        - name: owner
          in: path
          required: true`,
    docPreview: {
      title: "GitHub Actions & DevOps Portal",
      description: "Automate code reviews, trigger CI/CD deployment pipelines, manage secret storage, and inspect repository health metrics via REST.",
      version: "2026-01 (LTS)",
      category: "DevOps & Source Control",
      activeEndpoint: {
        method: "GET",
        path: "/repos/{owner}/{repo}/actions/workflows",
        summary: "Inspect Repository CI/CD Workflows",
        aiReasoning: [
          "Grouped 120 raw endpoints into logical business domains: Actions, Pull Requests, Security Advisories, and Releases.",
          "Identified pagination cursors (Link header) and generated infinite-scroll helper documentation.",
          "Generated permissions prerequisite guide (`actions:read` token scope required)."
        ],
        params: [
          { name: "owner", type: "string", required: true, desc: "Account owner of the repository." },
          { name: "repo", type: "string", required: true, desc: "Name of the repository without .git extension." },
          { name: "per_page", type: "integer", required: false, desc: "Results per page (max 100). Default is 30." }
        ],
        responseCode: "200 OK",
        responseJson: `{
  "total_count": 2,
  "workflows": [
    {
      "id": 161335,
      "node_id": "MDg6V29ya2Zsb3cxNjEzMzU=",
      "name": "Spektra AI Production Build",
      "path": ".github/workflows/deploy.yml",
      "state": "active"
    }
  ]
}`,
        sdkSnippet: `import { Octokit } from "@octokit/rest";
const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

const { data } = await octokit.rest.actions.listRepoWorkflows({
  owner: "dharunkumar-sh",
  repo: "spektra-ai",
});
console.log(data.workflows);`
      }
    }
  }
];

const AI_STEPS = [
  { step: 1, label: "Parsing OpenAPI / Swagger Schema & Resolving $refs..." },
  { step: 2, label: "Detecting Security Architecture & OAuth2 Flows..." },
  { step: 3, label: "Semantic Clustering: Grouping Endpoints by Business Context..." },
  { step: 4, label: "Synthesizing Contextual Explanations & Error Code Guides..." },
  { step: 5, label: "Compiling Type-Safe Multi-Language SDK Snippets..." },
  { step: 6, label: "Generating Interactive API Playground & Mermaid Flow Diagrams..." }
];

export function HeroSection() {
  const [selectedSpec, setSelectedSpec] = useState<SampleSpec>(SAMPLE_SPECS[0]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentStep, setCurrentStep] = useState(6); // Default completed
  const [copiedCode, setCopiedCode] = useState(false);
  const [activeTab, setActiveTab] = useState<"doc" | "sdk" | "reasoning">("doc");

  const triggerLiveGeneration = (spec: SampleSpec) => {
    setSelectedSpec(spec);
    setIsGenerating(true);
    setCurrentStep(0);
  };

  useEffect(() => {
    if (!isGenerating) return;

    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < AI_STEPS.length) {
          return prev + 1;
        } else {
          setIsGenerating(false);
          confetti({
            particleCount: 70,
            spread: 65,
            origin: { y: 0.6 },
            colors: ["#6366f1", "#8b5cf6", "#06b6d4", "#10b981"]
          });
          clearInterval(interval);
          return prev;
        }
      });
    }, 450);

    return () => clearInterval(interval);
  }, [isGenerating]);

  const handleCopyCode = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-indigo-600/20 via-violet-600/15 to-cyan-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />
      
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Badge */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-medium text-indigo-300 mb-6 shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-spin" style={{ animationDuration: "8s" }} />
            <span>Next-Generation AI Developer Portal Architecture</span>
            <span className="h-1 w-1 rounded-full bg-indigo-400" />
            <span className="text-indigo-200 font-semibold">Spektra Engine 3.4</span>
          </div>

          {/* EXACT Required Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-5xl leading-[1.08] mb-6">
            <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
              API Documentation That Thinks Before It Writes.
            </span>
          </h1>

          {/* Supporting Description */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-400 max-w-3xl leading-relaxed mb-10">
            Spektra AI doesn&apos;t simply render API specifications—it intelligently understands API architecture, identifies authentication methods, groups endpoints by business context, generates contextual explanations, produces SDK examples, creates onboarding guides, and automatically writes complete documentation tailored to each API within seconds.
          </p>

          {/* EXACT Required CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
            <a
              href="#interactive-generator"
              onClick={() => triggerLiveGeneration(selectedSpec)}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 via-violet-600 to-cyan-500 text-white font-semibold text-base shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] transition-all duration-200 cursor-pointer"
            >
              <Zap className="w-5 h-5 fill-white animate-pulse" />
              <span>Generate Documentation Free</span>
            </a>

            <a
              href="#interactive-preview"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-[#12131e] hover:bg-[#1c1d2c] border border-white/15 text-slate-200 font-semibold text-base transition-all duration-200"
            >
              <Eye className="w-5 h-5 text-indigo-400" />
              <span>View Live Demo</span>
            </a>
          </div>

          {/* Trust Ticker */}
          <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>100% OpenAPI 3.0 / 3.1 & Swagger Compatible</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Automated Postman & cURL Transformation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Real-time GitHub Sync & CI/CD Automation</span>
            </div>
          </div>
        </div>

        {/* IMMERSIVE INTERACTIVE AI GENERATION EXPERIENCE */}
        <div id="interactive-generator" className="mt-16 scroll-mt-28">
          <div className="bg-[#0b0c14]/90 border border-white/15 rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl backdrop-blur-2xl relative overflow-hidden">
            {/* Top Bar / Sample Selector */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-xs text-slate-400">spektra-ai-engine --interactive-studio</span>
                </div>
                <h3 className="text-lg font-bold text-white mt-2 flex items-center gap-2">
                  <span>Live Interactive AI Documentation Synthesis</span>
                  <span className="px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-mono">Live Demo</span>
                </h3>
              </div>

              {/* Sample API Selector */}
              <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
                <span className="text-xs font-medium text-slate-400 mr-1">Select Sample API:</span>
                {SAMPLE_SPECS.map((spec) => (
                  <button
                    key={spec.id}
                    onClick={() => triggerLiveGeneration(spec)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 ${
                      selectedSpec.id === spec.id && !isGenerating
                        ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30 font-semibold"
                        : "bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10"
                    }`}
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>{spec.name.split(" ")[0]} API</span>
                  </button>
                ))}
                <button
                  onClick={() => triggerLiveGeneration(selectedSpec)}
                  disabled={isGenerating}
                  className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/30 flex items-center gap-1.5 ml-auto"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isGenerating ? "animate-spin" : ""}`} />
                  <span>Re-Run AI Synthesis</span>
                </button>
              </div>
            </div>

            {/* Progress / AI Reasoning Bar when generating */}
            {isGenerating && (
              <div className="my-6 p-5 rounded-2xl bg-[#131422] border border-indigo-500/30 shadow-xl animate-in fade-in duration-300">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-lg bg-indigo-500 flex items-center justify-center">
                      <Cpu className="w-3.5 h-3.5 text-white animate-pulse" />
                    </div>
                    <span className="text-sm font-semibold text-white">
                      {AI_STEPS[Math.min(currentStep, AI_STEPS.length - 1)].label}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-indigo-400 font-semibold">
                    Step {Math.min(currentStep + 1, AI_STEPS.length)} of {AI_STEPS.length}
                  </span>
                </div>

                {/* Animated Progress Bar */}
                <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 transition-all duration-300 rounded-full"
                    style={{ width: `${Math.min(((currentStep + 1) / AI_STEPS.length) * 100, 100)}%` }}
                  />
                </div>

                <div className="mt-3 flex items-center justify-between text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    <span>Analyzing domain vocabulary & authentication boundaries...</span>
                  </div>
                  <span>Tokens processed: {(currentStep + 1) * 854} / 5,124</span>
                </div>
              </div>
            )}

            {/* Split Screen Studio: Left Raw Specification vs Right AI-Synthesized Docs */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
              {/* Left Column: Input Specification */}
              <div className="lg:col-span-5 flex flex-col bg-[#07080e] border border-white/10 rounded-2xl overflow-hidden">
                <div className="bg-[#12131d] px-4 py-3 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                    <Code2 className="w-4 h-4 text-indigo-400" />
                    <span>Uploaded Specification ({selectedSpec.format})</span>
                  </div>
                  <span className="text-[11px] font-mono bg-white/10 px-2 py-0.5 rounded text-slate-400">
                    {selectedSpec.endpointsCount} Endpoints Detected
                  </span>
                </div>

                <div className="p-4 font-mono text-xs text-slate-300 overflow-x-auto h-[440px] leading-relaxed select-none bg-[#07080e]/90">
                  <pre className="text-indigo-200/90">{selectedSpec.yamlPreview}</pre>
                </div>

                <div className="p-3 bg-[#12131d] border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-amber-400" />
                    <span>Auth: {selectedSpec.authType}</span>
                  </div>
                  <span className="text-emerald-400 font-mono">YAML Validated ✓</span>
                </div>
              </div>

              {/* Right Column: Intelligent Rendered Output */}
              <div className="lg:col-span-7 flex flex-col bg-[#0d0e16] border border-indigo-500/25 rounded-2xl overflow-hidden shadow-2xl relative">
                {/* Header Sub-tabs */}
                <div className="bg-[#141624] px-4 py-2.5 border-b border-white/10 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-1 bg-black/40 p-1 rounded-xl border border-white/5">
                    <button
                      onClick={() => setActiveTab("doc")}
                      className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${
                        activeTab === "doc" ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-white"
                      }`}
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Live Portal Preview</span>
                    </button>
                    <button
                      onClick={() => setActiveTab("sdk")}
                      className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${
                        activeTab === "sdk" ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-white"
                      }`}
                    >
                      <Terminal className="w-3.5 h-3.5" />
                      <span>AI SDK Generator</span>
                    </button>
                    <button
                      onClick={() => setActiveTab("reasoning")}
                      className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${
                        activeTab === "reasoning" ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-white"
                      }`}
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      <span>AI Reasoning Logs</span>
                    </button>
                  </div>

                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                    Production-Ready
                  </span>
                </div>

                {/* Tab 1: Live Portal Preview */}
                {activeTab === "doc" && (
                  <div className="p-5 overflow-y-auto h-[440px] space-y-5">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">
                          {selectedSpec.docPreview.category}
                        </span>
                        <h4 className="text-xl font-bold text-white mt-1">
                          {selectedSpec.docPreview.title}
                        </h4>
                        <p className="text-xs text-slate-300 mt-1">
                          {selectedSpec.docPreview.description}
                        </p>
                      </div>
                      <span className="font-mono text-xs px-2 py-1 rounded bg-white/10 text-slate-300">
                        {selectedSpec.docPreview.version}
                      </span>
                    </div>

                    {/* Endpoint Card */}
                    <div className="bg-[#080910] border border-white/10 rounded-xl p-4 space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded font-mono font-bold text-xs bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                          {selectedSpec.docPreview.activeEndpoint.method}
                        </span>
                        <span className="font-mono text-sm font-semibold text-slate-200">
                          {selectedSpec.docPreview.activeEndpoint.path}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400">
                        {selectedSpec.docPreview.activeEndpoint.summary}
                      </p>

                      {/* AI Reasoning Callout */}
                      <div className="p-3 rounded-xl bg-indigo-950/40 border border-indigo-500/20 text-xs text-indigo-200 space-y-1">
                        <div className="font-semibold flex items-center gap-1.5 text-indigo-300">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>AI Synthesis Insight:</span>
                        </div>
                        <ul className="list-disc list-inside space-y-0.5 text-slate-300 text-[11px]">
                          {selectedSpec.docPreview.activeEndpoint.aiReasoning.map((reason, idx) => (
                            <li key={idx}>{reason}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Parameter Table */}
                      <div>
                        <div className="text-xs font-semibold text-slate-300 mb-2">Request Parameters</div>
                        <div className="space-y-2">
                          {selectedSpec.docPreview.activeEndpoint.params.map((p, idx) => (
                            <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-2 rounded bg-white/5 border border-white/5 text-xs">
                              <div className="flex items-center gap-2">
                                <span className="font-mono font-bold text-indigo-300">{p.name}</span>
                                <span className="text-[10px] font-mono text-slate-400">{p.type}</span>
                                {p.required && (
                                  <span className="text-[10px] bg-red-500/20 text-red-300 px-1.5 rounded">Required</span>
                                )}
                              </div>
                              <span className="text-slate-400 text-[11px] mt-1 sm:mt-0">{p.desc}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Response Payload */}
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-xs font-semibold text-slate-300">Example Response ({selectedSpec.docPreview.activeEndpoint.responseCode})</span>
                        </div>
                        <pre className="p-3 rounded-lg bg-black/60 font-mono text-[11px] text-emerald-300 overflow-x-auto">
                          {selectedSpec.docPreview.activeEndpoint.responseJson}
                        </pre>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 2: AI SDK Generator */}
                {activeTab === "sdk" && (
                  <div className="p-5 h-[440px] flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-semibold text-slate-300">Auto-Generated Client Snippet (TypeScript / Node.js)</span>
                        <button
                          onClick={() => handleCopyCode(selectedSpec.docPreview.activeEndpoint.sdkSnippet)}
                          className="flex items-center gap-1.5 text-xs bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded transition-colors text-slate-200"
                        >
                          {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                          <span>{copiedCode ? "Copied!" : "Copy Snippet"}</span>
                        </button>
                      </div>
                      <pre className="p-4 rounded-xl bg-black/70 font-mono text-xs text-indigo-200 overflow-x-auto border border-white/10 leading-relaxed">
                        {selectedSpec.docPreview.activeEndpoint.sdkSnippet}
                      </pre>
                    </div>

                    <div className="p-3 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-between text-xs text-violet-200">
                      <span>Spektra AI also generates complete npm packages, PyPI modules, and Go modules automatically.</span>
                      <span className="font-semibold text-white">Export SDKs &rarr;</span>
                    </div>
                  </div>
                )}

                {/* Tab 3: AI Reasoning Logs */}
                {activeTab === "reasoning" && (
                  <div className="p-5 h-[440px] overflow-y-auto space-y-3 font-mono text-xs">
                    <div className="text-slate-400 pb-2 border-b border-white/10 flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-indigo-400" />
                      <span>Live Diagnostic Trace for {selectedSpec.name}</span>
                    </div>
                    {AI_STEPS.map((stepItem) => (
                      <div key={stepItem.step} className="p-2.5 rounded-lg bg-white/5 border border-white/5 flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded bg-indigo-500/20 text-indigo-300 flex items-center justify-center font-bold text-[10px] shrink-0">
                          0{stepItem.step}
                        </span>
                        <div>
                          <div className="text-slate-200 font-semibold">{stepItem.label}</div>
                          <div className="text-[11px] text-slate-400 mt-0.5">
                            Status: <span className="text-emerald-400">Completed in {(stepItem.step * 0.18).toFixed(2)}s</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Footer Bar of Studio */}
                <div className="bg-[#12131d] px-4 py-2.5 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span>AI Confidence Score: <strong className="text-emerald-400">99.8%</strong></span>
                  <a href="#interactive-preview" className="text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1">
                    <span>Explore Full Interactive Portal Preview</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
