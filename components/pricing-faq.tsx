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
