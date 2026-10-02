"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Phone, ArrowUpRight, Menu, X, ChevronDown, ShieldCheck, Mail, Sparkles } from "lucide-react";

interface NavbarProps {
  onOpenConsultation: () => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  // Sliding pill hover state
  const [hoveredNavIndex, setHoveredNavIndex] = useState<number | null>(null);
  const [pillStyle, setPillStyle] = useState<{ left: number; width: number; opacity: number }>({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const navContainerRef = useRef<HTMLDivElement>(null);
  const navItemsRef = useRef<(HTMLAnchorElement | HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnterItem = (index: number) => {
    setHoveredNavIndex(index);
    const item = navItemsRef.current[index];
    const container = navContainerRef.current;
    if (item && container) {
      const itemRect = item.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      setPillStyle({
        left: itemRect.left - containerRect.left,
        width: itemRect.width,
        opacity: 1,
      });
    }
  };

  const handleMouseLeaveNav = () => {
    setHoveredNavIndex(null);
    setPillStyle((prev) => ({ ...prev, opacity: 0 }));
  };

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
      {/* Top Regional Trust Ribbon with Shimmering Hairline */}
      <div className="relative bg-[#0F0C1B] text-white/90 text-xs py-2.5 px-4 sm:px-8 border-b border-white/10 hidden md:block overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-between relative z-10">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-[#A191B2]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="font-medium text-white/90">
                FTA Registered Tax Agents & Advisory Specialists
              </span>
            </span>
            <span className="text-white/20">|</span>
            <span className="text-white/70">
              Office 706, Sobha Ivory II, Business Bay, Dubai, UAE
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="tel:+97145767094"
              className="flex items-center gap-1.5 text-white/80 hover:text-[#E4C88A] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#C5A059]" />
              <span>+971 4 576 7094</span>
            </a>
            <span className="text-white/20">•</span>
            <a
              href="mailto:info@mnvassociates.com"
              className="flex items-center gap-1.5 text-white/80 hover:text-[#E4C88A] transition-colors"
            >
              <Mail className="w-3 h-3 text-[#C5A059]" />
              <span>info@mnvassociates.com</span>
            </a>
          </div>
        </div>
        {/* Shimmering hairline divider */}
        <div className="absolute bottom-0 left-0 right-0 h-[1.5px] hairline-shimmer" aria-hidden="true" />
      </div>

      {/* Main Sticky Navbar - Transforms to Floating Glass Pill on Scroll */}
      <header
        className={`sticky top-0 z-40 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isScrolled
            ? "py-2.5 px-3 sm:px-6"
            : "py-4 px-4 sm:px-8 bg-white/90 backdrop-blur-md border-b border-[#EBE5F1]"
        }`}
      >
        <div
          className={`max-w-7xl mx-auto transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex items-center justify-between ${
            isScrolled
              ? "bg-white/85 backdrop-blur-2xl px-6 py-2.5 rounded-full shadow-[0_12px_36px_-6px_rgba(83,50,120,0.18)] border border-[#A191B2]/30 ring-1 ring-black/[0.03]"
              : ""
          }`}
        >
          {/* Logo & Tagline */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#533278] via-[#432662] to-[#2F1A46] flex items-center justify-center text-white font-extrabold text-xl shadow-lg shadow-[#533278]/25 group-hover:scale-105 transition-transform duration-300">
              <span className="font-serif">M</span>
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#C5A059] ring-2 ring-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-[#0F0C1B] leading-tight font-display">
                MNV <span className="text-[#533278] font-bold text-base tracking-normal">ASSOCIATES</span>
              </span>
              <span className="text-[11px] font-medium text-[#A191B2] tagline-badge flex items-center gap-1.5">
                <span>unlock your growth</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links with Sliding Pill Indicator */}
          <nav
            ref={navContainerRef}
            onMouseLeave={handleMouseLeaveNav}
            className="hidden lg:flex items-center gap-1 relative p-1 rounded-full"
          >
            {/* Sliding Pill Background Element */}
            <div
              className="absolute top-1 bottom-1 rounded-full bg-[#ECE7F2]/80 backdrop-blur-sm pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                left: `${pillStyle.left}px`,
                width: `${pillStyle.width}px`,
                opacity: pillStyle.opacity,
              }}
              aria-hidden="true"
            />

            {/* Item 0: Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                setServicesDropdownOpen(true);
                handleMouseEnterItem(0);
              }}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                ref={(el) => { navItemsRef.current[0] = el; }}
                className="relative z-10 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0F0C1B] hover:text-[#533278] px-3.5 py-2 rounded-full transition-colors"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-[#A191B2] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    servicesDropdownOpen ? "rotate-180 text-[#533278]" : ""
                  }`}
                />
              </button>

              {/* Clip-Path Staggered Circle Reveal Dropdown */}
              {servicesDropdownOpen && (
                <div
                  className="absolute top-full left-0 w-84 bg-white/95 backdrop-blur-2xl rounded-3xl shadow-[0_20px_50px_-10px_rgba(83,50,120,0.22)] border border-[#EBE5F1] p-4 z-50 animate-in fade-in zoom-in-95 duration-200"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                  }}
                >
                  <div className="flex items-center justify-between px-3 py-1.5 border-b border-[#F5F2F8]">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#533278]">
                      All 9 Practice Areas
                    </span>
                    <span className="text-[9px] font-bold text-[#C5A059] bg-[#C5A059]/10 px-2 py-0.5 rounded-full">
                      FTA & DET Aligned
                    </span>
                  </div>
                  <div className="mt-2 divide-y divide-[#F5F2F8]">
                    {coreServices.map((service, idx) => (
                      <a
                        key={idx}
                        href={service.href}
                        onClick={() => setServicesDropdownOpen(false)}
                        className="group flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold text-[#0F0C1B] hover:bg-[#FBF9FD] hover:text-[#533278] transition-all duration-200"
                        style={{
                          animationDelay: `${idx * 25}ms`,
                        }}
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-200">
                          {service.name}
                        </span>
                        <span className="text-[10px] text-[#A191B2] bg-[#F5F2F8] group-hover:bg-[#ECE7F2] group-hover:text-[#533278] px-2 py-0.5 rounded-full transition-colors">
                          {service.category}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Item 1: Tax Assessment */}
            <a
              ref={(el) => { navItemsRef.current[1] = el; }}
              onMouseEnter={() => handleMouseEnterItem(1)}
              href="#tax-readiness"
              className="relative z-10 text-xs font-bold uppercase tracking-wider text-[#0F0C1B] hover:text-[#533278] px-3.5 py-2 rounded-full transition-colors flex items-center gap-1.5"
            >
              <span>Tax Assessment</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            </a>

            {/* Item 2: Why MNV */}
            <a
              ref={(el) => { navItemsRef.current[2] = el; }}
              onMouseEnter={() => handleMouseEnterItem(2)}
              href="#why-mnv"
              className="relative z-10 text-xs font-bold uppercase tracking-wider text-[#0F0C1B] hover:text-[#533278] px-3.5 py-2 rounded-full transition-colors"
            >
              Why MNV
            </a>

            {/* Item 3: Insights */}
            <a
              ref={(el) => { navItemsRef.current[3] = el; }}
              onMouseEnter={() => handleMouseEnterItem(3)}
              href="#insights"
              className="relative z-10 text-xs font-bold uppercase tracking-wider text-[#0F0C1B] hover:text-[#533278] px-3.5 py-2 rounded-full transition-colors"
            >
              Insights
            </a>

            {/* Item 4: Contact */}
            <a
              ref={(el) => { navItemsRef.current[4] = el; }}
              onMouseEnter={() => handleMouseEnterItem(4)}
              href="#contact"
              className="relative z-10 text-xs font-bold uppercase tracking-wider text-[#0F0C1B] hover:text-[#533278] px-3.5 py-2 rounded-full transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Desktop Right Actions: Phone + Animated Conic Border CTA */}
          <div className="hidden lg:flex items-center gap-3.5">
            <a
              href="tel:+971563750931"
              className="flex items-center gap-2 text-xs font-semibold text-[#533278] hover:text-[#2F1A46] px-3.5 py-2 rounded-full bg-[#F5F2F8] hover:bg-[#ECE7F2] transition-all"
              title="Direct Advisory Hotline"
            >
              <Phone className="w-3.5 h-3.5 text-[#533278]" />
              <span>+971 56 375 0931</span>
            </a>

            {/* Conic-Border Animated Magnetic CTA */}
            <div className="conic-border-glow p-[1px] rounded-full">
              <button
                onClick={onOpenConsultation}
                className="relative overflow-hidden group flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-white bg-gradient-to-r from-[#533278] via-[#432662] to-[#2F1A46] px-5 py-2.5 rounded-full shadow-lg shadow-[#533278]/25 hover:shadow-xl hover:shadow-[#533278]/35 transition-all duration-300 active:scale-[0.98] shimmer-sweep"
              >
                <span>Book Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-2xl text-[#0F0C1B] hover:bg-[#F5F2F8] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 mx-2 rounded-3xl border border-[#EBE5F1] bg-white/95 backdrop-blur-2xl px-5 pt-4 pb-6 space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-3 duration-300">
            <div className="flex items-center justify-between px-1">
              <span className="text-[11px] font-extrabold text-[#A191B2] uppercase tracking-wider">
                Practice Areas (9 Services)
              </span>
              <span className="text-[10px] text-[#C5A059] font-bold">Sobha Ivory II</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {coreServices.map((service, idx) => (
                <a
                  key={idx}
                  href={service.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-xl bg-[#FBF9FD] text-[#0F0C1B] font-semibold hover:bg-[#ECE7F2] hover:text-[#533278] transition-colors flex items-center justify-between"
                >
                  <span className="truncate">{service.name}</span>
                </a>
              ))}
            </div>

            <div className="border-t border-[#F5F2F8] pt-3 flex flex-col gap-2 text-xs font-bold uppercase tracking-wider">
              <a
                href="#tax-readiness"
                onClick={() => setMobileMenuOpen(false)}
                className="px-2 py-2 text-[#0F0C1B] hover:text-[#533278] flex items-center justify-between"
              >
                <span>UAE Tax Readiness Check</span>
                <span className="text-[10px] text-[#C5A059] font-normal lowercase tracking-normal">2 min</span>
              </a>
              <a
                href="#why-mnv"
                onClick={() => setMobileMenuOpen(false)}
                className="px-2 py-2 text-[#0F0C1B] hover:text-[#533278]"
              >
                Why MNV vs. Big 4
              </a>
              <a
                href="#insights"
                onClick={() => setMobileMenuOpen(false)}
                className="px-2 py-2 text-[#0F0C1B] hover:text-[#533278]"
              >
                Insights & Updates
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-2 py-2 text-[#0F0C1B] hover:text-[#533278]"
              >
                Contact & Location
              </a>
            </div>

            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full flex items-center justify-center gap-2 text-xs font-extrabold uppercase tracking-wider text-white bg-gradient-to-r from-[#533278] to-[#2F1A46] py-3.5 rounded-xl shadow-lg"
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
