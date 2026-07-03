import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { getSettings } from "@/lib/getSettings";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Advertisement from "@/components/Advertisement";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateViewport(): Promise<Viewport> {
  return {
    themeColor: "#0f172a",
  }
}

export async function generateMetadata() {
  const settings = await getSettings();

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://italictips.com";

  return {
    // Dynamic values from your settings function
    title: {
      default: settings?.site_title || "Italic Tips",

      template: `%s | ${settings?.site_title || "Italic Tips"}`,
    },

    description: settings?.hero_subtitle || "Daily football predictions",

    keywords: [
      "football predictions",
      "betting tips",
      "football tips",
      "daily predictions",
      "sports betting",
    ],

    metadataBase: new URL(siteUrl),

    openGraph: {
      title: settings?.site_title || "Italic Tips",

      description: settings?.hero_subtitle || "Daily Football Predictions",

      url: siteUrl,

      siteName: settings?.site_title || "Italic Tips",

      type: "website",

      images: [
        {
          url: "/api/og",
          width: 1200,
          height: 630
        }
      ]
    },

    twitter: {
      card: "summary_large_image",

      title: settings?.site_title || "Italic Tips",

      description: settings?.hero_subtitle || "Daily Football Predictions",

      images: ["/og-image.png"],
    },

    // Static values moved from the old object
    manifest: "/manifest.json",

    icons: {
      icon: "/favicon.ico",
      apple: "/apple-icon.png",
    }
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getSettings();
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900">
        <Navbar telegramUrl={settings.telegram_url}/>
        <main className="flex-1">
          {children}
        </main>

        <Advertisement position="before_footer"/>
        <Footer title={settings.site_title} description={settings.hero_subtitle}/>
        
      </body>
    </html>
  );
}

