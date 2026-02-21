import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "next-themes";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gold One MT4 - The Ultimate Gold Trading Indicator | InfinityAlgo Academy",
  description: "Professional MT4 indicator for gold trading. Get accurate buy/sell signals, smart entry points, and maximize your trading profits with Gold One MT4.",
  keywords: ["Gold Trading", "MT4 Indicator", "Forex", "XAUUSD", "Trading Signals", "Gold One", "InfinityAlgo Academy"],
  authors: [{ name: "InfinityAlgo Academy" }],
  icons: {
    icon: "/gold-logo.png",
  },
  openGraph: {
    title: "Gold One MT4 - The Ultimate Gold Trading Indicator",
    description: "Professional MT4 indicator for gold trading with 87% accuracy rate.",
    url: "https://infinityalgoacademy.net",
    siteName: "InfinityAlgo Academy",
    type: "website",
    images: ["/gold-logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gold One MT4 - The Ultimate Gold Trading Indicator",
    description: "Professional MT4 indicator for gold trading with 87% accuracy rate.",
    images: ["/gold-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${cairo.variable} font-sans antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
