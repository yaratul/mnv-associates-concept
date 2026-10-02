import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MNV Associates | Strategic Tax, Advisory & Corporate Services | Dubai, UAE",
  description:
    "Dubai-based premier tax and advisory practice. FTA Registered Corporate Tax, VAT, Transfer Pricing, Accounting & Virtual CFO solutions. Unlock your growth.",
  keywords: [
    "Dubai Corporate Tax",
    "UAE Tax Consultant",
    "MNV Associates",
    "Business Setup Dubai",
    "VAT Advisory Dubai",
    "Transfer Pricing UAE",
    "Accounting Firms Dubai",
    "CFO Advisory UAE",
    "Sobha Ivory II Business Bay",
  ],
  authors: [{ name: "MNV Associates" }],
  creator: "MNV Associates",
  metadataBase: new URL("https://mnvassociates.com"),
  openGraph: {
    title: "MNV Associates | Strategic Tax & Advisory Practice | Dubai, UAE",
    description: "Premier Tax, Advisory, and Business Process Solutions for Dubai's modern economy. Unlock your growth.",
    url: "https://mnvassociates.com",
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
    <html lang="en" className={`scroll-smooth ${cormorant.variable} ${plusJakarta.variable}`}>
      <body className="min-h-screen bg-[#FAF8FC] text-[#0F0C1B] antialiased selection:bg-[#533278] selection:text-white">
        {/* Dynamic Global Scroll Progress Indicator */}
        <div id="scroll-progress-bar" className="scroll-progress" aria-hidden="true" />

        {/* Global Dynamic Cursor Glow Coordinates Listener */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                window.addEventListener('pointermove', function(e) {
                  document.documentElement.style.setProperty('--mx', e.clientX + 'px');
                  document.documentElement.style.setProperty('--my', e.clientY + 'px');
                }, { passive: true });

                window.addEventListener('scroll', function() {
                  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
                  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                  var scrolled = (winScroll / height) * 100;
                  var bar = document.getElementById('scroll-progress-bar');
                  if (bar) bar.style.width = scrolled + '%';
                }, { passive: true });
              }
            `,
          }}
        />

        {/* Ambient Film Grain Texture (Glass & Paper Feel) */}
        <div className="blueprint-grain pointer-events-none fixed inset-0 z-50 opacity-20" aria-hidden="true" />

        {/* Skip to Content for Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#533278] focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>
        <div id="main-content">{children}</div>
      </body>
    </html>
  );
}
