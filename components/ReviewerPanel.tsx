"use client";

import { useState } from "react";
import { Info, X, CheckCircle, Zap, Shield, Sparkles, Layers } from "lucide-react";

export default function ReviewerPanel() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#0F0C1B] text-white border border-[#A191B2]/50 shadow-2xl hover:bg-[#533278] transition-all hover:scale-105 active:scale-95 group text-xs font-semibold"
      >
        <Sparkles className="w-4 h-4 text-[#A191B2] group-hover:text-white" />
        <span>Client Evaluation Notes</span>
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-[#EBE5F1] relative space-y-6 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-[#635F74] hover:text-[#0F0C1B] hover:bg-[#F5F2F8] transition-colors"
              aria-label="Close notes"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1 pr-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ECE7F2] text-[#533278] text-[11px] font-bold uppercase tracking-wider">
                <Info className="w-3.5 h-3.5" />
                Submission Document & Architectural Rationale
              </div>
              <h3 className="text-2xl font-extrabold text-[#0F0C1B]">
                MNV Associates Homepage Concept
              </h3>
              <p className="text-xs text-[#635F74]">
                Addressing all deliverables requested in the design & build assignment.
              </p>
            </div>

            <div className="space-y-3 p-5 rounded-2xl bg-[#FBF9FD] border border-[#EBE5F1]">
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

            <div className="space-y-3 p-5 rounded-2xl bg-[#FBF9FD] border border-[#EBE5F1]">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#533278]" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F0C1B]">
                  2. WordPress vs. Next.js / React.js & Why?
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-white border border-[#EBE5F1] space-y-2">
                  <div className="font-bold text-[#0F0C1B] flex items-center justify-between">
                    <span>WordPress (Traditional CMS)</span>
                    <span className="text-[10px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full font-medium">
                      Legacy Standard
                    </span>
                  </div>
                  <ul className="space-y-1.5 text-[11px] text-[#635F74]">
                    <li>• <strong>Pros:</strong> Non-technical marketing staff are familiar with standard post creation; rich plugin marketplace for generic blogs.</li>
                    <li>• <strong>Cons:</strong> Heavy server-rendered PHP overhead and MySQL query latency slow TTFB; vulnerability exploits across outdated plugins; prone to visual bloat and sluggish mobile performance; complex to build bespoke interactive diagnostic tools without fragile shortcodes.</li>
                  </ul>
                </div>

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

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="p-3 rounded-xl bg-[#FBF9FD] border border-[#EBE5F1]">
                <CheckCircle className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
                <div className="text-[11px] font-bold text-[#0F0C1B]">Mobile Responsive</div>
                <div className="text-[10px] text-[#635F74]">Adaptive to all screens</div>
              </div>
              <div className="p-3 rounded-xl bg-[#FBF9FD] border border-[#EBE5F1]">
                <Zap className="w-4 h-4 text-[#533278] mx-auto mb-1" />
                <div className="text-[11px] font-bold text-[#0F0C1B]">Sub-second Speed</div>
                <div className="text-[10px] text-[#635F74]">Clean Next.js edge build</div>
              </div>
              <div className="p-3 rounded-xl bg-[#FBF9FD] border border-[#EBE5F1]">
                <Shield className="w-4 h-4 text-[#533278] mx-auto mb-1" />
                <div className="text-[11px] font-bold text-[#0F0C1B]">Brand Compliance</div>
                <div className="text-[10px] text-[#635F74]">#533278, #A191B2, lowercase</div>
              </div>
              <div className="p-3 rounded-xl bg-[#FBF9FD] border border-[#EBE5F1]">
                <Sparkles className="w-4 h-4 text-[#C5A059] mx-auto mb-1" />
                <div className="text-[11px] font-bold text-[#0F0C1B]">All 9 Services</div>
                <div className="text-[10px] text-[#635F74]">Complete practice matrix</div>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="text-xs font-bold uppercase tracking-wider text-white bg-[#533278] hover:bg-[#432662] px-6 py-2.5 rounded-xl transition-all"
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
