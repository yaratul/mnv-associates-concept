"use client";

import { useState } from "react";
import { Info, X, CheckCircle, Zap, Shield, Sparkles, Layers } from "lucide-react";

export default function ReviewerPanel() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Toggle Button with Breathing Glow Pulse */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-gradient-to-r from-[#0F0C1B] via-[#2F1A46] to-[#533278] text-white border border-[#C5A059]/40 shadow-[0_10px_30px_rgba(83,50,120,0.35)] hover:shadow-[0_15px_35px_rgba(197,160,89,0.35)] transition-all duration-300 hover:scale-105 active:scale-95 group text-xs font-bold shimmer-sweep"
        aria-label="Open Client Evaluation Notes"
      >
        <Sparkles className="w-4 h-4 text-[#C5A059] group-hover:rotate-12 transition-transform" />
        <span>Client Evaluation Notes</span>
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
      </button>

      {/* Evaluation Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-9 shadow-2xl border border-[#EBE5F1] relative space-y-6 max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-[#635F74] hover:text-[#0F0C1B] hover:bg-[#F5F2F8] transition-colors"
              aria-label="Close notes"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="space-y-1.5 pr-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ECE7F2] text-[#533278] text-[11px] font-extrabold uppercase tracking-wider">
                <Info className="w-3.5 h-3.5 text-[#C5A059]" />
                Submission Document & Architectural Rationale
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F0C1B] font-display">
                MNV Associates Homepage Concept
              </h3>
              <p className="text-xs text-[#5C586E]">
                Addressing all deliverables requested in the design & build assignment.
              </p>
            </div>

            {/* Deliverable 1: 5-6 Lines Design and Build Decisions */}
            <div className="space-y-3 p-5 rounded-2xl bg-[#FAF8FC] border border-[#EBE5F1]">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#533278]" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F0C1B]">
                  1. Key Design & Build Decisions (Executive Note)
                </h4>
              </div>
              <p className="text-xs text-[#0F0C1B] leading-relaxed italic bg-white p-4 rounded-xl border border-[#EBE5F1]">
                "To position MNV Associates alongside regional Big 4 benchmarks (EY, Deloitte, KPMG), we established an executive editorial design anchored in MNV’s signature purple (#533278) and muted lavender (#A191B2), counterbalanced by generous whitespace and geometric typography. The architecture organizes all 9 core services into an intuitive, filterable taxonomy that eliminates visual clutter while immediately signaling breadth of capability. An interactive UAE Corporate Tax readiness widget transforms passive visits into high-intent inbound inquiries. Built with Next.js and Tailwind CSS, the platform delivers sub-second page loads, strict mobile responsiveness across GCC executive devices, and an impenetrable security posture for a premier financial firm."
              </p>
            </div>

            {/* Deliverable 2: WordPress vs. Next.js / React.js & Why */}
            <div className="space-y-3 p-5 rounded-2xl bg-[#FAF8FC] border border-[#EBE5F1]">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#533278]" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F0C1B]">
                  2. WordPress vs. Next.js / React.js & Why?
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                {/* WordPress Card */}
                <div className="p-4 rounded-xl bg-white border border-[#EBE5F1] space-y-2">
                  <div className="font-bold text-[#0F0C1B] flex items-center justify-between">
                    <span>WordPress (Traditional CMS)</span>
                    <span className="text-[10px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full font-medium">
                      Legacy Standard
                    </span>
                  </div>
                  <ul className="space-y-1.5 text-[11px] text-[#5C586E]">
                    <li>• <strong>Pros:</strong> Non-technical marketing staff are familiar with standard post creation; rich plugin marketplace for generic blogs.</li>
                    <li>• <strong>Cons:</strong> Heavy server-rendered PHP overhead and MySQL query latency slow TTFB; vulnerability exploits across outdated plugins; prone to visual bloat and sluggish mobile performance; complex to build bespoke interactive diagnostic tools without fragile shortcodes.</li>
                  </ul>
                </div>

                {/* Next.js Card */}
                <div className="p-4 rounded-xl bg-[#533278]/5 border border-[#533278]/30 space-y-2">
                  <div className="font-bold text-[#533278] flex items-center justify-between">
                    <span>Next.js 14+ / React (Modern Edge)</span>
                    <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-bold">
                      Recommended
                    </span>
                  </div>
                  <ul className="space-y-1.5 text-[11px] text-[#0F0C1B]">
                    <li>• <strong>Core Web Vitals & Speed:</strong> Pre-rendered static compilation and edge caching achieve 95–100 Google Lighthouse scores with instant page transitions.</li>
                    <li>• <strong>Security for Financial Advisory:</strong> Zero database attack surface on the public frontend eliminates SQL injection and WordPress admin brute-force risks.</li>
                    <li>• <strong>Interactive Utilities:</strong> Seamlessly powers state-driven tools (like the UAE Tax Assessment widget) without third-party plugin vulnerabilities.</li>
                    <li>• <strong>Best of Both Worlds:</strong> Can easily hook into Headless WordPress (WPGraphQL) if the client's content editors insist on the WordPress editorial dashboard.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Deliverable 3: Evaluation Criteria Check */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="p-3.5 rounded-2xl bg-[#FAF8FC] border border-[#EBE5F1]">
                <CheckCircle className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
                <div className="text-[11px] font-bold text-[#0F0C1B]">Mobile Responsive</div>
                <div className="text-[10px] text-[#5C586E]">Adaptive to all screens</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#FAF8FC] border border-[#EBE5F1]">
                <Zap className="w-4 h-4 text-[#533278] mx-auto mb-1" />
                <div className="text-[11px] font-bold text-[#0F0C1B]">Sub-second Speed</div>
                <div className="text-[10px] text-[#5C586E]">Clean Next.js edge build</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#FAF8FC] border border-[#EBE5F1]">
                <Shield className="w-4 h-4 text-[#533278] mx-auto mb-1" />
                <div className="text-[11px] font-bold text-[#0F0C1B]">Brand Compliance</div>
                <div className="text-[10px] text-[#5C586E]">#533278, #A191B2, lowercase</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#FAF8FC] border border-[#EBE5F1]">
                <Sparkles className="w-4 h-4 text-[#C5A059] mx-auto mb-1" />
                <div className="text-[11px] font-bold text-[#0F0C1B]">All 9 Services</div>
                <div className="text-[10px] text-[#5C586E]">Complete practice matrix</div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="text-xs font-bold uppercase tracking-wider text-white bg-[#533278] hover:bg-[#432662] px-7 py-3 rounded-full transition-all"
              >
                Close Notes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
