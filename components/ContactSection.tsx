"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 bg-white border-b border-[#EBE5F1] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ECE7F2] text-[#533278] text-xs font-bold uppercase tracking-wider">
                Sobha Ivory II • Business Bay HQ
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F0C1B] tracking-tight">
                Let’s Start a Conversation.
              </h2>
              <p className="text-sm text-[#635F74] leading-relaxed">
                Connect directly with our senior tax agents and advisory directors to discuss your business structure, tax position, or financial operations in Dubai.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-[#FBF9FD] border border-[#EBE5F1] flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#533278]/10 text-[#533278] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#A191B2]">
                    Dubai Office
                  </div>
                  <div className="text-sm font-bold text-[#0F0C1B] mt-0.5">
                    Office 706, Sobha Ivory II
                  </div>
                  <div className="text-xs text-[#635F74]">
                    Business Bay, Dubai, United Arab Emirates
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FBF9FD] border border-[#EBE5F1] flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#533278]/10 text-[#533278] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#A191B2]">
                    Telephone & Mobile
                  </div>
                  <div className="text-sm font-bold text-[#0F0C1B] mt-0.5">
                    <a href="tel:+97145767094" className="hover:text-[#533278] transition-colors">
                      +971 4 576 7094
                    </a>
                  </div>
                  <div className="text-xs text-[#635F74]">
                    Mobile / WhatsApp:{" "}
                    <a href="tel:+971563750931" className="hover:text-[#533278] font-medium transition-colors">
                      +971 56 375 0931
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FBF9FD] border border-[#EBE5F1] flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#533278]/10 text-[#533278] flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#A191B2]">
                    Advisory Inquiries
                  </div>
                  <div className="text-sm font-bold text-[#0F0C1B] mt-0.5">
                    <a href="mailto:info@mnvassociates.com" className="hover:text-[#533278] transition-colors">
                      info@mnvassociates.com
                    </a>
                  </div>
                  <div className="text-xs text-[#635F74]">
                    Guaranteed response within 24 business hours
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FBF9FD] border border-[#EBE5F1] flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#533278]/10 text-[#533278] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#A191B2]">
                    Operating Hours
                  </div>
                  <div className="text-sm font-bold text-[#0F0C1B] mt-0.5">
                    Monday – Friday: 9:00 AM – 6:00 PM
                  </div>
                  <div className="text-xs text-[#635F74]">
                    Gulf Standard Time (GST) • Saturday & Sunday by appointment
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#FBF9FD] border border-[#EBE5F1] p-8 sm:p-10 shadow-lg">
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#0F0C1B]">
                    Consultation Request Received
                  </h3>
                  <p className="text-sm text-[#635F74] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#0F0C1B]">{formData.name}</strong>. A senior advisor from our Business Bay office will contact you via {formData.email || formData.phone} within 24 business hours.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-bold uppercase tracking-wider text-[#533278] hover:text-[#432662]"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#533278]">
                      Schedule Strategy Session
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0F0C1B]">
                      Request a Confidential Advisory Review
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#0F0C1B]">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Tariq Al-Hashimi"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#EBE5F1] focus:border-[#533278] focus:ring-1 focus:ring-[#533278] outline-none text-xs text-[#0F0C1B] transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#0F0C1B]">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.ae"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#EBE5F1] focus:border-[#533278] focus:ring-1 focus:ring-[#533278] outline-none text-xs text-[#0F0C1B] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#0F0C1B]">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+971 50 123 4567"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#EBE5F1] focus:border-[#533278] focus:ring-1 focus:ring-[#533278] outline-none text-xs text-[#0F0C1B] transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#0F0C1B]">
                        Practice Area Required *
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#EBE5F1] focus:border-[#533278] focus:ring-1 focus:ring-[#533278] outline-none text-xs text-[#0F0C1B] transition-all"
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
                    <label className="text-xs font-semibold text-[#0F0C1B]">
                      Business Jurisdiction
                    </label>
                    <select
                      value={formData.jurisdiction}
                      onChange={(e) => setFormData({ ...formData, jurisdiction: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#EBE5F1] focus:border-[#533278] focus:ring-1 focus:ring-[#533278] outline-none text-xs text-[#0F0C1B] transition-all"
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
                    <label className="text-xs font-semibold text-[#0F0C1B]">
                      Brief Context or Question (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. Assessing 9% Corporate Tax impact on our group or exploring fractional CFO options..."
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#EBE5F1] focus:border-[#533278] focus:ring-1 focus:ring-[#533278] outline-none text-xs text-[#0F0C1B] transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-white bg-[#533278] hover:bg-[#432662] py-4 rounded-xl shadow-lg shadow-[#533278]/25 transition-all disabled:opacity-50"
                    >
                      <span>{loading ? "Submitting..." : "Schedule Strategy Session"}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-[#635F74] pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#533278]" />
                    <span>100% Confidential. Non-Disclosure Agreement (NDA) protected.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
