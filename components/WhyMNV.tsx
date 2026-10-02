"use client";

import { Shield, Zap, Sparkles, Check, X, RefreshCw } from "lucide-react";

export default function WhyMNV() {
  const metrics = [
    { value: "500+", label: "Regional Entities Scaled", sub: "Mainland, Free Zones & Offshore", percent: 85 },
    { value: "AED 1.2B+", label: "Transaction Value Advised", sub: "M&A, Restructuring & Capital", percent: 95 },
    { value: "100%", label: "FTA Compliance Record", sub: "Zero Late-Filing Penalties", percent: 100 },
    { value: "< 24h", label: "Client SLA Response Time", sub: "Direct Senior Advisor Access", percent: 90 },
  ];

  const comparisonRows = [
    {
      feature: "Senior Partner Involvement",
      traditional: "Delegated to junior associates after proposal",
      mnv: "Direct partner oversight on every tax & advisory file",
    },
    {
      feature: "Agility & Turnaround",
      traditional: "Multi-layered corporate sign-off delays",
      mnv: "Agile, rapid responses aligned with Dubai business speed",
    },
    {
      feature: "Fee Transparency",
      traditional: "Unpredictable hourly billing & heavy retainers",
      mnv: "Clear, value-driven milestones with zero surprise costs",
    },
    {
      feature: "Scope of Ecosystem",
      traditional: "Compartmentalized departments with siloed communication",
      mnv: "Integrated Tax, CFO Advisory & Business Setup under one roof",
    },
  ];

  return (
    <section id="why-mnv" className="py-24 bg-white border-b border-[#EBE5F1] relative overflow-hidden">
      {/* Background Architectural Watermark Accents */}
      <div
        className="absolute top-12 -right-16 text-[220px] font-extrabold text-[#533278]/[0.02] select-none pointer-events-none font-display leading-none"
        aria-hidden="true"
      >
        MNV
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ECE7F2] text-[#533278] text-xs font-extrabold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            Why MNV Associates
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F0C1B] tracking-tight font-display">
            Big 4 Precision. Boutique Speed & Dedication.
          </h2>
          <p className="text-base text-[#5C586E] leading-relaxed font-normal">
            In the fast-moving GCC business ecosystem, you don’t need bureaucratic delays or fragmented bookkeepers. You need seasoned financial architects who deeply understand your milestones.
          </p>
        </div>

        {/* 4 Key Metrics with Circular SVG Radial Gauges */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-18">
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className="relative p-6 sm:p-7 rounded-3xl bg-[#FAF8FC] border border-[#EBE5F1] hover:border-[#C5A059]/60 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_36px_-10px_rgba(83,50,120,0.12)] text-center space-y-3 group overflow-hidden"
            >
              {/* Subtle Circular Radial Glow behind stat */}
              <div className="relative mx-auto w-24 h-24 flex items-center justify-center">
                <svg className="w-24 h-24 -rotate-90 transform" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#EBE5F1"
                    strokeWidth="4"
                    fill="transparent"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="url(#metricGradient)"
                    strokeWidth="4.5"
                    strokeDasharray={251.2}
                    strokeDashoffset={251.2 - (251.2 * m.percent) / 100}
                    strokeLinecap="round"
                    fill="transparent"
                    className="transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  />
                  <defs>
                    <linearGradient id="metricGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#533278" />
                      <stop offset="100%" stopColor="#C5A059" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Inner Centered Value */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl sm:text-2xl font-extrabold text-[#533278] tracking-tight group-hover:scale-105 transition-transform duration-300 font-display">
                    {m.value}
                  </span>
                </div>
              </div>

              <div>
                <div className="text-xs sm:text-sm font-extrabold text-[#0F0C1B]">
                  {m.label}
                </div>
                <div className="text-[11px] text-[#5C586E] mt-0.5">
                  {m.sub}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 4 Pillars of Excellence with Distinct Micro-Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-18">
          {/* Pillar 1: Shield Pulse */}
          <div className="group p-7 rounded-3xl bg-white border border-[#EBE5F1] hover:border-[#533278]/40 card-hover-effect space-y-3.5 relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-[#533278]/10 text-[#533278] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:bg-[#533278] group-hover:text-white">
              <Shield className="w-5 h-5 group-hover:animate-pulse" />
            </div>
            <h3 className="text-base font-bold text-[#0F0C1B] font-display">FTA Registered Authority</h3>
            <p className="text-xs text-[#5C586E] leading-relaxed">
              Officially recognized tax agents licensed to represent clients before the Federal Tax Authority for tax disputes, reconsiderations, and filings.
            </p>
          </div>

          {/* Pillar 2: Bolt Flash */}
          <div className="group p-7 rounded-3xl bg-white border border-[#EBE5F1] hover:border-[#C5A059]/50 card-hover-effect space-y-3.5 relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-[#C5A059]/15 text-[#C5A059] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:bg-[#C5A059] group-hover:text-white">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#0F0C1B] font-display">Rapid Execution SLA</h3>
            <p className="text-xs text-[#5C586E] leading-relaxed">
              Guaranteed under-24-hour turnaround on critical tax filings, corporate queries, and financial clarifications to keep your operations moving.
            </p>
          </div>

          {/* Pillar 3: Sparkle Twinkle */}
          <div className="group p-7 rounded-3xl bg-white border border-[#EBE5F1] hover:border-[#7045A0]/40 card-hover-effect space-y-3.5 relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-[#7045A0]/10 text-[#7045A0] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:bg-[#7045A0] group-hover:text-white">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#0F0C1B] font-display">Cloud & Automation Native</h3>
            <p className="text-xs text-[#5C586E] leading-relaxed">
              We leverage modern enterprise accounting software and automation pipelines, transforming backward-looking books into forward-looking intelligence.
            </p>
          </div>

          {/* Pillar 4: Loop Rotate */}
          <div className="group p-7 rounded-3xl bg-white border border-[#EBE5F1] hover:border-[#245788]/40 card-hover-effect space-y-3.5 relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-[#245788]/10 text-[#245788] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:bg-[#245788] group-hover:text-white">
              <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
            </div>
            <h3 className="text-base font-bold text-[#0F0C1B] font-display">Full Lifecycle Coverage</h3>
            <p className="text-xs text-[#5C586E] leading-relaxed">
              From day-one company formation in Business Bay or DIFC to 9% Corporate Tax audits and multi-million dollar M&A transactions.
            </p>
          </div>
        </div>

        {/* Side-by-Side Comparison Table with Illuminated MNV Column */}
        <div className="rounded-3xl bg-gradient-to-b from-[#FAF8FC] to-white border border-[#EBE5F1] p-6 sm:p-10 shadow-lg">
          <div className="max-w-2xl mb-8 space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#533278]">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" /> Client Experience Benchmark
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F0C1B] font-display">
              The Advisory Experience Comparison
            </h3>
            <p className="text-xs sm:text-sm text-[#5C586E]">
              How MNV Associates delivers the caliber of international advisory without the traditional friction.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#EBE5F1] text-xs font-extrabold uppercase tracking-wider">
                  <th className="py-4 px-5 text-[#8A859E]">Evaluation Metric</th>
                  <th className="py-4 px-5 text-[#5C586E]">Traditional Big 4 Firm</th>
                  <th className="py-4 px-5 text-[#533278] bg-gradient-to-r from-[#533278]/10 to-[#C5A059]/15 rounded-t-2xl border-t border-x border-[#C5A059]/30">
                    <div className="flex items-center gap-1.5 font-extrabold">
                      <span>MNV Associates</span>
                      <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EBE5F1] text-xs">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/80 transition-colors group">
                    <td className="py-5 px-5 font-bold text-[#0F0C1B]">{row.feature}</td>
                    <td className="py-5 px-5 text-[#5C586E]">
                      <div className="flex items-center gap-2">
                        <X className="w-4 h-4 text-rose-500 shrink-0" />
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                    <td className="py-5 px-5 font-semibold text-[#533278] bg-[#533278]/[0.03] border-x border-[#C5A059]/20 group-hover:bg-[#533278]/[0.06] transition-colors">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </span>
                        <span className="text-[#0F0C1B] font-medium">{row.mnv}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
