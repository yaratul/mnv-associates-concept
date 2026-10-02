import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight, ShieldCheck } from "lucide-react";

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
    <footer className="bg-[#0F0C1B] text-white pt-16 pb-12 border-t border-white/10 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#533278]/25 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="pb-12 border-b border-white/10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#533278] flex items-center justify-center text-white font-extrabold text-xl shadow-md">
                M
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white">
                MNV <span className="text-[#A191B2] font-semibold text-lg">ASSOCIATES</span>
              </span>
            </div>
            <div className="text-sm font-semibold text-[#A191B2] tagline-badge flex items-center gap-2">
              <span>unlock your growth</span>
              <span className="text-white/30">•</span>
              <span className="text-white/60 font-normal text-xs">
                Dubai Premier Tax & Advisory Practice
              </span>
            </div>
          </div>

          <div className="lg:w-96 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-white">
              UAE Regulatory Digest
            </span>
            <p className="text-[11px] text-white/60">
              Receive updates on Federal Tax Authority decrees and corporate laws.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <input
                type="email"
                placeholder="Enter corporate email"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#181427] border border-white/10 text-xs text-white placeholder-white/40 focus:border-[#533278] outline-none"
              />
              <button
                type="button"
                className="p-2.5 rounded-xl bg-[#533278] hover:bg-[#7045A0] text-white shrink-0 transition-colors"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 border-b border-white/10 text-xs">
          <div className="lg:col-span-4 space-y-4">
            <div className="font-bold text-sm text-white uppercase tracking-wider">
              Dubai Headquarters
            </div>

            <div className="space-y-3 text-white/70">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#A191B2] shrink-0 mt-0.5" />
                <span>Office 706, Sobha Ivory II, Business Bay, Dubai, United Arab Emirates</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#A191B2] shrink-0" />
                <span>+971 4 576 7094 | +971 56 375 0931</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#A191B2] shrink-0" />
                <span>info@mnvassociates.com</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2 text-[11px] text-[#A191B2]">
              <ShieldCheck className="w-4 h-4 text-[#533278]" />
              <span>FTA Registered Tax Agent License Valid</span>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-3">
            <div className="font-bold text-sm text-white uppercase tracking-wider">
              All 9 Practice Areas
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-white/70">
              {practiceAreas.map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} className="hover:text-white transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <div className="font-bold text-sm text-white uppercase tracking-wider">
              Navigation
            </div>
            <ul className="space-y-2 text-white/70">
              {quickLinks.map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} className="hover:text-white transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <div className="font-bold text-sm text-white uppercase tracking-wider">
              Working Hours
            </div>
            <div className="text-white/70 space-y-1.5">
              <div>Monday – Friday</div>
              <div className="text-white font-medium">9:00 AM – 6:00 PM (GST)</div>
              <div className="pt-2 text-[11px] text-white/50">
                Saturday – Sunday: Closed for statutory filings
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/50">
          <div>
            © {new Date().getFullYear()} MNV Associates. All Rights Reserved. Business Bay, Dubai, UAE.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#A191B2] font-semibold tagline-badge">unlock your growth</span>
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
