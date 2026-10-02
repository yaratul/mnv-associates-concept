"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { ArrowRight, ShieldCheck, CheckCircle2, Building2, TrendingUp, Sparkles, ExternalLink } from "lucide-react";

interface HeroProps {
  onOpenConsultation: () => void;
}

export default function Hero({ onOpenConsultation }: HeroProps) {
  // 3D Tilt calculation state for the right-side bento card
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [cardMousePos, setCardMousePos] = useState({ x: 50, y: 50 });
  const cardRef = useRef<HTMLDivElement>(null);

  // Animated count-up simulation for metrics
  const [animatedVolume, setAnimatedVolume] = useState(0);
  const [animatedClients, setAnimatedClients] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1600;
    const startTime = performance.now();

    const animateMetrics = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);

      setAnimatedVolume(Number((eased * 1.2).toFixed(1)));
      setAnimatedClients(Math.floor(eased * 500));

      if (progress < 1) {
        requestAnimationFrame(animateMetrics);
      } else {
        setAnimatedVolume(1.2);
        setAnimatedClients(500);
      }
    };

    requestAnimationFrame(animateMetrics);
  }, []);

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;

    setTilt({ x: rotateX, y: rotateY });
    setCardMousePos({
      x: Math.round((x / rect.width) * 100),
      y: Math.round((y / rect.height) * 100),
    });
  };

  const handleCardMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setCardMousePos({ x: 50, y: 50 });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF8FC] via-white to-white pt-10 pb-20 lg:pt-16 lg:pb-28 border-b border-[#EBE5F1]">
      {/* Layer 1: Animated Gradient Mesh Blobs */}
      <div
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#533278]/15 via-[#A191B2]/10 to-transparent blur-3xl animate-blob-1 pointer-events-none"
        aria-hidden="true"
      ></div>
      <div
        className="absolute top-1/3 -right-32 w-[550px] h-[550px] rounded-full bg-gradient-to-bl from-[#C5A059]/12 via-[#533278]/10 to-transparent blur-3xl animate-blob-2 pointer-events-none"
        aria-hidden="true"
      ></div>

      {/* Layer 2: Architectural Blueprint Grid with Radial Fade */}
      <div className="absolute inset-0 blueprint-grid pointer-events-none opacity-45" aria-hidden="true" />

      {/* Layer 3: Stylized Dubai Skyline Blueprint Silhouette (SVG) */}
      <div
        className="absolute bottom-0 left-0 right-0 h-44 pointer-events-none opacity-25 overflow-hidden flex items-end justify-center"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1200 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full max-w-7xl h-auto stroke-[#533278] stroke-[1] stroke-dasharray-[4 4]"
        >
          <path d="M50 180 L50 140 L70 140 L70 180 M90 180 L90 110 L130 110 L130 180" opacity="0.4" />
          <path d="M150 180 L150 90 L180 70 L210 90 L210 180" opacity="0.6" />
          <path d="M240 180 L240 120 L270 120 L270 180 M290 180 L290 80 L330 80 L330 180" opacity="0.5" />
          <path d="M480 180 L480 50 L500 50 L500 180 M510 180 L510 20 L530 10 L550 20 L550 180" opacity="0.8" />
          <path d="M580 180 L580 70 L595 40 L600 0 L605 40 L620 70 L620 180" stroke="#C5A059" opacity="0.9" />
          <path d="M650 180 L650 60 L680 40 L710 60 L710 180" opacity="0.7" />
          <path d="M740 180 L740 100 L780 100 L780 180 M800 180 L800 70 L840 70 L840 180" opacity="0.5" />
          <path d="M870 180 L870 130 L910 130 L910 180 M940 180 L940 90 L980 90 L980 180" opacity="0.4" />
          <line x1="0" y1="179" x2="1200" y2="179" stroke="#A191B2" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Headline, Subheadline, Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-7 text-left">
            {/* Tagline Badge with Champagne Gold Dot */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#A191B2]/30 shadow-sm text-[#533278] text-xs font-semibold backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="tagline-badge font-bold">unlock your growth</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] ring-2 ring-[#C5A059]/30" />
              <span className="text-[#635F74] font-medium">Dubai & UAE Advisory</span>
            </div>

            {/* Word-by-Word Reveal Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F0C1B] leading-[1.14] font-display">
              <span className="block overflow-hidden">
                <span className="inline-block animate-in slide-in-from-bottom-6 duration-700">
                  Strategic Tax & Advisory
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className="inline-block animate-in slide-in-from-bottom-6 duration-700 delay-100">
                  for Dubai’s Next Era of{" "}
                  <span className="relative inline-block font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#533278] via-[#7045A0] to-[#C5A059] pr-1">
                    Growth.
                  </span>
                </span>
              </span>
            </h1>

            {/* Subheadline with Fine Typography */}
            <p className="text-base sm:text-lg text-[#5C586E] max-w-2xl leading-relaxed font-normal">
              Bridging Big 4 rigor with boutique agility. We provide end-to-end{" "}
              <strong className="text-[#0F0C1B] font-semibold">Corporate Tax, VAT, Transfer Pricing, CFO Advisory</strong>, and{" "}
              <strong className="text-[#0F0C1B] font-semibold">Business Solutions</strong> for startups, SMEs, and multinationals across the UAE mainland and free zones.
            </p>

            {/* Actions: Primary Ripple CTA + Secondary Outline Draw */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <div className="conic-border-glow p-[1px] rounded-2xl">
                <button
                  onClick={onOpenConsultation}
                  className="w-full sm:w-auto relative overflow-hidden group flex items-center justify-center gap-3 text-xs font-extrabold uppercase tracking-wider text-white bg-gradient-to-r from-[#533278] via-[#432662] to-[#2F1A46] px-8 py-4 rounded-2xl shadow-xl shadow-[#533278]/25 hover:shadow-2xl hover:shadow-[#533278]/40 transition-all duration-300 active:scale-[0.98] shimmer-sweep"
                >
                  <span>Schedule a Consultation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>

              <a
                href="#services-matrix"
                className="relative overflow-hidden group flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0F0C1B] hover:text-[#533278] px-7 py-4 rounded-2xl bg-white/95 border border-[#EBE5F1] hover:border-[#A191B2] shadow-sm hover:shadow-md transition-all duration-300"
              >
                <span>Explore 9 Practice Areas</span>
              </a>
            </div>

            {/* Authority Micro-Pillars with Staggered Entrance */}
            <div className="pt-4 border-t border-[#EBE5F1]/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-[#0F0C1B]">
              <div className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-white/80 transition-colors group">
                <ShieldCheck className="w-4 h-4 text-[#533278] group-hover:scale-110 transition-transform shrink-0" />
                <span className="font-semibold text-xs text-[#0F0C1B]">FTA Registered Tax Agents</span>
              </div>
              <div className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-white/80 transition-colors group">
                <Building2 className="w-4 h-4 text-[#533278] group-hover:scale-110 transition-transform shrink-0" />
                <span className="font-semibold text-xs text-[#0F0C1B]">Business Bay, Dubai HQ</span>
              </div>
              <div className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-white/80 transition-colors group col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] group-hover:scale-110 transition-transform shrink-0" />
                <span className="font-semibold text-xs text-[#0F0C1B]">100% Audit Readiness</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Cursor-Tilting Bento Card with Orbiting Border Beam (5 cols) */}
          <div className="lg:col-span-5 relative perspective-1000">
            {/* Ambient Violet-Gold Backlight */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#533278]/25 via-[#C5A059]/20 to-[#A191B2]/30 blur-2xl opacity-70 pointer-events-none" />

            <div
              ref={cardRef}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              style={{
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transition: "transform 0.15s ease-out",
                "--card-x": `${cardMousePos.x}%`,
                "--card-y": `${cardMousePos.y}%`,
              } as React.CSSProperties}
              className="conic-border-glow-dark p-[1.5px] rounded-3xl shadow-2xl relative"
            >
              <div className="relative rounded-3xl bg-gradient-to-b from-[#161226] via-[#110D20] to-[#0A0714] p-7 sm:p-8 text-white space-y-6 overflow-hidden spotlight-card">
                {/* Subtle Inner Glow Spotlight */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-40"
                  style={{
                    background: `radial-gradient(400px circle at ${cardMousePos.x}% ${cardMousePos.y}%, rgba(197, 160, 89, 0.25), transparent 70%)`,
                  }}
                  aria-hidden="true"
                />

                {/* Card Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 relative z-10">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                    </span>
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#A191B2]">
                      UAE Fiscal Landscape 2026
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-[#E4C88A] bg-[#C5A059]/15 border border-[#C5A059]/30 px-3 py-1 rounded-full backdrop-blur-sm">
                    Business Bay
                  </span>
                </div>

                {/* Primary Stat Highlight with Count-Up */}
                <div className="space-y-1.5 relative z-10">
                  <div className="flex items-baseline justify-between">
                    <span className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#ECE7F2] to-[#E4C88A] tracking-tight font-display">
                      AED {animatedVolume}B+
                    </span>
                    <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                      <TrendingUp className="w-3 h-3 text-emerald-400" /> Verified
                    </span>
                  </div>
                  <p className="text-xs text-[#A191B2] leading-relaxed">
                    In transactional volume, M&A due diligence, and capital structuring advised.
                  </p>
                </div>

                {/* Grid Metrics Bento */}
                <div className="grid grid-cols-2 gap-3.5 pt-2 relative z-10">
                  <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#A191B2]/50 transition-colors group">
                    <div className="text-2xl sm:text-3xl font-bold text-white group-hover:text-[#E4C88A] transition-colors">
                      {animatedClients}+
                    </div>
                    <div className="text-[11px] text-[#A191B2] mt-1 font-medium">Corporate Clients Scaled</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#533278]/20 border border-[#533278]/40 hover:border-[#C5A059]/50 transition-colors group">
                    <div className="text-2xl sm:text-3xl font-bold text-[#E4C88A]">9%</div>
                    <div className="text-[11px] text-[#A191B2] mt-1 font-medium">Corporate Tax Optimization</div>
                  </div>
                </div>

                {/* Assessment Tool Teaser Button inside Card */}
                <div className="pt-2 relative z-10">
                  <a
                    href="#tax-readiness"
                    className="w-full flex items-center justify-between px-4 py-3.5 rounded-2xl bg-gradient-to-r from-[#533278] via-[#432662] to-[#2F1A46] text-white hover:from-[#7045A0] hover:to-[#533278] transition-all group shadow-xl border border-white/10 shimmer-sweep"
                  >
                    <div className="text-left">
                      <div className="text-xs font-bold flex items-center gap-1.5">
                        <span>UAE Corporate Tax Readiness Check</span>
                      </div>
                      <div className="text-[10px] text-[#A191B2]">
                        Instant 2-minute diagnostic for 2026 filings
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#E4C88A] group-hover:translate-x-1 group-hover:text-white transition-all" />
                  </a>
                </div>

                {/* Office Location Footnote with Sobha Ivory II Google Maps link */}
                <div className="pt-3 border-t border-white/10 relative z-10 flex items-center justify-between">
                  <a
                    href="https://maps.app.goo.gl/hX7BNUhhFixbVBm17"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 group/loc hover:opacity-90 transition-opacity"
                  >
                    <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-[#C5A059]/40 shadow-sm shrink-0">
                      <Image
                        src="/assets/sobha-ivory-2.jpg"
                        alt="Sobha Ivory II Business Bay"
                        fill
                        className="object-cover group-hover/loc:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="text-left">
                      <div className="text-[11px] font-bold text-white group-hover/loc:text-[#E4C88A] transition-colors flex items-center gap-1">
                        <span>Sobha Ivory II, Business Bay</span>
                        <ExternalLink className="w-2.5 h-2.5 opacity-60 group-hover/loc:opacity-100" />
                      </div>
                      <div className="text-[10px] text-[#A191B2]">Dubai, United Arab Emirates</div>
                    </div>
                  </a>
                  <span className="text-[10px] font-bold text-[#E4C88A] bg-[#C5A059]/15 border border-[#C5A059]/30 px-2.5 py-1 rounded-full">
                    Dubai HQ
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
