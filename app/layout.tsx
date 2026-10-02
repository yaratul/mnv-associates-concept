import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MNV Associates | Strategic Tax, Advisory & Business Solutions in Dubai",
  description:
    "Expert UAE Corporate Tax, VAT, Transfer Pricing, Accounting & CFO Advisory in Dubai. Based in Sobha Ivory II, Business Bay. unlock your growth.",
  keywords: [
    "Corporate Tax Dubai",
    "UAE Tax Consultant",
    "Transfer Pricing UAE",
    "CFO Advisory Dubai",
    "Business Setup Business Bay",
    "VAT Registration UAE",
    "MNV Associates",
    "Business Process Solutions",
  ],
  authors: [{ name: "MNV Associates" }],
  openGraph: {
    title: "MNV Associates | Strategic Tax & Advisory Firm in Dubai",
    description: "unlock your growth with tailored UAE Corporate Tax, Accounting, and Business Solutions.",
    url: "https://www.mnvassociates.com",
    siteName: "MNV Associates",
    locale: "en_AE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-white text-[#0F0C1B] antialiased">
        {children}
      </body>
    </html>
  );
}
