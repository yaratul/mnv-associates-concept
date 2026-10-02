"use client";

export default function TrustBar() {
  const ecosystems = [
    { name: "Federal Tax Authority", code: "FTA Registered Agents", type: "Tax Authority" },
    { name: "Dubai Economy & Tourism", code: "DET Mainland", type: "Mainland Licensing" },
    { name: "Dubai Int. Financial Centre", code: "DIFC Registered", type: "Financial Free Zone" },
    { name: "Dubai Multi Commodities Centre", code: "DMCC Accredited", type: "Global Free Zone" },
    { name: "Abu Dhabi Global Market", code: "ADGM Compliant", type: "Financial Free Zone" },
    { name: "Dubai Integrated Economic Zones", code: "DIEZ / DAFZA", type: "Airport Free Zone" },
  ];

  // Duplicate for seamless 50% translation infinite loop
  const marqueeItems = [...ecosystems, ...ecosystems];

  return (
    <section className="bg-white py-9 border-b border-[#EBE5F1] relative overflow-hidden">
      {/* Edge gradient mask overlay for marquee fade out on left and right */}
      <div
        className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 z-20 pointer-events-none bg-gradient-to-r from-white via-white/80 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 z-20 pointer-events-none bg-gradient-to-l from-white via-white/80 to-transparent"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#C5A059] ring-2 ring-[#C5A059]/30" />
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#533278]">
              Regulatory & Jurisdiction Fluency
            </span>
          </div>
          <span className="text-xs font-semibold text-[#5C586E]">
            Trusted across 40+ UAE mainland & free zone authorities
          </span>
        </div>
      </div>

      {/* Infinite Smooth Marquee (Pauses on Hover) */}
      <div className="overflow-hidden py-2">
        <div className="marquee-track flex gap-4 items-center">
          {marqueeItems.map((item, idx) => (
            <div
              key={idx}
              className="group relative flex-shrink-0 w-60 sm:w-68 p-4 rounded-2xl bg-[#FAF8FC] hover:bg-white border border-[#EBE5F1] hover:border-[#C5A059]/60 shadow-sm hover:shadow-[0_12px_24px_-8px_rgba(83,50,120,0.15)] hover:-translate-y-1 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-default overflow-hidden"
            >
              {/* Subtle top shimmer bar */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-hidden="true"
              />

              <div className="space-y-1">
                <div className="text-xs font-extrabold text-[#0F0C1B] group-hover:text-[#533278] transition-colors truncate">
                  {item.code}
                </div>
                <div className="flex items-center justify-between text-[10px] text-[#5C586E] pt-0.5 border-t border-[#F5F2F8]">
                  <span className="truncate">{item.type}</span>
                  <span className="text-[#C5A059] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    UAE
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
