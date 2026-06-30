"use client";

import React from "react";
import { 
  TrendingUp, 
  Users, 
  FileCheck2, 
  Clock, 
  Globe2, 
  ShieldCheck
} from "lucide-react";

export function StatsSection() {
  const STATS = [
    { label: "APIs Analyzed & Structured", value: "450,000+", icon: FileCheck2 },
    { label: "Documentation Pages Generated", value: "12.4M+", icon: Globe2 },
    { label: "Supported API & Schema Formats", value: "100%", icon: ShieldCheck },
    { label: "Active Engineering Teams", value: "18,500+", icon: Users },
    { label: "Automated SDKs & CI/CD Exports", value: "2.1M+", icon: TrendingUp },
    { label: "Developer Maintenance Hours Saved", value: "3.8M+ hrs", icon: Clock }
  ];

  return (
    <section className="py-24 bg-[#07080e] relative border-t border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* PLATFORM STATISTICS GRID */}
        <div>
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
      </div>
    </section>
  );
}

