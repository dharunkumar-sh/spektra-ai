"use client";

import React, { useState } from "react";
import { Check, HelpCircle, ChevronDown, Sparkles, Zap, } from "lucide-react";

interface PricingPlan {
  id: string;
  name: string;
  priceMonthly: string;
  priceAnnual: string;
  badge?: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaStyle: string;
}

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

const PLANS: PricingPlan[] = [
  {
    id: "free",
    name: "Free Developer",
    priceMonthly: "$0",
    priceAnnual: "$0",
    description: "Perfect for solo developers testing OpenAPI specs or launching hobby side projects.",
    features: [
      "Up to 3 API specifications per workspace",
      "50 AI documentation generations / month",
      "OpenAPI 3.0/3.1 & Postman collection support",
      "Standard Spektra AI subdomain hosting (`docs.spektra.ai/you`)",
      "Export to Markdown, HTML & JSON",
      "Standard community Discord support"
    ],
    ctaText: "Start Generating Free",
    ctaStyle: "bg-white/10 hover:bg-white/15 text-white border border-white/10"
  },
  {
    id: "pro",
    name: "Pro Engineer",
    priceMonthly: "$49",
    priceAnnual: "$39",
    badge: "Most Popular",
    description: "For professional developers and growing startups needing automated CI/CD documentation sync.",
    features: [
      "Unlimited API specifications & workspaces",
      "500 AI documentation generations / month",
      "Bi-directional GitHub repository & CI/CD sync",
      "Custom domain hosting with SSL & CDN SLA",
      "Multi-language SDK generation (TS, Python, Go, Rust)",
      "Automated Mermaid sequence diagrams",
      "Export to MDX, Mintlify, Docusaurus & PDF",
      "Documentation versioning (v1, v2, deprecation flags)"
    ],
    ctaText: "Upgrade to Pro",
    ctaStyle: "bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white shadow-lg shadow-indigo-500/25"
  },
  {
    id: "team",
    name: "Team & Growth",
    priceMonthly: "$199",
    priceAnnual: "$159",
    description: "For mid-size engineering teams managing multiple internal and public API products.",
    features: [
      "Everything in Pro + up to 15 team members",
      "2,500 priority AI documentation generations / mo",
      "Real-time team review, inline comments & approval workflows",
      "Complete custom branding (fonts, colors, CSS injection)",
      "Interactive API playground with live sandbox tokens",
      "Automated API changelog diffing & email subscriber alerts",
      "Advanced developer analytics & search query telemetry",
      "Role-Based Access Control (RBAC)"
    ],
    ctaText: "Start Team Trial",
    ctaStyle: "bg-[#131526] hover:bg-[#1b1e36] text-white border border-indigo-500/40"
  },
  {
    id: "enterprise",
    name: "Enterprise Core",
    priceMonthly: "Custom",
    priceAnnual: "Custom",
    badge: "SOC2 & HIPAA Ready",
    description: "Dedicated infrastructure, custom LLM fine-tuning, and SLA guarantees for large organizations.",
    features: [
      "Unlimited AI processing with dedicated neural capacity",
      "Self-hosted VPC / on-premises Kubernetes deployment option",
      "Custom LLM fine-tuning on your proprietary terminology & style guides",
      "SOC 2 Type II, GDPR, HIPAA compliance & BAA agreements",
      "SAMl / Okta SSO & SCIM directory provisioning",
      "Dedicated Technical Account Manager & 99.99% uptime SLA",
      "Custom audit logging & data residency controls"
    ],
    ctaText: "Contact Enterprise Sales",
    ctaStyle: "bg-white text-slate-900 hover:bg-slate-100 font-bold shadow-xl"
  }
];

const FAQS: FaqItem[] = [
  {
    category: "Compatibility",
    question: "What API specification formats does Spektra AI support?",
    answer: "Spektra AI natively ingests OpenAPI 3.0, OpenAPI 3.1, Swagger 2.0, Postman Collection v2.1, asyncAPI, and even raw cURL request bundles or unannotated GitHub route repositories. Our normalizer automatically parses and resolves remote `$ref` schemas across multi-file repositories."
  },
  {
    category: "Compatibility",
    question: "How does Spektra AI analyze private GitHub repositories without exposing code?",
    answer: "When connected via our GitHub App, Spektra AI strictly scans route decorators, schema definitions, and OpenAPI artifacts. We never store raw proprietary application logic. Our CI/CD GitHub Action runs inside your own runner, transmitting only abstract AST signatures to the synthesis engine."
  },
  {
    category: "AI Accuracy",
    question: "How accurate is the AI at understanding complex financial or healthcare business logic?",
    answer: "Spektra AI utilizes specialized neural architectures trained on millions of high-grade technical documentation pages. In addition to syntactic parsing, it cross-references industry domain ontologies (such as HIPAA FHIR R4 or PCI DSS billing standards) to ensure zero hallucination of parameter types or auth requirements."
  },
  {
    category: "Security",
    question: "Are our proprietary API schemas used to train public AI models?",
    answer: "Never. All customer data, API specifications, and generated documentation are processed under strict zero-retention privacy agreements. Your API structures are isolated to your workspace tenant and are never shared with OpenAI or third-party training pipelines."
  },
  {
    category: "Customization",
    question: "Can we export generated docs to our existing Mintlify, Docusaurus, or Nextra setup?",
    answer: "Yes! While Spektra AI offers ultra-fast edge CDN hosting (`docs.yourcompany.com`), you can export clean, un-opinionated Markdown, MDX, static HTML, or structured JSON directly via our API or automated GitHub PR workflows."
  },
  {
    category: "Collaboration",
    question: "How do technical writers and backend engineers collaborate inside Spektra AI?",
    answer: "Our built-in Review Workspace lets backend engineers trigger automated doc updates via git commits, while technical writers review inline AI reasoning explanations, tweak prose wording, and approve staging builds before one-click deployment to production."
  },
  {
    category: "Hosting",
    question: "Can we self-host Spektra AI inside our AWS, GCP, or Azure VPC?",
    answer: "Yes. Our Enterprise tier includes packaged Helm charts and Docker containers for deployment inside Kubernetes clusters or air-gapped private networks, ensuring your internal enterprise microservice docs never leave your firewall."
  },
  {
    category: "Features",
    question: "Does Spektra AI generate interactive API playgrounds?",
    answer: "Absolutely. Every generated documentation portal includes an interactive request console featuring customizable headers, auth token injection, payload formatting validation, and simulated or live sandbox execution."
  },
  {
    category: "Versioning",
    question: "How does Spektra handle API versioning and deprecation workflows?",
    answer: "Spektra AI automatically diffs consecutive OpenAPI spec uploads, generating human-readable changelogs and flagging deprecated fields. Users can toggle between semantic versions (e.g. `v1.8 LTS` vs `v2.0 Beta`) with automatic URL routing."
  },
  {
    category: "Security",
    question: "Is Spektra AI compliant with SOC 2 Type II and GDPR?",
    answer: "Yes. Spektra AI maintains continuous SOC 2 Type II compliance, ISO 27001 certification, full GDPR compliance with EU data residency options, and offers Business Associate Agreements (BAA) for HIPAA regulated healthcare organizations."
  }
];

export function PricingFaq() {
  const [billingAnnual, setBillingAnnual] = useState<boolean>(true);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="pricing" className="py-24 bg-[#060609] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* PRICING HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-semibold text-violet-400 mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>Transparent & Scalable Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Invest in World-Class Developer Experience
          </h2>
          <p className="text-base sm:text-lg text-slate-400 mb-8">
            Start free with up to 3 API specifications. Scale to enterprise-grade automated CI/CD portals with guaranteed SLAs.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-[#121424] p-1.5 rounded-2xl border border-white/10">
            <button
              onClick={() => setBillingAnnual(false)}
              className={`px-5 py-2 rounded-xl text-xs font-semibold transition-all ${
                !billingAnnual ? "bg-indigo-600 text-white shadow-md" : "text-slate-400 hover:text-white"
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingAnnual(true)}
              className={`px-5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
                billingAnnual ? "bg-indigo-600 text-white shadow-md" : "text-slate-400 hover:text-white"
              }`}
            >
              <span>Annual Billing</span>
              <span className="bg-emerald-400 text-black text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* PRICING CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-[#0c0d16] rounded-3xl p-6 sm:p-7 flex flex-col justify-between border transition-all duration-300 ${
                plan.badge
                  ? "border-indigo-500/60 shadow-2xl shadow-indigo-500/10 scale-[1.02] lg:-translate-y-2"
                  : "border-white/10 hover:border-white/20"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-violet-600 text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                  {plan.badge}
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-xs text-slate-400 min-h-[36px] leading-relaxed">{plan.description}</p>

                <div className="my-6 pb-6 border-b border-white/10">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-white font-mono tracking-tight">
                      {billingAnnual ? plan.priceAnnual : plan.priceMonthly}
                    </span>
                    {plan.priceMonthly !== "Custom" && (
                      <span className="text-xs text-slate-400">/ month</span>
                    )}
                  </div>
                  {billingAnnual && plan.priceMonthly !== "Custom" && plan.priceMonthly !== "$0" && (
                    <div className="text-[11px] text-emerald-400 font-mono mt-1">Billed annually</div>
                  )}
                </div>

                <div className="space-y-3 mb-8">
                  <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Included Features:</div>
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-snug">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#interactive-generator"
                className={`w-full py-3.5 rounded-2xl text-center text-xs font-semibold transition-all flex items-center justify-center ${plan.ctaStyle}`}
              >
                {plan.ctaText}
              </a>
            </div>
          ))}
        </div>

        {/* COMPREHENSIVE FAQ ACCORDION */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-3">Frequently Asked Questions</h3>
            <p className="text-xs sm:text-sm text-slate-400">Everything you need to know about Spektra AI compliance, security, and developer portal automation.</p>
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
                    className="w-full text-left p-5 flex items-center justify-between gap-4 focus:outline-none hover:bg-white/5 transition-colors"
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
      </div>
    </section>
  );
}
