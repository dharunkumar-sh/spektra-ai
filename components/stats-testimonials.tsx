"use client";

import React, { useState } from "react";
import { 
  Star, 
  Quote, 
  TrendingUp, 
  Users, 
  FileCheck2, 
  Clock, 
  Globe2, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowLeft, 
  ArrowRight,
  Sparkles
} from "lucide-react";

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  category: "Staff Architect" | "SaaS Founder" | "Developer Advocate" | "Lead Writer" | "Backend Lead";
  metric: string;
}

export function StatsTestimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState<number>(0);

  const STATS = [
    { label: "APIs Analyzed & Structured", value: "450,000+", icon: FileCheck2 },
    { label: "Documentation Pages Generated", value: "12.4M+", icon: Globe2 },
    { label: "Supported API & Schema Formats", value: "100%", icon: ShieldCheck },
    { label: "Active Engineering Teams", value: "18,500+", icon: Users },
    { label: "Automated SDKs & CI/CD Exports", value: "2.1M+", icon: TrendingUp },
    { label: "Developer Maintenance Hours Saved", value: "3.8M+ hrs", icon: Clock }
  ];

  const TESTIMONIALS: Testimonial[] = [
    {
      id: "1",
      quote: "Before Spektra AI, our backend team spent nearly two full sprints every quarter manually writing and updating OpenAPI descriptions and Postman collections. Now, Spektra analyzes our Rust microservices and generates flawless, production-ready developer docs in 14 seconds. It reduced our documentation effort by 85%.",
      author: "Marcus Vance",
      role: "Staff Platform Architect",
      company: "Nexus Financial Infrastructure",
      category: "Staff Architect",
      metric: "85% reduction in documentation effort"
    },
    {
      id: "2",
      quote: "As a developer advocate, time-to-first-hello-world is everything. Spektra AI's automated onboarding guides and interactive playground doubled our third-party developer adoption within 60 days of launch. Developers actually enjoy reading our docs now.",
      author: "Elena Rostova",
      role: "Head of Developer Relations",
      company: "Veloce Cloud AI",
      category: "Developer Advocate",
      metric: "2x faster developer onboarding"
    },
    {
      id: "3",
      quote: "When launching our developer-first SaaS, our docs looked like a sterile Swagger dump. We plugged our OpenAPI spec into Spektra AI, and within one minute we had a stunning developer portal that looked like stripe.com. Our support tickets regarding authentication dropped by 64%.",
      author: "David K.",
      role: "Co-Founder & CTO",
      company: "HyperPulse Payments",
      category: "SaaS Founder",
      metric: "64% fewer API support tickets"
    },
    {
      id: "4",
      quote: "I've been a technical writer for 12 years. Most 'AI doc generators' just spit out generic hallucinations. Spektra AI is completely different—it understands domain context, groups endpoints logically, and drafts explanations that require zero edits from me. It's like having five senior writers on my team.",
      author: "Sarah Jenkins",
      role: "Lead API Technical Writer",
      company: "Enterprise Health Systems",
      category: "Lead Writer",
      metric: "10x faster doc publishing cadence"
    },
    {
      id: "5",
      quote: "Our microservice schema changes every week. With Spektra AI's GitHub CI/CD integration, every pull request automatically generates a diff changelog and updates our developer portal before the merge even finishes. It has eliminated doc drift permanently.",
      author: "Hiroshi Tanaka",
      role: "Lead Backend Engineer",
      company: "OmniStream Logistics",
      category: "Backend Lead",
      metric: "Zero API documentation drift"
    }
  ];

  return (
    <section className="py-24 bg-[#07080e] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* PLATFORM STATISTICS GRID */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400 mb-4">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Proven Global Scale</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              Empowering the World&apos;s Best API Teams
            </h2>
            <p className="text-base sm:text-lg text-slate-400">
              Spektra AI operates at enterprise scale, transforming complex technical specifications into high-conversion developer experiences every day.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {STATS.map((st, idx) => {
              const Icon = st.icon;
              return (
                <div key={idx} className="bg-[#0c0d16] border border-white/10 p-5 rounded-2xl flex flex-col justify-between hover:border-indigo-500/40 transition-colors">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 w-fit mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight">{st.value}</div>
                    <div className="text-xs text-slate-400 mt-1 leading-snug">{st.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* TESTIMONIALS SHOWCASE */}
        <div className="bg-[#0c0d16] border border-white/15 rounded-3xl p-6 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Loved by Developers & Architects</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Why Engineering Leaders Choose Spektra AI
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Read how modern engineering teams eliminated manual documentation maintenance and turned their developer portals into powerful growth engines.
              </p>

              {/* Testimonial Switcher Tabs */}
              <div className="flex flex-wrap gap-2 pt-4">
                {TESTIMONIALS.map((t, idx) => (
                  <button
                    key={t.id}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                      activeTestimonial === idx
                        ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30"
                        : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {t.category}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Testimonial Card */}
            <div className="w-full lg:max-w-xl bg-[#121424] border border-indigo-500/30 p-6 sm:p-8 rounded-2xl shadow-xl relative">
              <Quote className="w-10 h-10 text-indigo-500/20 absolute top-4 right-4" />
              
              <div className="flex items-center gap-1 text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed italic mb-6">
                &quot;{TESTIMONIALS[activeTestimonial].quote}&quot;
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div>
                  <div className="font-bold text-white text-sm">{TESTIMONIALS[activeTestimonial].author}</div>
                  <div className="text-xs text-slate-400">{TESTIMONIALS[activeTestimonial].role}, <span className="text-indigo-400 font-medium">{TESTIMONIALS[activeTestimonial].company}</span></div>
                </div>

                <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-semibold">
                  {TESTIMONIALS[activeTestimonial].metric}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
