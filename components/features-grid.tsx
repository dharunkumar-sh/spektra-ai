import React from "react";
import {
  Brain,
  FolderTree,
  FileText,
  Lock,
  Code2,
  Terminal,
  Workflow,
  Compass,
  ListOrdered,
  Gauge,
  History,
  PlaySquare,
  GitBranch,
  Users,
  Download,
  Sparkles,
} from "lucide-react";

interface Feature {
  id: string;
  category: "AI Engine" | "Developer Experience" | "Workflow & Publishing";
  title: string;
  benefit: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
}

const FEATURES: Feature[] = [
  {
    id: "ai-understanding",
    category: "AI Engine",
    title: "AI-Powered API Understanding",
    benefit:
      "Eliminate hours of manual schema annotation and explanation writing.",
    description:
      "Spektra AI analyzes parameter relationships and schema constraints to generate deep semantic explanations that read like a human senior engineer wrote them.",
    icon: Brain,
    tag: "Core Neural Engine",
  },
  {
    id: "auto-grouping",
    category: "AI Engine",
    title: "Automatic Endpoint Grouping",
    benefit: "Help developers discover relevant endpoints 3x faster.",
    description:
      "Replaces chaotic alphabetical lists by automatically categorizing resources into intuitive business domains such as 'Customer Onboarding' or 'Billing Cycles'.",
    icon: FolderTree,
    tag: "Semantic Clustering",
  },
  {
    id: "contextual-explanations",
    category: "AI Engine",
    title: "Contextual Endpoint Explanations",
    benefit:
      "Reduce support tickets asking 'what does this parameter actually do?'",
    description:
      "Generates rich explanations detailing exact edge cases, validation rules, formatting nuances, and common pitfalls for every request body field.",
    icon: FileText,
    tag: "Prose Synthesis",
  },
  {
    id: "auth-docs",
    category: "Developer Experience",
    title: "Intelligent Authentication Guides",
    benefit:
      "Get developers making authenticated 200 OK calls within 60 seconds.",
    description:
      "Automatically detects OAuth 2.0 PKCE, JWT bearer tokens, API keys, or HMAC signatures and compiles step-by-step token acquisition walkthroughs.",
    icon: Lock,
    tag: "Security Auto-Detect",
  },
  {
    id: "examples-generation",
    category: "Developer Experience",
    title: "Smart Request & Response Examples",
    benefit:
      "Never ship docs with lazy 'string' or '0' placeholder values again.",
    description:
      "Synthesizes hyper-realistic, domain-specific JSON payloads tailored to your industry (e.g., realistic UUIDs, ISO timestamps, financial ledger entries).",
    icon: Code2,
    tag: "Realistic Data",
  },
  {
    id: "sdk-generation",
    category: "Developer Experience",
    title: "Multi-Language SDK Snippets",
    benefit:
      "Empower developers across any tech stack to integrate immediately.",
    description:
      "Instantly compiles production-ready, type-safe code snippets in TypeScript, Python, Go, Rust, Ruby, Java, PHP, and cURL for every endpoint.",
    icon: Terminal,
    tag: "Polyglot Code",
  },
  {
    id: "diagrams",
    category: "AI Engine",
    title: "Automated Workflow Diagrams",
    benefit:
      "Visualize multi-step API sequences without touching diagramming software.",
    description:
      "Automatically writes and renders Mermaid sequence diagrams demonstrating asynchronous webhooks, payment auth challenges, and data pipelines.",
    icon: Workflow,
    tag: "Mermaid Auto-Render",
  },
  {
    id: "onboarding",
    category: "Developer Experience",
    title: "Instant Onboarding Guides",
    benefit: "Slash time-to-first-hello-world for third-party developers.",
    description:
      "Creates comprehensive 'Getting Started' tutorials, environment setup instructions, and sandbox testing workflows tailored specifically to your API.",
    icon: Compass,
    tag: "Quickstart Synthesis",
  },
  {
    id: "pagination",
    category: "Developer Experience",
    title: "Pagination & Cursor Documentation",
    benefit:
      "Prevent developer errors when iterating over large data collections.",
    description:
      "Precisely explains cursor-based vs page-offset pagination, provides Link header parsing guides, and demonstrates infinite scroll loop logic.",
    icon: ListOrdered,
    tag: "Collection Handling",
  },
  {
    id: "rate-limits",
    category: "Developer Experience",
    title: "Rate-Limit & Error Code Guides",
    benefit: "Teach client apps how to handle HTTP 429 backoffs gracefully.",
    description:
      "Documents exact rate-limit thresholds, header inspection (`X-RateLimit-Remaining`), and exponential backoff retry algorithms with jitter.",
    icon: Gauge,
    tag: "Resilience Guides",
  },
  {
    id: "changelog",
    category: "Workflow & Publishing",
    title: "Automated Changelog Generation",
    benefit:
      "Keep users notified of non-breaking and breaking API changes instantly.",
    description:
      "Compares OpenAPI specification versions over time and writes human-readable semantic diffs highlighting deprecated parameters and new fields.",
    icon: History,
    tag: "Spec Diffing",
  },
  {
    id: "playground",
    category: "Developer Experience",
    title: "Interactive API Playground",
    benefit:
      "Allow developers to test API requests directly inside their browser.",
    description:
      "Embeds an interactive request console featuring header customization, auth token injection, response inspection, and latency tracking.",
    icon: PlaySquare,
    tag: "Live Interactive Sandbox",
  },
  {
    id: "versioning",
    category: "Workflow & Publishing",
    title: "Seamless Documentation Versioning",
    benefit: "Maintain clean legacy docs while shipping preview v2 endpoints.",
    description:
      "Supports multi-version dropdown selectors (v1.x LTS, v2.0 Beta) with automatic deprecation banners and migration links.",
    icon: GitBranch,
    tag: "Multi-Version Governance",
  },
  {
    id: "collaboration",
    category: "Workflow & Publishing",
    title: "Real-Time Team Collaboration",
    benefit:
      "Review AI-generated explanations with your API engineering team before publishing.",
    description:
      "Offers inline comments, approval workflows, and role-based access control (Technical Writers vs Backend Engineers vs Product Managers).",
    icon: Users,
    tag: "Enterprise Governance",
  },
  {
    id: "export",
    category: "Workflow & Publishing",
    title: "Universal Export & Integration",
    benefit:
      "Integrate into your exact existing CI/CD or docs infrastructure seamlessly.",
    description:
      "Export clean Markdown, MDX, HTML, PDF, or sync directly to GitBook, Mintlify, Docusaurus, Nextra, or internal GitHub repositories.",
    icon: Download,
    tag: "Zero Vendor Lock-In",
  },
];

export function FeaturesGrid() {
  return (
    <section id="features" className="py-24 bg-[#060609] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete Platform Feature Suite</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Engineered for Developer Delight
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Every feature in Spektra AI is designed around a single obsession:
            removing friction between your API specification and the engineers
            building with it.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="relative bg-[#0c0d15] border border-white/10 rounded-3xl p-6 sm:p-7 shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-white/5 text-slate-400 border border-white/5">
                      {feature.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 flex items-center justify-between">
                    <span>{feature.title}</span>
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mt-3">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
