"use client";

import React, { useState } from "react";
import { 
  Search, 
  BookOpen, 
  Code2, 
  Terminal, 
  Workflow, 
  History, 
  Download, 
  Send, 
  Play, 
  Copy, 
  Check, 
  ChevronRight, 
  ChevronDown, 
  ShieldCheck, 
  Zap, 
  Layers, 
  FileJson,
  Globe,
  Settings2,
  CheckCircle2,
  RefreshCw
} from "lucide-react";

export function LiveDocPreview() {
  const [activeNav, setActiveNav] = useState<string>("charge");
  const [activeLang, setActiveLang] = useState<"ts" | "py" | "go" | "curl">("ts");
  const [activeTab, setActiveTab] = useState<"payload" | "schema" | "diagram">("payload");
  const [testStatus, setTestStatus] = useState<"idle" | "loading" | "success">("idle");
  const [version, setVersion] = useState<string>("v2.4.0 (Latest)");
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [copiedCode, setCopiedCode] = useState<boolean>(false);

  const handleTestRequest = () => {
    setTestStatus("loading");
    setTimeout(() => {
      setTestStatus("success");
    }, 600);
  };

  const CODE_SNIPPETS = {
    ts: `import { SpektraPay } from "@spektra/payments";
const pay = new SpektraPay({ secretKey: process.env.PAY_SECRET });

const charge = await pay.charges.create({
  amount: 14900,
  currency: "usd",
  customer: "cus_992ja8x7",
  captureMethod: "automatic",
  metadata: { orderId: "ord_2026_06" }
});
console.log(charge.status); // "succeeded"`,
    py: `from spektra_pay import SpektraPay
import os

client = SpektraPay(api_key=os.environ["PAY_SECRET"])

charge = client.charges.create(
    amount=14900,
    currency="usd",
    customer="cus_992ja8x7",
    capture_method="automatic"
)
print(charge.id, charge.status)`,
    go: `package main

import (
	"fmt"
	"github.com/spektra/pay-go"
)

func main() {
	client := pay.NewClient("sk_live_992ja")
	params := &pay.ChargeParams{
		Amount:   pay.Int64(14900),
		Currency: pay.String("usd"),
		Customer: pay.String("cus_992ja8x7"),
	}
	charge, _ := client.Charges.New(params)
	fmt.Println(charge.ID)
}`,
    curl: `curl -X POST https://api.spektra.ai/v1/payments/charge \\
  -H "Authorization: Bearer sk_live_992ja..." \\
  -H "Content-Type: application/json" \\
  -H "Idempotency-Key: idem_9921a8x" \\
  -d '{
    "amount": 14900,
    "currency": "usd",
    "customer": "cus_992ja8x7"
  }'`
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="interactive-preview" className="py-24 bg-[#060609] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 mb-4">
            <Globe className="w-3.5 h-3.5" />
            <span>Realistic Production Portal Simulation</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Explore a Live Spektra AI Portal
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Interact with a realistic documentation portal synthesized entirely by Spektra AI from a standard OpenAPI specification. Feel the difference of AI-generated developer delight.
          </p>
        </div>

        {/* Embedded Portal Browser Frame */}
        <div className="bg-[#0b0c14] border border-white/15 rounded-3xl overflow-hidden shadow-2xl relative">
          {/* Top Browser Bar */}
          <div className="bg-[#121320] px-4 py-3 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <div className="ml-3 flex items-center gap-2 bg-black/40 px-3 py-1 rounded-lg border border-white/5 text-xs font-mono text-slate-300">
                <Globe className="w-3.5 h-3.5 text-indigo-400" />
                <span>docs.spektra.ai/v1/payments/charge</span>
              </div>
            </div>

            {/* Version & Actions */}
            <div className="flex items-center gap-3">
              <select
                value={version}
                onChange={(e) => setVersion(e.target.value)}
                className="bg-black/40 text-xs font-mono text-slate-300 px-2.5 py-1 rounded-lg border border-white/10 focus:outline-none focus:border-indigo-500"
              >
                <option value="v2.4.0 (Latest)">v2.4.0 (Latest)</option>
                <option value="v2.3.0 LTS">v2.3.0 LTS</option>
                <option value="v1.9.0 Deprecated">v1.9.0 (Deprecated)</option>
              </select>

              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-3 py-1 rounded-lg text-xs text-slate-300 border border-white/10 transition-colors"
              >
                <Search className="w-3.5 h-3.5 text-slate-400" />
                <span>Search docs... (Ctrl+K)</span>
              </button>

              <a
                href="#pricing"
                className="hidden sm:flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold px-3 py-1 rounded-lg transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export MDX</span>
              </a>
            </div>
          </div>

          {/* Search Overlay Mockup */}
          {searchOpen && (
            <div className="absolute inset-x-4 top-14 z-50 bg-[#131526]/95 border border-indigo-500/40 rounded-2xl p-4 shadow-2xl backdrop-blur-xl max-w-xl mx-auto animate-in fade-in duration-200">
              <div className="flex items-center gap-2 pb-3 border-b border-white/10">
                <Search className="w-4 h-4 text-indigo-400" />
                <input
                  type="text"
                  placeholder="Search endpoints, SDK methods, error codes..."
                  className="bg-transparent w-full text-sm text-white focus:outline-none"
                  autoFocus
                />
              </div>
              <div className="pt-3 space-y-1.5 text-xs">
                <div className="p-2 rounded-lg bg-white/5 hover:bg-indigo-600/20 cursor-pointer flex items-center justify-between text-slate-200">
                  <span>POST /v1/payments/charge</span>
                  <span className="text-[10px] font-mono bg-indigo-500/20 text-indigo-300 px-1.5 py-0.5 rounded">Endpoint</span>
                </div>
                <div className="p-2 rounded-lg hover:bg-white/5 cursor-pointer flex items-center justify-between text-slate-400">
                  <span>OAuth 2.0 PKCE Walkthrough</span>
                  <span className="text-[10px] font-mono bg-white/10 text-slate-300 px-1.5 py-0.5 rounded">Guide</span>
                </div>
              </div>
            </div>
          )}

          {/* Portal Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[600px]">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-3 bg-[#080911] border-r border-white/10 p-4 space-y-6 text-xs select-none">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold mb-2">Getting Started</div>
                <div className="space-y-1">
                  <button
                    onClick={() => setActiveNav("onboarding")}
                    className={`w-full text-left px-3 py-2 rounded-xl transition-colors flex items-center gap-2 ${
                      activeNav === "onboarding" ? "bg-indigo-600/20 text-indigo-300 font-semibold border border-indigo-500/30" : "text-slate-400 hover:bg-white/5"
                    }`}
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Quickstart Guide</span>
                  </button>
                  <button
                    onClick={() => setActiveNav("auth")}
                    className={`w-full text-left px-3 py-2 rounded-xl transition-colors flex items-center gap-2 ${
                      activeNav === "auth" ? "bg-indigo-600/20 text-indigo-300 font-semibold border border-indigo-500/30" : "text-slate-400 hover:bg-white/5"
                    }`}
                  >
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Authentication & API Keys</span>
                  </button>
                </div>
              </div>

              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold mb-2">Payment Operations</div>
                <div className="space-y-1">
                  <button
                    onClick={() => setActiveNav("charge")}
                    className={`w-full text-left px-3 py-2 rounded-xl transition-colors flex items-center justify-between ${
                      activeNav === "charge" ? "bg-indigo-600/20 text-indigo-300 font-semibold border border-indigo-500/30" : "text-slate-400 hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-[10px] px-1 rounded bg-indigo-500/30 text-indigo-300">POST</span>
                      <span>Create Charge</span>
                    </div>
                  </button>
                  <button
                    onClick={() => setActiveNav("refund")}
                    className={`w-full text-left px-3 py-2 rounded-xl transition-colors flex items-center justify-between ${
                      activeNav === "refund" ? "bg-indigo-600/20 text-indigo-300 font-semibold border border-indigo-500/30" : "text-slate-400 hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-[10px] px-1 rounded bg-indigo-500/30 text-indigo-300">POST</span>
                      <span>Refund Transaction</span>
                    </div>
                  </button>
                  <button
                    onClick={() => setActiveNav("list")}
                    className={`w-full text-left px-3 py-2 rounded-xl transition-colors flex items-center justify-between ${
                      activeNav === "list" ? "bg-indigo-600/20 text-indigo-300 font-semibold border border-indigo-500/30" : "text-slate-400 hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-[10px] px-1 rounded bg-emerald-500/30 text-emerald-300">GET</span>
                      <span>List Transactions</span>
                    </div>
                  </button>
                </div>
              </div>

              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold mb-2">Governance & Logs</div>
                <div className="space-y-1">
                  <button
                    onClick={() => setActiveNav("changelog")}
                    className={`w-full text-left px-3 py-2 rounded-xl transition-colors flex items-center gap-2 ${
                      activeNav === "changelog" ? "bg-indigo-600/20 text-indigo-300 font-semibold border border-indigo-500/30" : "text-slate-400 hover:bg-white/5"
                    }`}
                  >
                    <History className="w-3.5 h-3.5" />
                    <span>Changelog & Deprecations</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Main Center Documentation Prose */}
            <div className="lg:col-span-5 p-6 sm:p-8 space-y-6 overflow-y-auto max-h-[700px] border-r border-white/10">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded font-mono font-bold text-xs bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  POST
                </span>
                <span className="font-mono text-sm font-bold text-white">
                  /v1/payments/charge
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">Create a Payment Charge</h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  Initiates an immediate financial debit against a customer&apos;s stored payment method or token. Spektra AI automatically enforces idempotency validation on this mutation.
                </p>
              </div>

              {/* Sub-tabs for Schema vs Diagram */}
              <div className="flex items-center gap-2 border-b border-white/10 pb-2">
                <button
                  onClick={() => setActiveTab("payload")}
                  className={`text-xs font-semibold pb-1.5 transition-colors ${
                    activeTab === "payload" ? "text-indigo-400 border-b-2 border-indigo-500" : "text-slate-400 hover:text-white"
                  }`}
                >
                  Request Parameters
                </button>
                <button
                  onClick={() => setActiveTab("schema")}
                  className={`text-xs font-semibold pb-1.5 transition-colors ${
                    activeTab === "schema" ? "text-indigo-400 border-b-2 border-indigo-500" : "text-slate-400 hover:text-white"
                  }`}
                >
                  Response Schema Model
                </button>
                <button
                  onClick={() => setActiveTab("diagram")}
                  className={`text-xs font-semibold pb-1.5 transition-colors ${
                    activeTab === "diagram" ? "text-indigo-400 border-b-2 border-indigo-500" : "text-slate-400 hover:text-white"
                  }`}
                >
                  Mermaid Sequence Diagram
                </button>
              </div>

              {activeTab === "payload" && (
                <div className="space-y-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs space-y-1">
                    <div className="flex items-center justify-between font-mono font-semibold text-indigo-300">
                      <span>amount <span className="text-[10px] text-red-400">required</span></span>
                      <span className="text-slate-400">integer (cents)</span>
                    </div>
                    <p className="text-slate-300 text-[11px]">The total transaction amount in the smallest currency unit (e.g. 14900 for $149.00 USD).</p>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs space-y-1">
                    <div className="flex items-center justify-between font-mono font-semibold text-indigo-300">
                      <span>currency <span className="text-[10px] text-red-400">required</span></span>
                      <span className="text-slate-400">string (ISO 4217)</span>
                    </div>
                    <p className="text-slate-300 text-[11px]">Three-letter ISO currency code in lowercase (e.g., &quot;usd&quot;, &quot;eur&quot;, &quot;gbp&quot;).</p>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs space-y-1">
                    <div className="flex items-center justify-between font-mono font-semibold text-indigo-300">
                      <span>idempotency_key <span className="text-[10px] text-slate-400">header</span></span>
                      <span className="text-slate-400">string (UUIDv4)</span>
                    </div>
                    <p className="text-slate-300 text-[11px]">Prevents double-charging if network timeouts occur during request transmission.</p>
                  </div>
                </div>
              )}

              {activeTab === "schema" && (
                <div className="p-4 rounded-xl bg-black/60 font-mono text-xs text-slate-300 space-y-2 border border-white/10">
                  <div className="text-indigo-400 font-bold">&lt;ChargeObject&gt; &#123;</div>
                  <div className="pl-4">id: <span className="text-emerald-400">string (&quot;ch_1Qk9...&quot;)</span>,</div>
                  <div className="pl-4">object: <span className="text-emerald-400">&quot;charge&quot;</span>,</div>
                  <div className="pl-4">amount: <span className="text-amber-400">14900</span>,</div>
                  <div className="pl-4">status: <span className="text-emerald-400">&quot;succeeded&quot; | &quot;pending&quot; | &quot;failed&quot;</span>,</div>
                  <div className="pl-4">created_at: <span className="text-amber-400">1785938201</span></div>
                  <div>&#125;</div>
                </div>
              )}

              {activeTab === "diagram" && (
                <div className="p-4 rounded-xl bg-black/60 font-mono text-[11px] text-emerald-300 border border-white/10 leading-relaxed overflow-x-auto">
                  <pre>{`sequenceDiagram
  Client->>API: POST /v1/payments/charge
  API->>FraudEngine: Verify Risk Score
  FraudEngine-->>API: Score Passed
  API-->>Client: 200 OK (Charge Object)`}</pre>
                </div>
              )}
            </div>

            {/* Right Interactive Code & API Tester Column */}
            <div className="lg:col-span-4 bg-[#090a12] p-5 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 bg-black/50 p-1 rounded-xl border border-white/10">
                    {(["ts", "py", "go", "curl"] as const).map((lang) => (
                      <button
                        key={lang}
                        onClick={() => setActiveLang(lang)}
                        className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold uppercase transition-colors ${
                          activeLang === lang ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-white"
                        }`}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => handleCopy(CODE_SNIPPETS[activeLang])}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 transition-colors"
                    title="Copy snippet"
                  >
                    {copiedCode ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <pre className="p-3.5 rounded-xl bg-black/80 font-mono text-[11px] text-indigo-200 overflow-x-auto border border-white/10 leading-relaxed h-[220px]">
                  {CODE_SNIPPETS[activeLang]}
                </pre>
              </div>

              {/* Interactive API Explorer Sandbox */}
              <div className="p-4 rounded-2xl bg-[#121424] border border-indigo-500/30 space-y-3 shadow-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-white">
                    <Play className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
                    <span>Interactive API Explorer</span>
                  </div>
                  <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded">
                    Sandbox Ready
                  </span>
                </div>

                <p className="text-[11px] text-slate-300">
                  Send a live simulated request directly from this documentation portal to see AI response formatting.
                </p>

                <button
                  onClick={handleTestRequest}
                  disabled={testStatus === "loading"}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/25 hover:opacity-90 transition-opacity cursor-pointer"
                >
                  {testStatus === "loading" ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      <span>Executing Sandbox Request...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Test Request (POST /charge)</span>
                    </>
                  )}
                </button>

                {testStatus === "success" && (
                  <div className="p-3 rounded-xl bg-black/80 border border-emerald-500/30 font-mono text-[11px] text-emerald-300 animate-in fade-in duration-200">
                    <div className="flex items-center justify-between border-b border-white/10 pb-1 mb-1.5 text-[10px] text-slate-400">
                      <span>Status: 200 OK</span>
                      <span>Latency: 42ms</span>
                    </div>
                    <pre>{`{
  "id": "ch_3M9921a8x",
  "object": "charge",
  "amount": 14900,
  "status": "succeeded"
}`}</pre>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
