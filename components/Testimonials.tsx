import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "MNV Associates handled our UAE Corporate Tax registration and Qualifying Free Zone Person (QFZP) restructuring with supreme precision. Their team gives you the caliber of Big 4 advice with ten times the agility.",
      author: "Tariq Al-Mansoor",
      role: "Managing Director",
      company: "Apex Global Logistics (JAFZA)",
      service: "Corporate Tax & Transfer Pricing",
    },
    {
      quote:
        "As a venture-backed tech startup expanding from London to Dubai, we needed more than bookkeeping. MNV’s fractional CFO service gave us investor-ready financial models and seamless bank account onboarding in record time.",
      author: "Elena Rostova",
      role: "Co-Founder & CEO",
      company: "FinFlow Technologies (DIFC)",
      service: "Fractional CFO & Business Setup",
    },
    {
      quote:
        "When the FTA audited our retail group’s multi-year VAT submissions, MNV Associates acted as our licensed tax agents. They reconciled every ledger and secured zero penalties. I wouldn’t trust any other firm in Dubai.",
      author: "Kareem Haddad",
      role: "Chief Financial Officer",
      company: "Emirates Retail Partners (Dubai Mainland)",
      service: "VAT Audit Defense & Accounting",
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-[#EBE5F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ECE7F2] text-[#533278] text-xs font-bold uppercase tracking-wider">
            Client Voices & Regional Proof
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F0C1B] tracking-tight">
            Trusted by Dubai’s Forward-Thinking Leaders
          </h2>
          <p className="text-sm text-[#635F74]">
            Hear how our integrated advisory and tax solutions empower founders and executive teams across the UAE.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#FBF9FD] border border-[#EBE5F1] hover:border-[#A191B2] card-hover-effect flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#C5A059]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#A191B2]/40" />
                </div>

                <p className="text-xs sm:text-sm text-[#0F0C1B] leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#EBE5F1] space-y-1">
                <div className="text-sm font-bold text-[#0F0C1B]">{t.author}</div>
                <div className="text-xs text-[#635F74]">
                  {t.role} • <span className="text-[#533278] font-medium">{t.company}</span>
                </div>
                <div className="text-[10px] text-[#A191B2] font-semibold uppercase tracking-wider pt-1">
                  Scope: {t.service}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
