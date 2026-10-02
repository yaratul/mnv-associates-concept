"use client";

import { useState } from "react";
import { Star, Quote, Sparkles } from "lucide-react";

export default function Testimonials() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const testimonials = [
    {
      quote:
        "MNV Associates handled our UAE Corporate Tax registration and Qualifying Free Zone Person (QFZP) restructuring with supreme precision. Their team gives you the caliber of Big 4 advice with ten times the agility.",
      author: "Tariq Al-Mansoor",
      role: "Managing Director",
      company: "Apex Global Logistics (JAFZA)",
      service: "Corporate Tax & Transfer Pricing",
      accentGlow: "rgba(83, 50, 120, 0.15)",
    },
    {
      quote:
        "As a venture-backed tech startup expanding from London to Dubai, we needed more than bookkeeping. MNV’s fractional CFO service gave us investor-ready financial models and seamless bank account onboarding in record time.",
      author: "Elena Rostova",
      role: "Co-Founder & CEO",
      company: "FinFlow Technologies (DIFC)",
      service: "Fractional CFO & Business Setup",
      accentGlow: "rgba(197, 160, 89, 0.2)",
    },
    {
      quote:
        "When the FTA audited our retail group’s multi-year VAT submissions, MNV Associates acted as our licensed tax agents. They reconciled every ledger and secured zero penalties. I wouldn’t trust any other firm in Dubai.",
      author: "Kareem Haddad",
      role: "Chief Financial Officer",
      company: "Emirates Retail Partners (Dubai Mainland)",
      service: "VAT Audit Defense & Accounting",
      accentGlow: "rgba(36, 87, 136, 0.15)",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-white border-b border-[#EBE5F1] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3.5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ECE7F2] text-[#533278] text-xs font-extrabold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            Client Voices & Regional Proof
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F0C1B] tracking-tight font-display">
            Trusted by Dubai’s Forward-Thinking Leaders
          </h2>
          <p className="text-sm sm:text-base text-[#5C586E]">
            Hear how our integrated advisory and tax solutions empower founders and executive teams across the UAE.
          </p>
        </div>

        {/* 3D Fanned Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {testimonials.map((t, idx) => {
            const isHovered = hoveredIdx === idx;
            const isAnyHovered = hoveredIdx !== null;
            const isFaded = isAnyHovered && !isHovered;

            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{
                  boxShadow: isHovered
                    ? `0 25px 50px -12px ${t.accentGlow}`
                    : "0 4px 20px -2px rgba(0, 0, 0, 0.05)",
                }}
                className={`relative p-8 rounded-3xl bg-[#FAF8FC] border border-[#EBE5F1] hover:border-[#C5A059] flex flex-col justify-between space-y-6 transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isHovered ? "-translate-y-2 scale-[1.03] z-20 bg-white" : ""
                } ${isFaded ? "opacity-75 blur-[0.4px] scale-[0.98]" : "opacity-100"}`}
              >
                {/* Large Decorative Quote Watermark */}
                <Quote
                  className="absolute bottom-6 right-6 w-20 h-20 text-[#A191B2]/10 pointer-events-none -scale-x-100"
                  aria-hidden="true"
                />

                <div className="space-y-5 relative z-10">
                  {/* Sequential Gold Stars & Quote Icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-[#C5A059]">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-current drop-shadow-sm transition-transform duration-300 hover:scale-125"
                          style={{
                            transitionDelay: `${i * 60}ms`,
                          }}
                        />
                      ))}
                    </div>
                    <Quote className="w-7 h-7 text-[#C5A059]/40" />
                  </div>

                  {/* Quote Body */}
                  <p className="text-xs sm:text-sm text-[#0F0C1B] leading-relaxed italic font-normal">
                    "{t.quote}"
                  </p>
                </div>

                {/* Author Metadata */}
                <div className="pt-5 border-t border-[#EBE5F1] space-y-1 relative z-10">
                  <div className="text-sm font-bold text-[#0F0C1B] font-display">{t.author}</div>
                  <div className="text-xs text-[#5C586E]">
                    {t.role} • <span className="text-[#533278] font-bold">{t.company}</span>
                  </div>
                  <div className="text-[10px] text-[#A191B2] font-extrabold uppercase tracking-wider pt-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                    Scope: {t.service}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
