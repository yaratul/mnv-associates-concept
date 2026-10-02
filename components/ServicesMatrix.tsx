"use client";

import { useState, useRef } from "react";
import {
  Building,
  Receipt,
  FileSpreadsheet,
  Coins,
  BookOpenCheck,
  TrendingUp,
  ShieldAlert,
  Users2,
  Briefcase,
  ArrowRight,
  CheckCircle,
  X,
  Sparkles,
} from "lucide-react";

interface ServicesMatrixProps {
  onSelectService: (serviceName: string) => void;
}

export interface ServiceDetail {
  id: string;
  name: string;
  category: "Taxation & Compliance" | "Financial Governance" | "Corporate & People";
  shortDesc: string;
  icon: typeof Building;
  headline: string;
  deliverables: string[];
  impact: string;
  regionalContext: string;
}

export const servicesData: ServiceDetail[] = [
  {
    id: "business-setup",
    name: "Business Setup",
    category: "Corporate & People",
    icon: Building,
    shortDesc: "Strategic mainland, free zone, and offshore company formation tailored to your growth model.",
    headline: "Establish your corporate presence with optimal jurisdiction selection in Dubai & across the UAE.",
    deliverables: [
      "Jurisdiction evaluation (Mainland DET vs. DIFC, DMCC, ADGM, IFZA)",
      "Corporate bank account opening assistance with tier-1 UAE banks",
      "Drafting MOA, shareholder agreements & corporate governance structuring",
      "Investor & employee Golden Visa / residence visa processing",
    ],
    impact: "100% foreign ownership compliance with zero regulatory delays.",
    regionalContext: "Navigating Cabinet Decision regulations for commercial and professional licenses.",
  },
  {
    id: "corporate-tax",
    name: "Corporate Tax",
    category: "Taxation & Compliance",
    icon: Receipt,
    shortDesc: "End-to-end UAE 9% federal Corporate Tax registration, assessment, optimization, and statutory filing.",
    headline: "Master Federal Decree-Law No. 47 on UAE Corporate Taxation with proactive structuring.",
    deliverables: [
      "Federal Tax Authority (FTA) Corporate Tax registration & EmaraTax management",
      "Tax impact assessment & Qualifying Free Zone Person (QFZP) eligibility tests",
      "Small Business Relief (SBR) analysis under the AED 3M threshold",
      "Annual tax computation, return preparation, and defense against FTA audits",
    ],
    impact: "Protect bottom-line margins while maintaining 100% statutory compliance.",
    regionalContext: "Crucial for mainland companies and free zone businesses seeking 0% qualifying income exemptions.",
  },
  {
    id: "vat",
    name: "VAT Solutions",
    category: "Taxation & Compliance",
    icon: Coins,
    shortDesc: "Comprehensive VAT advisory, periodic return filings, voluntary disclosures, and refund claims.",
    headline: "Flawless VAT compliance and audit support under UAE Federal Tax Authority rules.",
    deliverables: [
      "Mandatory (AED 375K) and voluntary (AED 187.5K) VAT registrations",
      "Periodic VAT 201 return preparation, reconciliation & electronic submission",
      "FTA Voluntary Disclosures (VD) and penalty reconsideration submissions",
      "Cross-border transaction mapping and designated zone treatment",
    ],
    impact: "Avoid severe FTA administrative penalties and optimize input VAT recovery.",
    regionalContext: "Over 500 successful VAT audits handled across retail, logistics, and professional services.",
  },
  {
    id: "transfer-pricing",
    name: "Transfer Pricing",
    category: "Taxation & Compliance",
    icon: FileSpreadsheet,
    shortDesc: "OECD-aligned Local File, Master File, and benchmark studies for related-party transactions.",
    headline: "Arm's length documentation and compliance for cross-border groups and multi-entity setups.",
    deliverables: [
      "Preparation of Local File and Master File under UAE Corporate Tax Law",
      "Economic benchmarking studies using verified commercial databases",
      "Related party disclosure form filings with annual tax returns",
      "Intercompany transaction pricing policy design and risk mitigation",
    ],
    impact: "Eliminate double taxation risks and audit exposure from cross-border transactions.",
    regionalContext: "Mandatory for groups exceeding UAE revenue and related-party thresholds.",
  },
  {
    id: "accounting",
    name: "Accounting & Bookkeeping",
    category: "Financial Governance",
    icon: BookOpenCheck,
    shortDesc: "Continuous IFRS-compliant bookkeeping, financial closing, and audit-ready management accounts.",
    headline: "Precision financial record-keeping engineered for executive decision-makers and FTA audits.",
    deliverables: [
      "Monthly and quarterly IFRS financial statement preparation",
      "Cloud ERP setup and management (Zoho, QuickBooks, Xero, Oracle NetSuite)",
      "Bank reconciliations, accounts payable (AP) & accounts receivable (AR)",
      "Year-end statutory audit file preparation and external auditor coordination",
    ],
    impact: "Statutory 7-year record retention readiness required under UAE commercial company laws.",
    regionalContext: "Under UAE law, every registered business must maintain verifiable books of accounts.",
  },
  {
    id: "cfo-advisory",
    name: "CFO Advisory",
    category: "Financial Governance",
    icon: TrendingUp,
    shortDesc: "Fractional and virtual CFO leadership delivering capital strategy, cash flow modeling, and board reporting.",
    headline: "High-level financial strategy and investor-readiness without executive full-time overhead.",
    deliverables: [
      "Strategic cash flow forecasting, burn rate management, and working capital optimization",
      "Financial modeling for debt financing, venture capital raises, and bank credit lines",
      "KPI dashboards and executive board presentation packs",
      "Cost rationalization and unit-economic margin improvements",
    ],
    impact: "Institutional financial governance that boosts valuation and investor trust.",
    regionalContext: "Essential for scaling Dubai tech startups and expanding SMEs.",
  },
  {
    id: "compliance",
    name: "Compliance & AML",
    category: "Taxation & Compliance",
    icon: ShieldAlert,
    shortDesc: "Anti-Money Laundering (AML), Economic Substance (ESR), and Ultimate Beneficial Owner (UBO) filings.",
    headline: "Bulletproof regulatory governance protecting your entity from license suspension and fines.",
    deliverables: [
      "Anti-Money Laundering (AML/CFT) policy implementation & goAML portal registration",
      "Economic Substance Regulations (ESR) notifications and annual reporting",
      "Ultimate Beneficial Owner (UBO) register maintenance and authority filing",
      "Corporate governance frameworks and statutory register upkeep",
    ],
    impact: "Zero penalty track record across hundreds of high-risk DNFBPs and corporate entities.",
    regionalContext: "Strictly enforced by the UAE Ministry of Economy and Central Bank.",
  },
  {
    id: "hr-advisory",
    name: "HR Advisory & Payroll",
    category: "Corporate & People",
    icon: Users2,
    shortDesc: "UAE Labour Law advisory, Wages Protection System (WPS) compliance, and secondment solutions.",
    headline: "Streamlined workforce management aligned with MOHRE and free zone employment regulations.",
    deliverables: [
      "Monthly Wages Protection System (WPS) compliant payroll processing",
      "UAE Labour Law compliant employment contracts and employee handbooks",
      "End-of-Service Gratuity (EOSG) calculations and pension fund advisory",
      "Executive secondment and interim finance staff placement",
    ],
    impact: "100% compliance with MOHRE mandates, eliminating wage delay penalties.",
    regionalContext: "Covers both mainland MOHRE guidelines and independent free zone labour codes.",
  },
  {
    id: "business-advisory",
    name: "Business Advisory",
    category: "Corporate & People",
    icon: Briefcase,
    shortDesc: "M&A due diligence, corporate valuation, turnaround advisory, and strategic bank financing.",
    headline: "Transformative advisory guiding major capital investments, restructuring, and exits.",
    deliverables: [
      "Buy-side and sell-side financial & tax due diligence for regional acquisitions",
      "Independent business valuations and discounted cash flow (DCF) modeling",
      "Corporate restructuring, debt refinancing, and banking relationship advisory",
      "Feasibility studies and market entry strategy for the GCC region",
    ],
    impact: "Maximized deal value and de-risked transaction execution.",
    regionalContext: "Over AED 1.2B advised across tech, real estate, trade, and healthcare sectors.",
  },
];

export default function ServicesMatrix({ onSelectService }: ServicesMatrixProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalService, setActiveModalService] = useState<ServiceDetail | null>(null);

  const categories = ["All", "Taxation & Compliance", "Financial Governance", "Corporate & People"];

  const filteredServices =
    selectedCategory === "All"
      ? servicesData
      : servicesData.filter((s) => s.category === selectedCategory);

  const getCategoryStyles = (category: ServiceDetail["category"]) => {
    switch (category) {
      case "Taxation & Compliance":
        return {
          badgeBg: "bg-[#533278]/10 text-[#533278] border-[#533278]/20",
          iconBg: "bg-[#533278]/10 text-[#533278] group-hover:bg-[#533278] group-hover:text-white",
          accentLine: "from-[#533278] via-[#7045A0] to-[#C5A059]",
          cardBorder: "hover:border-[#533278]/40",
        };
      case "Financial Governance":
        return {
          badgeBg: "bg-[#245788]/10 text-[#245788] border-[#245788]/20",
          iconBg: "bg-[#245788]/10 text-[#245788] group-hover:bg-[#245788] group-hover:text-white",
          accentLine: "from-[#245788] via-[#4379AC] to-[#C5A059]",
          cardBorder: "hover:border-[#245788]/40",
        };
      case "Corporate & People":
        return {
          badgeBg: "bg-[#78355E]/10 text-[#78355E] border-[#78355E]/20",
          iconBg: "bg-[#78355E]/10 text-[#78355E] group-hover:bg-[#78355E] group-hover:text-white",
          accentLine: "from-[#78355E] via-[#9E4A7E] to-[#C5A059]",
          cardBorder: "hover:border-[#78355E]/40",
        };
    }
  };

  return (
    <section id="services-matrix" className="py-24 bg-[#FAF8FC] border-b border-[#EBE5F1] relative">
      {/* Blueprint Grid Accent */}
      <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading with Editorial Serif Display */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#A191B2]/30 shadow-sm text-[#533278] text-xs font-extrabold uppercase tracking-wider backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            Comprehensive Practice Areas
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F0C1B] tracking-tight font-display">
            Integrated Solutions Built for UAE Growth
          </h2>
          <p className="text-base text-[#5C586E] leading-relaxed">
            From company formation to complex Corporate Tax filings and fractional CFO governance, we offer the complete spectrum of financial and business advisory.
          </p>

          {/* Filter Tabs with Sliding Style */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-5 py-2.5 rounded-full text-xs font-extrabold tracking-wider uppercase transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  selectedCategory === cat
                    ? "bg-[#533278] text-white shadow-lg shadow-[#533278]/25 scale-105"
                    : "bg-white text-[#5C586E] hover:text-[#0F0C1B] hover:bg-[#ECE7F2] border border-[#EBE5F1]"
                }`}
              >
                {cat === "All" ? "All 9 Services" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Bento Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {filteredServices.map((service, index) => {
            const Icon = service.icon;
            const style = getCategoryStyles(service.category);
            const isFeatured = service.id === "corporate-tax" || service.id === "business-setup";

            return (
              <div
                key={service.id}
                className={`group relative rounded-3xl bg-white p-7 sm:p-8 border border-[#EBE5F1] ${style.cardBorder} shadow-sm hover:shadow-[0_20px_45px_-12px_rgba(83,50,120,0.14)] hover:-translate-y-1.5 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col justify-between overflow-hidden ${
                  isFeatured && selectedCategory === "All" ? "lg:col-span-1 ring-1 ring-[#533278]/10" : ""
                }`}
              >
                {/* Thin Animated Gradient Line along the bottom edge */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r ${style.accentLine} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] origin-left`}
                  aria-hidden="true"
                />

                <div className="space-y-5">
                  {/* Card Header with Icon Morph & Glow Ring */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`relative w-13 h-13 rounded-2xl ${style.iconBg} flex items-center justify-center transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 shadow-sm`}
                    >
                      <Icon className="w-6 h-6" />
                      <div className="absolute -inset-1 rounded-2xl bg-[#C5A059]/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${style.badgeBg}`}
                    >
                      {service.category}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <div>
                    <h3 className="text-xl font-bold text-[#0F0C1B] group-hover:text-[#533278] transition-colors duration-200 font-display">
                      {service.name}
                    </h3>
                    <p className="text-xs text-[#5C586E] mt-2 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Deliverable Highlights */}
                  <ul className="space-y-2 pt-3 border-t border-[#F5F2F8]">
                    {service.deliverables.slice(0, 2).map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-[11px] text-[#0F0C1B] transition-transform duration-200 group-hover:translate-x-0.5"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-[#533278] shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Link with Underline Sweep */}
                <div className="pt-6 mt-5 border-t border-[#F5F2F8] flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalService(service)}
                    className="relative text-xs font-extrabold text-[#533278] hover:text-[#2F1A46] flex items-center gap-1.5 transition-colors group/btn"
                  >
                    <span>View Scope & Deliverables</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-200 text-[#C5A059]" />
                  </button>

                  <button
                    onClick={() => onSelectService(service.name)}
                    className="text-[11px] font-bold text-[#5C586E] hover:text-[#533278] px-3 py-1.5 rounded-full hover:bg-[#ECE7F2] transition-colors"
                  >
                    Quick Inquiry
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#EBE5F1] relative space-y-6 max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-5 right-5 p-2.5 rounded-full text-[#5C586E] hover:text-[#0F0C1B] hover:bg-[#F5F2F8] transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-2 pr-8">
              <span className="text-[11px] font-extrabold text-[#533278] uppercase tracking-wider bg-[#533278]/10 px-3 py-1 rounded-full inline-block">
                {activeModalService.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F0C1B] font-display">
                {activeModalService.name}
              </h3>
              <p className="text-sm font-semibold text-[#533278]">
                {activeModalService.headline}
              </p>
            </div>

            {/* Deliverables List */}
            <div className="space-y-3">
              <h4 className="text-xs font-extrabold text-[#0F0C1B] uppercase tracking-wider">
                Key Deliverables & Scope
              </h4>
              <div className="space-y-2">
                {activeModalService.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#0F0C1B] p-3 rounded-2xl bg-[#FBF9FD] border border-[#EBE5F1]">
                    <CheckCircle className="w-4 h-4 text-[#533278] shrink-0 mt-0.5" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Regional Relevance Note */}
            <div className="p-4 rounded-2xl bg-[#ECE7F2]/60 border border-[#A191B2]/40 space-y-1">
              <span className="text-xs font-bold text-[#533278] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" /> Regional Regulatory Context
              </span>
              <p className="text-xs text-[#5C586E] leading-relaxed">
                {activeModalService.regionalContext}
              </p>
            </div>

            {/* Modal Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#F5F2F8]">
              <span className="text-xs text-[#5C586E]">
                Direct partner consultation from our Business Bay office.
              </span>
              <button
                onClick={() => {
                  const serviceName = activeModalService.name;
                  setActiveModalService(null);
                  onSelectService(serviceName);
                }}
                className="w-full sm:w-auto text-xs font-extrabold uppercase tracking-wider text-white bg-gradient-to-r from-[#533278] to-[#2F1A46] hover:from-[#7045A0] hover:to-[#533278] px-7 py-3.5 rounded-full shadow-lg transition-all"
              >
                Inquire for {activeModalService.name}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
