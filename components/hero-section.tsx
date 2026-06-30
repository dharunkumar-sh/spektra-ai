"use client";

import React from "react";
import Link from "next/link";
import {
  Sparkles,
  CheckCircle2,
  Zap,
  ChevronRight,
} from "lucide-react";
import { useAuth } from "@/context/auth-context";

export function HeroSection() {
  const { openAuthModal } = useAuth();
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-50 bg-linear-to-tr from-indigo-600/20 via-violet-600/15 to-cyan-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Badge */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-medium text-indigo-300 mb-6 shadow-inner">
            <Sparkles
              className="w-3.5 h-3.5 text-indigo-400 animate-spin"
              style={{ animationDuration: "8s" }}
            />
            <span>Next-Generation AI Developer Portal Architecture</span>
            <span className="h-1 w-1 rounded-full bg-indigo-400" />
            <span className="text-indigo-200 font-semibold">
              Spektra Engine 1.0
            </span>
          </div>

          {/* EXACT Required Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-5xl leading-[1.08] mb-6">
            <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
              API Documentation That Thinks Before It Writes.
            </span>
          </h1>

          {/* Supporting Description */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-400 max-w-3xl leading-relaxed mb-10">
            Spektra AI understands your API, organizes its architecture, and
            generates intelligent, production-ready documentation with examples,
            guides, and workflows in seconds.
          </p>

          {/* EXACT Required CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-2xl">
            <button
              onClick={() => openAuthModal()}
              className="w-full sm:w-auto flex items-center justify-center gap-3 h-14 px-10 rounded-xl bg-linear-to-r from-indigo-500 via-violet-600 to-cyan-500 text-white font-semibold text-base shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.01] transition-all duration-200 cursor-pointer"
            >
              <Zap className="w-5 h-5 fill-white animate-pulse" />
              <span>Generate Documentation</span>
            </button>

            <Link
              href="#features"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 h-14 px-10 rounded-xl bg-[#12131e] hover:bg-[#1c1d2c] border border-white/15 text-slate-200 font-semibold text-base transition-all duration-200 cursor-pointer"
            >
              <span>Explore Features</span>
              <ChevronRight className="w-5 h-5 text-indigo-400" />
            </Link>
          </div>

          {/* Trust Ticker */}
          <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>100% OpenAPI 3.0 / 3.1 & Swagger Compatible</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Automated Postman & cURL Transformation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Real-time GitHub Sync & CI/CD Automation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
