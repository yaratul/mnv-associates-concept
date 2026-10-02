"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, ArrowUpRight, Menu, X, ChevronDown, ShieldCheck, Mail } from "lucide-react";

interface NavbarProps {
  onOpenConsultation: () => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const coreServices = [
    { name: "Corporate Tax", href: "#services-matrix", category: "Taxation" },
    { name: "VAT Compliance", href: "#services-matrix", category: "Taxation" },
    { name: "Transfer Pricing", href: "#services-matrix", category: "Taxation" },
    { name: "Accounting & Bookkeeping", href: "#services-matrix", category: "Accounting & CFO" },
    { name: "Fractional CFO Advisory", href: "#services-matrix", category: "Accounting & CFO" },
    { name: "Business Setup & Licensing", href: "#services-matrix", category: "Advisory" },
    { name: "Compliance & AML", href: "#services-matrix", category: "Advisory" },
    { name: "HR Advisory & Payroll", href: "#services-matrix", category: "BPS" },
    { name: "Business Advisory & M&A", href: "#services-matrix", category: "Advisory" },
  ];

  return (
    <>
      {/* Top Regional Trust Ribbon */}
      <div className="bg-[#0F0C1B] text-white/90 text-xs py-2 px-4 sm:px-8 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-[#A191B2]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#A191B2]" />
              FTA Registered Tax Agents & Advisory Specialists
            </span>
            <span className="text-white/40">|</span>
            <span className="text-white/70">
              Office 706, Sobha Ivory II, Business Bay, Dubai, UAE
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="tel:+97145767094"
              className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-[#A191B2]" />
              +971 4 576 7094
            </a>
            <span className="text-white/30">•</span>
            <a
              href="mailto:info@mnvassociates.com"
              className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors"
            >
              <Mail className="w-3 h-3 text-[#A191B2]" />
              info@mnvassociates.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "glass-header glass-header-scrolled py-3"
            : "bg-white/95 backdrop-blur-md py-4 border-b border-neutral-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Tagline */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#533278] flex items-center justify-center text-white font-extrabold text-xl shadow-md shadow-[#533278]/20 group-hover:scale-105 transition-transform">
              M
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-[#0F0C1B] leading-tight">
                MNV <span className="text-[#533278] font-bold text-base">ASSOCIATES</span>
              </span>
              <span className="text-[11px] font-medium text-[#A191B2] tagline-badge">
                unlock your growth
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                className="flex items-center gap-1.5 text-sm font-semibold text-[#0F0C1B] hover:text-[#533278] transition-colors py-2"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 text-[#A191B2] transition-transform duration-200 ${
                    servicesDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-[#EBE5F1] p-4 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#A191B2]">
                    All 9 Practice Areas
                  </div>
                  <div className="mt-1 divide-y divide-[#F5F2F8]">
                    {coreServices.map((service, idx) => (
                      <a
                        key={idx}
                        href={service.href}
                        onClick={() => setServicesDropdownOpen(false)}
                        className="flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-medium text-[#0F0C1B] hover:bg-[#FBF9FD] hover:text-[#533278] transition-colors"
                      >
                        <span>{service.name}</span>
                        <span className="text-[10px] text-[#A191B2] bg-[#F5F2F8] px-2 py-0.5 rounded-full">
                          {service.category}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a
              href="#tax-readiness"
              className="text-sm font-semibold text-[#0F0C1B] hover:text-[#533278] transition-colors"
            >
              Tax Assessment
            </a>

            <a
              href="#why-mnv"
              className="text-sm font-semibold text-[#0F0C1B] hover:text-[#533278] transition-colors"
            >
              Why MNV
            </a>

            <a
              href="#insights"
              className="text-sm font-semibold text-[#0F0C1B] hover:text-[#533278] transition-colors"
            >
              Insights
            </a>

            <a
              href="#contact"
              className="text-sm font-semibold text-[#0F0C1B] hover:text-[#533278] transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Desktop Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+971563750931"
              className="flex items-center gap-2 text-xs font-semibold text-[#533278] hover:text-[#432662] px-3 py-2 rounded-xl bg-[#F5F2F8] transition-colors"
              title="Direct Advisory Hotline"
            >
              <Phone className="w-3.5 h-3.5 text-[#533278]" />
              <span>+971 56 375 0931</span>
            </a>

            <button
              onClick={onOpenConsultation}
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white bg-[#533278] hover:bg-[#432662] px-5 py-2.5 rounded-xl shadow-md shadow-[#533278]/25 hover:shadow-lg hover:shadow-[#533278]/30 transition-all active:scale-[0.98]"
            >
              <span>Book Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-[#0F0C1B] hover:bg-[#F5F2F8] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#EBE5F1] bg-white px-4 pt-3 pb-6 space-y-4 shadow-xl">
            <div className="text-xs font-semibold text-[#A191B2] uppercase tracking-wider px-2 pt-2">
              Practice Areas (9 Services)
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {coreServices.map((service, idx) => (
                <a
                  key={idx}
                  href={service.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-2.5 py-2 rounded-lg bg-[#FBF9FD] text-[#0F0C1B] font-medium hover:bg-[#ECE7F2] hover:text-[#533278] transition-colors"
                >
                  {service.name}
                </a>
              ))}
            </div>

            <div className="border-t border-[#F5F2F8] pt-3 flex flex-col gap-2">
              <a
                href="#tax-readiness"
                onClick={() => setMobileMenuOpen(false)}
                className="px-2 py-2 text-sm font-semibold text-[#0F0C1B] hover:text-[#533278]"
              >
                UAE Tax Readiness Check
              </a>
              <a
                href="#why-mnv"
                onClick={() => setMobileMenuOpen(false)}
                className="px-2 py-2 text-sm font-semibold text-[#0F0C1B] hover:text-[#533278]"
              >
                Why MNV vs. Big 4
              </a>
              <a
                href="#insights"
                onClick={() => setMobileMenuOpen(false)}
                className="px-2 py-2 text-sm font-semibold text-[#0F0C1B] hover:text-[#533278]"
              >
                Insights & Updates
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-2 py-2 text-sm font-semibold text-[#0F0C1B] hover:text-[#533278]"
              >
                Contact & Location
              </a>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-white bg-[#533278] hover:bg-[#432662] py-3 rounded-xl shadow-md"
              >
                <span>Book Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <a
                href="tel:+97145767094"
                className="w-full text-center text-xs font-semibold text-[#533278] py-2.5 rounded-xl bg-[#F5F2F8]"
              >
                Call Dubai Office: +971 4 576 7094
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
