"use client";

import { useState } from "react";
import { X, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { servicesData } from "./ServicesMatrix";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
  defaultMessage?: string;
}

export default function ConsultationModal({
  isOpen,
  onClose,
  defaultService = "Corporate Tax",
  defaultMessage = "",
}: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: defaultService,
    notes: defaultMessage,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#EBE5F1] relative space-y-5">
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#635F74] hover:text-[#0F0C1B] hover:bg-[#F5F2F8] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-extrabold text-[#0F0C1B]">
              Consultation Scheduled
            </h3>
            <p className="text-xs text-[#635F74] leading-relaxed">
              Thank you, <strong className="text-[#0F0C1B]">{formData.name}</strong>. Our senior advisory partner from Sobha Ivory II, Business Bay will connect with you within 24 hours.
            </p>
            <button
              onClick={handleClose}
              className="text-xs font-bold uppercase tracking-wider text-white bg-[#533278] hover:bg-[#432662] px-6 py-2.5 rounded-xl transition-all"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#A191B2]">
                MNV Associates • Dubai
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F0C1B] mt-0.5">
                Schedule a Consultation
              </h3>
              <p className="text-xs text-[#635F74] mt-1">
                Direct advisory strategy session tailored to your UAE entity.
              </p>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-[#0F0C1B] block mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FBF9FD] border border-[#EBE5F1] text-xs text-[#0F0C1B] focus:border-[#533278] outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-[#0F0C1B] block mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="email@company.ae"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FBF9FD] border border-[#EBE5F1] text-xs text-[#0F0C1B] focus:border-[#533278] outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#0F0C1B] block mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+971 50 000 0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FBF9FD] border border-[#EBE5F1] text-xs text-[#0F0C1B] focus:border-[#533278] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-[#0F0C1B] block mb-1">
                  Service Area *
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FBF9FD] border border-[#EBE5F1] text-xs text-[#0F0C1B] focus:border-[#533278] outline-none"
                >
                  {servicesData.map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-[#0F0C1B] block mb-1">
                  Notes / Inquiry Scope
                </label>
                <textarea
                  rows={2}
                  placeholder="Share details on your tax or business setup goals..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FBF9FD] border border-[#EBE5F1] text-xs text-[#0F0C1B] focus:border-[#533278] outline-none resize-none"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-white bg-[#533278] hover:bg-[#432662] py-3.5 rounded-xl shadow-md transition-all disabled:opacity-50"
              >
                <span>{loading ? "Submitting..." : "Confirm Consultation Request"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#635F74]">
              <ShieldCheck className="w-3 h-3 text-[#533278]" />
              <span>Strictly confidential under UAE legal professional privacy standards.</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
