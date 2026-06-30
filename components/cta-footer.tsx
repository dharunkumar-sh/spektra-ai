"use client";

import React from "react";
import { Sparkles, ArrowRight, Heart } from "lucide-react";
import { GithubIcon, DiscordIcon, TwitterIcon, LinkedinIcon } from "@/components/icons";

export function CtaFooter() {
  return (
    <footer className="bg-[#050508] relative overflow-hidden border-t border-white/10">
      {/* BOLD FINAL CALL-TO-ACTION BANNER */}
      <div className="relative py-24 md:py-32 border-b border-white/10">
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

      {/* PROFESSIONAL MULTI-COLUMN FOOTER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16 text-xs">
          {/* Col 1: Brand */}
          <div className="col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 p-0.5 shadow-lg">
                <div className="w-full h-full bg-[#0d0e14] rounded-[10px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-indigo-400" />
                </div>
              </div>
              <span className="font-bold text-lg text-white tracking-tight">Spektra AI</span>
            </a>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              The flagship AI-powered API documentation platform. Automatically transforming OpenAPI, Postman, and GitHub repositories into world-class developer portals.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="https://github.com/dharunkumar-sh/spektra-ai" target="_blank" rel="noreferrer" className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors" aria-label="GitHub">
                <GithubIcon className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors" aria-label="Discord">
                <DiscordIcon className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors" aria-label="Twitter">
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors" aria-label="LinkedIn">
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Product */}
          <div className="space-y-3">
            <div className="font-bold uppercase tracking-wider text-white text-[11px]">Product</div>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#interactive-generator" className="hover:text-white transition-colors">Documentation Engine</a></li>
              <li><a href="#adaptive-templates" className="hover:text-white transition-colors">Templates Gallery</a></li>
              <li><a href="#interactive-preview" className="hover:text-white transition-colors">API Explorer Playground</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Multi-Language SDKs</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing & Tiers</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Enterprise Hosting</a></li>
            </ul>
          </div>

          {/* Col 3: Resources */}
          <div className="space-y-3">
            <div className="font-bold uppercase tracking-wider text-white text-[11px]">Resources</div>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#interactive-preview" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#interactive-preview" className="hover:text-white transition-colors">API Reference</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Integrations</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Changelog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog & Tutorials</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
            </ul>
          </div>

          {/* Col 4: Developers */}
          <div className="space-y-3">
            <div className="font-bold uppercase tracking-wider text-white text-[11px]">Developers</div>
            <ul className="space-y-2 text-slate-400">
              <li><a href="https://github.com/dharunkumar-sh/spektra-ai" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5"><span>GitHub Repo</span><span className="text-[9px] bg-indigo-500/20 text-indigo-300 px-1 rounded font-mono">Open</span></a></li>
              <li><a href="#" className="hover:text-white transition-colors">Discord Server</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Lighthouse Scores</a></li>
              <li><a href="#" className="hover:text-white transition-colors">OpenAPI 3.1 Checker</a></li>
            </ul>
          </div>

          {/* Col 5: Company & Legal */}
          <div className="space-y-3">
            <div className="font-bold uppercase tracking-wider text-white text-[11px]">Company</div>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">About Spektra</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers <span className="bg-emerald-500/20 text-emerald-300 px-1 rounded text-[9px]">Hiring</span></a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security & SOC2</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Spektra AI Inc. All rights reserved. Built with Next.js 15 App Router & Tailwind CSS v4.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>System Operational (99.99%)</span>
            </span>
            <span className="text-slate-600">|</span>
            <span className="flex items-center gap-1">
              Engineered with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> for API Teams
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
