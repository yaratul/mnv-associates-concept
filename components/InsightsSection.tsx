"use client";

import { useState } from "react";
import { Calendar, Clock, ArrowRight, X } from "lucide-react";

interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
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

  return (
    <section id="insights" className="py-20 bg-[#FBF9FD] border-b border-[#EBE5F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ECE7F2] text-[#533278] text-xs font-bold uppercase tracking-wider">
              Thought Leadership & Regional Updates
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F0C1B] tracking-tight">
              Navigating UAE Fiscal & Regulatory Shifts
            </h2>
            <p className="text-sm sm:text-base text-[#635F74]">
              Actionable analysis on Corporate Tax decrees, VAT interpretations, and business structuring from MNV Associates’ senior advisory team in Dubai.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#533278] hover:text-[#432662] pb-1 border-b-2 border-[#533278] transition-colors self-start md:self-auto"
          >
            <span>Subscribe to Regulatory Alerts</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="rounded-3xl bg-white p-7 border border-[#EBE5F1] hover:border-[#A191B2] card-hover-effect flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-[11px] text-[#635F74]">
                  <span className="font-bold text-[#533278] bg-[#ECE7F2] px-2.5 py-0.5 rounded-full">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-[#A191B2]" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#0F0C1B] group-hover:text-[#533278] transition-colors line-clamp-2 leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs text-[#635F74] leading-relaxed line-clamp-3">
                  {article.summary}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#F5F2F8] flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[11px] text-[#A191B2]">
                  <Calendar className="w-3 h-3" />
                  <span>{article.date}</span>
                </div>

                <button
                  onClick={() => setActiveArticle(article)}
                  className="text-xs font-bold text-[#533278] group-hover:translate-x-1 transition-transform flex items-center gap-1"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#EBE5F1] relative space-y-6 max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-[#635F74] hover:text-[#0F0C1B] hover:bg-[#F5F2F8] transition-colors"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-3 pr-8">
              <div className="flex items-center gap-3 text-xs text-[#635F74]">
                <span className="font-bold text-[#533278] bg-[#ECE7F2] px-2.5 py-0.5 rounded-full">
                  {activeArticle.category}
                </span>
                <span>•</span>
                <span>{activeArticle.date}</span>
                <span>•</span>
                <span>{activeArticle.readTime}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F0C1B] leading-tight">
                {activeArticle.title}
              </h3>
            </div>

            <div className="space-y-4 text-sm text-[#0F0C1B] leading-relaxed border-t border-[#F5F2F8] pt-4">
              {activeArticle.fullContent.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-[#FBF9FD] border border-[#EBE5F1] flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-[#0F0C1B]">MNV Associates Advisory Practice</div>
                <div className="text-[11px] text-[#635F74]">Office 706, Sobha Ivory II, Business Bay, Dubai</div>
              </div>
              <button
                onClick={() => setActiveArticle(null)}
                className="text-xs font-bold text-white bg-[#533278] hover:bg-[#432662] px-4 py-2 rounded-xl"
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
