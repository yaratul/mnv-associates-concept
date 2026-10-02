"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

export default function Footer() {
  const practiceAreas = [
    { name: "Corporate Tax Advisory", href: "#services-matrix" },
    { name: "VAT Returns & Audits", href: "#services-matrix" },
    { name: "Transfer Pricing Documentation", href: "#services-matrix" },
    { name: "Accounting & Bookkeeping", href: "#services-matrix" },
    { name: "Fractional CFO Advisory", href: "#services-matrix" },
    { name: "Business Setup & Licensing", href: "#services-matrix" },
    { name: "Regulatory Compliance & AML", href: "#services-matrix" },
    { name: "HR Advisory & Payroll (WPS)", href: "#services-matrix" },
    { name: "Business Advisory & M&A", href: "#services-matrix" },
  ];

  const quickLinks = [
    { name: "Why MNV Associates", href: "#why-mnv" },
    { name: "Tax Readiness Check", href: "#tax-readiness" },
    { name: "Latest Insights & Decrees", href: "#insights" },
    { name: "Client Testimonials", href: "#testimonials" },
    { name: "Book Consultation", href: "#contact" },
  ];

  return (
    <footer className="relative bg-[#0A0714] text-white pt-20 pb-14 border-t border-white/10 overflow-hidden">
      {/* Glowing Gradient Hairline Divider on Top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] hairline-shimmer" aria-hidden="true" />

      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#533278]/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#C5A059]/10 blur-3xl rounded-full pointer-events-none" />

      {/* Huge Faint "MNV" Architectural Watermark */}
      <div
        className="absolute bottom-0 right-4 text-[260px] font-black text-white/[0.015] select-none pointer-events-none font-display leading-none tracking-tighter"
        aria-hidden="true"
      >
        MNV
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Pre-Footer Brand Banner */}
        <div className="pb-14 border-b border-white/10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="space-y-3.5">
            <div className="flex items-center gap-3.5">
              <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-[#533278] via-[#432662] to-[#2F1A46] flex items-center justify-center text-white font-extrabold text-2xl shadow-xl shadow-[#533278]/30">
                <span className="font-serif">M</span>
                <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#C5A059] ring-2 ring-[#0A0714]" />
              </div>
              <span className="font-extrabold text-2xl sm:text-3xl tracking-tight text-white font-display">
                MNV <span className="text-[#A191B2] font-semibold text-xl tracking-normal">ASSOCIATES</span>
              </span>
            </div>
            <div className="text-sm font-semibold text-[#A191B2] tagline-badge flex items-center gap-2.5">
              <span className="text-[#E4C88A]">unlock your growth</span>
              <span className="text-white/20">•</span>
              <span className="text-white/60 font-normal text-xs">
                Dubai Premier Tax & Advisory Practice
              </span>
            </div>
          </div>

          {/* Newsletter Box with Shimmer Button */}
          <div className="lg:w-96 space-y-2.5">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#E4C88A] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" /> UAE Regulatory Digest
            </span>
            <p className="text-[11px] text-white/60">
              Receive updates on Federal Tax Authority decrees and corporate laws.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <input
                type="email"
                placeholder="Enter corporate email"
                className="w-full px-4 py-3 rounded-full bg-white/[0.05] border border-white/10 text-xs text-white placeholder-white/40 focus:border-[#C5A059] outline-none transition-colors"
              />
              <button
                type="button"
                className="p-3 rounded-full bg-gradient-to-r from-[#533278] to-[#7045A0] hover:from-[#7045A0] hover:to-[#C5A059] text-white shrink-0 transition-all shadow-lg shimmer-sweep"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 4 Footer Columns with Dot Link Hover */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 border-b border-white/10 text-xs">
          {/* Col 1: Headquarters & Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="font-extrabold text-xs uppercase tracking-widest text-[#E4C88A]">
              Dubai Headquarters
            </div>

            <div className="space-y-3.5 text-white/70">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <a
                  href="https://maps.app.goo.gl/hX7BNUhhFixbVBm17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-relaxed hover:text-[#E4C88A] transition-colors"
                >
                  Office 706, Sobha Ivory II, Business Bay, Dubai, United Arab Emirates
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>+971 4 576 7094 | +971 56 375 0931</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>info@mnvassociates.com</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2 text-[11px] text-[#A191B2]">
              <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
              <span>FTA Registered Tax Agent License Valid</span>
            </div>
          </div>

          {/* Col 2: Practice Areas Directory (4 cols) */}
          <div className="lg:col-span-4 space-y-3.5">
            <div className="font-extrabold text-xs uppercase tracking-widest text-[#E4C88A]">
              All 9 Practice Areas
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-white/70">
              {practiceAreas.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#C5A059] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3.5">
            <div className="font-extrabold text-xs uppercase tracking-widest text-[#E4C88A]">
              Navigation
            </div>
            <ul className="space-y-2.5 text-white/70">
              {quickLinks.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#C5A059] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Operating Hours (2 cols) */}
          <div className="lg:col-span-2 space-y-3.5">
            <div className="font-extrabold text-xs uppercase tracking-widest text-[#E4C88A]">
              Working Hours
            </div>
            <div className="text-white/70 space-y-2">
              <div>Monday – Friday</div>
              <div className="text-white font-bold text-xs">9:00 AM – 6:00 PM (GST)</div>
              <div className="pt-2 text-[11px] text-white/50">
                Saturday – Sunday: Closed for statutory filings
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Tagline */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/50">
          <div>
            © {new Date().getFullYear()} MNV Associates. All Rights Reserved. Business Bay, Dubai, UAE.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#E4C88A] font-extrabold tagline-badge">unlock your growth</span>
            <span>•</span>
            <Link href="#contact" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="#contact" className="hover:text-white transition-colors">
              Terms of Engagement
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
