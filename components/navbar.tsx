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

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between w-full h-12">
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

          {/* Desktop Navigation Links - Centered via Flex Layout */}
          <nav className="hidden md:flex items-center gap-1.5 bg-[#12131d]/60 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm">
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
            <a href="#faq" className="text-sm font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/5 transition-colors cursor-pointer">
              FAQ
            </a>
          </nav>

          {/* Status & CTA Actions - Right Aligned */}
          <div className="flex items-center gap-4 shrink-0">
            {/* CTA Button (Desktop only) */}
            <a
              href="#workflow"
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
              Features
            </a>

            <a 
              href="#ai-intelligence" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 hover:text-white font-medium py-2 px-3 rounded-lg hover:bg-white/5 cursor-pointer"
            >
              AI Intelligence
            </a>
            <a 
              href="#comparison" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 hover:text-white font-medium py-2 px-3 rounded-lg hover:bg-white/5 cursor-pointer"
            >
              Comparison
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 hover:text-white font-medium py-2 px-3 rounded-lg hover:bg-white/5 cursor-pointer"
            >
              FAQ
            </a>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href="#workflow"
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

