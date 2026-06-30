import React from "react";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { WorkflowSection } from "@/components/workflow-section";
import { FeaturesGrid } from "@/components/features-grid";
import { AdaptiveTemplates } from "@/components/adaptive-templates";
import { AiIntelligenceSection } from "@/components/ai-intelligence-section";
import { ComparisonSection } from "@/components/comparison-section";
import { LiveDocPreview } from "@/components/live-doc-preview";
import { StatsTestimonials } from "@/components/stats-testimonials";
import { FaqSection } from "@/components/pricing-faq";
import { CtaFooter } from "@/components/cta-footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#060609] text-[#f3f4f6] selection:bg-indigo-600 selection:text-white">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <WorkflowSection />
        <FeaturesGrid />
        <AdaptiveTemplates />
        <AiIntelligenceSection />
        <ComparisonSection />
        <LiveDocPreview />
        <StatsTestimonials />
        <FaqSection />
      </main>
      <CtaFooter />
    </div>
  );
}
