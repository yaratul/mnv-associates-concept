"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServicesMatrix from "@/components/ServicesMatrix";
import TaxReadinessWidget from "@/components/TaxReadinessWidget";
import WhyMNV from "@/components/WhyMNV";
import InsightsSection from "@/components/InsightsSection";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";
import ReviewerPanel from "@/components/ReviewerPanel";

export default function Home() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("Corporate Tax");
  const [consultationMessage, setConsultationMessage] = useState<string>("");

  const handleOpenConsultation = (serviceName?: string, message?: string) => {
    if (serviceName) setSelectedService(serviceName);
    if (message) setConsultationMessage(message);
    setIsConsultationOpen(true);
  };

  const handleSelectServiceFromMatrix = (serviceName: string) => {
    setSelectedService(serviceName);
    setIsConsultationOpen(true);
  };

  const handleOpenWithDiagnosticData = (summary: string) => {
    setConsultationMessage(summary);
    setSelectedService("Corporate Tax");
    setIsConsultationOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <Navbar onOpenConsultation={() => handleOpenConsultation()} />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenConsultation={() => handleOpenConsultation()} />

        {/* 2. Authority & Jurisdiction Ecosystem Bar */}
        <TrustBar />

        {/* 3. Services Overview (All 9 required services) */}
        <ServicesMatrix onSelectService={handleSelectServiceFromMatrix} />

        {/* 4. Interactive UAE Corporate Tax & Setup Readiness Assessment */}
        <TaxReadinessWidget onOpenConsultationWithData={handleOpenWithDiagnosticData} />

        {/* 5. "Why MNV" / Credibility & Big 4 Comparison */}
        <WhyMNV />

        {/* 6. Insights & Regulatory Hub */}
        <InsightsSection />

        {/* 7. Client Proof & Testimonials */}
        <Testimonials />

        {/* 8. Contact & Business Bay HQ */}
        <ContactSection
          initialService={selectedService}
          initialMessage={consultationMessage}
        />
      </main>

      {/* 9. Comprehensive Footer */}
      <Footer />

      {/* Global Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultService={selectedService}
        defaultMessage={consultationMessage}
      />

      {/* Floating Reviewer Panel for Assignment Submission Notes */}
      <ReviewerPanel />
    </div>
  );
}
