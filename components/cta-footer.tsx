"use client";

import React from "react";
import { Sparkles, ArrowRight, Heart } from "lucide-react";
import { GithubIcon, DiscordIcon, TwitterIcon, LinkedinIcon } from "@/components/icons";

export function CtaSection() {
  return (
    <section className="bg-[#050508] relative overflow-hidden border-t border-white/10">
      {/* BOLD FINAL CALL-TO-ACTION BANNER */}
      <div className="relative py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/30 via-violet-900/20 to-cyan-900/20 blur-[130px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-40 pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-semibold text-indigo-300 mb-6 shadow-xl">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Stop Writing Docs Manually</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Ready to Build API Documentation That Works as Hard as You Do?
          </h2>

          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
            Plug your OpenAPI specification or GitHub repository into Spektra AI today and watch it transform raw schemas into intelligent, production-ready developer documentation within seconds.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#interactive-generator"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 via-violet-600 to-cyan-500 text-white font-bold text-base shadow-2xl shadow-indigo-500/30 hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              <span>Generate Documentation Free</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="https://github.com/dharunkumar-sh/spektra-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#131422] hover:bg-[#1f2136] text-slate-200 border border-white/15 font-semibold text-base transition-all flex items-center justify-center gap-2"
            >
              <GithubIcon className="w-5 h-5" />
              <span>Explore GitHub Repository</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
