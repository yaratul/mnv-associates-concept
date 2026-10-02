"use client";

import { useState } from "react";
import { Calculator, ArrowRight, RotateCcw, AlertCircle, FileCheck2 } from "lucide-react";

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
    <section id="tax-readiness" className="py-20 bg-white border-b border-[#EBE5F1] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#0F0C1B] text-white p-8 sm:p-12 lg:p-14 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#533278]/40 blur-3xl pointer-events-none rounded-full" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#A191B2]/20 blur-3xl pointer-events-none rounded-full" />

          <div className="max-w-3xl space-y-3 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#533278] text-[#A191B2] text-xs font-bold uppercase tracking-wider">
              <Calculator className="w-3.5 h-3.5 text-white" />
              Interactive Diagnostic
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              UAE Corporate Tax & Business Readiness Check
            </h2>
            <p className="text-sm sm:text-base text-[#A191B2] leading-relaxed">
              Calculate your statutory obligations under UAE Federal Decree-Law No. 47 and VAT regulations in 30 seconds.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className={`text-xs font-bold ${step === 1 ? "text-white" : "text-[#A191B2]"}`}>
                  1. Jurisdiction
                </span>
                <span className="text-white/20">→</span>
                <span className={`text-xs font-bold ${step === 2 ? "text-white" : "text-[#A191B2]"}`}>
                  2. Revenue & Structure
                </span>
                <span className="text-white/20">→</span>
                <span className={`text-xs font-bold ${step === 3 ? "text-[#C5A059]" : "text-[#A191B2]"}`}>
                  3. Diagnostic Result
                </span>
              </div>

              {step === 1 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <label className="text-xs font-bold text-white uppercase tracking-wider block">
                    Select Your Corporate Entity Jurisdiction
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                        className={`p-4 rounded-2xl text-left border transition-all ${
                          entityType === item.id
                            ? "bg-[#533278] border-[#A191B2] text-white shadow-lg"
                            : "bg-[#181427] border-white/10 text-white/80 hover:bg-[#2B233F]"
                        }`}
                      >
                        <div className="text-sm font-bold">{item.label}</div>
                        <div className="text-[11px] text-white/60 mt-1">{item.desc}</div>
                      </button>
                    ))}
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white bg-[#533278] hover:bg-[#7045A0] px-6 py-3 rounded-xl transition-all"
                    >
                      <span>Next: Revenue Bracket</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <label className="text-xs font-bold text-white uppercase tracking-wider block">
                    Annual Gross Revenue (AED)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { id: "tier1", label: "Below AED 375K", desc: "Startup / Micro" },
                      { id: "tier2", label: "AED 375K – 3M", desc: "Growing SME" },
                      { id: "tier3", label: "Above AED 3M", desc: "Established Enterprise" },
                    ].map((tier) => (
                      <button
                        key={tier.id}
                        type="button"
                        onClick={() => setRevenueTier(tier.id)}
                        className={`p-4 rounded-2xl text-left border transition-all ${
                          revenueTier === tier.id
                            ? "bg-[#533278] border-[#A191B2] text-white shadow-lg"
                            : "bg-[#181427] border-white/10 text-white/80 hover:bg-[#2B233F]"
                        }`}
                      >
                        <div className="text-sm font-bold">{tier.label}</div>
                        <div className="text-[11px] text-white/60 mt-1">{tier.desc}</div>
                      </button>
                    ))}
                  </div>

                  <div className="pt-2">
                    <label className="flex items-center gap-3 p-3.5 rounded-xl bg-[#181427] border border-white/10 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={hasRelatedParties}
                        onChange={(e) => setHasRelatedParties(e.target.checked)}
                        className="w-4 h-4 rounded text-[#533278] focus:ring-[#533278]"
                      />
                      <div className="text-xs">
                        <span className="font-semibold text-white">We have related-party intercompany transactions</span>
                        <p className="text-[11px] text-white/50">Cross-border management fees, intercompany loans, or shared services</p>
                      </div>
                    </label>
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-xs font-semibold text-white/60 hover:text-white"
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white bg-[#533278] hover:bg-[#7045A0] px-6 py-3 rounded-xl transition-all"
                    >
                      <span>Generate Diagnostic</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                      <FileCheck2 className="w-4 h-4" /> Assessment Calculated
                    </span>
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex items-center gap-1 text-[11px] text-white/60 hover:text-white"
                    >
                      <RotateCcw className="w-3 h-3" /> Reset
                    </button>
                  </div>

                  <div className="space-y-2.5">
                    <div className="p-3.5 rounded-2xl bg-[#181427] border border-white/10 space-y-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#A191B2]">
                        1. Corporate Tax Status
                      </span>
                      <p className="text-xs text-white font-medium">{results.ctStatus}</p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-[#181427] border border-white/10 space-y-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#A191B2]">
                        2. VAT Compliance Threshold
                      </span>
                      <p className="text-xs text-white font-medium">{results.vatStatus}</p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-[#181427] border border-white/10 space-y-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#A191B2]">
                        3. Transfer Pricing & Governance
                      </span>
                      <p className="text-xs text-white font-medium">{results.tpStatus}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#181427] border border-[#2B233F]">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#A191B2]">
                    Senior Advisory Takeaway
                  </span>
                  <span className="text-[10px] bg-[#533278] text-white px-2 py-0.5 rounded-full font-bold">
                    FTA Ready
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="text-sm font-semibold text-white flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-[#A191B2]" />
                    <span>Recommended Immediate Action</span>
                  </div>
                  <p className="text-xs text-white/80 leading-relaxed">
                    {results.recommendedAction}
                  </p>
                </div>

                <div className="text-[11px] text-white/50 pt-2 space-y-1">
                  <div>• Sovereign Decree: UAE Federal Decree-Law No. 47</div>
                  <div>• Audit Retention: 7-Year Statutory Accounting Requirement</div>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-white/10 space-y-2">
                <button
                  type="button"
                  onClick={handleConsultation}
                  className="w-full flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-white bg-[#533278] hover:bg-[#7045A0] py-3.5 rounded-xl shadow-lg transition-all"
                >
                  <span>Request Full Assessment & Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <div className="text-center text-[10px] text-white/40">
                  Confidential review by MNV Business Bay tax specialists.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
