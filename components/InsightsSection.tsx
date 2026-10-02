"use client";

import { useState } from "react";
import { Calendar, Clock, ArrowRight, X, Sparkles } from "lucide-react";

interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  artType: "waves" | "orbits" | "grid";
  fullContent: string[];
}

export default function InsightsSection() {
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  const articles: Article[] = [
    {
      id: "startup-financial-setup",
      title: "Why Dubai Start-ups Need Professional Financial Setup from Day One",
      category: "Advisory & Setup",
      date: "02 Jan 2026",
      readTime: "4 min read",
      artType: "waves",
      summary:
        "Setting up a business in Dubai goes far beyond obtaining a trade license. Without sound accounting architecture and FTA tax registration from inception, founders risk costly compliance rework.",
      fullContent: [
        "In Dubai's hyper-competitive startup ecosystem, founders often dedicate 90% of their energy to product development and market acquisition, leaving accounting as an afterthought. However, with the enforcement of UAE Corporate Tax (Federal Decree-Law No. 47) and strict VAT compliance, this legacy mindset is fraught with legal liability.",
        "Under UAE commercial regulations, all registered entities—including Free Zone companies and mainland LLCs—are mandated to maintain statutory financial records for at least 7 years. Failure to register for Corporate Tax before the FTA statutory deadline can result in immediate administrative penalties of AED 10,000 or more.",
        "A robust day-one financial setup involves: (1) Chart of accounts aligned with IFRS standards, (2) EmaraTax portal registration, (3) Opening corporate bank accounts with substantiated AML profiles, and (4) Establishing clean founder equity and intercompany loan documentation.",
      ],
    },
    {
      id: "cfo-services-demand",
      title: "Why Fractional CFO Services Are in High Demand Among Dubai Startups & SMEs",
      category: "CFO Advisory",
      date: "31 Dec 2025",
      readTime: "5 min read",
      artType: "orbits",
      summary:
        "High-growth companies in the GCC are increasingly turning to fractional CFOs to secure venture funding, navigate complex debt facilities, and optimize cash burn without full-time executive payroll.",
      fullContent: [
        "Hiring a full-time, seasoned Chief Financial Officer in Dubai can cost between AED 60,000 to AED 90,000 monthly, plus gratuity, health coverage, and executive bonuses. For early-stage ventures and mid-market enterprises, this fixed overhead is often prohibitive.",
        "A fractional CFO brings the strategic rigor of an institutional finance executive at a fraction of the cost. They bridge the gap between transactional bookkeeping and board-level capital allocation.",
        "Key value drivers include unit-economic profitability audits, rolling 13-week cash forecasting, debt restructuring with tier-1 UAE banks, and investor-ready data rooms for Series A and Series B fundraising rounds in DIFC and ADGM.",
      ],
    },
    {
      id: "90-day-compliance-roadmap",
      title: "Financial Compliance Roadmap: Your Crucial First 90 Days After Dubai Incorporation",
      category: "Tax & Compliance",
      date: "25 Dec 2025",
      readTime: "6 min read",
      artType: "grid",
      summary:
        "From Ultimate Beneficial Owner (UBO) filings to Economic Substance (ESR) notifications and EmaraTax onboarding, here is the essential compliance schedule post-license issuance.",
      fullContent: [
        "Congratulations on securing your Dubai trade license. However, day 1 of your corporate license starts the clock on several statutory compliance deadlines enforced by the Ministry of Economy, the Federal Tax Authority (FTA), and your licensing authority.",
        "Days 1–30: Ensure your Ultimate Beneficial Owner (UBO) register is completed and submitted to your licensing authority. Failure to file can trigger license renewal freezes. Open your UAE corporate bank account with comprehensive business plan proof.",
        "Days 31–60: Determine your Corporate Tax registration timeline on the EmaraTax portal based on your license issuance month. Evaluate whether your activities qualify as Relevant Activities under Economic Substance Regulations (ESR).",
        "Days 61–90: Deploy an IFRS-compliant cloud accounting system and establish your VAT threshold monitoring. If your taxable turnover exceeds AED 375,000, VAT registration is mandatory within 30 days of crossing the threshold.",
      ],
    },
  ];

  const renderArtVisual = (type: Article["artType"]) => {
    switch (type) {
      case "waves":
        return (
          <div className="relative w-full h-36 rounded-2xl bg-gradient-to-br from-[#533278] to-[#1E112E] overflow-hidden flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-500">
            <svg
              className="absolute inset-0 w-full h-full stroke-white/20 fill-none"
              viewBox="0 0 300 120"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 0 60 Q 75 20, 150 60 T 300 60"
                strokeWidth="2"
                stroke="url(#artGoldGrad)"
                className="group-hover:translate-x-2 transition-transform duration-700"
              />
              <path
                d="M 0 80 Q 75 40, 150 80 T 300 80"
                strokeWidth="1.5"
                opacity="0.6"
              />
              <path
                d="M 0 40 Q 75 60, 150 40 T 300 40"
                strokeWidth="1"
                opacity="0.4"
              />
              <defs>
                <linearGradient id="artGoldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#C5A059" />
                  <stop offset="100%" stopColor="#DFBF7D" />
                </linearGradient>
              </defs>
            </svg>
            <div className="relative z-10 text-[10px] font-extrabold uppercase tracking-widest text-[#E4C88A] bg-black/40 px-3 py-1 rounded-full backdrop-blur-md border border-[#C5A059]/30">
              UAE Startup Financial Architecture
            </div>
          </div>
        );

      case "orbits":
        return (
          <div className="relative w-full h-36 rounded-2xl bg-gradient-to-br from-[#1B2B44] to-[#0D1524] overflow-hidden flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-500">
            <svg
              className="absolute inset-0 w-full h-full stroke-white/25 fill-none"
              viewBox="0 0 300 120"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse cx="150" cy="60" rx="90" ry="35" stroke="#C5A059" strokeWidth="1.5" className="group-hover:rotate-6 origin-center transition-transform duration-700" />
              <ellipse cx="150" cy="60" rx="60" ry="20" opacity="0.4" />
              <circle cx="150" cy="60" r="16" fill="#C5A059" opacity="0.25" />
              <circle cx="210" cy="50" r="4" fill="#C5A059" />
            </svg>
            <div className="relative z-10 text-[10px] font-extrabold uppercase tracking-widest text-white bg-black/40 px-3 py-1 rounded-full backdrop-blur-md border border-white/20">
              Fractional Capital Governance
            </div>
          </div>
        );

      case "grid":
        return (
          <div className="relative w-full h-36 rounded-2xl bg-gradient-to-br from-[#3D1E3A] to-[#1F0E1E] overflow-hidden flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-500">
            <svg
              className="absolute inset-0 w-full h-full stroke-[#C5A059]/30 fill-none"
              viewBox="0 0 300 120"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="20" y1="0" x2="20" y2="120" strokeDasharray="3 3" />
              <line x1="80" y1="0" x2="80" y2="120" strokeDasharray="3 3" />
              <line x1="150" y1="0" x2="150" y2="120" stroke="#C5A059" strokeWidth="1.5" />
              <line x1="220" y1="0" x2="220" y2="120" strokeDasharray="3 3" />
              <line x1="280" y1="0" x2="280" y2="120" strokeDasharray="3 3" />
              <path d="M 20 90 L 80 60 L 150 40 L 220 20 L 280 10" stroke="#E4C88A" strokeWidth="2" />
            </svg>
            <div className="relative z-10 text-[10px] font-extrabold uppercase tracking-widest text-[#E4C88A] bg-black/40 px-3 py-1 rounded-full backdrop-blur-md border border-[#C5A059]/30">
              90-Day Regulatory Matrix
            </div>
          </div>
        );
    }
  };

  return (
    <section id="insights" className="py-24 bg-[#FAF8FC] border-b border-[#EBE5F1] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3.5 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#A191B2]/30 shadow-sm text-[#533278] text-xs font-extrabold uppercase tracking-wider backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              Thought Leadership & Regional Updates
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F0C1B] tracking-tight font-display">
              Navigating UAE Fiscal & Regulatory Shifts
            </h2>
            <p className="text-sm sm:text-base text-[#5C586E]">
              Actionable analysis on Corporate Tax decrees, VAT interpretations, and business structuring from MNV Associates’ senior advisory team in Dubai.
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#533278] hover:text-[#2F1A46] pb-1 border-b-2 border-[#533278] hover:border-[#C5A059] transition-all self-start md:self-auto"
          >
            <span>Subscribe to Regulatory Alerts</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#C5A059]" />
          </a>
        </div>

        {/* 3 Articles Grid with Art-Directed SVG Visuals */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="rounded-3xl bg-white p-6 sm:p-7 border border-[#EBE5F1] hover:border-[#C5A059]/60 shadow-sm hover:shadow-[0_20px_45px_-12px_rgba(83,50,120,0.16)] hover:-translate-y-1.5 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Art-Directed Header Visual */}
                {renderArtVisual(article.artType)}

                {/* Metadata Pills */}
                <div className="flex items-center justify-between text-[11px] text-[#5C586E] pt-2">
                  <span className="font-extrabold text-[#533278] bg-[#533278]/10 px-3 py-1 rounded-full border border-[#533278]/15">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1.5 font-medium">
                    <Clock className="w-3 h-3 text-[#C5A059]" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#0F0C1B] group-hover:text-[#533278] transition-colors line-clamp-2 leading-snug font-display">
                  {article.title}
                </h3>

                {/* Summary */}
                <p className="text-xs text-[#5C586E] leading-relaxed line-clamp-3">
                  {article.summary}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-6 mt-6 border-t border-[#F5F2F8] flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[11px] text-[#8A859E]">
                  <Calendar className="w-3 h-3 text-[#C5A059]" />
                  <span>{article.date}</span>
                </div>

                <button
                  onClick={() => setActiveArticle(article)}
                  className="text-xs font-extrabold text-[#533278] group-hover:text-[#2F1A46] group-hover:translate-x-1 transition-all flex items-center gap-1.5"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Read Article Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#EBE5F1] relative space-y-6 max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-5 right-5 p-2.5 rounded-full text-[#5C586E] hover:text-[#0F0C1B] hover:bg-[#F5F2F8] transition-colors"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-3 pr-8">
              <div className="flex items-center gap-3 text-xs text-[#5C586E]">
                <span className="font-extrabold text-[#533278] bg-[#533278]/10 px-3 py-1 rounded-full">
                  {activeArticle.category}
                </span>
                <span>•</span>
                <span>{activeArticle.date}</span>
                <span>•</span>
                <span>{activeArticle.readTime}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F0C1B] leading-tight font-display">
                {activeArticle.title}
              </h3>
            </div>

            <div className="space-y-4 text-sm text-[#0F0C1B] leading-relaxed border-t border-[#F5F2F8] pt-4 font-normal">
              {activeArticle.fullContent.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF8FC] border border-[#EBE5F1] flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-[#0F0C1B]">MNV Associates Advisory Practice</div>
                <div className="text-[11px] text-[#5C586E]">Office 706, Sobha Ivory II, Business Bay, Dubai</div>
              </div>
              <button
                onClick={() => setActiveArticle(null)}
                className="text-xs font-extrabold uppercase tracking-wider text-white bg-gradient-to-r from-[#533278] to-[#2F1A46] px-5 py-2.5 rounded-full shadow-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
