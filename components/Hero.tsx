"use client";

import { ArrowRight, ShieldCheck, CheckCircle2, Building2, TrendingUp, Sparkles } from "lucide-react";

interface HeroProps {
  onOpenConsultation: () => void;
}

export default function Hero({ onOpenConsultation }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FBF9FD] via-white to-white pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#EBE5F1]/60">
      <div className="absolute inset-0 bg-[radial-gradient(#A191B2_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#533278]/10 via-[#A191B2]/15 to-transparent blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ECE7F2] border border-[#A191B2]/40 text-[#533278] text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#533278]" />
              <span className="tagline-badge">unlock your growth</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#533278]" />
              <span className="text-[#635F74] font-normal">Dubai & UAE Advisory</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F0C1B] leading-[1.12]">
              Strategic Tax & Advisory for Dubai’s Next Era of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#533278] via-[#7045A0] to-[#533278]">
                Growth.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#635F74] max-w-2xl leading-relaxed">
              Bridging Big 4 rigor with boutique agility. We provide end-to-end{" "}
              <strong className="text-[#0F0C1B] font-semibold">Corporate Tax, VAT, Transfer Pricing, CFO Advisory</strong>, and{" "}
              <strong className="text-[#0F0C1B] font-semibold">Business Solutions</strong> for startups, SMEs, and multinationals across the UAE mainland and free zones.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="flex items-center justify-center gap-2.5 text-sm font-bold uppercase tracking-wider text-white bg-[#533278] hover:bg-[#432662] px-7 py-4 rounded-xl shadow-lg shadow-[#533278]/25 hover:shadow-xl hover:shadow-[#533278]/35 transition-all active:scale-[0.98]"
              >
                <span>Schedule a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#services-matrix"
                className="flex items-center justify-center gap-2 text-sm font-semibold text-[#0F0C1B] hover:text-[#533278] px-6 py-4 rounded-xl bg-white border border-[#EBE5F1] hover:border-[#A191B2] hover:bg-[#FBF9FD] transition-all"
              >
                <span>Explore 9 Practice Areas</span>
              </a>
            </div>

            <div className="pt-4 border-t border-[#EBE5F1] grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-[#0F0C1B]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#533278] shrink-0" />
                <span className="font-medium">FTA Registered Tax Agents</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#533278] shrink-0" />
                <span className="font-medium">Business Bay, Dubai HQ</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#533278] shrink-0" />
                <span className="font-medium">100% Audit Readiness</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#533278]/20 to-[#A191B2]/30 blur-xl opacity-60" />

            <div className="relative rounded-3xl bg-white p-7 sm:p-8 shadow-2xl border border-[#EBE5F1] space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#F5F2F8]">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#635F74]">
                    UAE Fiscal Landscape 2026
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-[#533278] bg-[#ECE7F2] px-2.5 py-1 rounded-full">
                  Business Bay
                </span>
              </div>

              <div className="space-y-1">
                <div className="flex items-baseline justify-between">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#533278] tracking-tight">
                    AED 1.2B+
                  </span>
                  <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> Verified
                  </span>
                </div>
                <p className="text-xs text-[#635F74]">
                  In transactional volume, M&A due diligence, and capital structuring advised.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-3.5 rounded-2xl bg-[#FBF9FD] border border-[#EBE5F1]">
                  <div className="text-2xl font-bold text-[#0F0C1B]">500+</div>
                  <div className="text-[11px] text-[#635F74] mt-0.5">Corporate Clients Scaled</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#533278]/10 border border-[#533278]/20">
                  <div className="text-2xl font-bold text-[#533278]">9%</div>
                  <div className="text-[11px] text-[#635F74] mt-0.5">Corporate Tax Optimization</div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#tax-readiness"
                  className="w-full flex items-center justify-between px-4 py-3.5 rounded-2xl bg-gradient-to-r from-[#0F0C1B] to-[#2F1A46] text-white hover:from-[#2F1A46] hover:to-[#533278] transition-all group shadow-md"
                >
                  <div className="text-left">
                    <div className="text-xs font-bold flex items-center gap-1.5">
                      <span>UAE Corporate Tax Readiness Check</span>
                    </div>
                    <div className="text-[11px] text-[#A191B2]">
                      Instant 2-minute diagnostic for 2026 filings
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#A191B2] group-hover:translate-x-1 group-hover:text-white transition-all" />
                </a>
              </div>

              <div className="text-[11px] text-[#635F74] flex items-center justify-between pt-1">
                <span>📍 Sobha Ivory II, Business Bay</span>
                <span className="text-[#533278] font-medium">Dubai, UAE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
