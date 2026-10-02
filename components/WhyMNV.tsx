import { Shield, Zap, Sparkles, Check, X } from "lucide-react";

export default function WhyMNV() {
  const metrics = [
    { value: "500+", label: "Regional Entities Scaled", sub: "Mainland, Free Zones & Offshore" },
    { value: "AED 1.2B+", label: "Transaction Value Advised", sub: "M&A, Restructuring & Capital" },
    { value: "100%", label: "FTA Compliance Record", sub: "Zero Late-Filing Penalties" },
    { value: "< 24h", label: "Client SLA Response Time", sub: "Direct Senior Advisor Access" },
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
    <section id="why-mnv" className="py-20 bg-white border-b border-[#EBE5F1] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ECE7F2] text-[#533278] text-xs font-bold uppercase tracking-wider">
            Why MNV Associates
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F0C1B] tracking-tight">
            Big 4 Precision. Boutique Speed & Dedication.
          </h2>
          <p className="text-base text-[#635F74] leading-relaxed">
            In the fast-moving GCC business ecosystem, you don’t need bureaucratic delays or fragmented bookkeepers. You need seasoned financial architects who deeply understand your milestones.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-3xl bg-[#FBF9FD] border border-[#EBE5F1] hover:border-[#A191B2] transition-colors text-center space-y-2 group"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-[#533278] tracking-tight group-hover:scale-105 transition-transform">
                {m.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#0F0C1B]">
                {m.label}
              </div>
              <div className="text-[11px] text-[#635F74]">
                {m.sub}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-white border border-[#EBE5F1] hover:border-[#A191B2] card-hover-effect space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#533278]/10 text-[#533278] flex items-center justify-center">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#0F0C1B]">FTA Registered Authority</h3>
            <p className="text-xs text-[#635F74] leading-relaxed">
              Officially recognized tax agents licensed to represent clients before the Federal Tax Authority for tax disputes, reconsiderations, and filings.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#EBE5F1] hover:border-[#A191B2] card-hover-effect space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#533278]/10 text-[#533278] flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#0F0C1B]">Rapid Execution SLA</h3>
            <p className="text-xs text-[#635F74] leading-relaxed">
              Guaranteed under-24-hour turnaround on critical tax filings, corporate queries, and financial clarifications to keep your operations moving.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#EBE5F1] hover:border-[#A191B2] card-hover-effect space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#533278]/10 text-[#533278] flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#0F0C1B]">Cloud & Automation Native</h3>
            <p className="text-xs text-[#635F74] leading-relaxed">
              We leverage modern enterprise accounting software and automation pipelines, transforming backward-looking books into forward-looking intelligence.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#EBE5F1] hover:border-[#A191B2] card-hover-effect space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#533278]/10 text-[#533278] flex items-center justify-center">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#0F0C1B]">Full Lifecycle Coverage</h3>
            <p className="text-xs text-[#635F74] leading-relaxed">
              From day-one company formation in Business Bay or DIFC to 9% Corporate Tax audits and multi-million dollar M&A transactions.
            </p>
          </div>
        </div>

        <div className="rounded-3xl bg-[#FBF9FD] border border-[#EBE5F1] p-6 sm:p-10">
          <div className="max-w-2xl mb-8 space-y-2">
            <h3 className="text-2xl font-bold text-[#0F0C1B]">The Advisory Experience Comparison</h3>
            <p className="text-xs sm:text-sm text-[#635F74]">
              How MNV Associates delivers the caliber of international advisory without the traditional friction.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#EBE5F1] text-xs font-bold uppercase tracking-wider text-[#A191B2]">
                  <th className="py-4 px-4">Evaluation Metric</th>
                  <th className="py-4 px-4 text-[#635F74]">Traditional Big 4 Firm</th>
                  <th className="py-4 px-4 text-[#533278] bg-[#ECE7F2]/50 rounded-t-xl">MNV Associates</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EBE5F1] text-xs">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white transition-colors">
                    <td className="py-4 px-4 font-bold text-[#0F0C1B]">{row.feature}</td>
                    <td className="py-4 px-4 text-[#635F74] flex items-center gap-2">
                      <X className="w-4 h-4 text-rose-500 shrink-0" />
                      <span>{row.traditional}</span>
                    </td>
                    <td className="py-4 px-4 font-semibold text-[#533278] bg-[#ECE7F2]/20">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{row.mnv}</span>
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
