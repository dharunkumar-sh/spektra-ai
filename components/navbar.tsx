"use client";

import React, { useState, useEffect } from "react";
import { 
  Sparkles, 
  Terminal, 
  ChevronDown, 
  Menu, 
  X, 
  Cpu, 
  Zap, 
  FileCode2, 
  BookOpen, 
  Layers, 
  ShieldCheck,
  ArrowRight
} from "lucide-react";
import { GithubIcon } from "@/components/icons";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#060609]/85 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl shadow-indigo-500/5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between w-full h-10">
          {/* Brand Logo - Left Aligned */}
          <div className="flex items-center shrink-0">
            <a href="#" className="flex items-center gap-2.5 group cursor-pointer">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-violet-600 to-cyan-500 p-0.5 shadow-lg shadow-indigo-500/25 group-hover:shadow-indigo-500/40 transition-all duration-300">
                <div className="w-full h-full bg-[#0d0e14] rounded-[10px] flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-indigo-400 group-hover:rotate-12 transition-transform duration-300" />
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent leading-none">
                  Spektra AI
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-400 mt-1 font-semibold leading-none">
                  API Platform
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links - Mathematically Centered */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
            <nav className="flex items-center gap-1 bg-[#12131d]/60 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm">
              {/* Product Dropdown Trigger */}
              <div 
                className="relative"
                onMouseEnter={() => setProductDropdownOpen(true)}
                onMouseLeave={() => setProductDropdownOpen(false)}
              >
                <button className="flex items-center gap-1.5 text-sm font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/5 transition-colors cursor-pointer focus:outline-none">
                  <span>Platform</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-205 ${productDropdownOpen ? 'rotate-180 text-indigo-400' : ''}`} />
                </button>

                {/* Mega Dropdown Menu */}
                {productDropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80 bg-[#0d0e16]/95 border border-white/15 rounded-2xl p-3 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="space-y-1">
                      <a href="#interactive-generator" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors group/item cursor-pointer">
                        <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 group-hover/item:bg-indigo-500 group-hover/item:text-white transition-colors">
                          <Cpu className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white">AI Documentation Engine</div>
                          <div className="text-xs text-slate-400 leading-relaxed">Transform OpenAPI & Postman into dynamic developer portals</div>
                        </div>
                      </a>
                      <a href="#adaptive-templates" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors group/item cursor-pointer">
                        <div className="p-2 rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-400 group-hover/item:bg-violet-500 group-hover/item:text-white transition-colors">
                          <Layers className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white">Adaptive API Templates</div>
                          <div className="text-xs text-slate-400 leading-relaxed">Tailored layouts for REST, GraphQL, Payments & AI models</div>
                        </div>
                      </a>
                      <a href="#interactive-preview" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors group/item cursor-pointer">
                        <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover/item:bg-cyan-500 group-hover/item:text-white transition-colors">
                          <FileCode2 className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white">Interactive API Playground</div>
                          <div className="text-xs text-slate-400 leading-relaxed">Live request testing & multi-language SDK snippets</div>
                        </div>
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <a href="#workflow" className="text-sm font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/5 transition-colors cursor-pointer">
                How It Works
              </a>
              <a href="#features" className="text-sm font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/5 transition-colors cursor-pointer">
                Features
              </a>
              <a href="#ai-intelligence" className="text-sm font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/5 transition-colors cursor-pointer">
                AI Intelligence
              </a>
              <a href="#comparison" className="text-sm font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/5 transition-colors cursor-pointer">
                Comparison
              </a>
              <a href="#pricing" className="text-sm font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/5 transition-colors cursor-pointer">
                Pricing
              </a>
            </nav>
          </div>

          {/* Status & CTA Actions - Right Aligned */}
          <div className="flex items-center gap-4 shrink-0">
            {/* Live System Status Pill (Desktop only) */}
            <div className="hidden lg:flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-mono text-emerald-400 select-none">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>AI Engine v3.4 Online</span>
            </div>

            {/* GitHub Repo Button (Desktop only) */}
            <a
              href="https://github.com/dharunkumar-sh/spektra-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-white bg-[#1a1b26] hover:bg-[#242636] border border-white/10 px-3 py-2 rounded-xl transition-all cursor-pointer"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Star on GitHub</span>
              <span className="bg-indigo-500/20 text-indigo-300 font-mono text-[10px] px-1.5 py-0.5 rounded">4.8k</span>
            </a>

            {/* CTA Button (Desktop only) */}
            <a
              href="#interactive-generator"
              className="hidden sm:inline-flex relative group overflow-hidden rounded-xl p-px font-medium text-sm cursor-pointer"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500 group-hover:opacity-90 transition-opacity" />
              <span className="relative flex items-center gap-2 px-4 py-2 rounded-[11px] bg-[#0c0d14] text-white transition-colors group-hover:bg-transparent">
                <span>Get Started Free</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white cursor-pointer focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0b12] border-b border-white/10 px-4 pt-4 pb-6 mt-3 space-y-4 shadow-2xl animate-in fade-in duration-200">
          <div className="flex flex-col space-y-2">
            <a 
              href="#interactive-generator" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 hover:text-white font-medium py-2 px-3 rounded-lg hover:bg-white/5 cursor-pointer"
            >
              AI Documentation Engine
            </a>
            <a 
              href="#workflow" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 hover:text-white font-medium py-2 px-3 rounded-lg hover:bg-white/5 cursor-pointer"
            >
              How It Works
            </a>
            <a 
              href="#features" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 hover:text-white font-medium py-2 px-3 rounded-lg hover:bg-white/5 cursor-pointer"
            >
              All Features
            </a>
            <a 
              href="#adaptive-templates" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 hover:text-white font-medium py-2 px-3 rounded-lg hover:bg-white/5 cursor-pointer"
            >
              Adaptive API Templates
            </a>
            <a 
              href="#ai-intelligence" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 hover:text-white font-medium py-2 px-3 rounded-lg hover:bg-white/5 cursor-pointer"
            >
              Advanced AI Intelligence
            </a>
            <a 
              href="#comparison" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 hover:text-white font-medium py-2 px-3 rounded-lg hover:bg-white/5 cursor-pointer"
            >
              Comparison vs Legacy Tools
            </a>
            <a 
              href="#interactive-preview" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 hover:text-white font-medium py-2 px-3 rounded-lg hover:bg-white/5 cursor-pointer"
            >
              Interactive Live Portal
            </a>
            <a 
              href="#pricing" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 hover:text-white font-medium py-2 px-3 rounded-lg hover:bg-white/5 cursor-pointer"
            >
              Pricing Plans
            </a>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href="#interactive-generator"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-medium py-2.5 rounded-xl shadow-lg shadow-indigo-500/25 cursor-pointer"
            >
              Generate Documentation Free
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

