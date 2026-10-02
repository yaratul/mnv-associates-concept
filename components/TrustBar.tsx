export default function TrustBar() {
  const ecosystems = [
    { name: "Federal Tax Authority", code: "FTA Registered Agents", type: "Tax Authority" },
    { name: "Dubai Economy & Tourism", code: "DET Mainland", type: "Mainland Licensing" },
    { name: "Dubai Int. Financial Centre", code: "DIFC Registered", type: "Financial Free Zone" },
    { name: "Dubai Multi Commodities Centre", code: "DMCC Accredited", type: "Global Free Zone" },
    { name: "Abu Dhabi Global Market", code: "ADGM Compliant", type: "Financial Free Zone" },
    { name: "Dubai Integrated Economic Zones", code: "DIEZ / DAFZA", type: "Airport Free Zone" },
  ];

  return (
    <section className="bg-white py-8 border-b border-[#EBE5F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="md:w-64 shrink-0">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#A191B2] block">
              Regulatory & Jurisdiction Fluency
            </span>
            <span className="text-xs font-semibold text-[#0F0C1B]">
              Trusted across 40+ UAE mainland & free zone authorities
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 flex-1">
            {ecosystems.map((item, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-[#FBF9FD] border border-[#EBE5F1] hover:border-[#A191B2] transition-colors flex flex-col justify-center text-center group"
              >
                <span className="text-xs font-bold text-[#0F0C1B] group-hover:text-[#533278] transition-colors truncate">
                  {item.code}
                </span>
                <span className="text-[10px] text-[#635F74] mt-0.5 truncate">
                  {item.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
