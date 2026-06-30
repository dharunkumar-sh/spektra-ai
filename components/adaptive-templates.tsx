"use client";

import React, { useState } from "react";
import { 
  Globe, 
  Database, 
  ShieldCheck, 
  CreditCard, 
  Cpu, 
  ShoppingCart, 
  Building2, 
  HeartPulse, 
  Webhook, 
  BarChart3, 
  Package,
  Layers,
  CheckCircle2,
  BookOpen,
  ArrowRight,
  Code
} from "lucide-react";

interface ApiTemplate {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  tagline: string;
  navStructure: string[];
  onboardingFocus: string;
  authStrategy: string;
  specialFeature: string;
  codePreview: string;
}

const TEMPLATES: ApiTemplate[] = [
  {
    id: "rest",
    name: "REST APIs",
    icon: Globe,
    tagline: "Resource-Oriented CRUD & Hypermedia Navigation",
    navStructure: ["Getting Started", "Authentication", "Core Resources (Pagination)", "Error Codes & Retry Logic", "Webhooks"],
    onboardingFocus: "Quick cURL test commands & HTTP status code cheat sheets.",
    authStrategy: "Bearer Token / API Key header verification.",
    specialFeature: "Interactive API Playground with auto-filled mock request headers.",
    codePreview: `curl -X GET https://api.spektra.ai/v1/resources \\
  -H "Authorization: Bearer sk_live_992ja..."`
  },
  {
    id: "graphql",
    name: "GraphQL APIs",
    icon: Database,
    tagline: "Type-Safe Query Graph & Schema Explorer",
    navStructure: ["Schema Overview", "Queries & Mutations", "Subscriptions (WebSockets)", "Type Definitions & Interfaces", "Federation Guide"],
    onboardingFocus: "Interactive GraphiQL IDE sandbox with autocomplete.",
    authStrategy: "HTTP Header Auth + Field-Level Authorization Directives.",
    specialFeature: "Visual Schema Explorer tree with depth filtering and complexity scoring.",
    codePreview: `query GetCustomerProfile($id: ID!) {
  customer(id: $id) { id name subscriptions { status nextBillingDate } }
}`
  },
  {
    id: "auth",
    name: "Authentication Services",
    icon: ShieldCheck,
    tagline: "Identity, SSO, MFA & OAuth 2.0 PKCE Flows",
    navStructure: ["Quickstart SDKs", "OAuth 2.0 PKCE Walkthrough", "OIDC Provider Configuration", "MFA & Passkey WebAuthn", "Token Verification Keys"],
    onboardingFocus: "Sequence flow diagrams for login redirect cycles.",
    authStrategy: "JWKS Endpoint validation + Asymmetric Signing RSA/ECDSA.",
    specialFeature: "Interactive JWT Decoder sandbox explaining claims (`exp`, `iss`, `sub`).",
    codePreview: `// Verify JWT token signature via JWKS
const verified = await jwt.verify(token, getKey, { algorithms: ['RS256'] });`
  },
  {
    id: "payments",
    name: "Payment Gateways",
    icon: CreditCard,
    tagline: "Idempotency, Financial Ledgers & PCI DSS Workflows",
    navStructure: ["Payment Lifecycle", "Idempotency Key Guide", "Webhook Signature Verification", "3D Secure SCA Flows", "Sandbox Test Cards"],
    onboardingFocus: "Zero-loss transaction retry algorithms & webhook simulation.",
    authStrategy: "API Secret Key + Signature HMAC header validation.",
    specialFeature: "Interactive Sandbox Test Card generator & webhook signature verification calculator.",
    codePreview: `const intent = await spektraPay.paymentIntents.create({
  amount: 4900, currency: 'usd', idempotencyKey: 'idem_9921a8x'
});`
  },
  {
    id: "ai",
    name: "AI Model APIs",
    icon: Cpu,
    tagline: "LLM Streaming SSE, Token Calculations & Function Calling",
    navStructure: ["Model Overview & Context Windows", "Streaming SSE (Server-Sent Events)", "Function Calling & Tool Use", "Structured JSON Outputs", "Rate Limits & Backoff"],
    onboardingFocus: "Token estimation calculator and latency optimization guide.",
    authStrategy: "API Key Header + Project Organization Tier limits.",
    specialFeature: "Live token counter & Server-Sent Events (SSE) stream simulation snippet.",
    codePreview: `for await (const chunk of ai.chat.stream({ model: 'spektra-llm-v4', prompt })) {
  process.stdout.write(chunk.delta);
}`
  },
  {
    id: "ecommerce",
    name: "E-commerce Platforms",
    icon: ShoppingCart,
    tagline: "Catalogs, Inventory Sync, Carts & Order Fulfillment",
    navStructure: ["Storefront Catalog API", "Cart & Checkout Management", "Inventory Webhooks", "Tax & Shipping Rates", "Order Fulfillment Status"],
    onboardingFocus: "Catalog synchronization rates & inventory concurrency locks.",
    authStrategy: "OAuth 2.0 Merchant Grant Scope (`write:products`, `read:orders`).",
    specialFeature: "Interactive checkout cart state transition diagram.",
    codePreview: `const order = await store.orders.fulfill('ord_9921', { trackingNumber: '1Z9999999' });`
  },
  {
    id: "enterprise",
    name: "Internal Enterprise APIs",
    icon: Building2,
    tagline: "Microservices Governance, ERP & Audit Logs",
    navStructure: ["Architecture Overview", "Service Catalog & Ownership", "Internal Network Gateway (mTLS)", "Role-Based Access Control (RBAC)", "Audit Trail Logs"],
    onboardingFocus: "VPN / Private Link prerequisites & service mesh discovery.",
    authStrategy: "Mutual TLS (mTLS) certificates + Corporate Okta SSO.",
    specialFeature: "Service dependencies map & internal SLA latency dashboard.",
    codePreview: `curl --cert ./client.crt --key ./client.key https://internal-mesh.api/v2/ledger`
  },
  {
    id: "healthcare",
    name: "Healthcare APIs",
    icon: HeartPulse,
    tagline: "HIPAA Compliance, FHIR Standards & Patient Privacy",
    navStructure: ["FHIR R4 Resource Interoperability", "HIPAA Data Handling & BAA", "Patient Consent Scopes", "Audit Logging Mandates", "Electronic Health Records (EHR)"],
    onboardingFocus: "De-identification best practices and data encryption verification.",
    authStrategy: "SMART on FHIR OAuth 2.0 + Strict Patient Context Token.",
    specialFeature: "Automated PII/PHI masking validation rules in response previews.",
    codePreview: `GET /fhir/r4/Patient?identifier=urn:oid:2.16.840.1.113883.2.4.6.3|12345678`
  },
  {
    id: "webhooks",
    name: "Webhook Services",
    icon: Webhook,
    tagline: "Event Streaming, HMAC Signatures & Retry Schedules",
    navStructure: ["Event Catalog", "Webhook Endpoint Verification", "HMAC Signature Verification", "Exponential Backoff Schedule", "Manual Re-delivery API"],
    onboardingFocus: "Ngrok local tunnel setup & signature hashing validator.",
    authStrategy: "HMAC-SHA256 signature in `X-Spektra-Signature` header.",
    specialFeature: "Live interactive HMAC signature computation utility for testing callbacks.",
    codePreview: `const isValid = crypto.timingSafeEqual(computedHmac, headers['x-spektra-signature']);`
  },
  {
    id: "analytics",
    name: "Analytics APIs",
    icon: BarChart3,
    tagline: "High-Volume Ingestion, Batch Processing & Aggregations",
    navStructure: ["High-Throughput Batch Ingestion", "OLAP Query Builder", "Real-time Metrics Streaming", "Data Retention Policies", "Custom Dashboard Embeds"],
    onboardingFocus: "Batching request payloads (up to 10,000 events/req) for high throughput.",
    authStrategy: "Ingestion Key (write-only) + Query Key (read-only scopes).",
    specialFeature: "Throughput calculator and gzip compression payload tutorial.",
    codePreview: `await analytics.batch.insert({ events: [{ event: 'page_view', timestamp: Date.now() }] });`
  },
  {
    id: "sdk",
    name: "SDK Documentation",
    icon: Package,
    tagline: "Client Libraries, Method References & Type Definitions",
    navStructure: ["Installation & Initialization", "Client Class Methods", "Error Handling & Exceptions", "TypeScript Types & Interfaces", "Changelog & SemVer"],
    onboardingFocus: "Package manager installation (`npm install`, `pip install`, `go get`).",
    authStrategy: "SDK Constructor options (`new Client({ apiKey })`).",
    specialFeature: "Interactive method signature inspector with auto-generated interface docs.",
    codePreview: `import { SpektraClient } from '@spektra/sdk';
const client = new SpektraClient({ apiKey: process.env.SPEKTRA_KEY });`
  }
];

export function AdaptiveTemplates() {
  const [activeTab, setActiveTab] = useState<string>(TEMPLATES[0].id);

  const currentTemplate = TEMPLATES.find((t) => t.id === activeTab) || TEMPLATES[0];
  const ActiveIcon = currentTemplate.icon;

  return (
    <section id="adaptive-templates" className="py-24 bg-[#090a10] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* EXACT Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Domain-Aware Neural Archetypes</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Documentation That Adapts to Every API.
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Spektra AI does not rely on a generic, rigid documentation template. Instead, it restructures navigation, onboarding flows, endpoint organization, authentication guides, and examples according to your API&apos;s exact domain.
          </p>
        </div>

        {/* 11 API Type Switcher Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {TEMPLATES.map((tmpl) => {
            const Icon = tmpl.icon;
            const isSelected = tmpl.id === activeTab;
            return (
              <button
                key={tmpl.id}
                onClick={() => setActiveTab(tmpl.id)}
                className={`px-3.5 py-2 rounded-2xl text-xs font-semibold transition-all flex items-center gap-2 border ${
                  isSelected
                    ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/30 border-indigo-500 scale-105"
                    : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border-white/10"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tmpl.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Template Showcase Card */}
        <div className="bg-[#0e0f18] border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 text-indigo-300">
                  <ActiveIcon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{currentTemplate.name} Archetype</h3>
                  <p className="text-xs font-mono text-indigo-400 mt-0.5">{currentTemplate.tagline}</p>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-slate-400 font-semibold text-xs uppercase mb-1">Onboarding & Quickstart Focus</div>
                  <div className="text-slate-200">{currentTemplate.onboardingFocus}</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-slate-400 font-semibold text-xs uppercase mb-1">Auto-Configured Auth Strategy</div>
                  <div className="text-slate-200">{currentTemplate.authStrategy}</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 text-indigo-200">
                  <div className="font-semibold text-indigo-300 text-xs uppercase mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Specialized Archetype Capability:</span>
                  </div>
                  <div>{currentTemplate.specialFeature}</div>
                </div>
              </div>
            </div>

            {/* Right Dynamic Navigation & Code Showcase */}
            <div className="lg:col-span-7 bg-[#07080e] border border-white/10 rounded-2xl p-5 sm:p-6 shadow-inner space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-indigo-400" />
                  <span className="text-xs font-mono font-bold text-slate-300 uppercase">Dynamically Restructured Navigation Tree</span>
                </div>
                <span className="text-[10px] font-mono bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded">
                  AI Customized
                </span>
              </div>

              {/* Navigation structure items */}
              <div className="space-y-2">
                {currentTemplate.navStructure.map((navItem, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 border border-white/5 text-xs font-mono text-slate-200 hover:bg-white/10 transition-colors">
                    <span className="w-5 h-5 rounded-md bg-indigo-500/20 text-indigo-300 flex items-center justify-center font-bold text-[10px]">
                      0{idx + 1}
                    </span>
                    <span className="flex-1 font-semibold">{navItem}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                  </div>
                ))}
              </div>

              {/* Archetype Code Snippet */}
              <div className="pt-2">
                <div className="text-[10px] font-mono text-slate-400 uppercase mb-2 flex items-center gap-1.5">
                  <Code className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Domain-Idiomatic Code Snippet Sample</span>
                </div>
                <pre className="p-3.5 rounded-xl bg-black/80 font-mono text-xs text-emerald-300 border border-white/10 overflow-x-auto">
                  {currentTemplate.codePreview}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
