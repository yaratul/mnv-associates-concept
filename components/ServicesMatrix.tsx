"use client";

import { useState } from "react";
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

  return (
    <section id="services-matrix" className="py-20 bg-[#FBF9FD] border-b border-[#EBE5F1] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ECE7F2] text-[#533278] text-xs font-bold uppercase tracking-wider">
            Comprehensive Practice Areas
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F0C1B] tracking-tight">
            Integrated Solutions Built for UAE Growth
          </h2>
          <p className="text-base text-[#635F74] leading-relaxed">
            From company formation to complex Corporate Tax filings and fractional CFO governance, we offer the complete spectrum of financial and business advisory.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? "bg-[#533278] text-white shadow-md shadow-[#533278]/25"
                    : "bg-white text-[#635F74] hover:text-[#0F0C1B] hover:bg-[#ECE7F2] border border-[#EBE5F1]"
                }`}
              >
                {cat === "All" ? "All 9 Services" : cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group rounded-3xl bg-white p-7 border border-[#EBE5F1] hover:border-[#A191B2] card-hover-effect flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#ECE7F2] text-[#533278] flex items-center justify-center group-hover:bg-[#533278] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-[#A191B2] bg-[#FBF9FD] px-2.5 py-1 rounded-full border border-[#EBE5F1]">
                      {service.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#0F0C1B] group-hover:text-[#533278] transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-xs text-[#635F74] mt-2 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  <ul className="space-y-2 pt-2 border-t border-[#F5F2F8]">
                    {service.deliverables.slice(0, 2).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-[11px] text-[#0F0C1B]">
                        <CheckCircle className="w-3.5 h-3.5 text-[#533278] shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-4 border-t border-[#F5F2F8] flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalService(service)}
                    className="text-xs font-bold text-[#533278] hover:text-[#432662] flex items-center gap-1.5 transition-colors"
                  >
                    <span>View Scope & Deliverables</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => onSelectService(service.name)}
                    className="text-[11px] font-semibold text-[#635F74] hover:text-[#533278] px-2.5 py-1 rounded-lg hover:bg-[#ECE7F2] transition-colors"
                  >
                    Quick Inquiry
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#EBE5F1] relative space-y-6 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-[#635F74] hover:text-[#0F0C1B] hover:bg-[#F5F2F8] transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2 pr-8">
              <span className="text-xs font-bold text-[#A191B2] uppercase tracking-wider">
                {activeModalService.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F0C1B]">
                {activeModalService.name}
              </h3>
              <p className="text-sm font-medium text-[#533278]">
                {activeModalService.headline}
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold text-[#0F0C1B] uppercase tracking-wider">
                Key Deliverables & Scope
              </h4>
              <div className="space-y-2">
                {activeModalService.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#0F0C1B] p-2.5 rounded-xl bg-[#FBF9FD]">
                    <CheckCircle className="w-4 h-4 text-[#533278] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#ECE7F2]/60 border border-[#A191B2]/30 space-y-1">
              <span className="text-xs font-bold text-[#533278]">Regional Regulatory Context</span>
              <p className="text-xs text-[#635F74] leading-relaxed">
                {activeModalService.regionalContext}
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#F5F2F8]">
              <span className="text-xs text-[#635F74]">
                Direct partner consultation from our Business Bay office.
              </span>
              <button
                onClick={() => {
                  const serviceName = activeModalService.name;
                  setActiveModalService(null);
                  onSelectService(serviceName);
                }}
                className="w-full sm:w-auto text-xs font-bold uppercase tracking-wider text-white bg-[#533278] hover:bg-[#432662] px-6 py-3 rounded-xl shadow-md transition-all"
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
