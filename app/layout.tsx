import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/auth-context";
import { AuthModal } from "@/components/auth-modal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spektra AI | API Documentation That Thinks Before It Writes",
  description: "Transform OpenAPI specifications, Postman collections, and GitHub repositories into beautiful, intelligent developer documentation portals within seconds.",
  keywords: [
    "API documentation",
    "OpenAPI generator",
    "AI developer documentation",
    "Swagger portal",
    "SDK generator",
    "Next.js API portal",
    "Spektra AI"
  ],
  authors: [{ name: "Spektra AI Engineering Team" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://spektra.ai",
    title: "Spektra AI | API Documentation That Thinks Before It Writes",
    description: "Transform OpenAPI specifications, Postman collections, and GitHub repositories into beautiful, intelligent developer documentation portals within seconds.",
    siteName: "Spektra AI"
  },
  twitter: {
    card: "summary_large_image",
    title: "Spektra AI | API Documentation That Thinks Before It Writes",
    description: "Transform OpenAPI specifications, Postman collections, and GitHub repositories into beautiful, intelligent developer documentation portals within seconds."
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Spektra AI",
              "applicationCategory": "DeveloperApplication",
              "operatingSystem": "All",
              "description": "AI-powered API documentation platform that automatically transforms OpenAPI specifications into production-ready developer documentation within seconds.",
              "offers": {
                "@type": "Offer",
                "price": "0.00",
                "priceCurrency": "USD"
              }
            })
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#060609] text-[#f3f4f6]">
        <AuthProvider>
          {children}
          <AuthModal />
        </AuthProvider>
      </body>
    </html>
  );
}
