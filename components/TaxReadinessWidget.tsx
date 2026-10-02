"use client";

import { useState } from "react";
import { Calculator, ArrowRight, RotateCcw, AlertCircle, FileCheck2, Sparkles, Check } from "lucide-react";

interface TaxReadinessWidgetProps {
  onOpenConsultationWithData: (summary: string) => void;
}

export default function TaxReadinessWidget({ onOpenConsultationWithData }: TaxReadinessWidgetProps) {
  const [step, setStep] = useState<number>(1);
  const [entityType, setEntityType] = useState<string>("mainland");
  const [revenueTier, setRevenueTier] = useState<string>("tier2");
  const [hasRelatedParties, setHasRelatedParties] = useState<boolean>(false);

  const calculateResults = () => {
    let ctStatus = "";
    let vatStatus = "";
    let tpStatus = "";
    let recommendedAction = "";

    if (revenueTier === "tier1") {
      ctStatus = "Eligible for Small Business Relief (SBR) - 0% Tax on Net Profit";
      vatStatus = "Voluntary VAT threshold (Mandatory only if taxable turnover > AED 375,000)";
      tpStatus = hasRelatedParties ? "Simplified related party disclosure required" : "Exempt from TP Local File";
      recommendedAction = "Maintain clean IFRS books to satisfy FTA 7-year audit retention rules and secure SBR election.";
    } else if (revenueTier === "tier2") {
      ctStatus = entityType === "freezone"
        ? "Potential 0% Qualifying Income if QFZP tests met, otherwise 9% on profit > AED 375K"
        : "Small Business Relief applicable if revenue <= AED 3M; else 9% statutory rate applies";
      vatStatus = "MANDATORY VAT Registration required under FTA Federal Decree-Law";
      tpStatus = hasRelatedParties ? "Transfer Pricing disclosure form required with annual tax return" : "Standard documentation";
      recommendedAction = "Perform an FTA Tax Position Review to confirm QFZP/SBR eligibility before filing.";
    } else {
      ctStatus = entityType === "freezone"
        ? "Rigorous Qualifying Free Zone Person (QFZP) audit applies. 9% on non-qualifying transactions."
        : "Statutory 9% Corporate Tax applies on net profit exceeding AED 375,000.";
      vatStatus = "Mandatory quarterly/monthly VAT filings with electronic invoice reconciliation.";
      tpStatus = hasRelatedParties ? "Mandatory Local File and Master File TP documentation under OECD/FTA rules." : "Arm's length compliance review advised.";
      recommendedAction = "Deploy fractional CFO governance and comprehensive Transfer Pricing master documentation.";
    }

    return { ctStatus, vatStatus, tpStatus, recommendedAction };
  };

  const results = calculateResults();

  const handleConsultation = () => {
    const summary = `Entity: ${entityType.toUpperCase()} | Revenue Bracket: ${revenueTier} | Related Parties: ${hasRelatedParties ? "YES" : "NO"} | CT: ${results.ctStatus}`;
    onOpenConsultationWithData(summary);
  };

  return (
    <section id="tax-readiness" className="py-24 bg-white border-b border-[#EBE5F1] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Exterior Rotating Conic Light Border Container */}
        <div className="conic-border-glow-dark p-[1.5px] rounded-3xl shadow-[0_25px_60px_-15px_rgba(15,12,27,0.4)]">
          <div className="rounded-3xl bg-gradient-to-br from-[#120E22] via-[#0F0C1B] to-[#080512] text-white p-8 sm:p-12 lg:p-14 relative overflow-hidden">
            {/* Layer 1: Aurora Flow Gradients */}
            <div
              className="absolute -top-40 -right-40 w-[550px] h-[550px] bg-gradient-to-br from-[#533278]/40 via-[#C5A059]/20 to-transparent blur-3xl pointer-events-none rounded-full animate-blob-1"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-[#245788]/30 via-[#533278]/25 to-transparent blur-3xl pointer-events-none rounded-full animate-blob-2"
              aria-hidden="true"
            />

            {/* Layer 2: Blueprint Circuit Trace Lines (SVG) */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none opacity-15 stroke-[#C5A059]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M 50 100 H 200 L 250 150 H 600 M 800 200 H 1000 L 1050 250 V 400"
                strokeWidth="1"
                strokeDasharray="4 6"
              />
              <circle cx="200" cy="100" r="3" fill="#C5A059" />
              <circle cx="250" cy="150" r="3" fill="#C5A059" />
              <circle cx="1000" cy="200" r="3" fill="#C5A059" />
            </svg>

            {/* Header Content */}
            <div className="max-w-3xl space-y-3.5 relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#533278]/40 border border-[#A191B2]/30 text-[#E4C88A] text-xs font-extrabold uppercase tracking-wider backdrop-blur-md">
                <Calculator className="w-3.5 h-3.5 text-[#C5A059]" />
                Interactive Diagnostic
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-display">
                UAE Corporate Tax & Business Readiness Check
              </h2>
              <p className="text-sm sm:text-base text-[#A191B2] leading-relaxed">
                Calculate your statutory obligations under UAE Federal Decree-Law No. 47 and VAT regulations in 30 seconds.
              </p>
            </div>

            {/* Steps & Results Grid */}
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
              {/* Left Controls (7 cols) */}
              <div className="lg:col-span-7 space-y-7">
                {/* Connecting Step Indicator Bar */}
                <div className="relative flex items-center justify-between pb-2">
                  <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-[2px] bg-white/10 z-0" />
                  <div
                    className="absolute top-1/2 left-0 -translate-y-1/2 h-[2.5px] bg-gradient-to-r from-[#533278] via-[#7045A0] to-[#C5A059] z-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{
                      width: step === 1 ? "0%" : step === 2 ? "50%" : "100%",
                    }}
                  />

                  {/* Step 1 Node */}
                  <div className="relative z-10 flex items-center gap-2 bg-[#120E22] px-2 py-1 rounded-full">
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                        step >= 1
                          ? "bg-[#533278] text-white ring-2 ring-[#C5A059]/40"
                          : "bg-white/10 text-white/50"
                      }`}
                    >
                      1
                    </span>
                    <span className={`text-xs font-bold ${step === 1 ? "text-white" : "text-[#A191B2]"}`}>
                      1. Jurisdiction
                    </span>
                  </div>

                  {/* Step 2 Node */}
                  <div className="relative z-10 flex items-center gap-2 bg-[#120E22] px-2 py-1 rounded-full">
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                        step >= 2
                          ? "bg-[#533278] text-white ring-2 ring-[#C5A059]/40"
                          : "bg-white/10 text-white/50"
                      }`}
                    >
                      2
                    </span>
                    <span className={`text-xs font-bold ${step === 2 ? "text-white" : "text-[#A191B2]"}`}>
                      2. Revenue & Structure
                    </span>
                  </div>

                  {/* Step 3 Node */}
                  <div className="relative z-10 flex items-center gap-2 bg-[#120E22] px-2 py-1 rounded-full">
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                        step === 3
                          ? "bg-[#C5A059] text-[#0F0C1B] ring-2 ring-white/50"
                          : "bg-white/10 text-white/50"
                      }`}
                    >
                      3
                    </span>
                    <span className={`text-xs font-bold ${step === 3 ? "text-[#E4C88A]" : "text-[#A191B2]"}`}>
                      3. Diagnostic Result
                    </span>
                  </div>
                </div>

                {/* Step 1: Jurisdiction Selector */}
                {step === 1 && (
                  <div className="space-y-4 animate-in fade-in slide-in-from-left-4 duration-300">
                    <label className="text-xs font-extrabold text-white uppercase tracking-wider block">
                      Select Your Corporate Entity Jurisdiction
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {[
                        { id: "mainland", label: "UAE Mainland (DET)", desc: "Commercial or Professional LLC" },
                        { id: "freezone", label: "Free Zone Entity", desc: "DIFC, DMCC, DAFZA, IFZA, etc." },
                        { id: "foreign", label: "Foreign Company / Branch", desc: "Non-resident or international branch" },
                        { id: "startup", label: "New Venture / Pre-Revenue", desc: "In-process or planned Dubai setup" },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setEntityType(item.id)}
                          className={`relative p-5 rounded-2xl text-left border transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group ${
                            entityType === item.id
                              ? "bg-gradient-to-br from-[#533278] to-[#3A2254] border-[#C5A059] text-white shadow-xl shadow-[#533278]/40 scale-[1.02]"
                              : "bg-white/[0.03] border-white/10 text-white/80 hover:bg-white/[0.07] hover:border-[#A191B2]/50"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-bold">{item.label}</span>
                            {entityType === item.id && (
                              <span className="w-5 h-5 rounded-full bg-[#C5A059] text-[#0F0C1B] flex items-center justify-center text-xs font-extrabold">
                                ✓
                              </span>
                            )}
                          </div>
                          <div className="text-[11px] text-white/60 mt-1.5">{item.desc}</div>
                        </button>
                      ))}
                    </div>

                    <div className="pt-4 flex justify-end">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-white bg-gradient-to-r from-[#533278] to-[#7045A0] hover:from-[#7045A0] hover:to-[#533278] px-7 py-3.5 rounded-full transition-all duration-300 shadow-lg shimmer-sweep"
                      >
                        <span>Next: Revenue Bracket</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 2: Revenue Bracket & Related Parties */}
                {step === 2 && (
                  <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                    <label className="text-xs font-extrabold text-white uppercase tracking-wider block">
                      Annual Gross Revenue (AED)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                      {[
                        { id: "tier1", label: "Below AED 375K", desc: "Startup / Micro" },
                        { id: "tier2", label: "AED 375K – 3M", desc: "Growing SME" },
                        { id: "tier3", label: "Above AED 3M", desc: "Established Enterprise" },
                      ].map((tier) => (
                        <button
                          key={tier.id}
                          type="button"
                          onClick={() => setRevenueTier(tier.id)}
                          className={`relative p-4 rounded-2xl text-left border transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                            revenueTier === tier.id
                              ? "bg-gradient-to-br from-[#533278] to-[#3A2254] border-[#C5A059] text-white shadow-xl shadow-[#533278]/40 scale-[1.02]"
                              : "bg-white/[0.03] border-white/10 text-white/80 hover:bg-white/[0.07] hover:border-[#A191B2]/50"
                          }`}
                        >
                          <div className="text-sm font-bold">{tier.label}</div>
                          <div className="text-[11px] text-white/60 mt-1">{tier.desc}</div>
                        </button>
                      ))}
                    </div>

                    {/* Related Parties Checkbox with Luxury Glow Frame */}
                    <div className="pt-2">
                      <label className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#C5A059]/50 transition-colors cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={hasRelatedParties}
                          onChange={(e) => setHasRelatedParties(e.target.checked)}
                          className="w-4 h-4 rounded text-[#533278] focus:ring-[#C5A059] accent-[#533278]"
                        />
                        <div className="text-xs">
                          <span className="font-semibold text-white group-hover:text-[#E4C88A] transition-colors">
                            We have related-party intercompany transactions
                          </span>
                          <p className="text-[11px] text-white/50">
                            Cross-border management fees, intercompany loans, or shared services
                          </p>
                        </div>
                      </label>
                    </div>

                    <div className="pt-4 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="text-xs font-bold text-white/60 hover:text-white uppercase tracking-wider transition-colors"
                      >
                        ← Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-white bg-gradient-to-r from-[#533278] to-[#7045A0] hover:from-[#7045A0] hover:to-[#533278] px-7 py-3.5 rounded-full transition-all duration-300 shadow-lg shimmer-sweep"
                      >
                        <span>Generate Diagnostic</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Diagnostic Result Cards */}
                {step === 3 && (
                  <div className="space-y-4 animate-in fade-in zoom-in-95 duration-300">
                    <div className="flex items-center justify-between pb-1">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                        <FileCheck2 className="w-4 h-4" /> Assessment Calculated
                      </span>
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="flex items-center gap-1.5 text-xs text-[#E4C88A] hover:text-white transition-colors"
                      >
                        <RotateCcw className="w-3.5 h-3.5" /> Reset
                      </button>
                    </div>

                    <div className="space-y-3">
                      <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 space-y-1">
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#E4C88A]">
                          1. Corporate Tax Status
                        </span>
                        <p className="text-xs text-white font-medium leading-relaxed">{results.ctStatus}</p>
                      </div>

                      <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 space-y-1">
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#A191B2]">
                          2. VAT Compliance Threshold
                        </span>
                        <p className="text-xs text-white font-medium leading-relaxed">{results.vatStatus}</p>
                      </div>

                      <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 space-y-1">
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#A191B2]">
                          3. Transfer Pricing & Governance
                        </span>
                        <p className="text-xs text-white font-medium leading-relaxed">{results.tpStatus}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Summary Box (5 cols) with Champagne Gold Accents */}
              <div className="lg:col-span-5 flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-gradient-to-b from-[#18132B] to-[#100D1F] border border-[#2B233F] shadow-2xl relative">
                <div className="space-y-5">
                  <div className="flex items-center justify-between pb-3.5 border-b border-white/10">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#E4C88A] flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" /> Senior Advisory Takeaway
                    </span>
                    <span className="text-[10px] bg-[#C5A059] text-[#0F0C1B] px-2.5 py-0.5 rounded-full font-extrabold">
                      FTA Ready
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    <div className="text-sm font-bold text-white flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-[#C5A059]" />
                      <span>Recommended Immediate Action</span>
                    </div>
                    <p className="text-xs text-white/80 leading-relaxed font-normal bg-black/20 p-4 rounded-2xl border border-white/5">
                      {results.recommendedAction}
                    </p>
                  </div>

                  <div className="text-[11px] text-white/50 pt-2 space-y-1.5 font-mono">
                    <div>• Sovereign Decree: UAE Federal Decree-Law No. 47</div>
                    <div>• Audit Retention: 7-Year Statutory Accounting Requirement</div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 space-y-2.5">
                  <button
                    type="button"
                    onClick={handleConsultation}
                    className="w-full flex items-center justify-center gap-2.5 text-xs font-extrabold uppercase tracking-wider text-white bg-gradient-to-r from-[#533278] via-[#7045A0] to-[#533278] hover:from-[#7045A0] hover:to-[#533278] py-4 rounded-full shadow-xl transition-all duration-300 shimmer-sweep active:scale-[0.98]"
                  >
                    <span>Request Full Assessment & Consultation</span>
                    <ArrowRight className="w-4 h-4 text-[#E4C88A]" />
                  </button>
                  <div className="text-center text-[10px] text-white/40">
                    Confidential review by MNV Business Bay tax specialists.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
