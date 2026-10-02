"use client";

import { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Building,
  ExternalLink,
} from "lucide-react";
import { servicesData } from "./ServicesMatrix";

interface ContactSectionProps {
  initialService?: string;
  initialMessage?: string;
}

export default function ContactSection({
  initialService = "",
  initialMessage = "",
}: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: initialService || "Corporate Tax",
    jurisdiction: "UAE Mainland",
    message: initialMessage || "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [locationTab, setLocationTab] = useState<"facade" | "map">("facade");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 bg-white border-b border-[#EBE5F1] relative overflow-hidden">
      {/* Background Rotating Blueprint Concentric Circles (SVG) */}
      <div
        className="absolute -top-32 -right-32 w-[600px] h-[600px] pointer-events-none opacity-20"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 500 500"
          className="w-full h-full stroke-[#533278] fill-none animate-spin"
          style={{ animationDuration: "120s" }}
        >
          <circle cx="250" cy="250" r="120" strokeWidth="1" strokeDasharray="6 6" />
          <circle cx="250" cy="250" r="180" strokeWidth="1" stroke="#C5A059" strokeDasharray="4 8" />
          <circle cx="250" cy="250" r="240" strokeWidth="1" strokeDasharray="8 8" />
          <line x1="250" y1="0" x2="250" y2="500" strokeWidth="0.5" opacity="0.4" />
          <line x1="0" y1="250" x2="500" y2="250" strokeWidth="0.5" opacity="0.4" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Office & Authority Info (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3.5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ECE7F2] text-[#533278] text-xs font-extrabold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                Sobha Ivory II • Business Bay HQ
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F0C1B] tracking-tight font-display">
                Let’s Start a Conversation.
              </h2>
              <p className="text-sm sm:text-base text-[#5C586E] leading-relaxed">
                Connect directly with our senior tax agents and advisory directors to discuss your business structure, tax position, or financial operations in Dubai.
              </p>
            </div>

            {/* Direct Contact Cards with Micro-Parallax & Glow */}
            <div className="space-y-4">
              <div className="group p-5 rounded-3xl bg-[#FAF8FC] hover:bg-white border border-[#EBE5F1] hover:border-[#C5A059]/60 hover:shadow-lg transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#533278]/10 text-[#533278] group-hover:bg-[#533278] group-hover:text-white flex items-center justify-center shrink-0 mt-0.5 transition-colors duration-300 shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#A191B2]">
                      Dubai Office
                    </div>
                    <div className="text-sm font-bold text-[#0F0C1B] mt-0.5 font-display">
                      Office 706, Sobha Ivory II
                    </div>
                    <div className="text-xs text-[#5C586E] mt-0.5">
                      Business Bay, Dubai, United Arab Emirates
                    </div>
                  </div>
                </div>

                {/* Authentic Sobha Ivory II Google Maps Showcase */}
                <div className="relative rounded-2xl overflow-hidden border border-[#EBE5F1] group/media bg-[#0F0C1B] shadow-inner">
                  {/* Decorative Blueprint Corner Crosshairs */}
                  <span className="absolute top-2 left-2 text-[#C5A059] text-xs font-mono select-none z-20 opacity-80" aria-hidden="true">+</span>
                  <span className="absolute top-2 right-2 text-[#C5A059] text-xs font-mono select-none z-20 opacity-80" aria-hidden="true">+</span>
                  <span className="absolute bottom-2 left-2 text-[#C5A059] text-xs font-mono select-none z-20 opacity-80" aria-hidden="true">+</span>
                  <span className="absolute bottom-2 right-2 text-[#C5A059] text-xs font-mono select-none z-20 opacity-80" aria-hidden="true">+</span>

                  {/* Toggle tabs for Tower vs Map */}
                  <div className="absolute top-2.5 right-2.5 z-20 flex items-center gap-1 bg-[#0F0C1B]/80 backdrop-blur-md p-1 rounded-full border border-white/15">
                    <button
                      type="button"
                      onClick={() => setLocationTab("facade")}
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide transition-all ${
                        locationTab === "facade"
                          ? "bg-[#533278] text-white shadow-sm"
                          : "text-white/70 hover:text-white"
                      }`}
                    >
                      Building Facade
                    </button>
                    <button
                      type="button"
                      onClick={() => setLocationTab("map")}
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide transition-all ${
                        locationTab === "map"
                          ? "bg-[#533278] text-white shadow-sm"
                          : "text-white/70 hover:text-white"
                      }`}
                    >
                      Google Map
                    </button>
                  </div>

                  {/* Image Display */}
                  <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                    {locationTab === "facade" ? (
                      <Image
                        src="/assets/sobha-ivory-2.jpg"
                        alt="Sobha Ivory II Business Bay Dubai Headquarters"
                        width={700}
                        height={300}
                        className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover/media:scale-105"
                      />
                    ) : (
                      <Image
                        src="/assets/dubai-office-map.png"
                        alt="MNV Associates Google Maps location at Sobha Ivory II"
                        width={700}
                        height={300}
                        className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover/media:scale-105"
                      />
                    )}
                    {/* Bottom gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F0C1B]/90 via-[#0F0C1B]/25 to-transparent pointer-events-none" />
                  </div>

                  {/* Bottom Info Bar inside Card */}
                  <div className="absolute bottom-0 inset-x-0 p-3 z-20 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-[11px] text-white/90">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="font-medium text-[11px] tracking-tight">Sobha Ivory II • Business Bay</span>
                    </div>

                    <a
                      href="https://maps.app.goo.gl/hX7BNUhhFixbVBm17"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A059] hover:bg-[#d8b56d] text-[#0F0C1B] text-[10px] font-extrabold uppercase tracking-wider transition-colors shadow-sm"
                    >
                      <span>Open in Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="group p-5 rounded-3xl bg-[#FAF8FC] hover:bg-white border border-[#EBE5F1] hover:border-[#C5A059]/60 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#533278]/10 text-[#533278] group-hover:bg-[#533278] group-hover:text-white flex items-center justify-center shrink-0 mt-0.5 transition-colors duration-300 shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#A191B2]">
                    Telephone & Mobile
                  </div>
                  <div className="text-sm font-bold text-[#0F0C1B] mt-0.5 font-display">
                    <a href="tel:+97145767094" className="hover:text-[#533278] transition-colors">
                      +971 4 576 7094
                    </a>
                  </div>
                  <div className="text-xs text-[#5C586E] mt-0.5">
                    Mobile / WhatsApp:{" "}
                    <a href="tel:+971563750931" className="hover:text-[#533278] font-bold text-[#0F0C1B] transition-colors">
                      +971 56 375 0931
                    </a>
                  </div>
                </div>
              </div>

              <div className="group p-5 rounded-3xl bg-[#FAF8FC] hover:bg-white border border-[#EBE5F1] hover:border-[#C5A059]/60 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#533278]/10 text-[#533278] group-hover:bg-[#533278] group-hover:text-white flex items-center justify-center shrink-0 mt-0.5 transition-colors duration-300 shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#A191B2]">
                    Advisory Inquiries
                  </div>
                  <div className="text-sm font-bold text-[#0F0C1B] mt-0.5 font-display">
                    <a href="mailto:info@mnvassociates.com" className="hover:text-[#533278] transition-colors">
                      info@mnvassociates.com
                    </a>
                  </div>
                  <div className="text-xs text-[#5C586E] mt-0.5">
                    Guaranteed response within 24 business hours
                  </div>
                </div>
              </div>

              <div className="group p-5 rounded-3xl bg-[#FAF8FC] hover:bg-white border border-[#EBE5F1] hover:border-[#C5A059]/60 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#533278]/10 text-[#533278] group-hover:bg-[#533278] group-hover:text-white flex items-center justify-center shrink-0 mt-0.5 transition-colors duration-300 shadow-sm">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#A191B2]">
                    Operating Hours
                  </div>
                  <div className="text-sm font-bold text-[#0F0C1B] mt-0.5 font-display">
                    Monday – Friday: 9:00 AM – 6:00 PM
                  </div>
                  <div className="text-xs text-[#5C586E] mt-0.5">
                    Gulf Standard Time (GST) • Saturday & Sunday by appointment
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form encased in Conic Border Light (7 cols) */}
          <div className="lg:col-span-7">
            <div className="conic-border-glow p-[1.5px] rounded-3xl shadow-2xl">
              <div className="rounded-3xl bg-white p-8 sm:p-10">
                {submitted ? (
                  <div className="text-center py-12 space-y-4 animate-in fade-in duration-300">
                    <div className="w-18 h-18 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F0C1B] font-display">
                      Consultation Request Received
                    </h3>
                    <p className="text-sm text-[#5C586E] max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-[#0F0C1B]">{formData.name}</strong>. A senior advisor from our Business Bay office will contact you via {formData.email || formData.phone} within 24 business hours.
                    </p>
                    <div className="pt-4">
                      <button
                        onClick={() => setSubmitted(false)}
                        className="text-xs font-extrabold uppercase tracking-wider text-[#533278] hover:text-[#432662]"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-1.5 pb-2 border-b border-[#F5F2F8]">
                      <span className="text-xs font-extrabold uppercase tracking-widest text-[#533278] flex items-center gap-1.5">
                        <Building className="w-3.5 h-3.5 text-[#C5A059]" /> Schedule Strategy Session
                      </span>
                      <h3 className="text-2xl font-extrabold text-[#0F0C1B] font-display">
                        Request a Confidential Advisory Review
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-[#0F0C1B]">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Tariq Al-Hashimi"
                          className="w-full px-4 py-3.5 rounded-2xl bg-[#FAF8FC] border border-[#EBE5F1] focus:bg-white focus:border-[#533278] outline-none text-xs text-[#0F0C1B] transition-all duration-200"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-[#0F0C1B]">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@company.ae"
                          className="w-full px-4 py-3.5 rounded-2xl bg-[#FAF8FC] border border-[#EBE5F1] focus:bg-white focus:border-[#533278] outline-none text-xs text-[#0F0C1B] transition-all duration-200"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-[#0F0C1B]">
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+971 50 123 4567"
                          className="w-full px-4 py-3.5 rounded-2xl bg-[#FAF8FC] border border-[#EBE5F1] focus:bg-white focus:border-[#533278] outline-none text-xs text-[#0F0C1B] transition-all duration-200"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-[#0F0C1B]">
                          Practice Area Required *
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-2xl bg-[#FAF8FC] border border-[#EBE5F1] focus:bg-white focus:border-[#533278] outline-none text-xs text-[#0F0C1B] transition-all duration-200 cursor-pointer"
                        >
                          {servicesData.map((s) => (
                            <option key={s.id} value={s.name}>
                              {s.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#0F0C1B]">
                        Business Jurisdiction
                      </label>
                      <select
                        value={formData.jurisdiction}
                        onChange={(e) => setFormData({ ...formData, jurisdiction: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-2xl bg-[#FAF8FC] border border-[#EBE5F1] focus:bg-white focus:border-[#533278] outline-none text-xs text-[#0F0C1B] transition-all duration-200 cursor-pointer"
                      >
                        <option value="UAE Mainland">UAE Mainland (DET / DED Licensed)</option>
                        <option value="DIFC">Dubai International Financial Centre (DIFC)</option>
                        <option value="DMCC">Dubai Multi Commodities Centre (DMCC)</option>
                        <option value="Other Free Zone">Other UAE Free Zone (DAFZA, IFZA, JAFZA, etc.)</option>
                        <option value="International Entity">Foreign Entity Expanding to the UAE</option>
                        <option value="Pre-Formation">New Startup / Licensing Stage</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#0F0C1B]">
                        Brief Context or Question (Optional)
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="e.g. Assessing 9% Corporate Tax impact on our group or exploring fractional CFO options..."
                        className="w-full px-4 py-3.5 rounded-2xl bg-[#FAF8FC] border border-[#EBE5F1] focus:bg-white focus:border-[#533278] outline-none text-xs text-[#0F0C1B] transition-all duration-200 resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-2.5 text-xs font-extrabold uppercase tracking-wider text-white bg-gradient-to-r from-[#533278] via-[#432662] to-[#2F1A46] py-4 rounded-full shadow-xl shadow-[#533278]/25 hover:shadow-2xl transition-all duration-300 shimmer-sweep disabled:opacity-50 active:scale-[0.98]"
                      >
                        <span>{loading ? "Submitting..." : "Schedule Strategy Session"}</span>
                        <ArrowRight className="w-4 h-4 text-[#E4C88A]" />
                      </button>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-[11px] text-[#5C586E] pt-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#533278]" />
                      <span>100% Confidential. Non-Disclosure Agreement (NDA) protected.</span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
